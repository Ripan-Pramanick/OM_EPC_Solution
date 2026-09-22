import {
  Monitor, Zap, Video, Network, Wrench,
  CircuitBoard,
  HardHat,
  BadgeCheck,
  CalendarCheck,
  BatteryCharging,
  ShieldCheck,
} from 'lucide-react';
import { aboutImages } from './images';

export const foundationRows = [
  { id: "01", title: "Understand", desc: "We understand your power requirements, equipment load, and business needs before recommending a UPS solution." },
  { id: "02", title: "Implement", desc: "We provide and install reliable UPS systems tailored to your power capacity, infrastructure, and operational requirements." },
  { id: "03", title: "Support", desc: "We provide ongoing technical support, maintenance, and troubleshooting to keep your UPS system performing reliably." }
];

export const principleRows = [
  { id: "01", title: "Reliability", desc: "Technology that keeps your business running when it matters." },
  { id: "02", title: "Transparency", desc: "Clear communication, practical recommendations and honest service." },
  { id: "03", title: "Support", desc: "Long-term technical assistance beyond installation." }
];

export const benefits = [
  {
    title: "Experienced Engineers",
    desc: "Skilled technicians with practical experience in UPS installation, maintenance, and troubleshooting.",
    icon: Wrench,
  },
  {
    title: "Multi-Brand Support",
    desc: "Support for major UPS brands and power backup equipment.",
    icon: CircuitBoard,
  },
  {
    title: "On-Site Service",
    desc: "Quick response and on-site technical assistance for installation and service requirements.",
    icon: HardHat,
  },
  {
    title: "Genuine Products",
    desc: "Reliable UPS systems and genuine components backed by professional technical support.",
    icon: BadgeCheck,
  },
  {
    title: "AMC Support",
    desc: "Preventive maintenance and regular servicing to ensure reliable, hassle-free UPS operation.",
    icon: CalendarCheck,
  },
];

export const milestones = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "24/7", label: "Technical Support" },
  { value: "6+", label: "Core Services" }
];

export const expertiseCards = [
  {
    id: "01",
    title: "Online UPS Systems",
    desc: "High-performance online UPS systems designed for uninterrupted and stable power protection.",
    icon: Zap,
    image: aboutImages.expertise.ups,
  },
  {
    id: "02",
    title: "UPS Installation",
    desc: "Professional UPS installation, commissioning, and configuration for critical equipment.",
    icon: Wrench,
    image: aboutImages.expertise.installation,
  },
  {
    id: "03",
    title: "Battery & Backup",
    desc: "Reliable battery backup solutions with testing, replacement, and performance support.",
    icon: BatteryCharging,
    image: aboutImages.expertise.battery,
  },
  {
    id: "04",
    title: "AMC & Technical Support",
    desc: "Preventive maintenance and responsive technical support to keep your UPS running reliably.",
    icon: ShieldCheck,
    image: aboutImages.expertise.support,
  },
];