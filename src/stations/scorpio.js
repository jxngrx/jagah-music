import { tracks, singers, bumperLines, coverUrl } from '../tracks.js';
import { reserve } from '../reserve.js';
import { lyricsById } from '../lyrics.js';

/** Scorpio वाले station pack */
export default {
  id: 'scorpio',
  slug: 'scorpio-wale',
  titleLines: ['स्कॉर्पियो', 'वाले'],
  titleEn: 'Scorpio Wale — Haryanvi night rides',
  description: 'Night rides & Haryanvi bangers off the Scorpio dash.',
  presenceLabel: 'night riders',
  themeColor: '#0a0e14',
  accent: '#d4a017',
  hero: '/hero.png',
  ogImage: '/hero.png',
  gimmick: { kind: 'horn', label: 'हॉर्न', sub: 'ok please' },
  langTabs: false,
  discoverQueries: [
    'new haryanvi song official 2025',
    'new haryanvi song official 2026',
    'Masoom Sharma official haryanvi',
    'Amanraj Gill official haryanvi',
    'Sumit Parta official haryanvi',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById,
  coverUrl,
};
