/** Sad Haryanvi — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'nM-OKWu5OXk', title: 'Likh Dega Ke Jaani', artist: 'Gold E Gill', singer: 'Gold E Gill', era: 'new' },
  { id: 'bt5Z2iy-pu4', title: 'Neend Na Aandi Ke', artist: 'Gold E Gill', singer: 'Gold E Gill', era: 'new' },
  { id: '-e1NV1Qrc8E', title: 'Takiya', artist: 'Sintaa · Gold E Gill', singer: 'Gold E Gill', era: 'new' },
  { id: 'Lq7KC027UeI', title: 'Ke Haal', artist: 'Sintaa · Gold E Gill', singer: 'Sintaa', era: 'new' },
  { id: 'p5UaxR79fmQ', title: 'Zindagi', artist: 'Vikas Karora', singer: 'Vikas Karora', era: 'new' },
  { id: '5oACOzjPYaU', title: 'Dil Tut Gya', artist: 'PS Polist', singer: 'PS Polist', era: 'new' },
  { id: 'qKWfUt5V1dU', title: 'Tut Jyaga Dil', artist: 'Diler Kharkiya', singer: 'Diler Kharkiya', era: 'new' },
  { id: 'efbKUmeY-BY', title: 'Falani', artist: 'Vikram Sarkar', singer: 'Vikram Sarkar', era: 'new' },
  { id: 'WFBEqT-EogM', title: 'Kale Kagaz', artist: 'Amanraj Gill', singer: 'Amanraj Gill', era: 'new' },
  { id: 'AVuz-8bHhrU', title: 'Sadhu Life', artist: 'Sandeep Pandit', singer: 'Sandeep Pandit', era: 'new' },
  { id: 'AdU3toix_Xc', title: 'Heer', artist: 'Sachin Jaat', singer: 'Sachin Jaat', era: 'new' },
  { id: 'gJGcC3hlRcE', title: 'Haaye Re', artist: 'Banjaare', singer: 'Banjaare', era: 'new' },
  { id: '9q6AoSTx-_I', title: 'Bye Darling', artist: 'KD', singer: 'KD', era: 'new' },
];

export const singers = ['Amanraj Gill', 'Banjaare', 'Diler Kharkiya', 'Gold E Gill', 'KD', 'PS Polist', 'Sachin Jaat', 'Sandeep Pandit', 'Sintaa', 'Vikas Karora', 'Vikram Sarkar'];

export const reserve = [];

export const bumperLines = [
  'रात शांत',
  'हरियाणवी दर्द',
  'धीमी कट',
];

export default {
  id: 'sad-haryanvi',
  slug: 'sad-haryanvi',
  titleLines: ['सैड', 'हरियाणवी'],
  titleEn: 'Sad Haryanvi',
  description: 'Haryanvi sad cuts.',
  presenceLabel: 'quiet night',
  themeColor: '#0a0e14',
  accent: '#475569',
  hero: '/sad-haryanvi.png',
  ogImage: '/sad-haryanvi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'haryanvi sad song official',
    'gold e gill sad',
    'slow haryanvi sad',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
