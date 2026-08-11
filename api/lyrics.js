/**
 * Vercel serverless: LRCLib → synced lyric cues.
 * Locally Vite proxies /api/lyrics here.
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const title = (req.query?.title || '').toString().trim().slice(0, 120);
  const artist = (req.query?.artist || '').toString().trim().slice(0, 120);
  const duration = Math.round(Number(req.query?.duration) || 0);
  if (!title) return res.status(400).json({ error: 'missing title' });

  try {
    let synced = null;

    if (artist) {
      const getUrl = new URL('https://lrclib.net/api/get');
      getUrl.searchParams.set('track_name', title);
      getUrl.searchParams.set('artist_name', artist);
      if (duration > 30) getUrl.searchParams.set('duration', String(duration));
      const getRes = await fetch(getUrl, {
        headers: { 'User-Agent': 'JAGAH/1.0 (lyrics)' },
      });
      if (getRes.ok) {
        const row = await getRes.json();
        synced = row?.syncedLyrics || null;
      }
    }

    if (!synced) {
      const q = [artist, title].filter(Boolean).join(' ');
      const searchUrl =
        'https://lrclib.net/api/search?q=' + encodeURIComponent(q);
      const searchRes = await fetch(searchUrl, {
        headers: { 'User-Agent': 'JAGAH/1.0 (lyrics)' },
      });
      if (searchRes.ok) {
        const rows = await searchRes.json();
        const hit = (rows || []).find((r) => r.syncedLyrics) || rows?.[0];
        synced = hit?.syncedLyrics || hit?.plainLyrics || null;
      }
    }

    if (!synced) {
      res.setHeader('Cache-Control', 's-maxage=120');
      return res.status(404).json({ cues: null });
    }

    const cues = parseLrc(synced);
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json({ cues });
  } catch {
    return res.status(502).json({ error: 'lyrics fetch failed' });
  }
}

function parseLrc(text) {
  const cues = [];
  for (const raw of String(text).split(/\r?\n/)) {
    const m = raw.match(/\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]\s*(.*)/);
    if (m) {
      const ms = m[3] ? Number(m[3].padEnd(3, '0')) / 1000 : 0;
      const line = m[4].trim();
      if (!line) continue;
      cues.push({ t: Number(m[1]) * 60 + Number(m[2]) + ms, line });
      continue;
    }
    const plain = raw.trim();
    if (plain && !plain.startsWith('[')) {
      cues.push({ t: cues.length * 4, line: plain });
    }
  }
  return cues;
}
