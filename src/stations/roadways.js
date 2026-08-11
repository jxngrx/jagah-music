/** हरियाणा रोडवेज — depot window seat tape. Tabs: Mix / Haryanvi / Hindi / old */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  // हरियाणवी (new)
  { id: 'jif1Wejs6f8', title: 'Roadways', artist: 'Anil Haryanvi · Swara Verma', singer: 'Anil Haryanvi', lang: 'haryanvi', era: 'new' },
  { id: 'gJGcC3hlRcE', title: 'Haaye Re', artist: 'Banjaare · Swati Shukla', singer: 'Banjaare', lang: 'haryanvi', era: 'new' },
  { id: 'VXuFBnAfkZA', title: 'HI FI', artist: 'Masoom Sharma · Renuka Panwar', singer: 'Masoom Sharma', lang: 'haryanvi', era: 'new' },
  { id: 'LCU8YgxVPJc', title: '4WD', artist: 'Khasa Aala Chahar', singer: 'Khasa Aala Chahar', lang: 'haryanvi', era: 'new' },
  { id: 'WsmMT2EHRB4', title: 'Chail Haryane Ka', artist: 'Ajay Bhagta', singer: 'Ajay Bhagta', lang: 'haryanvi', era: 'new' },
  { id: 'gzULf6_PxsM', title: 'Badal Gaya Haryana', artist: 'Kushal Yadav', singer: 'Kushal Yadav', lang: 'haryanvi', era: 'new' },
  { id: 'efbKUmeY-BY', title: 'Falani', artist: 'Vikram Sarkar', singer: 'Vikram Sarkar', lang: 'haryanvi', era: 'new' },
  { id: '5bkBr7Gs7RI', title: 'Haryana Roadways', artist: 'English Guru', singer: 'Ajay Bhagta', lang: 'haryanvi', era: 'new' },

  // पुरानी हरियाणवी
  { id: '2HbXV6ra_gM', title: 'Saiyaan Ji Driver', artist: 'Sapna Choudhary', singer: 'Sapna Choudhary', lang: 'old-haryanvi', era: 'classic' },
  { id: 'esP3tENzeYU', title: 'Haryana Roadways', artist: 'Pardhaan', singer: 'Pardhaan', lang: 'old-haryanvi', era: 'classic' },
  { id: 'ji2LIqRxuFM', title: 'Haryana To Badal Gaya', artist: 'Raju Punjabi', singer: 'Raju Punjabi', lang: 'old-haryanvi', era: 'classic' },
  { id: 'KupZ-mEm6QY', title: 'Haryana Roadways', artist: 'Badshah · Fazilpuria', singer: 'Badshah', lang: 'old-haryanvi', era: 'classic' },

  // हिंदी (new / soft highway)
  { id: 'terrX5lNBkU', title: 'Teeji Seat', artist: 'Kaka', singer: 'Kaka', lang: 'hindi', era: 'new' },
  { id: 'MJyKN-8UncM', title: 'Shayad', artist: 'Arijit Singh', singer: 'Arijit Singh', lang: 'hindi', era: 'new' },
  { id: 'Grr0FlC8SQA', title: 'Kalank Title Track', artist: 'Arijit Singh', singer: 'Arijit Singh', lang: 'hindi', era: 'new' },
  { id: 'j2CwTtriRUw', title: 'Teri Baaton Mein', artist: 'Shahid · Kriti', singer: 'Bollywood', lang: 'hindi', era: 'new' },

  // पुरानी हिंदी
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit', singer: 'Udit Narayan', lang: 'old-hindi', era: 'classic' },
  { id: 'Op_UWVBWj3c', title: 'Main Hoon Na', artist: 'Sonu Nigam', singer: 'Sonu Nigam', lang: 'old-hindi', era: 'classic' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka', singer: 'Sonu Nigam', lang: 'old-hindi', era: 'classic' },
  { id: 'gmXlGQAg400', title: 'Koi Mil Gaya', artist: 'Udit · Alka', singer: 'Udit Narayan', lang: 'old-hindi', era: 'classic' },
  { id: 'IgITZfS7L_8', title: 'Dil Ibaadat', artist: 'KK', singer: 'KK', lang: 'old-hindi', era: 'classic' },
];

export const singers = [];

export const reserve = [
  { id: 'S0yhOCOPWrU', title: 'Haryana Roadways', artist: 'Badshah · Fazilpuria', singer: 'Badshah', lang: 'old-haryanvi', era: 'classic' },
  { id: 'FJ55SHCzt88', title: 'Humdard', artist: 'Arijit Singh', singer: 'Arijit Singh', lang: 'hindi', era: 'classic' },
  { id: 'XcJVcyZ2vwE', title: 'Hopeless', artist: 'Amanraj Gill', singer: 'Amanraj Gill', lang: 'haryanvi', era: 'new' },
];

export const bumperLines = [
  'खिड़की वाली सीट, धूल भरी सड़क',
  'डिपो से निकली बस — टेप चालू',
  'Route 47, NH-9, और एक पुराना गाना',
  'कंडक्टर की सीटी, इंजन की घर्र',
  'हरियाणा रोडवेज — घर पहुँचा देगी',
  'आधा सफ़र, पूरा वॉल्यूम',
];

export default {
  id: 'roadways',
  slug: 'haryana-roadways',
  titleLines: ['हरियाणा', 'रोडवेज'],
  titleEn: 'Haryana Roadways — depot tape',
  description: 'Depot tape. Window seat. Highway dust.',
  presenceLabel: 'on the bus',
  themeColor: '#0a1628',
  accent: '#1B4B8F',
  hero: '/roadways.png',
  ogImage: '/roadways.png',
  gimmick: null,
  langTabs: true,
  langChips: [
    { id: 'mix', label: 'Mix' },
    { id: 'haryanvi', label: 'हरियाणवी' },
    { id: 'hindi', label: 'हिंदी' },
    { id: 'old-haryanvi', label: 'पुरानी हरियाणवी' },
    { id: 'old-hindi', label: 'पुरानी हिंदी' },
  ],
  discoverQueries: [
    'haryana roadways song official',
    'highway haryanvi song official',
    '90s hindi road trip song',
  ],
  discoverByLang: {
    haryanvi: ['new haryanvi song official', 'masoom sharma official'],
    hindi: ['new hindi song official', 'arijit singh official'],
    'old-haryanvi': ['old haryanvi song official', 'sapna choudhary song'],
    'old-hindi': ['90s bollywood song official', 'kk song official'],
  },
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
