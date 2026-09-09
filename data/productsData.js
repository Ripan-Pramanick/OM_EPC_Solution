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
  { id: 'accessories', name: 'Accessories', icon: Mouse } // Replaced MousePointerSquare with Mouse
];

export const productBrands = ['Dell', 'HP', 'Lenovo', 'Epson', 'Brother', 'APC', 'Hikvision', 'TP-Link', 'MikroTik'];

export const productsList = [
  { id: "p1", name: "Dell OptiPlex 7000 Business Desktop", brand: "Dell", category: "computers", price: 52000, image: productPageImages.products.computer, rating: 4.8, reviews: 24, badge: "Best Seller", availability: "In Stock" },
  { id: "p2", name: "HP ProBook 450 G9 Notebook", brand: "HP", category: "laptops", price: 68500, image: productPageImages.products.laptop, rating: 4.5, reviews: 18, badge: "New", availability: "In Stock" },
  { id: "p3", name: "Epson EcoTank L3250", brand: "Epson", category: "printers", price: 14500, image: productPageImages.products.printer, rating: 4.7, reviews: 56, badge: null, availability: "In Stock" },
  { id: "p4", name: "APC Smart-UPS 1000VA", brand: "APC", category: "ups", price: 18500, image: productPageImages.products.ups, rating: 4.9, reviews: 32, badge: "Featured", availability: "In Stock" },
  { id: "p5", name: "Hikvision 2MP Dome Camera", brand: "Hikvision", category: "cctv", price: 1800, image: productPageImages.products.cctv, rating: 4.4, reviews: 112, badge: null, availability: "Out of Stock" },
  { id: "p6", name: "TP-Link 24-Port Gigabit Switch", brand: "TP-Link", category: "networking", price: 8500, image: productPageImages.products.networking, rating: 4.6, reviews: 45, badge: null, availability: "In Stock" },
  { id: "p7", name: "Lenovo ThinkCentre M70s", brand: "Lenovo", category: "computers", price: 48000, image: productPageImages.products.computer, rating: 4.5, reviews: 15, badge: null, availability: "In Stock" },
  { id: "p8", name: "Brother HL-L2321D Laser Printer", brand: "Brother", category: "printers", price: 11200, image: productPageImages.products.printer, rating: 4.3, reviews: 89, badge: "Sale", availability: "In Stock" },
  { id: "p9", name: "MikroTik hEX Router", brand: "MikroTik", category: "networking", price: 5600, image: productPageImages.products.networking, rating: 4.8, reviews: 27, badge: null, availability: "In Stock" }
];

export const blogArticles = [
  { id: 1, title: "How to Choose the Right UPS for Your Office", date: "Sep 15, 2026", excerpt: "Power outages can cause data loss and hardware damage. Learn how to calculate your business power needs.", image: productPageImages.articles[0] },
  { id: 2, title: "Top CCTV Features to Look For in 2026", date: "Sep 10, 2026", excerpt: "From night vision to remote monitoring, discover the essential features every modern business security system needs.", image: productPageImages.articles[1] },
  { id: 3, title: "Essential Accessories for a Productive Workspace", date: "Sep 05, 2026", excerpt: "Boost your team's efficiency with these ergonomic and technical accessories designed for modern workflows.", image: productPageImages.articles[2] }
];