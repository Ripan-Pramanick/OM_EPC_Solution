import { Monitor, Zap, Video, Network, Wrench, ShieldCheck, Cpu, HardDrive } from 'lucide-react';
import { aboutImages } from './images';

export const foundationRows = [
  { id: "01", title: "Understand", desc: "We understand your business and technical requirements." },
  { id: "02", title: "Implement", desc: "We provide practical technology solutions tailored to your needs." },
  { id: "03", title: "Support", desc: "We provide continued technical assistance after installation." }
];

export const principleRows = [
  { id: "01", title: "Reliability", desc: "Technology that keeps your business running when it matters." },
  { id: "02", title: "Transparency", desc: "Clear communication, practical recommendations and honest service." },
  { id: "03", title: "Support", desc: "Long-term technical assistance beyond installation." }
];

export const benefits = [
  { title: "Experienced Engineers", desc: "Skilled technicians with practical field experience.", icon: Wrench },
  { title: "Multi-Brand Support", desc: "Support for major brands and equipment.", icon: Cpu },
  { title: "On-Site Service", desc: "Quick response and on-site technical assistance.", icon: Monitor },
  { title: "Genuine Products", desc: "Reliable products backed by professional technical support.", icon: ShieldCheck },
  { title: "AMC Support", desc: "Preventive maintenance for hassle-free operations.", icon: HardDrive }
];

export const milestones = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "24/7", label: "Technical Support" },
  { value: "6+", label: "Core Services" }
];

export const expertiseCards = [
  { id: "01", title: "Computer & IT Support", desc: "Professional support for desktops, laptops, workstations and business IT systems.", icon: Monitor, image: aboutImages.expertise.computer },
  { id: "02", title: "UPS & Power Backup", desc: "Installation, maintenance and technical support for reliable power backup systems.", icon: Zap, image: aboutImages.expertise.ups },
  { id: "03", title: "CCTV & Surveillance", desc: "Professional surveillance installation, configuration and support.", icon: Video, image: aboutImages.expertise.cctv },
  { id: "04", title: "Networking & Infrastructure", desc: "Structured networking, connectivity and IT infrastructure solutions.", icon: Network, image: aboutImages.expertise.networking }
];