/** Underground DHH — underrated / scene cuts */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'kuW34I9abAg', title: 'Jaago', artist: 'Prabh Deep', singer: 'Prabh Deep', era: 'classic' },
  { id: 'z6rD_kG-Gpw', title: 'FIZA', artist: 'Prabh Deep', singer: 'Prabh Deep', era: 'new' },
  { id: 'SfKAoDBO9aI', title: 'Kala', artist: 'Prabh Deep', singer: 'Prabh Deep', era: 'classic' },
  { id: '-u0iPt6lrrQ', title: 'Ustaadi', artist: 'Prabh Deep · Faris Shafi', singer: 'Prabh Deep', era: 'new' },
  { id: '1nB7QkmvmLM', title: 'FUNK YOU, PAY ME', artist: 'Dhanji · Karan Kanchan', singer: 'Dhanji', era: 'new' },
  { id: 'GdH0PF7KByk', title: 'TAX', artist: 'Yashraj · aywy · Maania', singer: 'Yashraj', era: 'new' },
  { id: 'rCJ7eu2z-wM', title: 'VN4 (GATI)', artist: 'Yashraj · Robu', singer: 'Yashraj', era: 'new' },
  { id: 'nJ-UA9c6mjA', title: 'Kab Aur Kahan', artist: 'Frappe Ash · Leonik', singer: 'Frappe Ash', era: 'new' },
  { id: 'AXeB1vrz7II', title: 'SHARMEELI', artist: 'Frappe Ash · toorjo dey', singer: 'Frappe Ash', era: 'new' },
  { id: '1PfnLwNvXCc', title: 'Non Talha / Papa Ji', artist: 'Panther', singer: 'Panther', era: 'new' },
  { id: 'Pirzg-F_aag', title: 'FAREBI', artist: 'Chaar Diwaari · Raftaar', singer: 'Chaar Diwaari', era: 'new' },
  { id: '42J5m3t4klw', title: 'LOVESEXDHOKA!!!', artist: 'Chaar Diwaari', singer: 'Chaar Diwaari', era: 'new' },
  { id: 'p0kKahGOKe8', title: 'MAGAN', artist: 'Rawal · Bharg · Encore ABJ', singer: 'Rawal', era: 'new' },
  { id: 'D_VSfZQ55j0', title: 'Bombay Sapphire', artist: 'Rawal · Bharg · RAGA', singer: 'Rawal', era: 'new' },
  { id: '0N_xSio09wA', title: 'Hona Hi Tha', artist: 'Yungsta · Sez · RAGA', singer: 'Yungsta', era: 'classic' },
  { id: 'SJHiEWzPynQ', title: 'Roshni', artist: 'Bharg · Chaar Diwaari', singer: 'Bharg', era: 'new' },
  { id: 'yP3-WxT2ABc', title: 'Roast Swami', artist: 'Spectra', singer: 'Spectra', era: 'classic' },
  { id: 'wO3TDikJ6w4', title: 'Faasi', artist: 'Rebel 7 · Dee King', singer: 'Rebel 7', era: 'new' },
  { id: 'xJI0yH7wzSI', title: 'Ambaran', artist: 'Muhfaad', singer: 'Muhfaad', era: 'new' },
  { id: 'Ra0jm7CXudY', title: 'ELAAN', artist: 'Ahmer · Sez · Prabh Deep', singer: 'Ahmer', era: 'classic' },
];

export const singers = [
  'Ahmer',
  'Bharg',
  'Chaar Diwaari',
  'Dhanji',
  'Frappe Ash',
  'Muhfaad',
  'Panther',
  'Prabh Deep',
  'Rawal',
  'Rebel 7',
  'Spectra',
  'Yashraj',
  'Yungsta',
];

export const reserve = [
  { id: 'jdzkSOR6gHU', title: 'Velo', artist: 'Prabh Deep', singer: 'Prabh Deep', era: 'classic' },
  { id: 'H5cU_RwJpfc', title: 'Tere Bina', artist: 'Yungsta · Ab 17 · Sez', singer: 'Yungsta', era: 'classic' },
];

export const bumperLines = [
  'Basement cypher',
  'Underrated DHH',
  'Tape still spinning',
];

export default {
  id: 'underground-dhh',
  slug: 'underground-dhh',
  titleLines: ['अंडर', 'ग्राउंड'],
  titleEn: 'Underground DHH — underrated scene',
  description: 'Prabh Deep, Dhanji, Yashraj, Frappe Ash and the underground.',
  presenceLabel: 'in the basement',
  themeColor: '#0a0612',
  accent: '#22d3ee',
  hero: '/underground-dhh.png',
  ogImage: '/underground-dhh.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'prabh deep official',
    'dhanji official',
    'yashraj official',
    'frappe ash official',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
