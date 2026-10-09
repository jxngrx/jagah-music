/** Vercel serverless: YouTube search → video ids. Vite serves /api/* from this folder in dev. */
import { ytSearch } from './_yt.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const q = (req.query?.q || '').toString().trim().slice(0, 120);
  if (!q) return res.status(400).json({ error: 'missing q' });

  try {
    const items = await ytSearch(q);
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ items });
  } catch (e) {
    return res.status(502).json({ error: 'youtube search failed' });
  }
}
