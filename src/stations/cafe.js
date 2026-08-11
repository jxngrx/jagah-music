/** कैफ़े — soft afternoon, Haryanvi / Punjabi / Mix */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'gJGcC3hlRcE', title: 'Haaye Re', artist: 'Banjaare · Swati Shukla', singer: 'Banjaare', lang: 'haryanvi', era: 'new' },
  { id: 'efbKUmeY-BY', title: 'Falani', artist: 'Vikram Sarkar', singer: 'Vikram Sarkar', lang: 'haryanvi', era: 'new' },
  { id: '_zaZHCx17fg', title: 'Koyal Si Baani', artist: 'Laath Saab · BigMoney', singer: 'Laath Saab', lang: 'haryanvi', era: 'new' },
  { id: 'FPc5xplrtFU', title: 'Tu Aaja Ne', artist: 'Raaji · Rahul Saini', singer: 'Raaji', lang: 'haryanvi', era: 'new' },
  { id: 'NGPMKB93urc', title: 'About Her', artist: 'Rahul Ft. Ishi', singer: 'Rahul', lang: 'haryanvi', era: 'new' },
  { id: 'Et46hHWedp8', title: 'Kharch Karod (Slow)', artist: 'Laal Rang', singer: 'Randeep Hooda', lang: 'haryanvi', era: 'classic' },
  { id: 'LmBsyzzX5aA', title: 'Tu Na Samjhe', artist: 'Raja', singer: 'Raja', lang: 'haryanvi', era: 'new' },
  { id: 'XcJVcyZ2vwE', title: 'Hopeless', artist: 'Amanraj Gill · Prem Lata', singer: 'Amanraj Gill', lang: 'haryanvi', era: 'new' },
  { id: 'WGzyuWoH94Q', title: 'Jodi', artist: 'Ndee Kundu', singer: 'Ndee Kundu', lang: 'haryanvi', era: 'new' },

  { id: 'jADTdg-o8i0', title: 'Hass Hass', artist: 'Diljit · Sia', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'new' },
  { id: 'MQtn5-wCCjs', title: 'Love Ya', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'new' },
  { id: 'CGhGAVH2GqY', title: 'Charmer', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'new' },
  { id: 'cXUndHRKmXQ', title: 'Peed', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'new' },
  { id: 'ua_jvj9dZJQ', title: 'Kangna (Acoustic)', artist: 'Dr Zeus · Lehmber', singer: 'Dr Zeus', lang: 'punjabi', era: 'classic' },
  { id: 'GBxrH4TQK-c', title: 'Kadi Te Hass Bolve', artist: 'Sukshinder Shinda', singer: 'Sukshinder Shinda', lang: 'punjabi', era: 'classic' },
  { id: 'zR1WMrMDUVU', title: 'Pyar', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'classic' },
  { id: '509xbom1huI', title: 'Channo', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'classic' },
  { id: 'eF0Qos8NnSA', title: 'Salooq', artist: 'B Praak', singer: 'B Praak', lang: 'punjabi', era: 'classic' },

  // हिंदी
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
  { id: 'iSUK1QoK9-E', title: 'Pehla Nasha', artist: 'Udit · Sadhana', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka', singer: 'Sonu Nigam', lang: 'hindi', era: 'classic' },
  { id: 'fTauOK8J-U8', title: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu', singer: 'Kumar Sanu', lang: 'hindi', era: 'classic' },
  { id: 'gmXlGQAg400', title: 'Koi Mil Gaya', artist: 'KKHH', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
];

export const reserve = [
  { id: 'Mp95smyVY68', title: 'Yaarian', artist: 'Amrinder Gill', singer: 'Amrinder Gill', lang: 'punjabi', era: 'classic' },
  { id: 'Ibo4bMbzPEQ', title: 'Evermore', artist: 'Sumit Parta', singer: 'Sumit Parta', lang: 'haryanvi', era: 'new' },
  { id: 'hw_HpTI_Wkw', title: 'Ho Gaya Hai Tujhko', artist: 'DDLJ', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
];

export const bumperLines = [
  'लैपटॉप खुला, वॉल्यूम लो',
  'Mix — हरियाणवी · पंजाबी · हिंदी',
  'धूप खिड़की से, गाना धीरे से',
  'आफ्टरनून टेप',
];

export default {
  id: 'cafe',
  slug: 'cafe',
  titleLines: ['कैफ़े'],
  titleEn: 'Cafe — soft afternoon',
  description: 'Laptop open. Low volume. Haryanvi / Punjabi / Mix.',
  presenceLabel: 'at a table',
  themeColor: '#141210',
  accent: '#78716c',
  hero: '/cafe.png',
  ogImage: '/cafe.png',
  gimmick: null,
  langTabs: true,
  discoverQueries: ['slow haryanvi song official', 'punjabi soft song official'],
  discoverByLang: {
    haryanvi: ['slow haryanvi romantic song official', 'amanraj gill soft song'],
    punjabi: ['diljit soft song official', 'punjabi acoustic song official'],
    hindi: ['90s bollywood romantic song official', 'soft hindi song official'],
  },
  tracks,
  singers: [],
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
