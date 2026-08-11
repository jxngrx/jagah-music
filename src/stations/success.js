/** Success — made it, still hungry — Phase 8 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'j2CwTtriRUw', title: 'Teri Baaton Mein', artist: 'Shahid · Kriti', singer: 'Bollywood', era: 'new' },
  { id: 'Op_UWVBWj3c', title: 'Main Hoon Na', artist: 'Sonu Nigam', singer: 'Sonu Nigam', era: 'classic' },
  { id: '9sthJUHkzgI', title: 'Sandese Aate Hai', artist: 'Sonu Nigam', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'bnqLzCsffwY', title: 'Chak De India', artist: 'Sukhwinder Singh', singer: 'Sukhwinder Singh', era: 'classic' },
  { id: 'Grr0FlC8SQA', title: 'Kalank Title Track', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'new' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Bruno Mars', singer: 'Bruno Mars', era: 'classic' },
  { id: 'RgKAFK5djSk', title: 'See You Again', artist: 'Wiz Khalifa · Charlie Puth', singer: 'Charlie Puth', era: 'classic' },
  { id: 'e-fA-gBCkj0', title: 'Locked Out Of Heaven', artist: 'Bruno Mars', singer: 'Bruno Mars', era: 'classic' },
  { id: '09R8_2nJtjg', title: 'Sugar', artist: 'Maroon 5', singer: 'Maroon 5', era: 'classic' },
  { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', artist: 'Queen', singer: 'Queen', era: 'classic' },
];

export const singers = ['Arijit Singh', 'Bollywood', 'Bruno Mars', 'Charlie Puth', 'Maroon 5', 'Queen', 'Sonu Nigam', 'Sukhwinder Singh'];

export const reserve = [];

export const bumperLines = [
  'अपना टाइम',
  'Flex tape',
  'Made it',
];

export default {
  id: 'success',
  slug: 'success',
  titleLines: ['सक्सेस'],
  titleEn: 'Success — made it, still hungry',
  description: 'Flex tracks after the win.',
  presenceLabel: 'made it · still hungry',
  themeColor: '#1a1406',
  accent: '#d4a017',
  hero: '/success.png',
  ogImage: '/success.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'success song hindi',
    'apna time aayega',
    'winner anthem',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
