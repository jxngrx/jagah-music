/** Motivation — one more rep — Phase 8 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'bnqLzCsffwY', title: 'Chak De India', artist: 'Sukhwinder Singh', singer: 'Sukhwinder Singh', era: 'classic' },
  { id: 'BKx_B1VZ2kw', title: 'Ae Watan', artist: 'Sunidhi Chauhan', singer: 'Sunidhi Chauhan', era: 'classic' },
  { id: 'Grr0FlC8SQA', title: 'Kalank Title Track', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'new' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Bruno Mars', singer: 'Bruno Mars', era: 'classic' },
  { id: '60ItHLz5WEA', title: 'Faded', artist: 'Alan Walker', singer: 'Alan Walker', era: 'classic' },
  { id: 'CevxZvSJLk8', title: 'Roar', artist: 'Katy Perry', singer: 'Katy Perry', era: 'classic' },
  { id: 'kXYiU_JCYtU', title: 'Numb', artist: 'Linkin Park', singer: 'Linkin Park', era: 'classic' },
  { id: '4NRXx6U8ABQ', title: 'Blinding Lights', artist: 'The Weeknd', singer: 'The Weeknd', era: 'new' },
  { id: 'JGwWNGJdvx8', title: 'Shape of You', artist: 'Ed Sheeran', singer: 'Ed Sheeran', era: 'classic' },
  { id: 'hTWKbfoikeg', title: 'Smells Like Teen Spirit', artist: 'Nirvana', singer: 'Nirvana', era: 'classic' },
];

export const singers = ['Alan Walker', 'Arijit Singh', 'Bruno Mars', 'Ed Sheeran', 'Katy Perry', 'Linkin Park', 'Nirvana', 'Sukhwinder Singh', 'Sunidhi Chauhan', 'The Weeknd'];

export const reserve = [];

export const bumperLines = [
  'एक और रेप',
  'Dawn grind',
  'उठो',
];

export default {
  id: 'motivation',
  slug: 'motivation',
  titleLines: ['मोटिवेशन'],
  titleEn: 'Motivation — one more rep',
  description: 'Get up. One more rep. One more mile.',
  presenceLabel: 'grind · dawn',
  themeColor: '#06140c',
  accent: '#16a34a',
  hero: '/motivation.png',
  ogImage: '/motivation.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'workout motivation song',
    'gym motivation hindi',
    'hustle song',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
