/**
 * Build a queue from seed songs: Last.fm "similar" + Gaana same-genre songs, resolved to YouTube ids.
 * ?seed=Title|Artist|ytId (repeat, max 3) &lang=Hindi &genre=Bollywood &first=1 (seeds first)
 * &fresh=fit|all|none &avoid=Artist|Artist &n=14
 * Never more than 2 songs per artist, so a queue is a genre/mood mix, not one singer's catalog.
 */
import { resolveSong } from './_yt.js';

const LFM = 'https://ws.audioscrobbler.com/2.0/';
const PER_ARTIST = 2;
const norm = (s) => s.toLowerCase().replace(/\(.*?\)|[^\p{L}\p{N} ]/gu, ' ').replace(/\s+/g, ' ').trim();
const one = (v) => (Array.isArray(v) ? v : v ? [v] : []);
const who = (t) => (t.artist || '').split(',')[0].trim().toLowerCase();

async function lfm(method, params) {
  const u = new URL(LFM);
  u.search = new URLSearchParams({ method, autocorrect: '1', api_key: process.env.LASTFM_KEY, format: 'json', ...params });
  try {
    return await (await fetch(u, { signal: AbortSignal.timeout(6000) })).json();
  } catch {
    return {};
  }
}

async function similar(title, artist) {
  if (!process.env.LASTFM_KEY) return [];
  // Gaana lists "Composer, Singer" — Last.fm knows one of them, so try each
  for (const a of artist.split(',').map((x) => x.trim()).filter(Boolean).slice(0, 3)) {
    const d = await lfm('track.getsimilar', { artist: a, track: title, limit: '15' });
    const out = one(d.similartracks?.track).map((t) => ({ title: t.name, artist: t.artist?.name || '' }));
    if (out.length) return out;
  }
  return viaSimilarArtists(artist.split(',')[0].trim());
}

/** No track-level data (common for Indian songs): take the top songs of artists *like* this one, not of this one. */
async function viaSimilarArtists(artist) {
  if (!artist) return [];
  const d = await lfm('artist.getsimilar', { artist, limit: '8' });
  const names = one(d.similarartists?.artist).map((a) => a.name);
  const tops = await Promise.all(names.map((a) => lfm('artist.gettoptracks', { artist: a, limit: '3' })));
  const out = [];
  for (let i = 0; i < 3; i++) {
    tops.forEach((t, k) => {
      const tr = one(t.toptracks?.track)[i];
      if (tr) out.push({ title: tr.name, artist: tr.artist?.name || names[k] });
    });
  }
  return out;
}

async function gaana(path) {
  try {
    const r = await fetch(`${process.env.GAANA_URL}${path}`, { signal: AbortSignal.timeout(5000), redirect: 'follow' });
    const d = await r.json();
    return Array.isArray(d) ? d : d.tracks || [];
  } catch {
    return [];
  }
}

/** Gaana songs of a language; with `genre`, only that genre (trending + new, many artists). */
async function catalog(lang, genre) {
  if (!process.env.GAANA_URL || !lang) return [];
  const q = `?limit=${genre ? 25 : 8}&language=${encodeURIComponent(lang)}`;
  const [fresh, hot] = await Promise.all([gaana('/newreleases' + q), genre ? gaana('/trending' + q) : []]);
  const want = (genre || '').toLowerCase();
  return [...fresh.map((s) => ({ s, era: 'new' })), ...hot.map((s) => ({ s }))]
    .filter(({ s }) => !want || (s.genres || '').toLowerCase() === want)
    .map(({ s, era }) => ({
      title: s.title, artist: s.artists.split(',')[0].trim(), lang: s.language, genre: s.genres, ...(era && { era }),
    }));
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const seeds = one(req.query?.seed)
    .slice(0, 3)
    .map((s) => s.toString().slice(0, 120).split('|'))
    .filter((p) => p[0]?.trim())
    .map(([title, artist = '', id = '']) => ({ title: title.trim(), artist: artist.trim(), ...(id && { id: id.trim() }) }));
  const lang = (req.query?.lang || '').toString().slice(0, 20);
  const genre = (req.query?.genre || '').toString().slice(0, 40);
  const n = Math.min(Number(req.query?.n) || 14, 20);
  const first = !!req.query?.first;
  const avoid = new Set((req.query?.avoid || '').toString().toLowerCase().split('|').filter(Boolean));
  if (!seeds.length && !lang) return res.status(400).json({ error: 'missing seed' });

  // n=1: just resolve the seed itself (adding one song to a party)
  const [sims, cat] = n <= 1 ? [[], []] : await Promise.all([Promise.all(seeds.map((s) => similar(s.title, s.artist))), catalog(lang, genre)]);

  // mood stations: new releases only from artists that fit the seeds (else a bhajan lands in a sad queue)
  const mode = (req.query?.fresh || 'fit').toString();
  const fit = new Set([...seeds, ...sims.flat()].map(who).filter(Boolean));
  const news = mode === 'none' ? [] : genre || mode === 'all' || !seeds.length ? cat : cat.filter((t) => fit.has(who(t)));

  // interleave: similar from each seed, with same-genre / new songs sprinkled in
  const pool = [...(first ? seeds : [])];
  for (let i = 0; i < 15; i++) {
    for (const list of sims) if (list[i]) pool.push(list[i]);
    if (i % 2 === 1 && news.length) pool.push(news.shift());
  }
  pool.push(...news);

  const seen = new Set(seeds.map((s) => norm(s.title)));
  const perArtist = new Map();
  const uniq = pool
    .filter((t, i) => {
      const isSeed = first && i < seeds.length;
      const k = norm(t.title);
      const a = who(t);
      if (!k || (seen.has(k) && !isSeed)) return false;
      if (!isSeed && a && avoid.has(a)) return false;
      if (a && (perArtist.get(a) || 0) >= PER_ARTIST) return false;
      seen.add(k);
      perArtist.set(a, (perArtist.get(a) || 0) + 1);
      return true;
    })
    .slice(0, n);

  const hits = await Promise.all(uniq.map((t) => (t.id ? { id: t.id } : resolveSong(t.title, t.artist))));
  const tracks = [];
  const ids = new Set();
  uniq.forEach((t, i) => {
    const h = hits[i];
    if (!h || ids.has(h.id)) return;
    ids.add(h.id);
    tracks.push({
      id: h.id, title: t.title, artist: t.artist, singer: t.artist,
      ...(t.era && { era: t.era }), ...(t.lang && { lang: t.lang.toLowerCase() }), ...(t.genre && { genre: t.genre }),
    });
  });

  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=21600');
  return res.status(200).json({ tracks });
}
