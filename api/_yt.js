/** Shared YouTube HTML scrape → [{id,title}]. `_` prefix: not a route. */
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const RE = /"videoId":"([A-Za-z0-9_-]{11})".{0,800}?"title":\{"runs":\[\{"text":"(.*?)"\}/g;

export async function ytSearch(q, max = 20) {
  const yt = await fetch('https://www.youtube.com/results?search_query=' + encodeURIComponent(q), {
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-IN,en;q=0.9,hi;q=0.8' },
  });
  const html = await yt.text();
  const items = [];
  const seen = new Set();
  for (const m of html.matchAll(RE)) {
    if (seen.has(m[1])) continue;
    seen.add(m[1]);
    let title = m[2];
    try {
      title = JSON.parse(`"${title}"`);
    } catch {
      title = title.replace(/\\u0026/g, '&');
    }
    if (!title || /#shorts/i.test(title)) continue;
    items.push({ id: m[1], title });
    if (items.length >= max) break;
  }
  return items;
}

export const BAD = /jukebox|lofi|lo-fi|slowed|reverb|mashup|remix|karaoke|cover|8d|nightcore|status|full album|playlist|reaction|live|instrumental|ringtone|\bmix\b/i;
export const norm = (s) => s.toLowerCase().replace(/\(.*?\)|\[.*?\]|[^\p{L}\p{N} ]/gu, ' ').replace(/\s+/g, ' ').trim();

/** Best playable video for a song, or null. Skips remix/lofi/etc unless the song itself is one. */
export async function resolveSong(title, artist) {
  let items;
  try {
    items = await ytSearch(`${title} ${artist} official audio`, 8);
  } catch {
    return null;
  }
  const want = norm(title).split(' ')[0];
  const wantBad = BAD.test(title);
  return (
    items.find((it) => (wantBad || !BAD.test(it.title)) && norm(it.title).includes(want)) || null
  );
}
