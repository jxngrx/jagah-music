/** Breakup — unread chat — Phase 8 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'SxTYjptEzZs', title: 'Pehli Dafa', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: 'e5LShHAE03A', title: 'Aadat', artist: 'Atif Aslam', singer: 'Atif Aslam', era: 'classic' },
  { id: '8YjQU3PUmcY', title: 'Aadat', artist: 'Jal', singer: 'Jal', era: 'classic' },
  { id: 'FJ55SHCzt88', title: 'Humdard', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'aNToVeBBKn4', title: 'Aasan Nahin Yahan', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: 'RazuWp5kSHk', title: 'Kabhi Jo Badal Barse', artist: 'Arijit Singh', singer: 'Arijit Singh', era: 'classic' },
  { id: '4P4Oa0pbZNQ', title: 'Beete Lamhein', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: 'fVeJ6sJERR4', title: 'Teri Yaadon Mein', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: 'eOorU_qvoiE', title: 'Maine Dil Se Kaha', artist: 'KK', singer: 'KK', era: 'classic' },
  { id: 'U0qBRoeQa-g', title: 'Tu Pyar Hai Kisi Aur Ka', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'TRUuSFW80Rk', title: 'Kaash Kahin Aisa Hota', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'cXUndHRKmXQ', title: 'Peed', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'eF0Qos8NnSA', title: 'Salooq', artist: 'B Praak', singer: 'B Praak', era: 'classic' },
  { id: 'XcJVcyZ2vwE', title: 'Hopeless', artist: 'Amanraj Gill', singer: 'Amanraj Gill', era: 'new' },
];

export const singers = ['Amanraj Gill', 'Arijit Singh', 'Atif Aslam', 'B Praak', 'Diljit Dosanjh', 'Jal', 'KK', 'Kumar Sanu'];

export const reserve = [];

export const bumperLines = [
  'Unread chat',
  'रिप्ले again',
  'ब्लॉक किया',
];

export default {
  id: 'breakup',
  slug: 'breakup',
  titleLines: ['ब्रेकअप'],
  titleEn: 'Breakup — unread chat',
  description: 'Songs for the unread chat.',
  presenceLabel: 'blocked · replay',
  themeColor: '#12141a',
  accent: '#6b7280',
  hero: '/breakup.png',
  ogImage: '/breakup.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'breakup song hindi official',
    'atif aslam sad song',
    'arijit singh breakup',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
