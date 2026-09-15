"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { aboutImages } from '@/data/images';
import { ShieldCheck, Eye, Headset, ArrowRight, Target } from 'lucide-react';

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
    <section className="relative bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 min-h-screen flex items-center overflow-hidden py-20 md:py-24 lg:py-32">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <Image src={aboutImages.principles} alt="Background Pattern" fill className="object-cover" />
      </div>

      {/* Right Side Half-Screen Image (Desktop Only) */}
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
        {/* Emerald Overlay over Image */}
        <div className="absolute inset-0 bg-emerald-950/40 mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center">

        {/* Left Side Content */}
        <div className="w-full lg:w-[55%] flex flex-col relative z-20 lg:pr-16 xl:pr-24">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-white tracking-widest uppercase mb-4 md:mb-6">
                <Target size={12} className="text-emerald-400" strokeWidth={3} /> OUR STATEMENT
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
                The Principles Behind Everything We Do
              </h2>
              <p className="text-emerald-100/70 text-sm md:text-base lg:text-lg mb-8 md:mb-12 leading-relaxed">
                We stay true to our values, delivering reliable IT solutions while striving for meaningful business growth.
              </p>
            </motion.div>

            {/* Interactive Accordion List */}
            <div className="flex flex-col mb-10 md:mb-12 border-t border-emerald-800/50">
              {principlesData.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex items-center cursor-pointer transition-all duration-300 py-4 sm:py-5 md:py-6 border-b ${isActive ? 'border-white' : 'border-emerald-800/50 hover:border-emerald-400'}`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Only show number if not active */}
                      {!isActive && (
                        <span className="text-base sm:text-lg font-medium text-emerald-500 w-5 sm:w-6">
                          {item.id}.
                        </span>
                      )}
                      <h4 className={`text-lg sm:text-xl md:text-2xl transition-colors duration-300 tracking-tight ${isActive ? 'font-bold text-white' : 'font-medium text-emerald-200/80 group-hover:text-white'}`}>
                        {item.shortTitle}
                      </h4>
                    </div>

                    {/* Arrow rendering smoothly on active state */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-white ml-auto"
                      >
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
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
              {/* FIXED: Removed nested DarkBtn to avoid HTML nesting warnings. Replaced with direct Link styling. */}
              <Link 
                href="/contact" 
                prefetch={false}
                className="w-fit flex items-center justify-center bg-white text-emerald-950 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold shadow-[0_8px_30px_rgba(255,255,255,0.1)] hover:bg-emerald-50 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300 tracking-wide text-sm"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 
          The White/Emerald Circle (Centered perfectly on the seam for Desktop)
          FIXED: Responsive width & height for lg and xl screens 
        */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-[45%] translate-x-1/2 z-30 w-[360px] h-[360px] xl:w-[460px] xl:h-[460px] bg-emerald-50 rounded-full shadow-[0_30px_60px_rgba(4,60,38,0.4)] flex-col items-center justify-center p-8 xl:p-12 text-center border-[6px] xl:border-8 border-emerald-950/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-full"
            >
              <div className="mb-4 xl:mb-6 text-emerald-950">
                {(() => {
                  const IconComponent = principlesData[activeIndex].icon;
                  return <IconComponent className="w-10 h-10 xl:w-14 xl:h-14" strokeWidth={1.2} />;
                })()}
              </div>

              <p className="text-[9px] xl:text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 xl:mb-3">
                {principlesData[activeIndex].subtitle}
              </p>

              <h3 className="text-xl xl:text-[2rem] font-bold text-emerald-950 mb-3 xl:mb-4 leading-tight tracking-tight">
                {principlesData[activeIndex].title}
              </h3>

              <p className="text-emerald-900/70 text-xs xl:text-sm leading-relaxed max-w-[280px] mx-auto font-medium">
                {principlesData[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile/Tablet Circle Display */}
      {/* FIXED: Responsive dimensions to prevent overflow on small screens */}
      <div className="lg:hidden relative w-full mt-12 sm:mt-16 px-4 z-20">
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square mx-auto bg-emerald-50 rounded-full shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 text-center border-[6px] border-emerald-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="mb-3 sm:mb-4 text-emerald-950">
                {(() => {
                  const IconComponent = principlesData[activeIndex].icon;
                  return <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.2} />;
                })()}
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-1.5 sm:mb-2">
                {principlesData[activeIndex].subtitle}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-950 mb-2 leading-tight tracking-tight">
                {principlesData[activeIndex].title}
              </h3>
              <p className="text-emerald-900/70 text-[11px] sm:text-xs leading-relaxed font-medium px-2">
                {principlesData[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}