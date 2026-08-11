/** Love Haryanvi — Phase 6 */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'WGzyuWoH94Q', title: 'Jodi', artist: 'Ndee Kundu', singer: 'Ndee Kundu', era: 'new' },
  { id: 'FPc5xplrtFU', title: 'Tu Aaja Ne', artist: 'Raaji', singer: 'Raaji', era: 'new' },
  { id: 'CwWoYOA_aQc', title: 'Saadi Bholi', artist: 'Amanraj Gill', singer: 'Amanraj Gill', era: 'new' },
  { id: 'vtQ3DhtXJwI', title: 'Insecure', artist: 'Amanraj Gill', singer: 'Amanraj Gill', era: 'new' },
  { id: 'NBbWFVy8PYw', title: 'Protocol', artist: 'Amanraj Gill', singer: 'Amanraj Gill', era: 'new' },
  { id: 'uU7BSAVQI8M', title: 'Lal Dabbi', artist: 'Amanraj Gill', singer: 'Amanraj Gill', era: 'new' },
  { id: 'XcJVcyZ2vwE', title: 'Hopeless', artist: 'Amanraj Gill', singer: 'Amanraj Gill', era: 'new' },
  { id: 'a2fHEv-mYAw', title: 'Wadiyan', artist: 'Masoom Sharma', singer: 'Masoom Sharma', era: 'new' },
  { id: 'QdB_7aq-Fow', title: 'Tede Mede Raste', artist: 'Masoom Sharma', singer: 'Masoom Sharma', era: 'new' },
  { id: 'JjaUdpDerPo', title: 'Surme Ki Dhar', artist: 'Masoom Sharma', singer: 'Masoom Sharma', era: 'new' },
  { id: 'pEh_2kDfu2w', title: 'Yaari', artist: 'Masoom Sharma', singer: 'Masoom Sharma', era: 'new' },
  { id: 'GX4UPPxhOgA', title: 'My Queen', artist: 'KD DESIROCK', singer: 'KD', era: 'new' },
  { id: 'qEVN04uTFPM', title: 'Pyar', artist: 'Harjeet Deewana', singer: 'Harjeet Deewana', era: 'new' },
  { id: 'NGPMKB93urc', title: 'About Her', artist: 'Rahul', singer: 'Rahul', era: 'new' },
  { id: 'Ibo4bMbzPEQ', title: 'Evermore', artist: 'Sumit Parta', singer: 'Sumit Parta', era: 'new' },
  { id: 'MD2Or5ZxBSs', title: 'Gajban Pani Ne Challi', artist: 'Sapna Choudhary', singer: 'Sapna Choudhary', era: 'classic' },
];

export const singers = ['Amanraj Gill', 'Harjeet Deewana', 'KD', 'Masoom Sharma', 'Ndee Kundu', 'Raaji', 'Rahul', 'Sapna Choudhary', 'Sumit Parta'];

export const reserve = [];

export const bumperLines = [
  'हरियाणवी रोमांस',
  'धीमा और तेज़',
  'दिल देसी',
];

export default {
  id: 'love-haryanvi',
  slug: 'love-haryanvi',
  titleLines: ['लव', 'हरियाणवी'],
  titleEn: 'Love Haryanvi',
  description: 'Haryanvi romance, slow and sharp.',
  presenceLabel: 'dil desi',
  themeColor: '#1a060a',
  accent: '#be123c',
  hero: '/love-haryanvi.png',
  ogImage: '/love-haryanvi.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'haryanvi love song official',
    'amanraj gill love',
    'masoom romantic',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
