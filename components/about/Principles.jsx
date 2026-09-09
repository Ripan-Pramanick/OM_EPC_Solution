"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { aboutImages } from '@/data/images';
import { ShieldCheck, Eye, Headset, ArrowRight, X } from 'lucide-react';
import Button from '@/components/ui/Button';

const principlesData = [
  {
    id: "01",
    shortTitle: "Reliable Infrastructure",
    icon: ShieldCheck,
    subtitle: "SECURE & STABLE",
    title: "Reliable Infrastructure",
    desc: "Technology that keeps your business running when it matters most, designed for maximum uptime and continuity."
  },
  {
    id: "02",
    shortTitle: "Transparent Operations",
    icon: Eye,
    subtitle: "CLEAR & HONEST",
    title: "Transparent Operations",
    desc: "Clear communication, practical recommendations and honest IT service at every step of your project."
  },
  {
    id: "03",
    shortTitle: "Dedicated Support",
    icon: Headset,
    subtitle: "ALWAYS AVAILABLE",
    title: "Dedicated Support",
    desc: "Long-term technical assistance, AMC maintenance, and network support beyond initial installation."
  }
];

export default function Principles() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <section className="relative bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-50 min-h-[850px] lg:h-screen flex items-center overflow-hidden pt-32 pb-24 lg:py-40">


      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <Image src={aboutImages.principles} alt="Background Pattern" fill className="object-cover" />
      </div>


      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] z-0 shadow-2xl overflow-hidden"
        style={{ borderTopLeftRadius: '10rem', borderBottomLeftRadius: '10rem' }}
      >
        <Image
          src={aboutImages.foundationMain || aboutImages.hero}
          alt="IT Infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay" />
      </div>


      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10 flex flex-col lg:flex-row items-center">


        <div className="w-full lg:w-[55%] flex flex-col relative z-20 lg:pr-20">

          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white tracking-widest uppercase mb-6">
                <X size={12} /> OUR STATEMENT
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                The Principles Behind Everything We Do
              </h2>
              <p className="text-indigo-200 text-base md:text-lg mb-12 leading-relaxed">
                We stay true to our values, delivering reliable IT solutions while striving for meaningful business growth.
              </p>
            </motion.div>

            {/* Interactive Accordion List */}
            <div className="flex flex-col mb-12 border-t border-indigo-700/50">
              {principlesData.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex items-center cursor-pointer transition-all duration-300 py-6 border-b ${isActive ? 'border-white' : 'border-indigo-700/50 hover:border-indigo-500'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Only show number if not active */}
                      {!isActive && (
                        <span className="text-lg font-medium text-indigo-400 w-6">
                          {item.id}.
                        </span>
                      )}
                      <h4 className={`text-xl md:text-2xl transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'font-medium text-indigo-200 group-hover:text-white'
                        }`}>
                        {item.shortTitle}
                      </h4>
                    </div>

                    {/* Fixed: Arrow rendering smoothly on active state */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-white ml-auto"
                      >
                        <ArrowRight size={22} />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="light" className="w-max text-indigo-900 rounded-full pl-8 pr-6 py-6 h-12 flex items-center gap-3">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>

        {/* 
          Fixed: The White Circle (Centered perfectly on the seam)
          - Positioned exactly at right: 45% (which is the boundary of the image).
          - Translated 50% to the right to straddle the line perfectly.
        */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-[45%] translate-x-1/2 z-30 w-[420px] h-[420px] xl:w-[480px] xl:h-[480px] bg-[#FAF9F6] rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex-col items-center justify-center p-12 text-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-full"
            >
              <div className="mb-6 text-[#111827]">
                {(() => {
                  const IconComponent = principlesData[activeIndex].icon;
                  return <IconComponent size={56} strokeWidth={1.2} />;
                })()}
              </div>

              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">
                {principlesData[activeIndex].subtitle}
              </p>

              <h3 className="text-2xl md:text-[2rem] font-bold text-[#111827] mb-4 leading-tight">
                {principlesData[activeIndex].title}
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed max-w-[280px] mx-auto">
                {principlesData[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Mobile-only Circle & Image Display */}
      <div className="lg:hidden relative w-full mt-16 px-6 z-20">
        <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-[#FAF9F6] rounded-full shadow-2xl flex flex-col items-center justify-center p-8 text-center border-4 border-indigo-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 text-[#111827]">
                {(() => {
                  const IconComponent = principlesData[activeIndex].icon;
                  return <IconComponent size={40} strokeWidth={1.2} />;
                })()}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-2">
                {principlesData[activeIndex].subtitle}
              </p>
              <h3 className="text-xl font-bold text-[#111827] mb-2 leading-tight">
                {principlesData[activeIndex].title}
              </h3>
              <p className="text-[#64748B] text-xs leading-relaxed">
                {principlesData[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}