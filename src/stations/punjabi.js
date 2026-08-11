/** Punjabi — mainline heat — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'cl0a3i2wFcc', title: 'G.O.A.T.', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'CGhGAVH2GqY', title: 'Charmer', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'g-Ij0idc_dk', title: 'Case', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'jADTdg-o8i0', title: 'Hass Hass', artist: 'Diljit · Sia', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'dCmp56tSSmA', title: 'Born To Shine', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'new' },
  { id: 'MsTW5cyWKj4', title: '5 Taara', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', era: 'classic' },
  { id: '5GCfYLguTIs', title: 'Boyfriend', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'cWMxCE2HTag', title: 'Softly', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'XTp5jaRU3Ws', title: 'Wavy', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'Fbv6-50S1lc', title: 'MF Gabhru', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: '4DfVxVeqk2o', title: '52 Bars', artist: 'Karan Aujla', singer: 'Karan Aujla', era: 'new' },
  { id: 'lJZ8wWCnwow', title: 'Eyes On Me', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', era: 'classic' },
  { id: 'tHVDy4vYApA', title: 'Barota', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', era: 'classic' },
  { id: 'M8vDwlHigJA', title: 'GOAT', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', era: 'classic' },
  { id: 'MiCk8UoPl1Y', title: '8 Cylinder', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', era: 'classic' },
  { id: 'mZQH8CPQ-wo', title: 'With You', artist: 'AP Dhillon', singer: 'AP Dhillon', era: 'new' },
  { id: 'vX2cDW8LUWk', title: 'Excuses', artist: 'AP Dhillon', singer: 'AP Dhillon', era: 'classic' },
  { id: 'tlkb3cLfaOQ', title: 'Moves', artist: 'Shubh', singer: 'Shubh', era: 'new' },
  { id: 'UX740Wf7OUc', title: 'Bounce', artist: 'Shubh', singer: 'Shubh', era: 'new' },
  { id: 'nt5tXl9Vtug', title: 'Balenci', artist: 'Shubh', singer: 'Shubh', era: 'new' },
];

export const singers = ['AP Dhillon', 'Diljit Dosanjh', 'Karan Aujla', 'Shubh', 'Sidhu Moose Wala'];

export const reserve = [];

export const bumperLines = [
  'पंजाब लाउड',
  'बेस पहले',
  'मेनलाइन हीट',
];

export default {
  id: 'punjabi',
  slug: 'punjabi',
  titleLines: ['पंजाबी'],
  titleEn: 'Punjabi — mainline heat',
  description: 'Mainline Punjabi heat.',
  presenceLabel: 'in Punjab',
  themeColor: '#1a1204',
  accent: '#f59e0b',
  hero: '/punjabi.png',
  ogImage: '/punjabi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'diljit dosanjh official',
    'karan aujla official',
    'sidhu moose wala official',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
