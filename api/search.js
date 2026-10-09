/** Song search: Gaana (genre/language) + YouTube (brand-new songs Gaana doesn't have yet). */
import { ytSearch, BAD, norm } from './_yt.js';

async function gaana(q) {
  if (!process.env.GAANA_URL) return [];
  const url = `${process.env.GAANA_URL}/songs/search/?limit=8&query=${encodeURIComponent(q)}`;
  const get = () => fetch(url, { signal: AbortSignal.timeout(25000), redirect: 'follow' }); // 25s: Render cold start
  try {
    let r = await get();
    if (r.status === 404) r = await get(); // 404 = no results, or a cold-start glitch
    if (!r.ok) return [];
    const rows = await r.json();
    return (Array.isArray(rows) ? rows : []).map((s) => ({
      title: s.title,
      artist: s.artists,
      language: s.language,
      genre: s.genres,
      year: (s.release_date || '').slice(0, 4),
    }));
  } catch {
    return [];
  }
}

/** "Alfaaz | Hamza Malik x Zain Zohaib | Official Visualiser" → {title, artist} */
function parseYt(raw) {
  const clean = raw
    .replace(/\(.*?\)|\[.*?\]/g, ' ')
    .replace(/official|visuali[sz]er|lyrics?|lyrical|lyics|video|audio|full song|hd|4k/gi, ' ');
  const parts = clean.split(/\s*[|–—]\s*|\s+-\s+/).map((s) => s.trim()).filter(Boolean);
  let [title = raw, artist = ''] = parts;
  if (/,|\s(x|ft\.?|feat\.?|&)\s/i.test(title) && artist) [title, artist] = [artist, title]; // "Artists - Song"
  return { title, artist: artist.split(/\s*,\s*|\s+(?:x|ft\.?|feat\.?|&)\s+/i)[0] };
}

async function youtube(q) {
  try {
    return (await ytSearch(`${q} official`, 10))
      .filter((it) => !BAD.test(it.title) || /lyric|visuali/i.test(it.title))
      .slice(0, 5)
      .map((it) => ({ ...parseYt(it.title), id: it.id, genre: 'YouTube' }));
  } catch {
    return [];
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const q = (req.query?.q || '').toString().trim().slice(0, 100);
  if (!q) return res.status(400).json({ error: 'missing q' });

  const [all, y] = await Promise.all([gaana(q), youtube(q)]);
  // Gaana pads with fuzzy junk ("Hamza Happy Birthday") — keep hits matching at least half the query words
  const words = norm(q).split(' ').filter(Boolean);
  const g = all.filter((s) => {
    const hay = norm(`${s.title} ${s.artist}`);
    return words.filter((w) => hay.includes(w)).length >= Math.ceil(words.length / 2);
  });
  const have = new Set(g.map((s) => norm(s.title)));
  const fresh = y.filter((s) => {
    const k = norm(s.title);
    if (!k || have.has(k)) return false;
    have.add(k);
    return true;
  });
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400');
  return res.status(200).json({ items: [...g.slice(0, 7), ...fresh.slice(0, g.length >= 4 ? 1 : 3)] });
}
