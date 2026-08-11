/**
 * Vercel serverless: YouTube search HTML → video ids.
 * Locally Vite proxies /api/discover here via plugin middleware.
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const q = (req.query?.q || '').toString().trim().slice(0, 120);
  if (!q) return res.status(400).json({ error: 'missing q' });

  try {
    const url =
      'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
    const yt = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-IN,en;q=0.9,hi;q=0.8',
      },
    });
    const html = await yt.text();
    const items = [];
    const seen = new Set();
    const re =
      /"videoId":"([A-Za-z0-9_-]{11})".{0,800}?"title":\{"runs":\[\{"text":"(.*?)"\}/g;
    let m;
    while ((m = re.exec(html))) {
      const id = m[1];
      if (seen.has(id)) continue;
      seen.add(id);
      let title = m[2];
      try {
        title = JSON.parse(`"${title}"`);
      } catch {
        title = title.replace(/\\u0026/g, '&');
      }
      if (!title || /#shorts/i.test(title)) continue;
      items.push({ id, title });
      if (items.length >= 20) break;
    }
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ items });
  } catch (e) {
    return res.status(502).json({ error: 'youtube search failed' });
  }
}
