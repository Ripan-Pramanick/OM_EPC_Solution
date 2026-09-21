"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '@/data/siteData';
import { ArrowRight, ArrowLeft, Layers } from 'lucide-react';
import Image from 'next/image';
import { images } from '@/data/images';


const ServiceCard = ({ service, index, cardImage, outlineText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}     
      className="group relative h-fit min-h-[420px] md:min-h-[460px] rounded-[2rem] border border-white/20 p-3 md:p-4 flex flex-col justify-between overflow-hidden bg-white/10 backdrop-blur-md hover:border-white/40 transition-colors duration-500 shadow-2xl"
    >
    
      <div className="absolute top-0 left-0 w-full h-[65%] z-0 overflow-hidden rounded-t-[2rem]">
        <Image
          src={cardImage}
          alt={service.title}
          fill
          className="object-cover opacity-40 mix-blend-overlay group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out"
        />
     
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

     
      <div className="flex-1 flex flex-col justify-start z-10 relative pt-2 pl-2 mb-8">
        <div className="w-12 h-12 rounded-full bg-[#EAFBF1] text-[#043C26] flex items-center justify-center shadow-lg mb-8 mt-2">
          <service.icon size={22} strokeWidth={2.5} />
        </div>

        <h3
          className="text-3xl md:text-[2rem] font-bold tracking-[0.15em] text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
        >
          {outlineText}
        </h3>
      </div>

     
      <motion.div layout className="bg-[#DDFBEA] p-6 rounded-2xl rounded-br-[3rem] w-full relative z-20 shadow-xl group-hover:-translate-y-1 transition-transform duration-500 mt-auto">
        <motion.h4 layout className="text-lg md:text-xl font-bold text-[#043C26] mb-2">
          {service.title}
        </motion.h4>
        
        <motion.p 
          layout 
          className={`text-[#043C26]/70 text-sm mb-6 leading-relaxed font-medium ${isExpanded ? '' : 'line-clamp-2'}`}
        >
          {service.description}
        </motion.p>

        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#043C26] hover:opacity-70 transition-opacity outline-none"
        >
          <ArrowRight 
            size={16} 
            strokeWidth={2.5} 
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
          /> 
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4; 
  
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const currentServices = services.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  
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
  <Layers size={12} className="text-white/80" /> SERVICES
</motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 tracking-tight"
          >
           Services Crafted for Reliable Power
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed"
          >
           From installation to maintenance, we provide complete UPS and power backup support for uninterrupted operations.
          </motion.p>
        </div>

      
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start min-h-[460px]">
          <AnimatePresence mode="popLayout">
            {currentServices.map((service, index) => {
              const outlineText = service.title.split(' ')[0].toUpperCase();
              const cardImage = service.image || serviceImages[index % 4];

              return (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index} 
                  cardImage={cardImage} 
                  outlineText={outlineText} 
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

       
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-8 mt-16 text-white text-sm font-bold"
          >
          
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 hover:text-[#9CF3C6] transition-colors opacity-70 hover:opacity-100 disabled:opacity-30 disabled:hover:text-white cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} strokeWidth={2.5} /> Prev
            </button>

    
            <div className="flex gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === i + 1 
                      ? 'w-6 bg-[#9CF3C6]' 
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 hover:text-[#9CF3C6] transition-colors opacity-70 hover:opacity-100 disabled:opacity-30 disabled:hover:text-white cursor-pointer disabled:cursor-not-allowed"
            >
              Next <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}