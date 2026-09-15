"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { contactPageImages } from '@/data/images'; 
import dynamic from 'next/dynamic';

// FIXED: Added missing '/' after '@' in the import path
const WebThreads = dynamic(() => import('@/components/ui/WebThreads'), { 
    ssr: false, 
    loading: () => <div className="absolute inset-0 bg-emerald-950 z-0"></div> 
});

export default function ContactHero() {
  return (
    <section className="relative w-full pt-20 pb-10 min-h-screen px-4 md:px-8 bg-emerald-950 flex flex-col justify-center overflow-hidden">
      
      {/* Background WebThreads Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <WebThreads
          color1="#00ff8b"
          color2="#00ff10"
          color3="#00ad26ff"
          speed={0.2}
          threadCount={6}
          frequency={5}
          spread={0.18}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={0.02}
          falloff={0.6}
          thickness={1.1}
          brightness={0.6}
          opacity={1}
          mirror={true}
          shimmer={false}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.3}
        />
      </div>

      {/* Main Inner Container */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[650px] h-[85vh] lg:h-[80vh] xl:h-[85vh] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex items-start justify-center md:justify-end bg-emerald-950 z-10">

        {/* Background Image inside the floating box */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={contactPageImages.hero}
            alt="Contact OM EPC Solution"
            fill
            className="object-cover opacity-60 md:opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/40 md:bg-transparent" />
        </div>

        {/* The White Docked Card */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-emerald-50 w-[92%] md:w-full max-w-[340px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[460px] h-auto pt-8 pb-10 md:pt-12 md:pb-12 px-6 md:px-10 flex flex-col justify-center relative z-10 md:mr-12 lg:mr-24 xl:mr-36 2xl:mr-48 shadow-2xl rounded-b-[2.5rem] border-b border-emerald-100"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 border border-emerald-200/60 bg-white rounded-full px-4 py-1.5 text-[10px] font-bold text-emerald-900 tracking-widest uppercase mb-6 shadow-sm">
              GET IN TOUCH
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-emerald-950 mb-6 tracking-tight leading-[1.1]">
              Contact <br /> Us
            </h1>
            
            {/* Paragraph */}
            <p className="text-emerald-900/70 text-sm lg:text-[15px] mb-10 leading-relaxed pr-2">
              Let's talk about your technology needs. Whether you have a question or need technical support, our team is here to help.
            </p>

            {/* Pill Button */}
            <Button 
              className="!bg-emerald-950 hover:!bg-emerald-800 text-emerald-50 shadow-lg cursor-pointer" 
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}