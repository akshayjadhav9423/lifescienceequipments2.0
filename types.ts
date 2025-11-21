export enum ProductCategory {
  GLASSWARE = 'Glassware',
  CHEMICALS = 'Chemicals',
  INSTRUMENTS = 'Instruments',
  PLASTICWARE = 'Plasticware',
  SAFETY = 'Safety Gear'
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  sku: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Location {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
