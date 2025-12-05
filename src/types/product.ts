export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceETH: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type PaymentMethod = 'card' | 'eth' | 'btc';
