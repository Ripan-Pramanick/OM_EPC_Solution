"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/data/images';

const tabs = [
  { id: 'online-ups', label: 'Online UPS', image: images.services.networking, description: "Continuous, clean and stable power for critical equipment and sensitive electronics." },
  { id: 'line-interactive-ups', label: 'Line Interactive UPS', image: images.services.ups, description: "Efficient backup power with voltage regulation for offices and everyday business equipment." },
  { id: 'industrial-ups', label: 'Industrial UPS', image: images.services.cctv, description: "High-capacity power backup solutions for demanding commercial and industrial applications." }
  
];

export default function InteractiveDark() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 bg-emerald-100 overflow-hidden">
      {/* Container width updated to match the Hero section (max-w-[1400px]) */}
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header & Tabs */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-emerald-950 tracking-tight">
            Solutions That Keep You Running
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === tab.id 
                    ? 'bg-emerald-950 text-emerald-50 border-emerald-950 shadow-md' 
                    : 'bg-transparent text-emerald-950 border-emerald-950 hover:bg-emerald-950/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Display Area - Now w-full to stretch across the 1400px container */}
        <div className="relative w-full h-[450px] md:h-[600px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-emerald-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Main Image */}
              <Image
                src={tabs.find(t => t.id === activeTab)?.image}
                alt={activeTab}
                fill
                className="object-cover opacity-80"
              />
              
              {/* Gradient Overlay for Text Readability using emerald-950 shades */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent" />
              
              {/* Text Content over Image - CENTERED */}
              <div className="absolute top-[40%] left-0 w-full px-6 flex flex-col items-center text-center z-10">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-emerald-50">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </h3>
                  <p className="text-emerald-100/90 font-medium leading-relaxed text-sm md:text-base lg:text-lg">
                   {tabs.find(t => t.id === activeTab)?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}