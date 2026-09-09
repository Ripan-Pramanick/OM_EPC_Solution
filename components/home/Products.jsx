"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { images } from '@/data/images';
import { X, ArrowRight, Download, Server, Monitor, Zap, Network } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Products() {
  const hardwareList = [
    "High-Capacity Online UPS",
    "Server & Storage Arrays",
    "Commercial Workstations",
    "Networking Switches & Routers"
  ];

  const brands = [
    { name: "CISCO", icon: Network },
    { name: "DELL", icon: Server },
    { name: "APC", icon: Zap },
    { name: "HP", icon: Monitor },
    { name: "D-LINK", icon: Network },
  ];

  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-navy tracking-widest uppercase mb-6"
          >
            <X size={12} className="text-muted" /> HARDWARE DISTRIBUTION
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy tracking-tight"
          >
            Products We Support
          </motion.h2>
        </div>

        {/* The User-Requested Tab Bar is REMOVED here as instructed */}

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          
          {/* Left: Image with subtle grid background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl bg-soft flex items-center justify-center p-8 overflow-hidden"
          >
            {/* Subtle Grid Pattern for background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]"></div>
            
            <div className="relative w-full h-full">
              <Image 
                src="/01.png"
                alt="Enterprise Hardware" 
                fill 
                className="object-center hover:scale-102 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Text, List, Button & Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-3xl font-bold text-navy mb-4">Enterprise IT Equipment</h3>
            <p className="text-muted text-base mb-8 leading-relaxed max-w-md">
              Functional and resilient hardware solutions that combine performance, scalability, and security for seamless business continuity.
            </p>

            {/* List Items */}
            <ul className="flex flex-col gap-3 mb-10">
              {hardwareList.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <ArrowRight size={16} className="text-muted" /> {item}
                </li>
              ))}
            </ul>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="dark">Get a Quote</Button>

              {/* Download Brochure Card */}
              <div className="flex items-center gap-4 p-2 pr-6 rounded-[1.25rem] border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer bg-white group">
                
                
               

              </div>
            </div>
          </motion.div>

        </div>

       {/* Bottom Client / Brand Logos Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-gray-100"
        >
          <p className="text-center text-lg font-bold text-[#111827] mb-12">
            Supporting hardware from every major industry leader.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="group w-32 h-32 md:w-40 md:h-40 rounded-full border border-gray-200 flex flex-col items-center justify-center bg-white hover:bg-[#F5F7FF] hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <brand.icon 
                  size={32} 
                  strokeWidth={1.2} 
                  className="mb-3 text-gray-400 group-hover:text-indigo-600 transition-colors duration-500" 
                />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#64748B] group-hover:text-indigo-700 uppercase transition-colors duration-500">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}