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
  // ==========================================
  // PROSTARM ONLINE UPS (Main UPS - First)
  // ==========================================
  { 
    id: "ups_pm800_5", 
    name: "5kVA PM800 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 45000, 
    image: "/product/5kva-pm800-prostarm-online-ups-500x500.webp", 
    rating: 4.6, 
    reviews: 20, 
    badge: null, 
    availability: "In Stock",
    description: "5kVA PM800 series online UPS offering pure sine wave output and solid protection for standard IT loads."
  },
  { 
    id: "ups_pm800_10", 
    name: "10kVA PM800 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 65000, 
    image: "/product/10kva-pm800-prostarm-online-ups-500x500.webp", 
    rating: 4.7, 
    reviews: 18, 
    badge: null, 
    availability: "In Stock",
    description: "10kVA PM800 series UPS, ensuring robust power stability and zero transfer time for enterprise servers."
  },
  { 
    id: "ups_pm890_10", 
    name: "10kVA PM890 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 155000, 
    image: "/product/10kva-pm890-prostarm-online-ups-500x500.webp", 
    rating: 4.8, 
    reviews: 25, 
    badge: "Featured", 
    availability: "In Stock",
    description: "Heavy-duty 10kVA PM890 online UPS system designed for demanding corporate environments."
  },
  { 
    id: "ups_pm890_120", 
    name: "120kVA PM890 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 559000, 
    image: "/product/120kva-pm890-prostarm-online-ups-500x500.webp", 
    rating: 4.9, 
    reviews: 10, 
    badge: "Industrial", 
    availability: "On Order",
    description: "120kVA high-capacity PM890 UPS, engineered to deliver absolute power continuity for large data centers."
  },
  { 
    id: "ups_pm900_g4_5", 
    name: "5kVA PM900 G4 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 44000, 
    image: "/product/5kva-pm900-g4-prostarm-online-ups-500x500.webp", 
    rating: 4.7, 
    reviews: 28, 
    badge: null, 
    availability: "In Stock",
    description: "Robust 5kVA PM900 G4 online UPS featuring active input power factor correction."
  },
  { 
    id: "ups_pm900_g4_10", 
    name: "10kVA PM900 G4 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 59000, 
    image: "/product/10kva-pm900-g4-prostarm-online-ups-500x500.webp", 
    rating: 4.8, 
    reviews: 22, 
    badge: null, 
    availability: "In Stock",
    description: "10kVA PM900 G4 series UPS providing unmatched efficiency and intelligent battery management."
  },
  { 
    id: "ups_pm900_g5_10", 
    name: "10kVA PM900 G5 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 67000, 
    image: "/product/10kva-pm900-g5-prostarm-online-ups-500x500.webp", 
    rating: 4.9, 
    reviews: 19, 
    badge: "New", 
    availability: "In Stock",
    description: "Next-generation G5 series 10kVA UPS offering superior energy efficiency and an intuitive LCD interface."
  },
  { 
    id: "ups_pm900_g5_30", 
    name: "30kVA PM900 G5 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 152000, 
    image: "/product/30kva-pm900-g5-prostarm-online-ups-500x500.webp", 
    rating: 4.9, 
    reviews: 12, 
    badge: null, 
    availability: "On Order",
    description: "Advanced 30kVA PM900 G5 UPS for medium to large-scale network infrastructures."
  },
  { 
    id: "ups_pm990_g4_40", 
    name: "40kVA PM990 G4 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 220000, 
    image: "/product/40kva-pm990-g4-prostarm-online-ups-500x500.webp", 
    rating: 4.8, 
    reviews: 15, 
    badge: null, 
    availability: "On Order",
    description: "40kVA PM990 G4 series UPS designed with a compact footprint and exceptional load handling capabilities."
  },
  { 
    id: "ups_pm990_g4_120", 
    name: "120kVA PM990 G4 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 542000, 
    image: "/product/120kva-pm990-g4-prostarm-online-ups-500x500.webp", 
    rating: 4.9, 
    reviews: 8, 
    badge: "Enterprise", 
    availability: "On Order",
    description: "Massive 120kVA PM990 G4 UPS tailored for industrial automation and critical facility protection."
  },
  { 
    id: "ups_pm890_ir_80", 
    name: "80kVA PM890 IR Series Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 440000, 
    image: "/product/80kva-pm890-ir-series-prostarm-online-ups-500x500.webp", 
    rating: 4.8, 
    reviews: 6, 
    badge: null, 
    availability: "On Order",
    description: "80kVA IR Series UPS utilizing state-of-the-art power electronics for mission-critical infrastructure."
  },
  { 
    id: "ups_pm890_ir_500", 
    name: "500kVA PM890 IR Series Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 1020000, 
    image: "/product/500kva-pm890-ir-series-prostarm-online-ups-500x500.webp", 
    rating: 5.0, 
    reviews: 5, 
    badge: "Industrial", 
    availability: "On Order",
    description: "Ultra high-capacity 500kVA PM890 IR Series online UPS for maximum reliability in extreme load conditions."
  },
  { 
    id: "ups_pm900_pro_1", 
    name: "1kVA PM900 Pro Prostram Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 120000, 
    image: "/product/1kva-pm900-pro-prostram-online-ups-500x500.webp", 
    rating: 4.8, 
    reviews: 42, 
    badge: "Best Seller", 
    availability: "In Stock",
    description: "High-frequency 1kVA online UPS with advanced DSP control technology. Ideal for small servers and PCs."
  },
  { 
    id: "ups_pm900_pro_3", 
    name: "3kVA PM900 Pro Prostram Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 17000, 
    image: "/product/3kva-pm900-pro-prostram-online-ups-500x500.webp", 
    rating: 4.6, 
    reviews: 51, 
    badge: null, 
    availability: "In Stock",
    description: "Compact 3kVA online UPS providing pure sine wave output for workstations and telecom systems."
  },
  { 
    id: "ups_pm660_200", 
    name: "200kVA PM660 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 700000, 
    image: "/product/200kva-pm660-prostarm-online-ups-500x500.webp", 
    rating: 4.9, 
    reviews: 4, 
    badge: null, 
    availability: "On Order",
    description: "200kVA PM660 Series industrial UPS with high fault tolerance and modular scalability."
  },
  { 
    id: "ups_pm660_800", 
    name: "800kVA PM660 Prostarm Online UPS", 
    brand: "Prostarm", 
    category: "ups", 
    price: 1200000, 
    image: "/product/800kva-pm660-prostarm-online-ups-500x500.webp", 
    rating: 5.0, 
    reviews: 2, 
    badge: "Enterprise", 
    availability: "On Order",
    description: "Flagship 800kVA PM660 UPS designed to provide flawless power backup for entire corporate buildings and factories."
  },

  // ==========================================
  // EXIDE POWERSAFE PLUS SMF BATTERIES
  // ==========================================
  { 
    id: "bat_exide_ps_200", 
    name: "200Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 15100, 
    image: "/product/200ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.8, 
    reviews: 120, 
    badge: "Best Seller", 
    availability: "In Stock",
    description: "High-capacity 200Ah Sealed Maintenance Free (SMF) VRLA battery, designed for long-lasting backup in critical UPS applications."
  },
  { 
    id: "bat_exide_ps_150", 
    name: "150Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 11300, 
    image: "/product/150ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.7, 
    reviews: 95, 
    badge: "Popular", 
    availability: "In Stock",
    description: "Reliable 150Ah SMF battery offering excellent cyclic performance and a long service life for commercial UPS systems."
  },
  { 
    id: "bat_exide_ps_120", 
    name: "120Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 8600, 
    image: "/product/120ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.8, 
    reviews: 75, 
    badge: null, 
    availability: "In Stock",
    description: "120Ah Exide Powersafe Plus SMF Battery tailored for optimized energy storage and reliable continuous performance."
  },
  { 
    id: "bat_exide_ps_100", 
    name: "100Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 7250, 
    image: "/product/100ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.7, 
    reviews: 64, 
    badge: null, 
    availability: "In Stock",
    description: "100Ah capacity SMF battery, ensuring steady backup operations for critical electronic infrastructure."
  },
  { 
    id: "bat_exide_ps_75", 
    name: "75Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 6000, 
    image: "/product/75ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.6, 
    reviews: 50, 
    badge: null, 
    availability: "In Stock",
    description: "75Ah Exide SMF Battery offering durable performance and maintenance-free longevity."
  },
  { 
    id: "bat_exide_ps_65", 
    name: "65Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 4700, 
    image: "/product/65ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.6, 
    reviews: 42, 
    badge: null, 
    availability: "In Stock",
    description: "65Ah capacity Exide SMF Battery for efficient power backup in medium-scale requirements."
  },
  { 
    id: "bat_exide_ps_42", 
    name: "42Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 3350, 
    image: "/product/42ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.6, 
    reviews: 45, 
    badge: null, 
    availability: "In Stock",
    description: "Compact 42Ah VRLA battery, perfect for smaller UPS setups, telecom systems, and emergency lighting."
  },
  { 
    id: "bat_exide_ps_26", 
    name: "26Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 2350, 
    image: "/product/26ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.5, 
    reviews: 34, 
    badge: null, 
    availability: "In Stock",
    description: "26Ah SMF Battery ideal for lightweight IT systems and continuous low-power applications."
  },
  { 
    id: "bat_exide_ps_18", 
    name: "18Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 1800, 
    image: "/product/18ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.5, 
    reviews: 30, 
    badge: null, 
    availability: "In Stock",
    description: "18Ah SMF battery providing dependable backup for security systems, alarms, and compact UPS devices."
  },
  { 
    id: "bat_exide_ps_12", 
    name: "12Ah Exide Powersafe Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 1500, 
    image: "/product/12ah-exide-powersafe-plus-smf-battery-500x500.webp", 
    rating: 4.4, 
    reviews: 22, 
    badge: null, 
    availability: "In Stock",
    description: "12Ah SMF battery designed for lightweight backup requirements and uninterruptible power supplies."
  },

  // ==========================================
  // EXIDE NXT PLUS SMF BATTERIES
  // ==========================================
  { 
    id: "bat_exide_nxt_200", 
    name: "200Ah Exide NXT Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 17800, 
    image: "/product/200ah-exide-nxt-plus-smf-battery-500x500.webp", 
    rating: 4.9, 
    reviews: 88, 
    badge: "Premium", 
    availability: "In Stock",
    description: "Next-generation 200Ah SMF battery with superior deep discharge recovery and enhanced lifespan."
  },
  { 
    id: "bat_exide_nxt_150", 
    name: "150Ah Exide NXT Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 12900, 
    image: "/product/150ah-exide-nxt-plus-smf-battery-500x500.webp", 
    rating: 4.8, 
    reviews: 74, 
    badge: null, 
    availability: "In Stock",
    description: "150Ah Exide NXT Plus SMF Battery for robust energy availability and longer cyclic stability."
  },
  { 
    id: "bat_exide_nxt_120", 
    name: "120Ah Exide NXT Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 9950, 
    image: "/product/120ah-exide-nxt-plus-smf-battery-500x500.webp", 
    rating: 4.8, 
    reviews: 56, 
    badge: null, 
    availability: "In Stock",
    description: "120Ah capacity NXT Plus battery for medium to high-demand UPS applications."
  },
  { 
    id: "bat_exide_nxt_100", 
    name: "100Ah Exide NXT Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 8800, 
    image: "/product/100ah-exide-nxt-plus-smf-battery-500x500.webp", 
    rating: 4.8, 
    reviews: 65, 
    badge: null, 
    availability: "In Stock",
    description: "100Ah Exide NXT Plus SMF battery tailored for high-efficiency UPS backup and solar applications."
  },
  { 
    id: "bat_exide_nxt_75", 
    name: "75Ah Exide NXT Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 6200, 
    image: "/product/75ah-exide-nxt-plus-smf-battery-500x500.webp", 
    rating: 4.7, 
    reviews: 40, 
    badge: null, 
    availability: "In Stock",
    description: "75Ah capacity SMF battery, maintenance-free and ready for immediate deployment in critical systems."
  },
  { 
    id: "bat_exide_nxt_42", 
    name: "42Ah Exide NXT Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 3800, 
    image: "/product/42ah-exide-nxt-plus-smf-battery-500x500.webp", 
    rating: 4.6, 
    reviews: 28, 
    badge: null, 
    availability: "In Stock",
    description: "42Ah NXT Plus battery delivering stable and consistent power delivery for small scale IT infrastructures."
  },
  { 
    id: "bat_exide_nxt_26", 
    name: "26Ah Exide NXT Plus SMF Battery", 
    brand: "Exide", 
    category: "battery", 
    price: 2900, 
    image: "/product/26ah-exide-nxt-plus-smf-battery-500x500.webp", 
    rating: 4.5, 
    reviews: 15, 
    badge: null, 
    availability: "In Stock",
    description: "26Ah SMF battery, highly durable and ideal for compact power protection environments."
  },

  // ==========================================
  // AMARON QUANTA SMF BATTERIES
  // ==========================================
  { 
    id: "bat_amaron_200", 
    name: "200Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 15900, 
    image: "/product/200ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.9, 
    reviews: 140, 
    badge: "Top Rated", 
    availability: "In Stock",
    description: "Robust 200Ah Amaron Quanta battery equipped with advanced AGM technology for uninterrupted, heavy-duty performance."
  },
  { 
    id: "bat_amaron_150", 
    name: "150Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 11900, 
    image: "/product/150ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.8, 
    reviews: 110, 
    badge: null, 
    availability: "In Stock",
    description: "150Ah SMF battery offering factory-charged convenience and exceptional backup longevity for UPS systems."
  },
  { 
    id: "bat_amaron_120", 
    name: "120Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 8900, 
    image: "/product/120ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.7, 
    reviews: 80, 
    badge: null, 
    availability: "In Stock",
    description: "120Ah battery built with thick robust plates to provide unparalleled power backup in commercial spaces."
  },
  { 
    id: "bat_amaron_100", 
    name: "100Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 7350, 
    image: "/product/100ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.7, 
    reviews: 55, 
    badge: null, 
    availability: "In Stock",
    description: "Reliable 100Ah Amaron Quanta battery, ensuring peace of mind with completely maintenance-free operations."
  },
  { 
    id: "bat_amaron_65", 
    name: "65Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 4800, 
    image: "/product/65ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.6, 
    reviews: 35, 
    badge: null, 
    availability: "In Stock",
    description: "65Ah capacity SMF battery, designed for high rate discharge applications and prolonged life."
  },
  { 
    id: "bat_amaron_26", 
    name: "26Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 2450, 
    image: "/product/26ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.6, 
    reviews: 29, 
    badge: null, 
    availability: "In Stock",
    description: "Compact 26Ah Amaron Quanta battery ensuring resilient backup for basic telecom and alarm systems."
  },
  { 
    id: "bat_amaron_18", 
    name: "18Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 1900, 
    image: "/product/18ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.5, 
    reviews: 22, 
    badge: null, 
    availability: "In Stock",
    description: "18Ah Amaron SMF battery combining premium performance and space-saving dimensions."
  },
  { 
    id: "bat_amaron_12", 
    name: "12Ah Amaron Quanta SMF Battery", 
    brand: "Amaron", 
    category: "battery", 
    price: 1600, 
    image: "/product/12ah-amaron-quanta-smf-battery-500x500.webp", 
    rating: 4.5, 
    reviews: 18, 
    badge: null, 
    availability: "In Stock",
    description: "Lightweight 12Ah Amaron Quanta battery optimized for fast charging and low-capacity requirements."
  },

  // ==========================================
  // ONLINE UPS REPAIRING SERVICES
  // ==========================================
  { 
    id: "srv_ups_repair_1kVA", 
    name: "1kVA Online UPS Repairing Service", 
    brand: "Service", 
    category: "services", 
    price: "Ask Price", 
    isAskPrice: true,
    image: "/product/1kva-online-ups-repairing-service-500x500.webp",
    rating: 4.7, 
    reviews: 65, 
    badge: "Service", 
    availability: "Available",
    description: "Professional diagnostic and repairing service for 1kVA online UPS systems by certified technicians."
  },
  { 
    id: "srv_ups_repair_5kVA", 
    name: "5kVA Online UPS Repairing Service", 
    brand: "Service", 
    category: "services", 
    price: "Ask Price", 
    isAskPrice: true,
    image: "/product/5kva-online-ups-repairing-service-500x500.webp", 
    rating: 4.8, 
    reviews: 42, 
    badge: "Service", 
    availability: "Available",
    description: "Reliable repairing service covering battery replacement and logic board servicing for 5kVA UPS systems."
  },
  { 
    id: "srv_ups_repair_10kVA", 
    name: "10kVA Online UPS Repairing Service", 
    brand: "Service", 
    category: "services", 
    price: "Ask Price", 
    isAskPrice: true,
    image: "/product/10kva-online-ups-repairing-service-500x500.webp", 
    rating: 4.8, 
    reviews: 42, 
    badge: "Service", 
    availability: "Available",
    description: "Comprehensive repairing and maintenance service for 10kVA enterprise UPS units."
  },
  { 
    id: "srv_ups_repair_100kVA", 
    name: "100kVA Online UPS Repairing Service", 
    brand: "Service", 
    category: "services", 
    price: "Ask Price", 
    isAskPrice: true,
    image: "/product/100kva-online-ups-repairing-service-500x500.webp", 
    rating: 4.9, 
    reviews: 18, 
    badge: "Service", 
    availability: "Available",
    description: "Expert on-site troubleshooting and component-level repair for heavy-duty 100kVA online UPS systems."
  },
  { 
    id: "srv_ups_repair_200kVA", 
    name: "200kVA Online UPS Repairing Service", 
    brand: "Service", 
    category: "services", 
    price: 5000, 
    image: "/product/200kva-online-ups-repairing-service-500x500.webp", 
    rating: 5.0, 
    reviews: 12, 
    badge: "Service", 
    availability: "Available",
    description: "Specialized maintenance, part replacement, and repairing service for massive 200kVA industrial UPS."
  },
  { 
    id: "srv_ups_repair_general", 
    name: "Online UPS Repairing Service", 
    brand: "Service", 
    category: "services", 
    price: "Ask Price", 
    isAskPrice: true,
    image: "/product/online-ups-repairing-service-500x500.webp", 
    rating: 4.6, 
    reviews: 110, 
    badge: "Service", 
    availability: "Available",
    description: "General inspection, battery health checkups, and repair services for all types of online UPS systems."
  }
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