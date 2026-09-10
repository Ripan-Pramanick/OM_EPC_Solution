"use client";
import { motion } from 'motion/react';
import { services } from '@/data/siteData';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/data/images';

export default function Services() {
  // Mapping fallback images for each card based on the index
  const serviceImages = [
    images.hero?.main || images.services.networking,
    images.services.networking,
    images.services.ups,
    images.services.cctv
  ];

  return (
    <section id="services" className="relative py-24 min-h-[850px] flex items-center overflow-hidden bg-[#070E17]">
      
      {/* Background Image with Dark Moody Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={images.services.networking}
          alt="IT Infrastructure"
          fill
        
          className="object-cover opacity-50"
          priority
        />
        {/* Gradient-এর মাঝখানের অংশটি হালকা (40%) করা হয়েছে */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070E17]/95 via-[#070E17]/40 to-[#070E17]/95" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-[10px] font-bold text-white tracking-widest uppercase mb-6 bg-white/10 backdrop-blur-md shadow-sm"
          >
            <X size={12} className="text-white/80" /> Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 tracking-tight"
          >
            Solutions Crafted for You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed"
          >
            From concept to completion, we've got your IT infrastructure covered.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const outlineText = service.title.split(' ')[0].toUpperCase();
            const cardImage = service.image || serviceImages[index % 4];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                // Glassmorphism Container
                className="group relative h-[420px] md:h-[460px] rounded-[2rem] border border-white/20 p-3 md:p-4 flex flex-col justify-between overflow-hidden bg-white/10 backdrop-blur-md hover:border-white/40 transition-colors duration-500 shadow-2xl"
              >
                {/* Inner Card Background Image */}
                <div className="absolute top-0 left-0 w-full h-[65%] z-0 overflow-hidden rounded-t-[2rem]">
                  <Image
                    src={cardImage}
                    alt={service.title}
                    fill
                    className="object-cover opacity-40 mix-blend-overlay group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  {/* Subtle fade out at the bottom of the image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                </div>

                {/* Top Section: Mint Icon & Outline Text */}
                <div className="flex-1 flex flex-col justify-between z-10 relative pt-2 pl-2">
                  <div className="w-12 h-12 rounded-full bg-[#EAFBF1] text-[#043C26] flex items-center justify-center shadow-lg">
                    <service.icon size={22} strokeWidth={2.5} />
                  </div>

                  <h3
                    className="text-3xl md:text-[2rem] font-bold tracking-[0.15em] text-transparent mb-4"
                    style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                  >
                    {outlineText}
                  </h3>
                </div>

                {/* Bottom Section: Solid Light Mint Card */}
                <div className="bg-[#DDFBEA] p-6 rounded-2xl rounded-br-[3rem] w-full relative z-20 shadow-xl group-hover:-translate-y-1 transition-transform duration-500">
                  <h4 className="text-lg md:text-xl font-bold text-[#043C26] mb-2 line-clamp-1">
                    {service.title}
                  </h4>
                  <p className="text-[#043C26]/70 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#043C26] hover:opacity-70 transition-opacity">
                    <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" /> Read More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Slider Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-8 mt-16 text-white text-sm font-bold"
        >
          <button className="flex items-center gap-2 hover:text-[#9CF3C6] transition-colors opacity-70 hover:opacity-100">
            <ArrowLeft size={16} strokeWidth={2.5} /> Prev
          </button>

          <div className="flex gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9CF3C6]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
          </div>

          <button className="flex items-center gap-2 hover:text-[#9CF3C6] transition-colors opacity-70 hover:opacity-100">
            Next <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}