import { Zap, BatteryCharging, Monitor, Shield,
  Wrench,
 
  ShieldCheck,
  Headset, HardDrive,
  Cpu,
  MapPin,
  Settings } from 'lucide-react';
import { servicePageImages } from './images';

export const solutionFinders = [
  {
    id: "01",
    title: "UPS & Power Protection",
    icon: Zap,
    desc: "Keep critical equipment running with reliable online UPS and uninterrupted power protection.",
    cta: "Explore UPS Solutions",
  },
  {
    id: "02",
    title: "UPS Installation & Service",
    icon: Wrench,
    desc: "Professional UPS installation, commissioning, maintenance, and technical support.",
    cta: "Explore UPS Services",
  },
  {
    id: "03",
    title: "Battery & AMC Support",
    icon: BatteryCharging,
    desc: "Reliable battery backup, preventive maintenance, and AMC support for long-term performance.",
    cta: "Explore AMC Support",
  },
];

export const interactiveServices = [
  {
    id: "online-ups",
    number: "01",
    title: "Online UPS Systems",
    description:
      "High-performance online UPS systems designed to provide stable, uninterrupted power for critical equipment.",
    features: [
      "Single & Three Phase UPS",
      "Online Double Conversion",
      "Critical Load Protection",
      "Power Conditioning",
      "System Configuration",
    ],
    image: servicePageImages.services.ups,
    icon: Zap,
  },

  {
    id: "ups-installation",
    number: "02",
    title: "UPS Installation",
    description:
      "Professional UPS installation, commissioning, and configuration for reliable power protection.",
    features: [
      "Site Assessment",
      "UPS Installation",
      "System Commissioning",
      "Load Configuration",
      "Performance Testing",
    ],
    image: servicePageImages.services.installation,
    icon: Wrench,
  },

  {
    id: "battery-solutions",
    number: "03",
    title: "Battery Solutions",
    description:
      "Reliable battery backup solutions designed to provide dependable runtime and long-term performance.",
    features: [
      "UPS Battery Supply",
      "Battery Replacement",
      "Battery Testing",
      "Backup Runtime Testing",
      "Battery Maintenance",
    ],
    image: servicePageImages.services.battery,
    icon: BatteryCharging,
  },

  {
    id: "ups-maintenance",
    number: "04",
    title: "UPS Maintenance",
    description:
      "Preventive and corrective maintenance to keep your UPS system reliable and operating at peak performance.",
    features: [
      "Preventive Maintenance",
      "UPS Health Check",
      "Fault Diagnosis",
      "System Testing",
      "Component Inspection",
    ],
    image: servicePageImages.services.maintenance,
    icon: Settings,
  },

  {
    id: "amc",
    number: "05",
    title: "UPS AMC Support",
    description:
      "Comprehensive annual maintenance contracts for continuous UPS reliability and professional technical support.",
    features: [
      "Scheduled Maintenance",
      "Preventive Service",
      "Priority Support",
      "Emergency Assistance",
      "Performance Monitoring",
    ],
    image: servicePageImages.services.amc,
    icon: ShieldCheck,
  },

  {
    id: "emergency-support",
    number: "06",
    title: "Emergency Technical Support",
    description:
      "Responsive technical assistance for UPS faults, power issues, and unexpected system failures.",
    features: [
      "Emergency Service",
      "Fault Troubleshooting",
      "On-Site Assistance",
      "System Diagnostics",
      "Technical Consultation",
    ],
    image: servicePageImages.services.support,
    icon: Headset,
  },
];

export const serviceBenefits = [
  {
    title: "Experienced Engineers",
    desc: "Skilled UPS technicians with practical experience in installation, maintenance, and troubleshooting.",
    icon: Wrench
  },
  {
    title: "Multi-Brand Support",
    desc: "Technical support for major UPS brands, batteries, and power backup equipment.",
    icon: Cpu
  },
  {
    title: "On-Site Service",
    desc: "Fast on-site assistance for UPS installation, inspection, maintenance, and troubleshooting.",
    icon: MapPin
  },
  {
    title: "Genuine Products",
    desc: "Reliable UPS systems and battery solutions backed by professional technical support.",
    icon: ShieldCheck
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular UPS maintenance designed to improve reliability and reduce unexpected downtime.",
    icon: Settings
  }
];