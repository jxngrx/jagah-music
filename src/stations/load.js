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
  return { ...mod.default, hub: meta || null };
}
