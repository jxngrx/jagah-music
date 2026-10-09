import { placeBySlug } from '../places.js';

const loaders = {
  scorpio: () => import('./scorpio.js'),
  'scorpio-wale': () => import('./scorpio.js'),
  ragni: () => import('./ragni.js'),
  roadways: () => import('./roadways.js'),
  'haryana-roadways': () => import('./roadways.js'),
  saloon: () => import('./saloon.js'),
  truck: () => import('./truck.js'),
  'truck-wala': () => import('./truck.js'),
  theka: () => import('./theka.js'),
  dhaba: () => import('./dhaba.js'),
  gym: () => import('./gym.js'),
  cafe: () => import('./cafe.js'),
  coding: () => import('./coding.js'),
  punjabi: () => import('./punjabi.js'),
  'old-punjabi': () => import('./old-punjabi.js'),
  'new-punjabi': () => import('./new-punjabi.js'),
  'love-punjabi': () => import('./love-punjabi.js'),
  'love-haryanvi': () => import('./love-haryanvi.js'),
  'love-hindi': () => import('./love-hindi.js'),
  'sad-punjabi': () => import('./sad-punjabi.js'),
  'sad-haryanvi': () => import('./sad-haryanvi.js'),
  'sad-hindi': () => import('./sad-hindi.js'),
  bollywood: () => import('./bollywood.js'),
  english: () => import('./english.js'),
  deshbhakti: () => import('./deshbhakti.js'),
  devotion: () => import('./devotion.js'),
  breakup: () => import('./breakup.js'),
  motivation: () => import('./motivation.js'),
  success: () => import('./success.js'),
  dhh: () => import('./dhh.js'),
  'desi-hip-hop': () => import('./dhh.js'),
  'underground-dhh': () => import('./underground-dhh.js'),
  'old-haryanvi-dj': () => import('./old-haryanvi-dj.js'),
  qawwali: () => import('./qawwali.js'),
};

/**
 * Live-queue recipe per station. lang → Gaana language for new releases.
 * fresh: 'all' every new release · 'fit' only artists matching the seeds (mood) · 'none' no new songs (old/classic).
 * Seeds are drawn from the pack's curated tracks, which otherwise stay as an offline fallback only.
 */
const H = 'Haryanvi', P = 'Punjabi', HI = 'Hindi', EN = 'English';
const recipes = {
  scorpio: { lang: H, fresh: 'all' },
  roadways: { lang: H, fresh: 'all' },
  ragni: { lang: H, fresh: 'fit' },
  saloon: { lang: HI, fresh: 'none' },
  truck: { lang: HI, fresh: 'none' },
  theka: { lang: P, fresh: 'fit' },
  dhaba: { lang: H, fresh: 'all' },
  gym: { lang: H, fresh: 'all' },
  cafe: { lang: H, fresh: 'fit' },
  coding: { lang: EN, seedLang: 'lofi', fresh: 'none' },
  punjabi: { lang: P, fresh: 'all' },
  'old-punjabi': { lang: P, fresh: 'none' },
  'new-punjabi': { lang: P, fresh: 'all' },
  'love-punjabi': { lang: P, fresh: 'fit' },
  'love-haryanvi': { lang: H, fresh: 'fit' },
  'love-hindi': { lang: HI, fresh: 'fit' },
  'sad-punjabi': { lang: P, fresh: 'fit' },
  'sad-haryanvi': { lang: H, fresh: 'fit' },
  bollywood: { lang: HI, fresh: 'fit' },
  english: { lang: EN, fresh: 'all' },
  deshbhakti: { lang: HI, fresh: 'none' },
  devotion: { lang: HI, fresh: 'none' },
  breakup: { lang: HI, fresh: 'fit' },
  motivation: { lang: HI, fresh: 'fit' },
  success: { lang: HI, fresh: 'fit' },
  dhh: { lang: HI, fresh: 'fit' },
  'underground-dhh': { lang: HI, fresh: 'fit' },
  'old-haryanvi-dj': { lang: H, fresh: 'none' },
  qawwali: { lang: '', fresh: 'none' },
};

function withRecipe(pack, hub) {
  const out = { ...pack, hub: hub || null };
  if (out.recipe) return out;
  const r = recipes[out.id];
  if (!r) return out;
  // seeds: tracks of the recipe's language (mixed-language packs), real artist names only
  const all = [...(out.tracks || []), ...(out.reserve || [])];
  const want = (r.seedLang || r.lang).toLowerCase();
  const lang = all.filter((t) => t.lang === want);
  const pool = lang.length ? lang : all;
  const generic = /^(mix|artist|focus|classic|bollywood|prayer)$/i;
  const who = (t) => (generic.test(t.singer || '') ? (t.artist || '').split(' · ')[0] : t.singer);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const seeds = pool.slice(0, 6).map((t) => ({ title: t.title, artist: who(t) }));
  return { ...out, recipe: { ...r, seeds }, fallback: out.tracks || [], tracks: [], reserve: [], singers: [] };
}

const warm = new Map();

function resolveLoader(key) {
  const meta = placeBySlug(key);
  return loaders[key] || (meta ? loaders[meta.id] : null);
}

/** Warm station chunk + place document on hub hover. */
export function prefetchStation(key) {
  const loader = resolveLoader(key);
  if (!loader || warm.has(key)) return;
  warm.set(key, loader().catch(() => warm.delete(key)));
  const href = `/place.html?p=${encodeURIComponent(key)}`;
  if (!document.querySelector(`link[data-prefetch="${key}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.dataset.prefetch = key;
    document.head.append(link);
  }
}

/** Resolve ?p=slug → station pack. Soon / unknown → hub. */
export async function loadStation() {
  const params = new URLSearchParams(location.search);
  const key = (params.get('p') || params.get('place') || 'scorpio-wale').trim();
  const meta = placeBySlug(key);
  const loader = resolveLoader(key);

  if (!loader || (meta && meta.status !== 'live')) {
    location.replace('/');
    return null;
  }

  const mod = await (warm.get(key) || loader());
  return withRecipe(mod.default, meta);
}
