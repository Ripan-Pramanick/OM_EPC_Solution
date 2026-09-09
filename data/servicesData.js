import { Zap, Monitor, Shield, Laptop, Camera, Network, Wrench, HardDrive, Printer } from 'lucide-react';
import { servicePageImages } from './images';

export const solutionFinders = [
  {
    id: "01",
    title: "Power & Continuity",
    icon: Zap,
    desc: "Keep critical systems running with reliable UPS and power backup solutions.",
    cta: "Explore Power Solutions"
  },
  {
    id: "02",
    title: "IT & Productivity",
    icon: Laptop,
    desc: "Equip your business with dependable computers, printers and complete IT support.",
    cta: "Explore IT Solutions"
  },
  {
    id: "03",
    title: "Security & Connectivity",
    icon: Shield,
    desc: "Build a secure and connected workplace with CCTV and networking solutions.",
    cta: "Explore Security Solutions"
  }
];

export const interactiveServices = [
  {
    id: "computer",
    number: "01",
    title: "Computer Solutions",
    description: "Complete computer solutions for offices, businesses and professional work environments.",
    features: ["Desktop & Laptop Sales", "Computer Repair", "Hardware Upgrades", "Software Support", "On-Site Assistance"],
    image: servicePageImages.services.computer,
    icon: Monitor
  },
  {
    id: "ups",
    number: "02",
    title: "UPS & Power Backup",
    description: "Reliable power backup solutions designed to protect critical business equipment.",
    features: ["Online UPS", "Offline UPS", "Inverter Systems", "Battery Solutions", "Installation & Maintenance"],
    image: servicePageImages.services.ups,
    icon: Zap
  },
  {
    id: "printer",
    number: "03",
    title: "Printer Solutions",
    description: "Sales, servicing and maintenance solutions for business printing requirements.",
    features: ["Printer Sales", "Printer Repair", "Cartridge Support", "Multi-Brand Service", "Maintenance"],
    image: servicePageImages.services.printer,
    icon: Printer
  },
  {
    id: "cctv",
    number: "04",
    title: "CCTV & Surveillance",
    description: "Modern surveillance solutions to help protect your premises and business.",
    features: ["CCTV Installation", "Camera Configuration", "DVR/NVR Setup", "Remote Monitoring", "Maintenance"],
    image: servicePageImages.services.cctv,
    icon: Camera
  },
  {
    id: "networking",
    number: "05",
    title: "Networking Solutions",
    description: "Structured networking and connectivity solutions for reliable business communication.",
    features: ["LAN Setup", "Structured Cabling", "Network Configuration", "Router & Switch Setup", "Network Maintenance"],
    image: servicePageImages.services.networking,
    icon: Network
  },
  {
    id: "amc",
    number: "06",
    title: "AMC & Technical Support",
    description: "Preventive maintenance and responsive technical support to keep your IT infrastructure running.",
    features: ["Computer AMC", "Printer AMC", "UPS AMC", "CCTV AMC", "Network Maintenance"],
    image: servicePageImages.services.amc,
    icon: Wrench
  }
];

export const serviceBenefits = [
  { title: "Experienced Engineers", desc: "Skilled technicians with practical field experience.", icon: Wrench },
  { title: "Multi-Brand Support", desc: "Technical support across major brands and equipment.", icon: HardDrive },
  { title: "On-Site Service", desc: "Fast response and on-site technical assistance.", icon: Monitor },
  { title: "Genuine Products", desc: "Reliable products backed by professional support.", icon: Shield },
  { title: "Preventive Maintenance", desc: "Regular maintenance to reduce unexpected downtime.", icon: Zap }
];