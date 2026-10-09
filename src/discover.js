/** Drain station reserve, then live YouTube search via /api/discover. */

function cleanTitle(t) {
  return (
    t
      .replace(/\s*\|\s*.*$/, '')
      .replace(/\s*\(official.*?\)/gi, '')
      .replace(/\s*official\s*(video|audio|music video)?/gi, '')
      .replace(/\s*new haryanvi.*$/i, '')
      .trim()
      .slice(0, 60) || t.slice(0, 60)
  );
}

function guessSinger(title, preferred) {
  if (preferred?.length === 1) return preferred[0];
  const table = [
    ['Masoom Sharma', /masoom/i],
    ['Amanraj Gill', /amanraj|aman raj/i],
    ['Sumit Parta', /sumit parta/i],
    ['Khasa Aala Chahar', /khasa/i],
    ['KD', /\bkd\b|desirock/i],
    ['Gulzaar Chhaniwala', /gulzaar|gulzar chhani/i],
    ['Amit Saini Rohtakiya', /amit saini|rohtakiya/i],
    ['Pranjal Dahiya', /pranjal/i],
    ['Badshah', /badshah/i],
    ['Fazilpuria', /fazilpuria/i],
    ['Bintu Pabra', /bintu pabra/i],
    ['Ndee Kundu', /ndee kundu/i],
    ['Sapna Choudhary', /sapna choudhary|sapna chaudhary/i],
    ['Veer Dahiya', /veer dahiya/i],
    ['Diler Kharkiya', /diler kharkiya/i],
    ['Renuka Panwar', /renuka panwar/i],
    ['Raju Punjabi', /raju punjabi/i],
    ['Rajbala', /rajbala|राजबाला/i],
    ['Pandit Lakhmi Chand', /lakhmi|लखमी|lakhmichand/i],
    ['Dayachand Mayna', /dayachand|दयाचंद|mayna/i],
    ['Sonu Bhagana', /sonu bhagana|सोनू भगाना|sonu sushma/i],
    ['Manjeet Cholka', /manjeet cholka|मंजीत चोलका|manjeet/i],
    ['Rajesh Thurania', /thurania|राजेश थुरानिया/i],
    ['Vikas Pasoriya', /pasoriya|विकास पासोरिया/i],
    ['Deepa Choudhary', /deepa chaudhary|दीपा चौधरी/i],
    ['Priyanka Choudhary', /priyanka chaudhary|प्रियंका/i],
    ['Annu Sharma', /annu sharma/i],
    ['Satpal Dosa', /satpal dosa|satpal dausa/i],
    ['Yo Yo Honey Singh', /honey singh|yo yo/i],
    ['Diljit Dosanjh', /diljit/i],
    ['Sidhu Moose Wala', /sidhu moose|moose wala/i],
    ['Sharry Mann', /sharry mann/i],
    ['Karan Aujla', /karan aujla/i],
    ['R Nait', /\br nait\b|rnait/i],
    ['B Praak', /b praak|bpraak/i],
    ['Arjan Dhillon', /arjan dhillon/i],
    ['Parmish Verma', /parmish/i],
    ['Hustinder', /hustinder/i],
    ['Diler Kharkiya', /diler kharkiya/i],
    ['Gurdas Maan', /gurdas maan|gurdas man/i],
  ];
  for (const [name, re] of table) {
    if (re.test(title)) return name;
  }
  return preferred?.[0] || 'Mix';
}

function fromReserve(pool, exclude, singers, count) {
  const want = singers?.length ? new Set(singers) : null;
  const out = [];
  for (const t of pool || []) {
    if (exclude.has(t.id)) continue;
    if (want && !want.has(t.singer)) continue;
    out.push({ ...t });
    exclude.add(t.id);
    if (out.length >= count) break;
  }
  return out;
}

const SITE = 'https://music.jxngrx.com';
const api = (path) => (typeof document === 'undefined' ? SITE : '') + path;

export async function searchYouTube(query) {
  const url = api(`/api/discover?q=${encodeURIComponent(query)}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`discover ${res.status}`);
  const data = await res.json();
  return Array.isArray(data.items) ? data.items : [];
}

/** Gaana-backed song search → [{title, artist, language, genre, year}] */
export async function searchSongs(q) {
  const res = await fetch(api(`/api/search?q=${encodeURIComponent(q)}`));
  if (!res.ok) throw new Error(`search ${res.status}`);
  const data = await res.json();
  return Array.isArray(data.items) ? data.items : [];
}

/** Live queue from seed songs (Last.fm similar + Gaana new releases). seeds: [{title, artist}] */
export async function fetchQueue({ seeds = [], lang = '', genre = '', first = false, fresh = '', avoid = [], n = 0 }) {
  const p = new URLSearchParams();
  seeds.slice(0, 3).forEach((s) => p.append('seed', `${s.title}|${s.artist || ''}|${s.id || ''}`));
  if (lang) p.set('lang', lang);
  if (first) p.set('first', '1');
  if (fresh) p.set('fresh', fresh);
  if (genre) p.set('genre', genre);
  if (avoid.length) p.set('avoid', avoid.join('|'));
  if (n) p.set('n', String(n));
  const res = await fetch(api(`/api/queue?${p}`));
  if (!res.ok) throw new Error(`queue ${res.status}`);
  const data = await res.json();
  return Array.isArray(data.tracks) ? data.tracks : [];
}

export async function fetchMoreTracks({
  excludeIds,
  singers,
  count = 8,
  reserve = [],
  discoverQueries = [],
  recipe = null,
  seeds = [],
  avoid = [],
}) {
  const exclude = new Set(excludeIds);
  if (recipe) {
    try {
      const got = (await fetchQueue({ seeds, lang: recipe.lang, genre: recipe.genre, fresh: recipe.fresh, avoid, first: !excludeIds.length })).filter(
        (t) => !exclude.has(t.id),
      );
      if (got.length) return got;
    } catch {
      /* fall through to old search */
    }
  }
  const preferred = singers?.length ? [...singers] : [];

  const fromSeed = fromReserve(reserve, exclude, preferred, count);
  if (fromSeed.length >= count) return fromSeed;

  const queries = preferred.length
    ? preferred.map((s) => `${s} song official`)
    : discoverQueries.length
      ? discoverQueries
      : ['haryanvi song official', 'punjabi song official'];

  const found = [...fromSeed];
  for (const q of queries) {
    if (found.length >= count) break;
    let items = [];
    try {
      items = await searchYouTube(q);
    } catch {
      continue;
    }
    for (const it of items) {
      if (exclude.has(it.id)) continue;
      if (found.some((f) => f.id === it.id)) continue;
      const singer = guessSinger(it.title, preferred);
      if (preferred.length && !preferred.includes(singer)) {
        if (preferred.length === 1) {
          found.push({
            id: it.id,
            title: cleanTitle(it.title),
            artist: preferred[0],
            singer: preferred[0],
            era: 'new',
          });
          exclude.add(it.id);
        }
        continue;
      }
      found.push({
        id: it.id,
        title: cleanTitle(it.title),
        artist: singer === 'Mix' ? 'Artist' : singer,
        singer: singer === 'Mix' ? 'Mix' : singer,
        era: 'new',
      });
      exclude.add(it.id);
      if (found.length >= count) break;
    }
  }
  return found;
}
