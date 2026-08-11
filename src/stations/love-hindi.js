/** Love Hindi — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit', singer: 'Udit Narayan', era: 'classic' },
  { id: 'iSUK1QoK9-E', title: 'Pehla Nasha', artist: 'Udit · Sadhana', singer: 'Udit Narayan', era: 'classic' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'fTauOK8J-U8', title: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'gmXlGQAg400', title: 'Koi Mil Gaya', artist: 'KKHH', singer: 'Udit Narayan', era: 'classic' },
  { id: '-bNwqXvMuB8', title: 'Mehndi Laga Ke Rakhna', artist: 'DDLJ', singer: 'Lata Mangeshkar', era: 'classic' },
  { id: 'RazuWp5kSHk', title: 'Kabhi Jo Badal Barse', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'H2f7MZaw3Yo', title: 'Samjhawan', artist: 'Arijit · Shreya', singer: 'Arijit Singh', era: 'classic' },
  { id: 'MJyKN-8UncM', title: 'Shayad', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'new' },
  { id: 'rTuxUAuJRyY', title: 'Tera Hone Laga Hoon', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: 'e5LShHAE03A', title: 'Aadat Juda Hoke', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: 'SxTYjptEzZs', title: 'Pehli Dafa', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: 'Op_UWVBWj3c', title: 'Main Hoon Na', artist: 'Shahrukh', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'w2iozAbNXAo', title: 'Pehla Pehla Pyar Hai', artist: 'HAHK', singer: 'S.P. Balasubrahmanyam', era: 'classic' },
  { id: 'Yqj1_V90KJo', title: 'Chura Ke Dil Mera', artist: 'Kumar Sanu · Alka', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'hw_HpTI_Wkw', title: 'Ho Gaya Hai Tujhko', artist: 'DDLJ', singer: 'Udit Narayan', era: 'classic' },
];

export const singers = ['Arijit Singh', 'Atif Aslam', 'Kumar Sanu', 'Lata Mangeshkar', 'S.P. Balasubrahmanyam', 'Sonu Nigam', 'Udit Narayan'];

export const reserve = [];

export const bumperLines = [
  'फिल्मी दिल',
  'पुराना दर्द, नया क्रश',
  'हिंदी लव',
];

export default {
  id: 'love-hindi',
  slug: 'love-hindi',
  titleLines: ['लव', 'हिंदी'],
  titleEn: 'Love Hindi',
  description: 'Hindi love — old ache, new crush.',
  presenceLabel: 'filmy dil',
  themeColor: '#1a050c',
  accent: '#9f1239',
  hero: '/love-hindi.png',
  ogImage: '/love-hindi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'arijit singh love song official',
    'atif aslam love',
    '90s bollywood romantic',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
