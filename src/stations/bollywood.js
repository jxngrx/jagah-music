/** Bollywood — cinema forever — Phase 7 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'MJyKN-8UncM', title: 'Shayad', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'new' },
  { id: 'FJ55SHCzt88', title: 'Humdard', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: '9pIXNy-pS10', title: 'Khairiyat', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'qfdShSZZxlg', title: 'Tera Fitoor', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'Grr0FlC8SQA', title: 'Kalank Title Track', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'new' },
  { id: 'j2CwTtriRUw', title: 'Teri Baaton Mein', artist: 'Shahid · Kriti', singer: 'Bollywood', era: 'new' },
  { id: 'Op_UWVBWj3c', title: 'Main Hoon Na', artist: 'Sonu Nigam', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit', singer: 'Udit Narayan', era: 'classic' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'gmXlGQAg400', title: 'Koi Mil Gaya', artist: 'Udit · Alka', singer: 'Udit Narayan', era: 'classic' },
  { id: 'H2f7MZaw3Yo', title: 'Samjhawan', artist: 'Arijit · Shreya', singer: 'Arijit Singh', era: 'classic' },
  { id: 'RazuWp5kSHk', title: 'Kabhi Jo Badal Barse', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'IgITZfS7L_8', title: 'Dil Ibaadat', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: 'rTuxUAuJRyY', title: 'Tera Hone Laga Hoon', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: 'fTauOK8J-U8', title: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'VMsn5-a45-s', title: 'Tip Tip Barsa Paani', artist: 'Udit · Alka', singer: 'Udit Narayan', era: 'classic' },
];

export const singers = ['Arijit Singh', 'Atif Aslam', 'Bollywood', 'KK', 'Kumar Sanu', 'Sonu Nigam', 'Udit Narayan'];

export const reserve = [];

export const bumperLines = [
  'सिनेमा forever',
  'फिल्मी दिल',
  'हिट्स that still hit',
];

export default {
  id: 'bollywood',
  slug: 'bollywood',
  titleLines: ['बॉलीवुड'],
  titleEn: 'Bollywood — cinema forever',
  description: 'Film songs that still hit.',
  presenceLabel: 'front row',
  themeColor: '#1a0612',
  accent: '#db2777',
  hero: '/bollywood.png',
  ogImage: '/bollywood.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'bollywood hit song official',
    'arijit singh official',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
