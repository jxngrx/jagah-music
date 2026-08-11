/** कोडिंग — deep focus. Lang + Lofi / Techno mood tabs */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  // lofi / focus
  { id: 'n61ULEU7CO0', title: 'Lofi Hip Hop Mix', artist: 'Lofi Girl', singer: 'Focus', lang: 'lofi', era: 'new' },
  { id: 'lTRiuFIWV54', title: '1 A.M Study Session', artist: 'Lofi Girl', singer: 'Focus', lang: 'lofi', era: 'new' },
  { id: 'FxJ3zPUU6Y4', title: 'Lofi Study', artist: 'Little Soul', singer: 'Focus', lang: 'lofi', era: 'new' },
  { id: '_xmD9OgYWXg', title: 'Deep Focus Music', artist: 'Grind & Groove', singer: 'Focus', lang: 'lofi', era: 'new' },
  { id: '0w80F8FffQ4', title: 'Coding Music Deep Focus', artist: 'Cosmic Hippo', singer: 'Focus', lang: 'lofi', era: 'new' },
  { id: 'kfEn5_XuYvs', title: 'Bollywood Instrumental', artist: 'Instrumental Sukanta', singer: 'Focus', lang: 'lofi', era: 'classic' },

  // techno / electronic focus
  { id: '4xDzrJKXOOY', title: 'Techno Live Mix', artist: 'Space Music', singer: 'Techno', lang: 'techno', era: 'new' },
  { id: 'hHW1oY26kxQ', title: 'Soft Techno Mix', artist: 'Chill Techno', singer: 'Techno', lang: 'techno', era: 'new' },
  { id: 'DWcJFNfafyc', title: 'Coding Techno', artist: 'Focus Beats', singer: 'Techno', lang: 'techno', era: 'new' },
  { id: 'ESaScgEaKJ0', title: 'Deep House Focus', artist: 'House Lab', singer: 'Techno', lang: 'techno', era: 'new' },
  { id: '55IwL8tOz40', title: 'Synthwave Drive', artist: 'Retrowave', singer: 'Techno', lang: 'techno', era: 'new' },

  // हरियाणवी soft
  { id: 'gJGcC3hlRcE', title: 'Haaye Re', artist: 'Banjaare', singer: 'Banjaare', lang: 'haryanvi', era: 'new' },
  { id: 'XcJVcyZ2vwE', title: 'Hopeless', artist: 'Amanraj Gill', singer: 'Amanraj Gill', lang: 'haryanvi', era: 'new' },
  { id: 'Ibo4bMbzPEQ', title: 'Evermore', artist: 'Sumit Parta', singer: 'Sumit Parta', lang: 'haryanvi', era: 'new' },
  { id: 'efbKUmeY-BY', title: 'Falani', artist: 'Vikram Sarkar', singer: 'Vikram Sarkar', lang: 'haryanvi', era: 'new' },
  { id: '_zaZHCx17fg', title: 'Koyal Si Baani', artist: 'Laath Saab', singer: 'Laath Saab', lang: 'haryanvi', era: 'new' },

  // पंजाबी soft
  { id: 'cXUndHRKmXQ', title: 'Peed', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'new' },
  { id: 'ua_jvj9dZJQ', title: 'Kangna (Acoustic)', artist: 'Dr Zeus', singer: 'Dr Zeus', lang: 'punjabi', era: 'classic' },
  { id: 'eF0Qos8NnSA', title: 'Salooq', artist: 'B Praak', singer: 'B Praak', lang: 'punjabi', era: 'classic' },
  { id: 'MQtn5-wCCjs', title: 'Love Ya', artist: 'Diljit Dosanjh', singer: 'Diljit Dosanjh', lang: 'punjabi', era: 'new' },
  { id: '8YjQU3PUmcY', title: 'Aadat', artist: 'Jal', singer: 'Jal', lang: 'hindi', era: 'classic' },
  { id: 'iSUK1QoK9-E', title: 'Pehla Nasha', artist: 'Udit · Sadhana', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit', singer: 'Udit Narayan', lang: 'hindi', era: 'classic' },
];

export const reserve = [
  { id: '4GnVDPD01as', title: 'Ambient Study 4 Hours', artist: 'Quiet Quest', singer: 'Focus', lang: 'lofi', era: 'new' },
  { id: 'sjkrrmBnpGE', title: 'Ambient Concentrate', artist: 'Quiet Quest', singer: 'Focus', lang: 'lofi', era: 'new' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka', singer: 'Sonu Nigam', lang: 'hindi', era: 'classic' },
];

export const bumperLines = [
  'हेडफ़ोन ऑन — बग भाग',
  'Mix = फोकस + भाषा + बीट',
  'Lofi / Techno टैब — डीप वर्क',
  'लिरिक्स कम, फोकस ज़्यादा',
];

export default {
  id: 'coding',
  slug: 'coding',
  titleLines: ['कोडिंग'],
  titleEn: 'Coding — deep work headphones',
  description: 'Focus loops. Lofi / Techno tabs plus soft Haryanvi / Punjabi / Hindi.',
  presenceLabel: 'debugging',
  themeColor: '#041018',
  accent: '#22d3ee',
  hero: '/coding.png',
  ogImage: '/coding.png',
  gimmick: null,
  langTabs: true,
  langExtra: [
    { id: 'lofi', label: 'Lofi' },
    { id: 'techno', label: 'Techno' },
  ],
  discoverQueries: ['lofi study beats', 'coding techno mix', 'slow haryanvi song official'],
  discoverByLang: {
    lofi: ['lofi study beats', 'deep focus music coding'],
    techno: ['coding techno mix', 'soft techno mix', 'deep house focus mix'],
    haryanvi: ['slow haryanvi song official', 'amanraj gill soft'],
    punjabi: ['diljit soft song official', 'b praak soft song'],
    hindi: ['soft hindi song official', '90s bollywood soft song'],
  },
  tracks,
  singers: [],
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
