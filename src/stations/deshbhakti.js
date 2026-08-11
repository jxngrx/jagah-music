/** Deshbhakti — chest thump — Phase 7 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: '9sthJUHkzgI', title: 'Sandese Aate Hai', artist: 'Sonu Nigam', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'Y6WV7v4zuNM', title: 'Vande Mataram', artist: 'A.R. Rahman', singer: 'A.R. Rahman', era: 'classic' },
  { id: 'jDn2bn7_YSM', title: 'Maa Tujhe Salaam', artist: 'A.R. Rahman', singer: 'A.R. Rahman', era: 'classic' },
  { id: 'bnqLzCsffwY', title: 'Chak De India', artist: 'Sukhwinder Singh', singer: 'Sukhwinder Singh', era: 'classic' },
  { id: 'BKx_B1VZ2kw', title: 'Ae Watan', artist: 'Sunidhi Chauhan', singer: 'Sunidhi Chauhan', era: 'classic' },
  { id: 'yccGxvIydKg', title: 'Ke Ghar Kab Aaoge', artist: 'Border', singer: 'Sonu Nigam', era: 'classic' },
];

export const singers = ['A.R. Rahman', 'Sonu Nigam', 'Sukhwinder Singh', 'Sunidhi Chauhan'];

export const reserve = [];

export const bumperLines = [
  'वंदे मातरम्',
  'परेड की धुन',
  'सीना चौड़ा',
];

export default {
  id: 'deshbhakti',
  slug: 'deshbhakti',
  titleLines: ['देशभक्ति'],
  titleEn: 'Deshbhakti — chest thump',
  description: 'Patriotic chest-thumpers.',
  presenceLabel: 'on parade',
  themeColor: '#1a0c04',
  accent: '#ea580c',
  hero: '/deshbhakti.png',
  ogImage: '/deshbhakti.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'sandese aate hai',
    'vande mataram rahman',
    'chak de india',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
