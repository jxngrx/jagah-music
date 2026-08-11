/** Desi Hip Hop — chart / mainstream DHH */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'BAr-KBVnhfY', title: 'Namastute', artist: 'Seedhe Maut', singer: 'Seedhe Maut', era: 'new' },
  { id: 'IUFPs3j341k', title: '101', artist: 'Seedhe Maut', singer: 'Seedhe Maut', era: 'new' },
  { id: 'VjJtH7xM8G4', title: 'Nanchaku', artist: 'Seedhe Maut · MC Stan', singer: 'Seedhe Maut', era: 'new' },
  { id: 'ZEN3KMdIVZM', title: 'Shaktimaan', artist: 'Seedhe Maut · Sez', singer: 'Seedhe Maut', era: 'new' },
  { id: 'uykOHAhId0Q', title: 'Sheikh Chilli', artist: 'Raftaar', singer: 'Raftaar', era: 'new' },
  { id: '7gUAGZ30F9o', title: 'Mantoiyat', artist: 'Raftaar', singer: 'Raftaar', era: 'classic' },
  { id: 'ReXw6TOnUOc', title: 'All Black', artist: 'Sukhe · Raftaar', singer: 'Raftaar', era: 'classic' },
  { id: 'Qg9LxRHLbAk', title: 'I Guess', artist: 'KR$NA', singer: 'KR$NA', era: 'new' },
  { id: 'De9VIp37CjY', title: 'Hola Amigo', artist: 'KR$NA · Seedhe Maut', singer: 'KR$NA', era: 'new' },
  { id: '1bK5dzwhu-I', title: 'Mere Gully Mein', artist: 'DIVINE · Naezy', singer: 'DIVINE', era: 'classic' },
  { id: '9Wsi7YTI2nY', title: 'Jungli Sher', artist: 'DIVINE', singer: 'DIVINE', era: 'classic' },
  { id: 'hqn0cxi2d0A', title: 'Farak', artist: 'DIVINE', singer: 'DIVINE', era: 'classic' },
  { id: 'pxCWiYFkvTg', title: 'Aathma Raama', artist: 'Brodha V', singer: 'Brodha V', era: 'classic' },
  { id: '7tNPxY_ntEA', title: 'Machayenge', artist: 'Emiway Bantai', singer: 'Emiway Bantai', era: 'classic' },
  { id: 'Wwo36tHg2bw', title: 'Aafat!', artist: 'Naezy', singer: 'Naezy', era: 'classic' },
  { id: 'pg2tsJErYH4', title: 'Haath Varthi', artist: 'MC Stan · KSHMR', singer: 'MC Stan', era: 'new' },
  { id: 'bdesdebUFLE', title: 'Paagal', artist: 'Badshah', singer: 'Badshah', era: 'classic' },
  { id: 'gzkkE-wQGSY', title: 'Enigma 2 Icon', artist: 'Ikka · Sez', singer: 'Ikka', era: 'new' },
];

export const singers = [
  'Badshah',
  'Brodha V',
  'DIVINE',
  'Emiway Bantai',
  'Ikka',
  'KR$NA',
  'MC Stan',
  'Naezy',
  'Raftaar',
  'Seedhe Maut',
];

export const reserve = [
  { id: 'zaCbuB3w0kg', title: 'Firse Machayenge', artist: 'Emiway Bantai', singer: 'Emiway Bantai', era: 'new' },
  { id: 'cO3wnhL3Hv4', title: '10 Pe 10', artist: 'KR$NA', singer: 'KR$NA', era: 'new' },
];

export const bumperLines = [
  'Gully se stage',
  'Seedhe · Raftaar · KR$NA',
  'DHH charts on',
];

export default {
  id: 'dhh',
  slug: 'desi-hip-hop',
  titleLines: ['डेसी', 'हिप हॉप'],
  titleEn: 'Desi Hip Hop — chart DHH',
  description: 'Seedhe Maut, Raftaar, KR$NA, DIVINE and the big DHH names.',
  presenceLabel: 'in the cypher',
  themeColor: '#12060a',
  accent: '#e11d48',
  hero: '/dhh.png',
  ogImage: '/dhh.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    'seedhe maut official',
    'raftaar official',
    'krsna official music video',
    'divine official',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
