import { Product } from './types';

export const NPR_RATE = 144.49;
export const INR_RATE = 90.30;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Afnan 9pm',
    category: 'Fragrance',
    priceUSD: 45,
    gender: 'men',
    imageUrls: [
       'https://i.imgur.com/BGpPksD.jpeg',
        'https://i.imgur.com/eYpr1BJ.jpeg',
        'https://i.imgur.com/tPtjvgJ.jpeg',
    ],
    description: "Afnan 9PM is a bold, sweet, and seductive fragrance made for nights that leave a lasting impression.\n\nFresh apple and bergamot open the scent, followed by smooth vanilla and warm amber that feel confident and addictive.\n\nLong-lasting. Compliment-pulling. Perfect for evenings, dates, and special moments.",
  },
  {
    id: 2,
    name: '1 Million',
    category: 'Fragrance',
    priceUSD: 95,
    gender: 'men',
    imageUrls: [
      'https://i.imgur.com/2iSN1hS.jpeg',
      'https://i.imgur.com/QJxUX6X.jpeg',
    ],
    description: "Paco Rabanne's 1 Million is an iconic fragrance for the confident man. A spicy leather scent with notes of frosted grapefruit, blood mandarin, cinnamon, and amber ketal. Instantly recognizable and unforgettable.",
  },
  {
    id: 3,
    name: 'Bleu de Chanel',
    category: 'Fragrance',
    priceUSD: 125,
    gender: 'men',
    imageUrls: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
    ],
    description: "A tribute to masculine freedom in an aromatic-woody fragrance with a captivating trail. A timeless, powerful scent housed in an enigmatic blue bottle.",
  },
  {
    id: 4,
    name: 'Black Opium',
    category: 'Fragrance',
    priceUSD: 110,
    gender: 'women',
    imageUrls: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    ],
    description: "The highly addictive feminine fragrance from Yves Saint Laurent. Fascinating and seductively intoxicating, the opening notes of adrenaline-rich coffee and the sweet sensuality of vanilla recline into the softness of white flowers for a modern, young, and vibrant interpretation of addiction.",
  },
  {
    id: 5,
    name: 'Chanel No. 5',
    category: 'Fragrance',
    priceUSD: 145,
    gender: 'women',
    imageUrls: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    ],
    description: "Since its creation in 1921, N°5 has exuded the very essence of femininity. An abstract, mysterious scent, alive with countless subtle facets, radiating an extravagant floral richness.",
  },
  {
    id: 6,
    name: 'Libre',
    category: 'Fragrance',
    priceUSD: 115,
    gender: 'women',
    imageUrls: [
      'https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=800',
    ],
    description: "The fragrance of freedom. A grand floral Eau de Parfum with an unequivocal YSL twist. The burning sensuality of the orange blossom flowers from Morocco, twisted with the aromatic boldness of lavender from France.",
  },
];
