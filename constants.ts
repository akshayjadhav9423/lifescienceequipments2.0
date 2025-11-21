import { Product, ProductCategory, TeamMember, Location } from './types';

export const COMPANY_NAME = "Lifescience Equipments";
export const GSTIN = "27AAAAA0000A1Z5";
export const ISO_CERT = "ISO 9001:2015 Certified";
export const CONTACT_EMAIL = "sales@lifescienceequipments.com";

export const BRANDS = [
  "Borosil", "Merck", "Sigma-Aldrich", "Thermo Fisher", "Riviera", "Eppendorf", "Honeywell"
];

export const LOCATIONS: Location[] = [
  {
    id: 'loc-1',
    city: 'Mumbai (HQ)',
    address: '101, Science Park, Andheri East, Mumbai, Maharashtra 400093',
    phone: '+91 22 2800 1234',
    email: 'mumbai@lifescienceequipments.com',
    coordinates: { lat: 19.1136, lng: 72.8697 }
  },
  {
    id: 'loc-2',
    city: 'Delhi NCR',
    address: '45, Okhla Industrial Estate, Phase III, New Delhi 110020',
    phone: '+91 11 4500 5678',
    email: 'delhi@lifescienceequipments.com',
    coordinates: { lat: 28.5355, lng: 77.2632 }
  },
  {
    id: 'loc-3',
    city: 'Bangalore',
    address: '12, Electronic City Phase 1, Bangalore, Karnataka 560100',
    phone: '+91 80 6700 9000',
    email: 'bangalore@lifescienceequipments.com',
    coordinates: { lat: 12.8442, lng: 77.6602 }
  },
  {
    id: 'loc-4',
    city: 'Hyderabad',
    address: 'Unit 4, HITEC City, Hyderabad, Telangana 500081',
    phone: '+91 40 2300 4545',
    email: 'hyderabad@lifescienceequipments.com',
    coordinates: { lat: 17.4401, lng: 78.3489 }
  }
];

export const TEAM: TeamMember[] = [
  { id: 't1', name: 'Dr. Rajesh Kumar', role: 'Founder & CEO', imageUrl: 'https://picsum.photos/id/1005/300/300' },
  { id: 't2', name: 'Priya Sharma', role: 'Head of Operations', imageUrl: 'https://picsum.photos/id/1011/300/300' },
  { id: 't3', name: 'Amit Patel', role: 'Senior Technical Consultant', imageUrl: 'https://picsum.photos/id/1025/300/300' },
  { id: 't4', name: 'Sneha Gupta', role: 'Sales Director (South)', imageUrl: 'https://picsum.photos/id/1027/300/300' }
];

// Generate a simulated large catalog
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  const productTypes = [
    { name: "Beaker, Low Form", cat: ProductCategory.GLASSWARE, img: 20 },
    { name: "Volumetric Flask", cat: ProductCategory.GLASSWARE, img: 21 },
    { name: "Petri Dish", cat: ProductCategory.GLASSWARE, img: 22 },
    { name: "Sulfuric Acid 98%", cat: ProductCategory.CHEMICALS, img: 23 },
    { name: "Ethanol Absolute", cat: ProductCategory.CHEMICALS, img: 24 },
    { name: "Sodium Hydroxide Pellets", cat: ProductCategory.CHEMICALS, img: 25 },
    { name: "Digital pH Meter", cat: ProductCategory.INSTRUMENTS, img: 26 },
    { name: "Magnetic Stirrer", cat: ProductCategory.INSTRUMENTS, img: 27 },
    { name: "Microscope, Binocular", cat: ProductCategory.INSTRUMENTS, img: 28 },
    { name: "Centrifuge Tube 15ml", cat: ProductCategory.PLASTICWARE, img: 29 },
    { name: "Pipette Tips 200ul", cat: ProductCategory.PLASTICWARE, img: 30 },
    { name: "Wash Bottle", cat: ProductCategory.PLASTICWARE, img: 31 },
  ];

  let idCounter = 1;

  // Create variations
  productTypes.forEach(pt => {
    BRANDS.forEach(brand => {
      // Randomly skip some combinations to make it realistic
      if (Math.random() > 0.7) return;

      products.push({
        id: `prod-${idCounter++}`,
        name: `${brand} ${pt.name}`,
        category: pt.cat,
        brand: brand,
        sku: `${brand.substring(0, 3).toUpperCase()}-${idCounter.toString().padStart(4, '0')}`,
        price: Math.floor(Math.random() * 5000) + 500,
        description: `High quality ${pt.name} manufactured by ${brand}. Suitable for laboratory and industrial use. Meets international standards.`,
        imageUrl: `https://picsum.photos/id/${pt.img + 200}/400/400`, // Using IDs to get consistent visuals
        inStock: Math.random() > 0.2
      });
    });
  });

  return products;
};

export const PRODUCTS = generateProducts();