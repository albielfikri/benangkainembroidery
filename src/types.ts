export interface Product {
  id: string;
  name: string;
  price: number; // in IDR (Indonesian Rupiah)
  category: 'Kebaya' | 'Kaftan' | 'Abaya' | 'Casual Outer' | 'Premium Silk';
  description: string;
  details: string[];
  images: string[]; // multi-image list
  sizes: string[];
  featured: boolean;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  rating: number;
  text: string;
  date: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: string;
  comments: string;
  link: string;
}

export type Page = 'home' | 'catalog' | 'detail' | 'about' | 'contact';

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}
