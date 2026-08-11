/** Static hero requires — Expo needs literal paths. */
export const heroes: Record<string, number> = {
  scorpio: require('../../assets/heroes/scorpio.png'),
  roadways: require('../../assets/heroes/roadways.png'),
  ragni: require('../../assets/heroes/ragni.png'),
  saloon: require('../../assets/heroes/saloon.png'),
  truck: require('../../assets/heroes/truck.png'),
  theka: require('../../assets/heroes/theka.png'),
  dhaba: require('../../assets/heroes/dhaba.png'),
  gym: require('../../assets/heroes/gym.png'),
  cafe: require('../../assets/heroes/cafe.png'),
  coding: require('../../assets/heroes/coding.png'),
  punjabi: require('../../assets/heroes/punjabi.png'),
  'old-punjabi': require('../../assets/heroes/old-punjabi.png'),
  'new-punjabi': require('../../assets/heroes/new-punjabi.png'),
  'love-punjabi': require('../../assets/heroes/love-punjabi.png'),
  'love-haryanvi': require('../../assets/heroes/love-haryanvi.png'),
  'love-hindi': require('../../assets/heroes/love-hindi.png'),
  'sad-punjabi': require('../../assets/heroes/sad-punjabi.png'),
  'sad-haryanvi': require('../../assets/heroes/sad-haryanvi.png'),
  'sad-hindi': require('../../assets/heroes/sad-hindi.png'),
  bollywood: require('../../assets/heroes/bollywood.png'),
  english: require('../../assets/heroes/english.png'),
  deshbhakti: require('../../assets/heroes/deshbhakti.png'),
  devotion: require('../../assets/heroes/devotion.png'),
  breakup: require('../../assets/heroes/breakup.png'),
  motivation: require('../../assets/heroes/motivation.png'),
  success: require('../../assets/heroes/success.png'),
  dhh: require('../../assets/heroes/dhh.png'),
  'underground-dhh': require('../../assets/heroes/underground-dhh.png'),
};

export function coverUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
