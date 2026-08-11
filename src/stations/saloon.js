/** सैलून — 90s Bollywood Hindi only */

const coverUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const tracks = [
  { id: 'cNV5hLSa9H8', title: 'Tujhe Dekha Toh', artist: 'Lata · Udit · DDLJ', singer: 'Udit Narayan', era: 'classic' },
  { id: 'hw_HpTI_Wkw', title: 'Ho Gaya Hai Tujhko', artist: 'Lata · Udit · DDLJ', singer: 'Udit Narayan', era: 'classic' },
  { id: 'jBpRItrod-Q', title: 'Ruk Ja O Dil Deewane', artist: 'Udit Narayan · DDLJ', singer: 'Udit Narayan', era: 'classic' },
  { id: '-bNwqXvMuB8', title: 'Mehndi Laga Ke Rakhna', artist: 'Lata · Udit · DDLJ', singer: 'Lata Mangeshkar', era: 'classic' },
  { id: 'iSUK1QoK9-E', title: 'Pehla Nasha', artist: 'Udit · Sadhana · Jo Jeeta', singer: 'Udit Narayan', era: 'classic' },
  { id: 'VMsn5-a45-s', title: 'Tip Tip Barsa Paani', artist: 'Udit · Alka · Mohra', singer: 'Udit Narayan', era: 'classic' },
  { id: 'Yqj1_V90KJo', title: 'Chura Ke Dil Mera', artist: 'Kumar Sanu · Alka', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'fTauOK8J-U8', title: 'Ek Ladki Ko Dekha', artist: 'Kumar Sanu · 1942', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'gmXlGQAg400', title: 'Koi Mil Gaya', artist: 'Udit · Alka · KK · KKHH', singer: 'Udit Narayan', era: 'classic' },
  { id: 'bKZTnnFU9HA', title: 'Kuch Kuch Hota Hai', artist: 'Udit · Alka', singer: 'Udit Narayan', era: 'classic' },
  { id: 'L0zKs8i7Nc8', title: 'Suraj Hua Maddham', artist: 'Sonu · Alka · K3G', singer: 'Sonu Nigam', era: 'classic' },
  { id: 'EENnVk1_suc', title: 'Aati Kya Khandala', artist: 'Aamir · Alka · Ghulam', singer: 'Alka Yagnik', era: 'classic' },
  { id: 'hcCvSmjHwGY', title: 'Ole Ole', artist: 'Abhijeet · Yeh Dillagi', singer: 'Abhijeet', era: 'classic' },
  { id: 'ZFZMPjMbvtU', title: 'Tu Cheez Badi Hai Mast', artist: 'Udit · Kavita · Mohra', singer: 'Udit Narayan', era: 'classic' },
  { id: 'P7i0Z4yDKNM', title: 'Dhak Dhak Karne Laga', artist: 'Udit · Anuradha', singer: 'Udit Narayan', era: 'classic' },
  { id: 'Ll4S3Osgca8', title: 'Jumma Chumma De De', artist: 'Kavita · Sudesh · Hum', singer: 'Kavita Krishnamurthy', era: 'classic' },
  { id: 'Dg7Z0YPlHY4', title: 'Saat Samundar Paar', artist: 'Sadhana Sargam · Vishwatma', singer: 'Sadhana Sargam', era: 'classic' },
  { id: 'w2iozAbNXAo', title: 'Pehla Pehla Pyar Hai', artist: 'S.P. Balasubrahmanyam · HAHK', singer: 'S.P. Balasubrahmanyam', era: 'classic' },
  { id: 'NImKUbUFny8', title: 'Baazigar O Baazigar', artist: 'Kumar Sanu · Alka', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'IhKXq5dhTag', title: 'Yeh Kaali Kaali Aankhen', artist: 'Kumar Sanu · Baazigar', singer: 'Kumar Sanu', era: 'classic' },
  { id: 'n_oP9Onj0r0', title: 'Jaadu Teri Nazar', artist: 'Udit Narayan · Darr', singer: 'Udit Narayan', era: 'classic' },
  { id: '_IcVb6hFhPs', title: 'Ghar Se Nikalte Hi', artist: 'Udit Narayan', singer: 'Udit Narayan', era: 'classic' },
];

export const singers = [
  'Udit Narayan',
  'Kumar Sanu',
  'Alka Yagnik',
  'Sonu Nigam',
  'Abhijeet',
  'Lata Mangeshkar',
  'Kavita Krishnamurthy',
  'Sadhana Sargam',
];

export const reserve = [
  { id: 'ay6pwhXPNvo', title: 'Tujhe Dekha Lyrical', artist: 'Kumar Sanu Hits', singer: 'Udit Narayan', era: 'classic' },
  { id: '7JnKVPtRqVE', title: 'Tujhe Dekha Saregama', artist: 'Saregama', singer: 'Udit Narayan', era: 'classic' },
  { id: 'BtlnpBb4O8E', title: 'Tip Tip Lyrical', artist: 'Ishtar', singer: 'Udit Narayan', era: 'classic' },
];

export const bumperLines = [
  '₹20 कट — और 90s टेप',
  'दर्पण में फेस, स्पीकर में सानू',
  'मोहल्ला सैलून, दिलवाले डलहानिया',
  'कैंची की खनक, कुमार सानू की धुन',
  'पुराने गाने, नया कट',
  'बारबरशॉप + बॉलीवुड — यही सैलून',
];

export default {
  id: 'saloon',
  slug: 'saloon',
  titleLines: ['सैलून'],
  titleEn: 'Deluxe Saloon — 90s Bollywood',
  description: 'Barbershop + 90s Hindi hits. No Punjabi — pure filmi.',
  presenceLabel: 'in the chair',
  themeColor: '#1a0808',
  accent: '#b91c1c',
  hero: '/saloon.png',
  ogImage: '/saloon.png',
  gimmick: null,
  langTabs: false,
  discoverQueries: [
    '90s bollywood hit song official video',
    'kumar sanu hit song official',
    'udit narayan 90s song official',
    'alka yagnik 90s song official',
  ],
  tracks,
  singers,
  reserve,
  bumperLines,
  lyricsById: {},
  coverUrl,
};
