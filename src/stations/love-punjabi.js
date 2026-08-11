/** Love Punjabi — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'ZQkUYmaVwgs', title: 'Love Ya', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'ciktVZSrKpI', title: 'Pyar', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'classic' },
  { id: 'rnyrDk4G68g', title: 'Ishq Di Baajiyaan', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'classic' },
  { id: '509xbom1huI', title: 'Channo', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'classic' },
  { id: '1enpBcw0adc', title: 'Qismat', artist: 'Prabh Gill', singer: 'Prabh Gill', era: 'classic' },
  { id: 'jn77BhLMGc8', title: 'Parshawan', artist: 'Harnoor', singer: 'Harnoor', era: 'new' },
  { id: 'oGORM1_ziSY', title: 'That Girl', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: 'Doo1T5WabEU', title: 'Mil Ke Baithange', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: '2HxkiaDfWqw', title: 'Ki Samjaiye', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: 'L2tICR1SwjE', title: 'Teriyaan Deedaan', artist: 'Parmish Verma', singer: 'Parmish Verma', era: 'new' },
  { id: 'sLueqNhgB3E', title: 'Still In Love', artist: 'Jassa Dhillon', singer: 'Jassa Dhillon', era: 'new' },
  { id: 'Df2r-zrVj5U', title: 'Dil Darian', artist: 'Kambi Rajpuria', singer: 'Kambi Rajpuria', era: 'new' },
  { id: 'YDuVz10Z7xU', title: 'Sufna Banke', artist: 'Harvi', singer: 'Harvi', era: 'new' },
  { id: 'X1xub3f7ubY', title: 'Rangeen', artist: 'Gurnam Bhullar', singer: 'Gurnam Bhullar', era: 'new' },
  { id: 'Mp95smyVY68', title: 'Yaarian', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: 'zR1WMrMDUVU', title: 'Pyar Audio', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'classic' },
];

export const singers = ['Amrinder Gill', 'Diljit Dosanjh', 'Gurnam Bhullar', 'Harnoor', 'Harvi', 'Jassa Dhillon', 'Kambi Rajpuria', 'Parmish Verma', 'Prabh Gill'];

export const reserve = [];

export const bumperLines = [
  'दिल सॉफ्ट',
  'पंजाबी इश्क़',
  'सिर्फ लव',
];

export default {
  id: 'love-punjabi',
  slug: 'love-punjabi',
  titleLines: ['लव', 'पंजाबी'],
  titleEn: 'Love Punjabi',
  description: 'Punjabi love songs only.',
  presenceLabel: 'soft mode',
  themeColor: '#1a080e',
  accent: '#e11d48',
  hero: '/love-punjabi.png',
  ogImage: '/love-punjabi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'punjabi love song official',
    'diljit romantic',
    'amrinder gill love',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
