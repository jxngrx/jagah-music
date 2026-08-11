import { Platform } from 'react-native';

/** Phone tablets + Android TV / large screens. */
export function isTVLike(width: number, height: number) {
  if (Platform.isTV) return true;
  return Math.min(width, height) >= 600 && Math.max(width, height) >= 960;
}
