/** Old Punjabi — cassette era — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: '1cHLSWmVnTE', title: 'Apna Punjab Hove', artist: 'Gurdas Maan', singer: 'Gurdas Maan', era: 'classic' },
  { id: 'pjQyBF2gwjQ', title: 'Ki Banu Duniya Da', artist: 'Gurdas Maan · Diljit', singer: 'Gurdas Maan', era: 'classic' },
  { id: 'jiwKVciHJxM', title: 'Dil Da Mamla Hai', artist: 'Gurdas Maan', singer: 'Gurdas Maan', era: 'classic' },
  { id: 'EeWecMmpXyA', title: 'Inj Nahi Karinde', artist: 'Gurdas Maan', singer: 'Gurdas Maan', era: 'classic' },
  { id: 'tGiJSnwBwDQ', title: 'Tera Yaar Bolda', artist: 'Surjit Bindrakhia', singer: 'Surjit Bindrakhia', era: 'classic' },
  { id: 'ZrjQHm0S5UU', title: 'Wang Wargi Kuri', artist: 'Surjit Bindrakhia', singer: 'Surjit Bindrakhia', era: 'classic' },
  { id: 'NufDlhhwInY', title: 'Akh Toonehari', artist: 'Surjit Bindrakhia', singer: 'Surjit Bindrakhia', era: 'classic' },
  { id: '08Mf6eJmlJE', title: 'Ishque Di Agg', artist: 'Surjit Bindrakhia', singer: 'Surjit Bindrakhia', era: 'classic' },
  { id: 'dccXJtNdrF0', title: 'Kothe Te Glassi', artist: 'Kuldeep Manak', singer: 'Kuldeep Manak', era: 'classic' },
  { id: 'U5VLbGaeyp4', title: 'Tin Rang', artist: 'Harbhajan Mann', singer: 'Harbhajan Mann', era: 'classic' },
  { id: '0alR1QF1PKU', title: 'Chan Naal Chandani', artist: 'Harbhajan Mann', singer: 'Harbhajan Mann', era: 'classic' },
  { id: 'etFnXQ4cssc', title: 'Jinddriye', artist: 'Harbhajan Mann', singer: 'Harbhajan Mann', era: 'classic' },
  { id: '6ZVcYC4yLfk', title: 'Yaar Anmulle', artist: 'Sharry Mann', singer: 'Sharry Mann', era: 'classic' },
  { id: 'uXFxgx--iE8', title: 'Transportiye', artist: 'Sharry Mann', singer: 'Sharry Mann', era: 'classic' },
  { id: 'ort_c6NHhjU', title: 'Le Chakk Main Aa Gya', artist: 'Parmish Verma', singer: 'Parmish Verma', era: 'classic' },
  { id: 'hmjlQ4vPt4c', title: 'Hulara', artist: 'J Star', singer: 'J Star', era: 'classic' },
];

export const singers = ['Gurdas Maan', 'Harbhajan Mann', 'J Star', 'Kuldeep Manak', 'Parmish Verma', 'Sharry Mann', 'Surjit Bindrakhia'];

export const reserve = [];

export const bumperLines = [
  'पुरानी कैसेट',
  'गोल्डन एरा',
  'ट्रक रेडियो',
];

export default {
  id: 'old-punjabi',
  slug: 'old-punjabi',
  titleLines: ['ओल्ड', 'पंजाबी'],
  titleEn: 'Old Punjabi — cassette era',
  description: 'Gurdas Maan nights and truck radio classics.',
  presenceLabel: 'on cassette',
  themeColor: '#1a1406',
  accent: '#ca8a04',
  hero: '/old-punjabi.png',
  ogImage: '/old-punjabi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'gurdas maan classic official',
    'surjit bindrakhia official',
    'kuldeep manak',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
