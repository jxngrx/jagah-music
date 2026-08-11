import placesJson from '../data/places.json';
import stationsJson from '../data/stations.json';

export type Place = {
  id: string;
  slug: string;
  n: string;
  title: string;
  en: string;
  where: string;
  blurb: string;
  status: 'live' | 'soon';
  accent: string;
  card: string;
  featured?: boolean;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  singer?: string;
  era?: string;
  lang?: string;
};

export type Station = {
  id: string;
  slug: string;
  titleLines: string[];
  titleEn: string;
  description: string;
  presenceLabel: string;
  themeColor: string;
  accent: string;
  hero: string;
  tracks: Track[];
  singers: string[];
  bumperLines: string[];
};

export const places = placesJson as Place[];
export const stations = stationsJson as Record<string, Station>;

export function placeById(id: string) {
  return places.find((p) => p.id === id || p.slug === id);
}

export function stationFor(id: string) {
  const p = placeById(id);
  if (!p) return null;
  return stations[p.id] || null;
}
