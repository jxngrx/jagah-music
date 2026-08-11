/** ठेका — Haryanvi / Punjabi / Mix tabs */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  // पंजाबी
  { id: 'bzW9fmwcmG4', title: 'Daru Badnaam', artist: 'Kamal Kahlon · Param Singh', singer: 'Kamal Kahlon', lang: 'punjabi', era: 'classic' },
  { id: 'PyltqmuWoQI', title: 'Daaru', artist: 'Miss Pooja · Manjit Rupowalia', singer: 'Miss Pooja', lang: 'punjabi', era: 'classic' },
  { id: 'tq6FYijmzXg', title: 'Daaru', artist: 'Tarak · Neha Singh', singer: 'Tarak', lang: 'punjabi', era: 'new' },
  { id: 'ix5pCUGWerk', title: 'Whiskey Di Botal', artist: 'Preet Hundal', singer: 'Preet Hundal', lang: 'punjabi', era: 'classic' },
  { id: 'CXdr9DW1iHs', title: 'Whiskey', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'new' },
  { id: 'EmVh2vFcQuA', title: 'Whisky', artist: 'Gippy Grewal', singer: 'Gippy Grewal', lang: 'punjabi', era: 'classic' },
  { id: 'CNQ7g378j5g', title: 'Akhian', artist: 'Happy Raikoti', singer: 'Happy Raikoti', lang: 'punjabi', era: 'classic' },
  { id: 'eF0Qos8NnSA', title: 'Salooq', artist: 'B Praak · Jaani', singer: 'B Praak', lang: 'punjabi', era: 'classic' },
  { id: '-U_x2s9Fv3Q', title: 'Broken Heart', artist: 'Sippy Gill', singer: 'Sippy Gill', lang: 'punjabi', era: 'classic' },
  { id: 'ORYWicYvq_8', title: 'Broken Heart', artist: 'Nawab', singer: 'Nawab', lang: 'punjabi', era: 'new' },
  { id: 'Mp95smyVY68', title: 'Yaarian', artist: 'Amrinder Gill · Dr Zeus', singer: 'Amrinder Gill', lang: 'punjabi', era: 'classic' },

  // हरियाणवी
  { id: 'nM-OKWu5OXk', title: 'Likh Dega Ke Jaani', artist: 'Gold E Gill', singer: 'Gold E Gill', lang: 'haryanvi', era: 'new' },
  { id: 'bt5Z2iy-pu4', title: 'Neend Na Aandi Ke', artist: 'Gold E Gill', singer: 'Gold E Gill', lang: 'haryanvi', era: 'new' },
  { id: '-e1NV1Qrc8E', title: 'Takiya', artist: 'Sintaa · Gold E Gill', singer: 'Gold E Gill', lang: 'haryanvi', era: 'new' },
  { id: 'Uj40F12A1ew', title: 'Daru Badnaam', artist: 'Kamal Digiya', singer: 'Kamal Digiya', lang: 'haryanvi', era: 'new' },
  { id: '9q6AoSTx-_I', title: 'Bye Darling', artist: 'KD DESIROCK', singer: 'KD', lang: 'haryanvi', era: 'new' },
  { id: '3oOGF8P1BJo', title: 'Dabya Ni Karde', artist: 'Ndee Kundu · Bintu Pabra', singer: 'Ndee Kundu', lang: 'haryanvi', era: 'classic' },
  { id: 'efbKUmeY-BY', title: 'Falani', artist: 'Vikram Sarkar', singer: 'Vikram Sarkar', lang: 'haryanvi', era: 'new' },
  { id: 'MWmC1gGFgo4', title: 'Dhai Litre Dudh', artist: 'Haryanvi Folk', singer: 'Folk', lang: 'haryanvi', era: 'classic' },

  // हिंदी
  { id: '8YjQU3PUmcY', title: 'Aadat', artist: 'Jal', singer: 'Jal', lang: 'hindi', era: 'classic' },
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit · DDLJ', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
  { id: 'iSUK1QoK9-E', title: 'Pehla Nasha', artist: 'Udit · Sadhana', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka', singer: 'Sonu Nigam', lang: 'hindi', era: 'classic' },
  { id: 'fTauOK8J-U8', title: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu', singer: 'Kumar Sanu', lang: 'hindi', era: 'classic' },
];

export const singers = [];

export const reserve = [
  { id: '4nmGenf0KeQ', title: 'Whiskey', artist: 'Sabba', singer: 'Sabba', lang: 'punjabi', era: 'new' },
  { id: 'yPNnSB-qsEc', title: 'Broken Heart 2', artist: 'Nawab', singer: 'Nawab', lang: 'punjabi', era: 'new' },
  { id: 'F3lPXTWQqZA', title: 'Yaariyan', artist: 'Gurpreet Hehar', singer: 'Gurpreet Hehar', lang: 'punjabi', era: 'new' },
  { id: 'IhKXq5dhTag', title: 'Yeh Kaali Kaali Aankhen', artist: 'Kumar Sanu', singer: 'Kumar Sanu', lang: 'hindi', era: 'classic' },
];

export const bumperLines = [
  'प्लास्टिक कुर्सी, ठंडी बोतल',
  'Mix — हरियाणवी · पंजाबी · हिंदी',
  'देर रात — धीमे गाने',
  'ठेके के बाहर, दिल के अंदर',
  'एक पैग, एक पुराना दर्द',
];

export default {
  id: 'theka',
  slug: 'theka',
  titleLines: ['ठेका'],
  titleEn: 'Theka — late night slow burn',
  description: 'Plastic chairs, cold bottles. Switch Haryanvi / Punjabi / Mix.',
  presenceLabel: 'outside theka',
  themeColor: '#1a0f08',
  accent: '#7c2d12',
  hero: '/theka.png',
  ogImage: '/theka.png',
  gimmick: null,
  langTabs: true,
  discoverQueries: [
    'daru song punjabi official',
    'haryanvi sad song official',
    'broken heart punjabi song official',
  ],
  discoverByLang: {
    haryanvi: ['haryanvi sad song official', 'haryanvi daru song official', 'gold e gill song official'],
    punjabi: ['daru song punjabi official', 'whiskey song punjabi official', 'b praak sad song official'],
    hindi: ['hindi sad song official', '90s bollywood sad song official', 'jal aadat official'],
  },
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
