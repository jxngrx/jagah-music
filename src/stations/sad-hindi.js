/** Sad Hindi — live recipe: seeds → Last.fm similar + Gaana new releases (api/queue). No fixed list. */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const bumperLines = [
  '2 बजे खिड़की',
  'फुल चेस्ट',
  'हिंदी सैड',
];

export default {
  id: 'sad-hindi',
  slug: 'sad-hindi',
  titleLines: ['सैड', 'हिंदी'],
  titleEn: 'Sad Hindi',
  description: 'Hindi sad — full chest.',
  presenceLabel: '2AM window',
  themeColor: '#080c12',
  accent: '#334155',
  hero: '/sad-hindi.png',
  ogImage: '/sad-hindi.png',
  gimmick: null,
  langTabs: false,
  // anchors only define the mood; the queue is fetched live and follows whatever is playing
  recipe: {
    lang: 'Hindi',
    seeds: [
      { title: 'Tum Hi Ho', artist: 'Arijit Singh' },
      { title: 'Sunn Raha Hai Na Tu', artist: 'Ankit Tiwari' },
      { title: 'Channa Mereya', artist: 'Arijit Singh' },
      { title: 'Agar Tum Saath Ho', artist: 'Arijit Singh' },
      { title: 'Phir Bhi Tumko Chahunga', artist: 'Arijit Singh' },
    ],
  },
  discoverQueries: ['arijit singh sad song', 'hindi sad song'],
  tracks: [],
  singers: [],
  reserve: [],
  bumperLines,
  lyricsById: {},
  coverUrl,
};
