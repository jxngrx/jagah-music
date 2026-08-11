/** New Punjabi — charts + fan-fav evergreen — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  // charts now
  { id: '-YlmnPh-6rE', title: 'For A Reason', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'Fbv6-50S1lc', title: 'MF Gabhru', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'K9R7KcaettM', title: 'I Really Do', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'V23eW2KEIuU', title: 'Daytona', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'XTp5jaRU3Ws', title: 'Wavy', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'cWMxCE2HTag', title: 'Softly', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'WVq1siHnPxI', title: 'Kufar', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'x-PvBG9akKQ', title: 'Chill Mardi', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'CGhGAVH2GqY', title: 'Charmer', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'lGTnGMO0AoI', title: 'Ban', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'jADTdg-o8i0', title: 'Hass Hass', artist: 'Diljit · Sia', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'mZQH8CPQ-wo', title: 'With You', artist: 'AP Dhillon', singer: 'AP Dhillon', era: 'new' },
  { id: 'slM5s55Jz0k', title: 'Thodi Si Daaru', artist: 'AP Dhillon', singer: 'AP Dhillon', era: 'new' },
  { id: 'CbvjhmFVMvA', title: 'Thinking Of You', artist: 'AP Dhillon', singer: 'AP Dhillon', era: 'new' },
  { id: 'tlkb3cLfaOQ', title: 'Moves', artist: 'Shubh', singer: 'Shubh', era: 'new' },
  { id: 'UX740Wf7OUc', title: 'Bounce', artist: 'Shubh', singer: 'Shubh', era: 'new' },
  { id: 'YY583HmKBzA', title: 'Sohniye', artist: 'Shubh', singer: 'Shubh', era: 'new' },
  { id: 'nt5tXl9Vtug', title: 'Balenci', artist: 'Shubh', singer: 'Shubh', era: 'new' },

  // Parmish Verma
  { id: 'ort_c6NHhjU', title: 'Le Chakk Main Aa Gya', artist: 'Parmish Verma', singer: 'Parmish Verma', era: 'new' },
  { id: 'muds1gFUTN8', title: 'Aam Jahe Munde', artist: 'Parmish Verma · Pardhaan', singer: 'Parmish Verma', era: 'new' },
  { id: 'ykLKNvhEaLg', title: 'Neat', artist: 'Parmish Verma', singer: 'Parmish Verma', era: 'new' },
  { id: 'L2tICR1SwjE', title: 'Teriyaan Deedaan', artist: 'Parmish Verma', singer: 'Parmish Verma', era: 'new' },

  // Amrinder Gill
  { id: 'oGORM1_ziSY', title: 'That Girl', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'new' },
  { id: 'Doo1T5WabEU', title: 'Mil Ke Baithange', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: '2HxkiaDfWqw', title: 'Ki Samjaiye', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: 'Mp95smyVY68', title: 'Yaarian', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },
  { id: 'fZJAXopLX2o', title: 'Dildarian', artist: 'Amrinder Gill', singer: 'Amrinder Gill', era: 'classic' },

  // fan-fav evergreen
  { id: '1cHLSWmVnTE', title: 'Apna Punjab Hove', artist: 'Gurdas Maan', singer: 'Gurdas Maan', era: 'classic' },
  { id: 'pjQyBF2gwjQ', title: 'Ki Banu Duniya Da', artist: 'Gurdas Maan · Diljit', singer: 'Gurdas Maan', era: 'classic' },
  { id: 'jiwKVciHJxM', title: 'Dil Da Mamla Hai', artist: 'Gurdas Maan', singer: 'Gurdas Maan', era: 'classic' },
  { id: '6ZVcYC4yLfk', title: 'Yaar Anmulle', artist: 'Sharry Mann', singer: 'Sharry Mann', era: 'classic' },
  { id: 'EmVh2vFcQuA', title: 'Whisky', artist: 'Gippy Grewal', singer: 'Gippy Grewal', era: 'classic' },
  { id: 'FzfdD9y839g', title: 'Naah', artist: 'Jass Manak', singer: 'Jass Manak', era: 'classic' },
  { id: 'lJZ8wWCnwow', title: 'Eyes On Me', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', era: 'classic' },
  { id: 'M8vDwlHigJA', title: 'GOAT', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', era: 'classic' },
  { id: 'ikRy2Pki7Z4', title: 'Punjab Wal Nu', artist: 'Hustinder', singer: 'Hustinder', era: 'new' },
];

export const singers = [
  'Amrinder Gill',
  'AP Dhillon',
  'Diljit Dosanjh',
  'Gippy Grewal',
  'Gurdas Maan',
  'Hustinder',
  'Jass Manak',
  'Karan Aujla',
  'Parmish Verma',
  'Sharry Mann',
  'Shubh',
  'Sidhu Moose Wala',
];

export const reserve = [
  { id: 'EeWecMmpXyA', title: 'Inj Nahi Karinde', artist: 'Gurdas Maan', singer: 'Gurdas Maan', era: 'classic' },
  { id: 'dCmp56tSSmA', title: 'Born To Shine', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'MsTW5cyWKj4', title: '5 Taara', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'classic' },
];

export const bumperLines = [
  'फ्रेश ड्रॉप + evergreen',
  'Parmish · Amrinder · charts',
  'फैन फेव + बेस',
];

export default {
  id: 'new-punjabi',
  slug: 'new-punjabi',
  titleLines: ['न्यू', 'पंजाबी'],
  titleEn: 'New Punjabi — charts + evergreen',
  description: 'Fresh drops plus Parmish, Amrinder, and fan-fav evergreen.',
  presenceLabel: 'on charts',
  themeColor: '#1a1604',
  accent: '#eab308',
  hero: '/new-punjabi.png',
  ogImage: '/new-punjabi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'parmish verma new song official',
    'amrinder gill new song official',
    'karan aujla official',
    'gurdas maan hit song',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
