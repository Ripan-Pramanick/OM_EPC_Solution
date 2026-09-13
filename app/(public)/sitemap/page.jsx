"use client";
import Link from 'next/link';
import { motion } from 'motion/react';
import { Map, ChevronRight } from 'lucide-react';

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Products", href: "/products" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "IT Infrastructure", href: "/services#it-infrastructure" },
      { name: "Networking Solutions", href: "/services#networking" },
      { name: "CCTV & Surveillance", href: "/services#cctv" },
      { name: "Access Control", href: "/services#access-control" },
      { name: "Power Backup", href: "/services#power-backup" },
      { name: "Technical Support", href: "/contact" },
    ]
  },
  {
    title: "Products",
    links: [
      { name: "Enterprise IT Equipment", href: "/products#enterprise-it" },
      { name: "Networking Equipment", href: "/products#networking" },
      { name: "Security & Surveillance", href: "/products#security" },
      { name: "Power Backup", href: "/products#power" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Sitemap", href: "/sitemap" },
    ]
  }
];

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-emerald-50 pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-[10px] font-bold text-emerald-950 tracking-widest uppercase mb-6 shadow-sm">
            <Map size={12} className="text-emerald-800" strokeWidth={2.5} /> DIRECTORY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight mb-4">
            Sitemap
          </h1>
          <p className="text-emerald-800/70 text-lg">Explore OM EPC Solution.</p>
        </motion.div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sitemapData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-emerald-200 shadow-sm h-fit"
            >
              <h2 className="text-xl font-bold text-emerald-950 mb-6 pb-4 border-b border-emerald-100">
                {group.title}
              </h2>
              <ul className="space-y-4">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="flex items-center gap-2 text-emerald-900/70 hover:text-emerald-500 font-medium transition-colors group"
                    >
                      <ChevronRight size={14} className="text-emerald-300 group-hover:text-emerald-500 transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}