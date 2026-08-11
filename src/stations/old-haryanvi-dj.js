/** Old Haryanvi DJ — Raju Punjabi / Sonotek / Mor Music era */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'ou-litQ9hWQ', title: 'Solid Body', artist: 'Ajay Hooda · Anjali Raghav · Raju Punjabi', singer: 'Raju Punjabi', era: 'classic' },
  { id: 'ajSBOb7U0DY', title: 'Sandal', artist: 'Vijay Varma · Anjali Raghav · Raju Punjabi', singer: 'Raju Punjabi', era: 'classic' },
  { id: '5hk_M5UNTfc', title: 'Mithi Boli', artist: 'Anjali Raghav · Raju Punjabi', singer: 'Raju Punjabi', era: 'classic' },
  { id: 'aDQe0FbHPBI', title: 'Beautiful Face', artist: 'Raju Punjabi · Anjali Raghav', singer: 'Raju Punjabi', era: 'classic' },
  { id: 'YEqOPTYrvBw', title: 'Edi Maar Ke Nachhi', artist: 'Vijay Verma · Parhlad Phagna', singer: 'Vijay Verma', era: 'classic' },
  { id: 'wBSyHOnvO9Q', title: 'Kele Ju Larje Patli Kamar', artist: 'Vijay Varma · Sonotek', singer: 'Vijay Varma', era: 'classic' },
  { id: 'YL3dawSOwNM', title: 'Judge Taar Chobare Me', artist: 'Krishan Chauhan', singer: 'Krishan Chauhan', era: 'classic' },
  { id: 'e7KR2D_4lRU', title: 'Jhanjhar', artist: 'Deepak Yadav · Pranjal Dahiya', singer: 'Deepak Yadav', era: 'classic' },
  { id: 'NniQGOZGrMA', title: 'O Balma Tune Rakhi Dhoke Me', artist: 'Anu Kadyan · Gajender Phogat', singer: 'Anu Kadyan', era: 'classic' },
  { id: '0L8j3KOD0jY', title: 'Na Olha Na Dhata', artist: 'Happy Baralu · Mor Music', singer: 'Happy Baralu', era: 'classic' },
  { id: 'k3J9-_301W4', title: 'Hawa Kasuti', artist: 'Sapna Chaudhary · Raju Punjabi', singer: 'Sapna Chaudhary', era: 'classic' },
  { id: 'kRcfvz0vr5M', title: 'Olha Mein Patola', artist: 'Ajay Hooda · Masoom Sharma', singer: 'Ajay Hooda', era: 'classic' },
];

export const singers = [
  'Raju Punjabi',
  'Vijay Varma',
  'Ajay Hooda',
  'Anjali Raghav',
  'Sapna Chaudhary',
  'Krishan Chauhan',
];

export const reserve = [
  { id: 'i0sLzY3ZzHk', title: 'Mahre Gaam Ka Pani', artist: 'Raju Punjabi', singer: 'Raju Punjabi', era: 'classic' },
  { id: 'WsuMQfdN_Og', title: 'Haryanvi DJ Mix', artist: 'Raju Punjabi · Sonika Singh', singer: 'Raju Punjabi', era: 'classic' },
  { id: 'R0pzxEIW21c', title: 'Ram Meher Mehla Jukebox', artist: 'Haryanvi DJ', singer: 'DJ', era: 'classic' },
];

export const bumperLines = [
  'पुराना DJ — बास फुल',
  'राजू पंजाबी टेप',
  'सोनोटेक · मोर म्यूजिक',
  'गाँव का डांस फ्लोर',
];

export default {
  id: 'old-haryanvi-dj',
  slug: 'old-haryanvi-dj',
  titleLines: ['ओल्ड', 'हरियाणवी DJ'],
  titleEn: 'Old Haryanvi DJ',
  description: 'Raju Punjabi, Sonotek, Mor Music — village dancefloor classics.',
  presenceLabel: 'on the floor',
  themeColor: '#1a1208',
  accent: '#f59e0b',
  hero: '/cards/saloon.png',
  ogImage: '/cards/saloon.png',
  gimmick: { kind: 'bass', label: 'बास', sub: 'full' },
  langTabs: false,
  discoverQueries: [
    'raju punjabi haryanvi dj song',
    'old haryanvi dj song official',
    'vijay varma haryanvi dj',
    'sonotek haryanvi dj song',
    'mor music haryanvi dj',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
