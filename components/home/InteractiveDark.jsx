"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/data/images';

const tabs = [
  { id: 'networking', label: 'Network Control', image: images.services.networking },
  { id: 'ups', label: 'Power Backup', image: images.services.ups },
  { id: 'cctv', label: 'Security Systems', image: images.services.cctv },
];

export default function InteractiveDark() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Solutions That Keep You Running</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-[#FAF9F6] text-gray-800 hover:bg-blue-100 border border-blue-800'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={tabs.find(t => t.id === activeTab)?.image}
                alt={activeTab}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              <div className="absolute bottom-10 left-10 max-w-lg">
                <h3 className="text-3xl font-bold mb-4 text-white">{tabs.find(t => t.id === activeTab)?.label}</h3>
                <p className="text-gray-300">Enterprise-grade implementation ensuring reliability, scalability, and security for your business operations.</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}