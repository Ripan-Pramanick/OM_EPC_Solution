"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { servicePageImages } from '@/data/images';

export default function ServicesHero() {
  return (
    // Added pt-28/36 for navbar clearance and px-4/6 for the floating margin
    <section className="pt-28 md:pt-36 pb-12 px-4 md:px-6 bg-white">
      
      {/* Floating Card Container */}
      <div className="relative max-w-[1400px] mx-auto h-[60vh] md:h-[75vh] min-h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center shadow-2xl">
        
        {/* Background Image & Overlay */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={servicePageImages.hero} 
            alt="Professional IT Infrastructure" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-indigo-700/80 mix-blend-multiply" />
          
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-8 md:mt-12">
          
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            <span className="block text-white text-xl md:text-2xl mb-2 font-bold">Reliable Technology Solutions for Your Business</span>
            From power backup and computers to networking, surveillance and technical support, OM EPC Solution provides complete technology solutions designed around your business.
          </motion.p>
          
        </div>
      </div>
    </section>
  );
}