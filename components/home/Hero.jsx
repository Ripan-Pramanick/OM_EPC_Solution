"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
  const inlineImages = [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&q=80",
  ];

  return (
    <section className="w-full pt-28 pb-10 px-4 md:px-8 bg-white">
     
      <div className="relative w-full max-w-[1600px] mx-auto h-[85vh] min-h-[650px] rounded-[3rem] overflow-hidden shadow-2xl flex items-start justify-end bg-navy border border-gray-100">
        
        {/* Background Image inside the floating box */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" 
            alt="Modern IT Server Room" 
            fill 
            className="object-cover opacity-60 md:opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-navy/40 md:bg-transparent" />
        </div>

        {/* The White Docked Card */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-soft w-full md:w-[500px] lg:w-[450px] h-[calc(100%-10rem)] min-h-[550px] rounded-b-[3rem] px-8 md:px-12 flex flex-col justify-center relative z-10 md:mr-16 lg:mr-60 shadow-2xl border-b border-gray-200"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Staggered Typography */}
            <div className="flex flex-col gap-3 md:gap-4 mb-8">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-[3rem] md:text-[3rem] lg:text-6xl font-bold text-dark leading-none tracking-tight">Reliable</span>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative shrink-0 shadow-md">
                  <Image src={inlineImages[0]} alt="Servers" fill className="object-cover" />
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative shrink-0 shadow-md">
                  <Image src={inlineImages[1]} alt="Network" fill className="object-cover" />
                </div>
                <span className="text-[3rem] md:text-[3rem] lg:text-6xl font-bold text-dark leading-none tracking-tight">Scalable</span>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-[3rem] md:text-[3rem] lg:text-6xl font-bold text-dark leading-none tracking-tight">Systems</span>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative shrink-0 shadow-md">
                  <Image src={inlineImages[2]} alt="Security" fill className="object-cover" />
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative shrink-0 shadow-md">
                  <Image src={inlineImages[3]} alt="Hardware" fill className="object-cover" />
                </div>
                <span className="text-[3rem] md:text-[3rem] lg:text-6xl font-bold text-dark leading-none tracking-tight">Solutions</span>
              </div>
            </div>

            <p className="text-muted text-base md:text-lg mb-10 max-w-sm leading-relaxed">
              Engineering elegant, functional IT infrastructure that blends high-performance networking and power backup for lasting continuity.
            </p>

            {/* Pill Button */}
            <Link href="#contact">
            <Button variant="primary">Explore Our Services</Button>
          </Link>
          </motion.div>
        </motion.div>

       

      </div>
    </section>
  );
}