/** English — global aux — Phase 7 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: '4NRXx6U8ABQ', title: 'Blinding Lights', artist: 'The Weeknd', singer: 'The Weeknd', era: 'new' },
  { id: '2Vv-BfVoq4g', title: 'Perfect', artist: 'Ed Sheeran', singer: 'Ed Sheeran', era: 'classic' },
  { id: 'TUVcZfQe-Kw', title: 'Levitating', artist: 'Dua Lipa', singer: 'Dua Lipa', era: 'new' },
  { id: 'e-fA-gBCkj0', title: 'Locked Out Of Heaven', artist: 'Bruno Mars', singer: 'Bruno Mars', era: 'classic' },
  { id: 'JGwWNGJdvx8', title: 'Shape of You', artist: 'Ed Sheeran', singer: 'Ed Sheeran', era: 'classic' },
  { id: 'lp-EO5I60KA', title: 'Thinking Out Loud', artist: 'Ed Sheeran', singer: 'Ed Sheeran', era: 'classic' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Bruno Mars', singer: 'Bruno Mars', era: 'classic' },
  { id: '60ItHLz5WEA', title: 'Faded', artist: 'Alan Walker', singer: 'Alan Walker', era: 'classic' },
  { id: '09R8_2nJtjg', title: 'Sugar', artist: 'Maroon 5', singer: 'Maroon 5', era: 'classic' },
  { id: 'CevxZvSJLk8', title: 'Roar', artist: 'Katy Perry', singer: 'Katy Perry', era: 'classic' },
  { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', artist: 'Queen', singer: 'Queen', era: 'classic' },
  { id: 'kXYiU_JCYtU', title: 'Numb', artist: 'Linkin Park', singer: 'Linkin Park', era: 'classic' },
  { id: 'hTWKbfoikeg', title: 'Smells Like Teen Spirit', artist: 'Nirvana', singer: 'Nirvana', era: 'classic' },
  { id: 'RgKAFK5djSk', title: 'See You Again', artist: 'Wiz Khalifa · Charlie Puth', singer: 'Charlie Puth', era: 'classic' },
];

export const singers = ['Alan Walker', 'Bruno Mars', 'Charlie Puth', 'Dua Lipa', 'Ed Sheeran', 'Katy Perry', 'Linkin Park', 'Maroon 5', 'Nirvana', 'Queen', 'The Weeknd'];

export const reserve = [];

export const bumperLines = [
  'Global aux',
  'Long drive English',
  'Bass + sky',
];

export default {
  id: 'english',
  slug: 'english',
  titleLines: ['ENGLISH'],
  titleEn: 'English — global aux',
  description: 'English playlist for the long drive.',
  presenceLabel: 'on aux',
  themeColor: '#061018',
  accent: '#38bdf8',
  hero: '/english.png',
  ogImage: '/english.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'the weeknd official',
    'ed sheeran official',
    'dua lipa official',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
