/** Sad Hindi — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'FJ55SHCzt88', title: 'Humdard', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'aNToVeBBKn4', title: 'Aasan Nahin Yahan', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'RazuWp5kSHk', title: 'Kabhi Jo Badal Barse', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: '4P4Oa0pbZNQ', title: 'Beete Lamhein', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: 'fVeJ6sJERR4', title: 'Teri Yaadon Mein', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: 'eOorU_qvoiE', title: 'Maine Dil Se Kaha', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: 'xm-4SZxjlzU', title: 'Dil Ibaadat', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: '8YjQU3PUmcY', title: 'Aadat', artist: 'Jal', singer: 'Jal', era: 'classic' },
  { id: 'TRUuSFW80Rk', title: 'Kaash Kahin Aisa Hota', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: '7-ORLGKcnLQ', title: 'Tumhein Dekhen Meri Aankhen', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'U0qBRoeQa-g', title: 'Tu Pyar Hai Kisi Aur Ka', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: '8jytlMEGU0U', title: 'Aur Is Dil Mein', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'SxTYjptEzZs', title: 'Pehli Dafa', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: 'e5LShHAE03A', title: 'Aadat Juda Hoke', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: 'IhKXq5dhTag', title: 'Yeh Kaali Kaali Aankhen', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
];

export const singers = ['Arijit Singh', 'Atif Aslam', 'Jal', 'KK', 'Kumar Sanu'];

export const reserve = [];

export const bumperLines = [
  '2 बजे खिड़की',
  'फुल चेस्ट',
  'हिंदी सैड',
];

export default {
  id: 'sad-hindi',
  slug: 'sad-hindi',
  titleLines: ['सैड', 'हिंदी'],
  titleEn: 'Sad Hindi',
  description: 'Hindi sad — full chest.',
  presenceLabel: '2AM window',
  themeColor: '#080c12',
  accent: '#334155',
  hero: '/sad-hindi.png',
  ogImage: '/sad-hindi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'arijit singh sad song official',
    'kk sad song',
    'hindi sad song',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
