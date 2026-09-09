"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { interactiveServices } from '@/data/servicesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ServicesCrafted() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="min-h-screen w-full bg-[#F5F7FF] relative overflow-hidden flex items-center py-20">
      
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#4338CA_1px,transparent_1px),linear-gradient(to_bottom,#4338CA_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-bold text-indigo-700 tracking-widest uppercase mb-4 px-3 py-1.5 border border-indigo-100 rounded-full bg-indigo-50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span> OUR SERVICES
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#111827] mb-4 tracking-tight"
          >
            Services Crafted for Your Business
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed"
          >
            From installation to ongoing maintenance, we provide the complete technology support your business needs to stay connected and secure.
          </motion.p>
        </div>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:grid grid-cols-[1fr_1.2fr] gap-12 xl:gap-16 items-stretch h-[60vh] min-h-[550px] max-h-[700px]">
          
          {/* LEFT: Vertical Service List */}
          <div className="flex flex-col border-l-2 border-gray-200 py-2 h-full justify-between">
            {interactiveServices.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className="group relative w-full flex-1 flex items-center justify-between px-6 text-left transition-all duration-300"
                >
                  <div className={`absolute left-[-2px] top-0 h-full w-[2px] transition-all duration-300 ${isActive ? 'bg-indigo-700' : 'bg-transparent group-hover:bg-indigo-300'}`} />
                  
                  <div className={`absolute inset-0 rounded-r-2xl transition-all duration-300 ${isActive ? 'bg-white shadow-[4px_0_15px_rgba(0,0,0,0.03)]' : 'bg-transparent group-hover:bg-white/50'}`} />

                  <div className="relative z-10 flex items-center gap-6">
                    <span className={`text-sm font-bold tracking-widest transition-colors ${isActive ? 'text-indigo-700' : 'text-gray-400'}`}>
                      {service.number}
                    </span>
                    <span className={`text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-[#111827]' : 'text-gray-500 group-hover:text-[#111827]'}`}>
                      {service.title}
                    </span>
                  </div>

                  <div className={`relative z-10 transition-transform duration-300 ${isActive ? 'text-indigo-700 translate-x-0 opacity-100' : 'text-gray-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                    <ArrowRight size={20} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Image & Content Panel */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl bg-white border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={interactiveServices[activeIndex].image} 
                    alt={interactiveServices[activeIndex].title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gray-900/10" />
                </div>
                
                {/* 
                  UPDATED CARD: Flushed completely to Bottom-Left 
                  Classes used: absolute bottom-0 left-0 rounded-none rounded-tr-[3rem] 
                */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute bottom-0 left-0 w-[95%] md:w-[90%] xl:w-[85%] bg-white/95 backdrop-blur-md rounded-none rounded-tr-[3rem] p-8 md:p-10 shadow-[10px_-10px_30px_rgba(0,0,0,0.05)] border-t border-r border-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-700 border border-indigo-100 shrink-0">
                      {(() => {
                        const Icon = interactiveServices[activeIndex].icon;
                        return <Icon size={22} strokeWidth={1.5} />;
                      })()}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#111827] leading-tight">
                      {interactiveServices[activeIndex].title}
                    </h3>
                  </div>
                  
                  <p className="text-[#64748B] text-sm leading-relaxed mb-6 max-w-lg">
                    {interactiveServices[activeIndex].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    {interactiveServices[activeIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-[#111827] font-medium">
                        <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" className="shadow-md hover:shadow-lg text-sm px-6 py-2">
                    Learn More
                  </Button>
                </motion.div>
                
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4 mt-8">
          {interactiveServices.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-indigo-700 font-bold">{service.number}</span>
                    <span className="text-lg font-bold text-[#111827]">{service.title}</span>
                  </div>
                  <ArrowRight className={`text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-90 text-indigo-700' : ''}`} size={20} />
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="relative w-full h-40 rounded-xl overflow-hidden mb-6 border border-gray-100">
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                      </div>
                      <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-sm text-[#111827]">
                            <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button variant="primary" className="w-full text-sm py-3">Learn More</Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}