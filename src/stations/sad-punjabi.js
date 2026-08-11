/** Sad Punjabi — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'YrUqw7uspKg', title: 'Mann Bharrya', artist: 'B Praak · Jaani', singer: 'B Praak', era: 'classic' },
  { id: 'mYRV_B_QVGw', title: 'Dil Kaat Ke', artist: 'B Praak · Jaani', singer: 'B Praak', era: 'new' },
  { id: '5KkHLDkPcq8', title: 'Zohrajabeen', artist: 'B Praak', singer: 'B Praak', era: 'classic' },
  { id: '1ZyIS1QAG68', title: 'Salooq', artist: 'B Praak', singer: 'B Praak', era: 'classic' },
  { id: 'eF0Qos8NnSA', title: 'Salooq Lyrical', artist: 'B Praak', singer: 'B Praak', era: 'classic' },
  { id: '1MnssmkzS6E', title: 'Jaani Ve Jaani', artist: 'Jaani · Afsana', singer: 'Jaani', era: 'classic' },
  { id: 'enQuoRciccM', title: 'Aadat', artist: 'Ninja', singer: 'Ninja', era: 'classic' },
  { id: 'fZJAXopLX2o', title: 'Dildarian', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: 'rCOWo_CTYtc', title: 'Ishqan De Lekhe', artist: 'Sajjan Adeeb', singer: 'Sajjan Adeeb', era: 'classic' },
  { id: '-U_x2s9Fv3Q', title: 'Broken Heart', artist: 'Sippy Gill', singer: 'Sippy Gill', era: 'classic' },
  { id: 'ORYWicYvq_8', title: 'Broken Heart Nawab', artist: 'Nawab', singer: 'Nawab', era: 'new' },
  { id: '8f-kePl47l4', title: 'Broken Heart 4', artist: 'Nawab', singer: 'Nawab', era: 'new' },
  { id: 'LaxQq567f1I', title: 'Zaroori Nai', artist: 'Afsana Khan', singer: 'Afsana Khan', era: 'new' },
  { id: 'CNQ7g378j5g', title: 'Akhian', artist: 'Happy Raikoti', singer: 'Happy Raikoti', era: 'classic' },
  { id: '8YjQU3PUmcY', title: 'Aadat Jal', artist: 'Jal', singer: 'Jal', era: 'classic' },
];

export const singers = ['Afsana Khan', 'Amrinder Gill', 'B Praak', 'Happy Raikoti', 'Jaani', 'Jal', 'Nawab', 'Ninja', 'Sajjan Adeeb', 'Sippy Gill'];

export const reserve = [];

export const bumperLines = [
  'बारिश · अकेला',
  'दिल टूटा',
  'पंजाबी सैड',
];

export default {
  id: 'sad-punjabi',
  slug: 'sad-punjabi',
  titleLines: ['सैड', 'पंजाबी'],
  titleEn: 'Sad Punjabi',
  description: 'Punjabi heartbreak playlist.',
  presenceLabel: 'alone',
  themeColor: '#0c1016',
  accent: '#64748b',
  hero: '/sad-punjabi.png',
  ogImage: '/sad-punjabi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'b praak sad song official',
    'punjabi sad song',
    'jaani sad',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
