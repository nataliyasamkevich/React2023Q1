export interface IProduct {
  id?: number;
  brand: string;
  name: string;
  volume: number | string;
  price: number;
  thumbnail: string;
}

const itemsInfo: IProduct[] = [
  {
    id: 1,
    brand: 'Amouage',
    name: 'Epic Woman',
    volume: 100,
    price: 325,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/amouage-epic-woman-1.webp',
  },
  {
    id: 2,
    brand: 'Amouage',
    name: 'Honour 43',
    volume: 100,
    price: 455,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/amouage-honour-43-woman-1.webp',
  },
  {
    id: 3,
    brand: 'Amouage',
    name: 'Overture Woman',
    volume: 100,
    price: 325,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/amouage-overture-woman-1.webp',
  },
  {
    id: 4,
    brand: 'BDK Parfums',
    name: 'Gris Charnel',
    volume: 100,
    price: 160,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/bdk-parfums-gris-charnel-1.webp',
  },
  {
    id: 5,
    brand: 'BDK Parfums',
    name: 'Rouge Smoking',
    volume: 100,
    price: 160,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/bdk-parfums-rouge-smoking-1.webp',
  },
  {
    id: 6,
    brand: 'Byredo',
    name: 'Eyes Closed',
    volume: 50,
    price: 145,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/byredo-eyes-closed-1.webp',
  },
  {
    id: 7,
    brand: 'Byredo',
    name: 'Mixed Emotions',
    volume: 50,
    price: 145,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/byredo-mixed-emotions-1.webp',
  },
  {
    id: 8,
    brand: 'Diptyque',
    name: 'Philosykos',
    volume: 100,
    price: 130,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/diptyque-philosykos-edt-1.webp',
  },
  {
    id: 9,
    brand: "Etat libre d'Orange",
    name: 'I Am Trash',
    volume: 100,
    price: 140,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/etat-libre-d-orange-i-am-trash-1.webp',
  },
  {
    id: 10,
    brand: "Etat libre d'Orange",
    name: 'You Or Someone Like You',
    volume: 100,
    price: 140,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/etat-libre-d-orange-you-or-someone-like-you-1.webp',
  },
  {
    id: 11,
    brand: 'Ex Nihilo',
    name: 'Fleur Narcotique',
    volume: 100,
    price: 260,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/ex-nihilo-paris-fleur-narcotique-1.webp',
  },
  {
    id: 12,
    brand: 'Fleur Narcotique',
    name: 'Lust in Paradise',
    volume: 50,
    price: 180,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/ex-nihilo-paris-lust-in-paradise-1.webp',
  },
  {
    id: 13,
    brand: 'Frédéric Malle',
    name: 'Monsieur',
    volume: 100,
    price: 275,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/frederic-malle-monsieur-1.webp',
  },
  {
    id: 14,
    brand: 'Frédéric Malle',
    name: 'Portrait of a Lady',
    volume: 100,
    price: 305,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/frederic-malle-portrait-of-a-lady-1.webp',
  },
  {
    id: 15,
    brand: 'Histoires de Parfums',
    name: '1804',
    volume: 60,
    price: 110,
    thumbnail:
      'https://raw.githubusercontent.com/haslie22/online-store-images/main/store-images/histoires-de-parfums-1804-1.webp',
  },
];

export default itemsInfo;
