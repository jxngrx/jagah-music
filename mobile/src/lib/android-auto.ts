/**
 * Android Auto — YT iframe cannot feed Auto MediaBrowser audio streams.
 *
 * What ships now:
 * - Deep links: jagah://place/{id} opens the place player on phone/TV
 * - Lock-screen / Auto “browse” needs Media3 + direct audio URLs (not YT)
 *
 * Upgrade path (when you have stream URLs or a licensed audio CDN):
 * 1. add react-native-track-player + MediaBrowserService
 * 2. map places → MediaItem tree, tracks → playable MediaItems
 * 3. keep this deep-link as fallback for “Open in JAGAH”
 */
export const AUTO_SCHEME = 'jagah';

export function placeDeepLink(id: string) {
  return `${AUTO_SCHEME}://place/${id}`;
}
