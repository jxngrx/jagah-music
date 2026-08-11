/** Devotion — morning quiet — Phase 7 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'AETFvQonfV8', title: 'Hanuman Chalisa', artist: 'Gulshan Kumar', singer: 'Hariharan', era: 'classic' },
  { id: 'LUx8wlA_dk8', title: 'Shree Hanuman Chalisa', artist: 'Gulshan Kumar', singer: 'Hariharan', era: 'classic' },
  { id: 'R_wOFyxzOr4', title: 'Lab Pe Aati Hai Dua', artist: 'Prayer', singer: 'Classic', era: 'classic' },
  { id: '3ucCEjXS9n8', title: 'Om Jai Jagdish Hare', artist: 'Anuradha Paudwal', singer: 'Anuradha Paudwal', era: 'classic' },
  { id: 'rNRgdSMjoDM', title: 'Om Jai Jagdish Hare Aarti', artist: 'Gulshan Kumar', singer: 'Anuradha Paudwal', era: 'classic' },
  { id: 'hMBKmQEPNzI', title: 'Shiva Tandava Stotram', artist: 'Shankar Mahadevan', singer: 'Shankar Mahadevan', era: 'classic' },
  { id: 'ZIKzQJYKJV0', title: 'Shiv Tandav Stotram', artist: 'Shankar Mahadevan', singer: 'Shankar Mahadevan', era: 'classic' },
];

export const singers = ['Anuradha Paudwal', 'Classic', 'Hariharan', 'Shankar Mahadevan'];

export const reserve = [];

export const bumperLines = [
  'सुबह की आरती',
  'शांत विश्वास',
  'भजन टेप',
];

export default {
  id: 'devotion',
  slug: 'devotion',
  titleLines: ['भक्ति'],
  titleEn: 'Devotion — morning quiet',
  description: 'Bhajan, aarti, quiet faith.',
  presenceLabel: 'in mandir',
  themeColor: '#1a1006',
  accent: '#f97316',
  hero: '/devotion.png',
  ogImage: '/devotion.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'hanuman chalisa gulshan kumar',
    'om jai jagdish hare',
    'shiv tandav',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
