/** ट्रक वाला — 90s Bollywood highway tape (same era as saloon) */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'VMsn5-a45-s', title: 'Tip Tip Barsa Paani', artist: 'Udit · Alka · Mohra', singer: 'Udit Narayan', era: 'classic' },
  { id: 'ZFZMPjMbvtU', title: 'Tu Cheez Badi Hai Mast', artist: 'Udit · Kavita · Mohra', singer: 'Udit Narayan', era: 'classic' },
  { id: 'Dg7Z0YPlHY4', title: 'Saat Samundar Paar', artist: 'Sadhana · Vishwatma', singer: 'Sadhana Sargam', era: 'classic' },
  { id: 'P7i0Z4yDKNM', title: 'Dhak Dhak Karne Laga', artist: 'Udit · Anuradha', singer: 'Udit Narayan', era: 'classic' },
  { id: 'Ll4S3Osgca8', title: 'Jumma Chumma De De', artist: 'Kavita · Sudesh · Hum', singer: 'Kavita Krishnamurthy', era: 'classic' },
  { id: 'hcCvSmjHwGY', title: 'Ole Ole', artist: 'Abhijeet · Yeh Dillagi', singer: 'Abhijeet', era: 'classic' },
  { id: 'EENnVk1_suc', title: 'Aati Kya Khandala', artist: 'Aamir · Alka · Ghulam', singer: 'Alka Yagnik', era: 'classic' },
  { id: 'NImKUbUFny8', title: 'Baazigar O Baazigar', artist: 'Kumar Sanu · Alka', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'IhKXq5dhTag', title: 'Yeh Kaali Kaali Aankhen', artist: 'Kumar Sanu · Baazigar', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'n_oP9Onj0r0', title: 'Jaadu Teri Nazar', artist: 'Udit · Darr', singer: 'Udit Narayan', era: 'classic' },
  { id: 'Yqj1_V90KJo', title: 'Chura Ke Dil Mera', artist: 'Kumar Sanu · Alka', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'iSUK1QoK9-E', title: 'Pehla Nasha', artist: 'Udit · Sadhana', singer: 'Udit Narayan', era: 'classic' },
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit · DDLJ', singer: 'Udit Narayan', era: 'classic' },
  { id: 'gmXlGQAg400', title: 'Koi Mil Gaya', artist: 'KKHH', singer: 'Udit Narayan', era: 'classic' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka · K3G', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'w2iozAbNXAo', title: 'Pehla Pehla Pyar Hai', artist: 'HAHK', singer: 'S.P. Balasubrahmanyam', era: 'classic' },
  { id: 'fTauOK8J-U8', title: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu', singer: 'Kumar Sanu', era: 'classic' },
  { id: '_IcVb6hFhPs', title: 'Ghar Se Nikalte Hi', artist: 'Udit Narayan', singer: 'Udit Narayan', era: 'classic' },
  { id: 'jBpRItrod-Q', title: 'Ruk Ja O Dil Deewane', artist: 'Udit · DDLJ', singer: 'Udit Narayan', era: 'classic' },
  { id: 'bKZTnnFU9HA', title: 'Kuch Kuch Hota Hai', artist: 'Udit · Alka', singer: 'Udit Narayan', era: 'classic' },
];

export const singers = [
  'Udit Narayan',
  'Kumar Sanu',
  'Alka Yagnik',
  'Abhijeet',
  'Sonu Nigam',
  'Kavita Krishnamurthy',
  'Sadhana Sargam',
];

export const reserve = [
  { id: 'hw_HpTI_Wkw', title: 'Ho Gaya Hai Tujhko', artist: 'DDLJ', singer: 'Udit Narayan', era: 'classic' },
  { id: '-bNwqXvMuB8', title: 'Mehndi Laga Ke Rakhna', artist: 'DDLJ', singer: 'Lata Mangeshkar', era: 'classic' },
  { id: 'BtlnpBb4O8E', title: 'Tip Tip Lyrical', artist: 'Ishtar', singer: 'Udit Narayan', era: 'classic' },
];

export const bumperLines = [
  'Horn OK — 90s टेप फुल',
  'GT Road, पुराने फिल्मी गाने',
  'प्रेशर हॉर्न + सानू / उदित',
  'ट्रक कैब, बॉलीवुड बास',
  'लंबा रूट, 90s ही सही',
  'हाईवे धूल, फिल्मी धुन',
];

export default {
  id: 'truck',
  slug: 'truck-wala',
  titleLines: ['ट्रक', 'वाला'],
  titleEn: 'Truck Wala — 90s highway hits',
  description: 'Highway stickers + 90s Bollywood. Horn OK Please.',
  presenceLabel: 'on the highway',
  themeColor: '#061418',
  accent: '#0a4a50',
  hero: '/truck.png',
  ogImage: '/truck.png',
  gimmick: { kind: 'horn', label: 'हॉर्न', sub: 'ok please' },
  langTabs: false,
  discoverQueries: [
    '90s bollywood dance song official',
    'mohra tip tip official',
    'baazigar song official',
    'kumar sanu 90s hit official',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
