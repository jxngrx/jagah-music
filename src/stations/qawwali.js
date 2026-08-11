/** Qawwali — Nusrat / Rahat / classic mehfil */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'q4NVp-aFZSw', title: 'Tumhein Dillagi Bhool Jani Paray Gi', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'eYSaHXXFIBU', title: 'Sanson Ki Mala Pe', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: '8pL87d_v8JY', title: 'Sanu Rog Laan (Kadi Takren Te)', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'YSMIDIt2Ku4', title: 'Akhiyan Udeek Dian', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'lsqsggtTZfs', title: 'Kali Kali Zulfon Ke', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'r8mIeP3aRQs', title: 'Jani Door Gaye', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'kBgl81yuZPs', title: 'Pyala Rakh De Ek Paasey', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'mjH8v6UFt5w', title: 'Haqeeqat Ka Agar Afsana', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'QuNyMxLlVig', title: 'Sochta Hoon Ke Woh Kitne Masoom', artist: 'Nusrat Fateh Ali Khan', singer: 'Nusrat Fateh Ali Khan', era: 'classic' },
  { id: 'S0icwQSlbpE', title: 'Amad e Mustafa', artist: 'Rahat Fateh Ali Khan', singer: 'Rahat Fateh Ali Khan', era: 'classic' },
  { id: 'fhvej6r3b24', title: 'Yaar Da Makaan Ae', artist: 'Rahat Fateh Ali Khan', singer: 'Rahat Fateh Ali Khan', era: 'classic' },
  { id: '40G9d5LBdUU', title: 'Koi Umeed Bar Nahin Aati', artist: 'Rahat Fateh Ali Khan', singer: 'Rahat Fateh Ali Khan', era: 'classic' },
];

export const singers = ['Nusrat Fateh Ali Khan', 'Rahat Fateh Ali Khan'];

export const reserve = [
  { id: 'cFXSjU6I3nQ', title: 'Sitaron Se Aage', artist: 'Rahat Fateh Ali Khan', singer: 'Rahat Fateh Ali Khan', era: 'classic' },
];

export const bumperLines = [
  'मेहफ़िल शुरू',
  'नुसरत की आवाज़',
  'कव्वाली रात',
  'एक कतरा, पूरा दिल',
];

export default {
  id: 'qawwali',
  slug: 'qawwali',
  titleLines: ['कव्वाली'],
  titleEn: 'Qawwali',
  description: 'Nusrat, Rahat — mehfil tape.',
  presenceLabel: 'in mehfil',
  themeColor: '#120a14',
  accent: '#a855f7',
  hero: '/cards/devotion.png',
  ogImage: '/cards/devotion.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'nusrat fateh ali khan qawwali official',
    'rahat fateh ali khan qawwali',
    'classic qawwali live',
    'abida parveen sufi',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
