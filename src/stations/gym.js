/** जिम — lift fuel, Haryanvi / Punjabi / Mix */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  // हरियाणवी
  { id: 'PSJzUYbpHX0', title: 'Tagde Karam', artist: 'Sumit Parta', singer: 'Sumit Parta', lang: 'haryanvi', era: 'new' },
  { id: 'cx2mC18op-o', title: '4 Aadmi', artist: 'Sumit Parta', singer: 'Sumit Parta', lang: 'haryanvi', era: 'new' },
  { id: 'V42F11aGKyI', title: 'Tere Piche', artist: 'Sumit Parta', singer: 'Sumit Parta', lang: 'haryanvi', era: 'new' },
  { id: 'fiZizHop8hk', title: 'Why Parta?', artist: 'Sumit Parta', singer: 'Sumit Parta', lang: 'haryanvi', era: 'new' },
  { id: 'xDMjh6wDL3g', title: 'Lofar', artist: 'Masoom Sharma', singer: 'Masoom Sharma', lang: 'haryanvi', era: 'new' },
  { id: 'VrqNm-2sAM8', title: 'Baju Pe Bhola', artist: 'Masoom Sharma', singer: 'Masoom Sharma', lang: 'haryanvi', era: 'new' },
  { id: 'Yk58Qbc1I5s', title: 'Rani Gundya Ki', artist: 'Masoom Sharma', singer: 'Masoom Sharma', lang: 'haryanvi', era: 'new' },
  { id: 'li71nDMXwLs', title: 'Champ', artist: 'Vikram Sarkar', singer: 'Vikram Sarkar', lang: 'haryanvi', era: 'new' },
  { id: 'v0xXOG1ebS8', title: 'Mard', artist: 'Masoom Sharma', singer: 'Masoom Sharma', lang: 'haryanvi', era: 'new' },
  { id: 'zpxBXYxQ2q8', title: 'Jaat', artist: 'Sumit Parta', singer: 'Sumit Parta', lang: 'haryanvi', era: 'new' },

  // पंजाबी
  { id: 'q96_FDAUZdY', title: 'Gym', artist: 'Sippy Gill', singer: 'Sippy Gill', lang: 'punjabi', era: 'classic' },
  { id: 'ajdiRtx1-po', title: 'Pre Workout', artist: 'Jordan Sandhu', singer: 'Jordan Sandhu', lang: 'punjabi', era: 'new' },
  { id: 'lJZ8wWCnwow', title: 'Eyes On Me', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', lang: 'punjabi', era: 'classic' },
  { id: 'tHVDy4vYApA', title: 'Barota', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', lang: 'punjabi', era: 'classic' },
  { id: 'tZt3Tp0MFZk', title: 'Unfuckwithable', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', lang: 'punjabi', era: 'classic' },
  { id: '-CJ3_0vyzNs', title: 'Never Fold', artist: 'Sidhu Moose Wala · Sunny Malton', singer: 'Sidhu Moose Wala', lang: 'punjabi', era: 'classic' },
  { id: 'MiCk8UoPl1Y', title: '8 Cylinder', artist: 'Sidhu Moose Wala', singer: 'Sidhu Moose Wala', lang: 'punjabi', era: 'classic' },
  { id: '4DfVxVeqk2o', title: '52 Bars', artist: 'Karan Aujla', singer: 'Karan Aujla', lang: 'punjabi', era: 'new' },
  { id: 'Fbv6-50S1lc', title: 'MF Gabhru', artist: 'Karan Aujla', singer: 'Karan Aujla', lang: 'punjabi', era: 'new' },
  { id: 'XTp5jaRU3Ws', title: 'Wavy', artist: 'Karan Aujla', singer: 'Karan Aujla', lang: 'punjabi', era: 'new' },
  { id: '5GCfYLguTIs', title: 'Boyfriend', artist: 'Karan Aujla', singer: 'Karan Aujla', lang: 'punjabi', era: 'new' },

  // हिंदी
  { id: 'e4_8cdWh1wI', title: 'Hummer', artist: 'Yo Yo Honey Singh', singer: 'Yo Yo Honey Singh', lang: 'hindi', era: 'classic' },
  { id: 'NbyHNASFi6U', title: 'Blue Eyes', artist: 'Yo Yo Honey Singh', singer: 'Yo Yo Honey Singh', lang: 'hindi', era: 'classic' },
  { id: '8Z8qobg8UdA', title: 'Get Up Jawani', artist: 'Yo Yo Honey Singh', singer: 'Yo Yo Honey Singh', lang: 'hindi', era: 'classic' },
  { id: 'ZuoIW4aINak', title: 'This Party Getting Hot', artist: 'Honey Singh · Jazzy B', singer: 'Yo Yo Honey Singh', lang: 'hindi', era: 'classic' },
  { id: 'ZFZMPjMbvtU', title: 'Tu Cheez Badi Hai Mast', artist: 'Udit · Kavita', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
];

export const reserve = [
  { id: 'pbRYp1Wb7cY', title: 'Saaman Saaman', artist: 'Masoom Sharma', singer: 'Masoom Sharma', lang: 'haryanvi', era: 'new' },
  { id: 'P7i0Z4yDKNM', title: 'Dhak Dhak Karne Laga', artist: 'Udit', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
];

export const bumperLines = [
  'एक और सेट — Mix दबा',
  'हरियाणवी · पंजाबी · हिंदी',
  'पसीना + बेस',
  'रैक पर टेप, फुल वॉल्यूम',
];

export default {
  id: 'gym',
  slug: 'gym',
  titleLines: ['जिम'],
  titleEn: 'Gym Mix — lift fuel',
  description: 'Haryanvi + Punjabi lift fuel. Switch or Mix.',
  presenceLabel: 'on the floor',
  themeColor: '#1a0c04',
  accent: '#ea580c',
  hero: '/gym.png',
  ogImage: '/gym.png',
  gimmick: null,
  langTabs: true,
  discoverQueries: ['haryanvi gym song official', 'punjabi gym workout song official'],
  discoverByLang: {
    haryanvi: ['haryanvi gym song official', 'masoom sharma official', 'sumit parta official'],
    punjabi: ['punjabi gym song official', 'sidhu moose wala official', 'karan aujla official'],
    hindi: ['honey singh gym song official', 'bollywood workout song official'],
  },
  tracks,
  singers: [],
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
