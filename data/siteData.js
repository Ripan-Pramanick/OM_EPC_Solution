// ... keep existing imports and data ...
import { Shield, Server, Zap, Monitor, Network, Video, CheckCircle2, Factory, Building2, GraduationCap, Stethoscope } from 'lucide-react';
import { images } from './images';

export const whyChooseUs = [
  "Certified IT Technicians",
  "Guaranteed 24/7 AMC Support",
  "Enterprise-Grade Hardware",
  "Custom Infrastructure Planning",
  "Scalable Network Solutions",
  "Transparent Pricing & Audits"
];

export const industries = [
  { name: "Corporate Offices", icon: Building2 },
  { name: "Manufacturing Facilities", icon: Factory },
  { name: "Educational Institutions", icon: GraduationCap },
  { name: "Healthcare Centers", icon: Stethoscope },
];

export const faqs = [
  {
    question: "What is included in your Annual Maintenance Contract (AMC)?",
    answer: "Our AMC covers routine health checks, emergency troubleshooting, hardware repairs, network optimization, and priority 24/7 support for all covered IT and infrastructure assets."
  },
  {
    question: "Do you supply the hardware or only provide installation services?",
    answer: "We provide end-to-end solutions. We supply premium hardware (UPS, Servers, CCTV, Workstations) and handle the complete deployment and ongoing maintenance."
  },
  {
    question: "Can you upgrade our existing office network without downtime?",
    answer: "Yes, our team specializes in seamless migrations and upgrades. We schedule critical transitions during off-hours to ensure zero disruption to your daily operations."
  }
];


export const projects = [
  { 
    id: 1,
    title: "Enterprise Server Deployment", 
    category: "Infrastructure", 
    image: images.projects[0] 
  },
  { 
    id: 2,
    title: "Corporate Network Cabling", 
    category: "Networking", 
    image: images.projects[1] 
  },
  { 
    id: 3,
    title: "Multi-Floor CCTV Grid", 
    category: "Security", 
    image: images.projects[2] 
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Their AMC service has completely eliminated our hardware downtime. The technical team is incredibly responsive and proactive.",
    author: "Rahul Sharma",
    role: "Operations Director"
  },
  {
    id: 2,
    quote: "From the initial UPS sizing to the final deployment, OM EPC handled our entire power backup migration flawlessly.",
    author: "Priya Desai",
    role: "Facility Manager"
  },
  {
    id: 3,
    quote: "The structured cabling and network upgrade provided a massive boost to our internal operations. Highly recommended.",
    author: "Amit Patel",
    role: "IT Head"
  }
];

export const services = [
  {
    id: 1,
    number: "01",
    title: "Computer & Server Solutions",
    description: "Enterprise-grade desktops, laptops, and server rack installations with comprehensive AMC support.",
    icon: Monitor,
  },
  {
    id: 2,
    number: "02",
    title: "Networking & Infrastructure",
    description: "Structured cabling, high-speed routers, and managed switches for seamless office connectivity.",
    icon: Network,
  },
  {
    id: 3,
    number: "03",
    title: "Power Backup (UPS)",
    description: "Online UPS systems and high-capacity batteries ensuring zero downtime for critical hardware.",
    icon: Zap,
  },
  {
    id: 4,
    number: "04",
    title: "CCTV & Security",
    description: "IP camera installations, DVR/NVR setups, and biometric access control systems.",
    icon: Video,
  }
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "AMC Clients" },
  { value: "24/7", label: "Support Available" },
];