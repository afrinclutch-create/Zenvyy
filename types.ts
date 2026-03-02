export interface Product {
  id: number;
  name: string;
  category: string;
  priceUSD: number;
  imageUrls: string[];
  description: string;
  gender: 'men' | 'women' | 'unisex';
}

export interface CartItem {
  product: Product;
  quantity: number;
}
