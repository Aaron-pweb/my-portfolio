export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'BUSINESS' | 'PERSONAL';
  description: string;
}

export const locations: Location[] = [
  {
    id: '1',
    name: 'MEKELLE_ENGINEERING_HUB',
    lat: 13.4967,
    lng: 39.4717,
    type: 'BUSINESS',
    description: 'Core engineering operations and entrepreneurial headquarters in Ethiopia.',
  },
  {
    id: '2',
    name: 'REFLECTION_POINT',
    lat: 13.4833,
    lng: 39.4667,
    type: 'PERSONAL',
    description: 'A dedicated space for faith, prayer, and strategic reflection.',
  }
];
