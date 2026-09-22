import { productPageImages } from './images';
import { Monitor, Laptop, Printer, Zap, Camera, Network, Mouse, LayoutGrid } from 'lucide-react';

export const productCategories = [
  { id: 'all', name: 'All Products', icon: LayoutGrid },
  { id: 'computers', name: 'Computers', icon: Monitor },
  { id: 'laptops', name: 'Laptops', icon: Laptop },
  { id: 'printers', name: 'Printers', icon: Printer },
  { id: 'ups', name: 'UPS & Power', icon: Zap },
  { id: 'cctv', name: 'CCTV', icon: Camera },
  { id: 'networking', name: 'Networking', icon: Network },
  { id: 'accessories', name: 'Accessories', icon: Mouse }
];

export const productBrands = ['Dell', 'HP', 'Lenovo', 'Epson', 'Brother', 'APC', 'Hikvision', 'TP-Link', 'MikroTik'];


export const productsList = [
  { 
    id: "ups_1", 
    name: "1kVA PM900 Pro Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 16500, 
    image: "/product/1kva-pm900-pro-prostram-online-ups-500x500.webp", 
    rating: 4.8, 
    reviews: 42, 
    badge: "Best Seller", 
    availability: "In Stock",
    description: "High-frequency double conversion online UPS with advanced DSP control technology. Ideal for small servers, network devices, and sensitive electronic equipment."
  },
  { 
    id: "ups_2", 
    name: "5kVA PM900 G4 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 48000, 
    image: "/product/5kva-pm800-prostarm-online-ups-500x500.webp", 
    rating: 4.7, 
    reviews: 28, 
    badge: null, 
    availability: "In Stock",
    description: "Robust 5kVA online UPS featuring active input power factor correction and zero transfer time to ensure absolute continuous power for critical business applications."
  },
  { 
    id: "ups_3", 
    name: "10kVA PM890 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 82000, 
    image: "/product/10kva-pm890-prostarm-online-ups-500x500 (2).webp", 
    rating: 4.9, 
    reviews: 35, 
    badge: "Featured", 
    availability: "In Stock",
    description: "Heavy-duty 10kVA online UPS system designed for demanding corporate environments. Features an intelligent battery management system for extended battery life."
  },
  { 
    id: "ups_4", 
    name: "10kVA PM900 G5 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 95000, 
    image: "/product/10kva-pm900-g5-prostarm-online-ups-500x500.webp", 
    rating: 4.8, 
    reviews: 19, 
    badge: "New", 
    availability: "In Stock",
    description: "Next-generation G5 series 10kVA UPS offering superior energy efficiency, an intuitive LCD interface, and advanced communication ports for enterprise network protection."
  },
  { 
    id: "ups_5", 
    name: "120kVA PM900 G4 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 750000, 
    image: "/product/120kva-pm990-g4-prostarm-online-ups-500x500.webp", 
    rating: 4.9, 
    reviews: 12, 
    badge: "Industrial", 
    availability: "On Order",
    description: "High-capacity 120kVA three-phase online UPS tailored for large data centers and industrial automation setups. Provides unparalleled stability and fault tolerance."
  },
  { 
    id: "ups_6", 
    name: "500kVA PM890 IR Series Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 2500000, 
    image: "/product/500kva-pm890-ir-series-prostarm-online-ups-500x500.webp", 
    rating: 5.0, 
    reviews: 5, 
    badge: "Enterprise", 
    availability: "On Order",
    description: "Massive 500kVA industrial-grade power protection. The IR Series utilizes state-of-the-art power electronics for maximum reliability in mission-critical infrastructure."
  },
  { 
    id: "bat_1", 
    name: "200Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 15500, 
    image: "/product/200ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.7, 
    reviews: 86, 
    badge: "Popular", 
    availability: "In Stock",
    description: "Sealed Maintenance Free (SMF) VRLA battery designed specifically for UPS applications. Offers excellent cyclic performance and a long service life."
  },
  
];

export const blogArticles = [
  { 
    id: 1, 
    title: "How to Choose the Right UPS for Your Office", 
    date: "Sep 15, 2026", 
    excerpt: "Power outages can cause data loss and hardware damage. Learn how to calculate your business power needs.", 
    image: productPageImages.articles[0] 
  },
  { 
    id: 2, 
    title: "Top CCTV Features to Look For in 2026", 
    date: "Sep 10, 2026", 
    excerpt: "From night vision to remote monitoring, discover the essential features every modern business security system needs.", 
    image: productPageImages.articles[1] 
  },
  { 
    id: 3, 
    title: "Essential Accessories for a Productive Workspace", 
    date: "Sep 05, 2026", 
    excerpt: "Boost your team's efficiency with these ergonomic and technical accessories designed for modern workflows.", 
    image: productPageImages.articles[2] 
  }
];