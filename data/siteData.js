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
    author: "Rajesh Sharma",
    role: "IT Head, TechMahindra",
    rating: "5.0",
    title: "Exceptional IT Infrastructure!",
    text: "OM EPC Solution completely revamped our data center. Their expertise in server management and networking is unmatched. Highly reliable partner!",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    author: "Priya Desai",
    role: "Operations Manager, TCS",
    rating: "4.9",
    title: "Flawless CCTV Installation",
    text: "Security was our top priority. The team installed a comprehensive CCTV network across our campus with zero downtime. Very professional approach.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    author: "Amit Patel",
    role: "Founder, StartupHub India",
    rating: "4.8",
    title: "Great Support & Service",
    text: "We procured all our office laptops and workstations from them. Their after-sales support and warranty management are truly hassle-free.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 4,
    author: "Sneha Reddy",
    role: "Admin Head, Apollo Hospitals",
    rating: "5.0",
    title: "Robust Power Solutions",
    text: "Our facility needs uninterrupted power. OM EPC provided industrial-grade UPS setups that have been working perfectly. Excellent technical team!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 5,
    author: "Vikram Singh",
    role: "Director, BuildTech Constructions",
    rating: "4.7",
    title: "Seamless Networking",
    text: "Setting up the network architecture for our new corporate office was a huge task. They made it look easy and delivered right on schedule.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 6,
    author: "Ananya Iyer",
    role: "CTO, FinServe Pvt Ltd",
    rating: "4.9",
    title: "Highly Trustworthy",
    text: "Finding a vendor who understands enterprise-grade hardware is tough. OM EPC Solution exceeded our expectations with their server solutions.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 7,
    author: "Rohan Gupta",
    role: "Facility Manager, WeWork",
    rating: "4.8",
    title: "End-to-End Perfection",
    text: "From routing cables to setting up biometric access and Wi-Fi access points, the execution was remarkably clean and efficient. Great job!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 8,
    author: "Neha Kapoor",
    role: "Procurement Lead, Flipkart",
    rating: "5.0",
    title: "Best IT Partner!",
    text: "We've been partnering with them for all our hardware needs for over two years now. Always on time, always transparent with pricing.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150"
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