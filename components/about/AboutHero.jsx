"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import WebThreads from '@/components/ui/WebThreads';
import { aboutImages } from '@/data/images'; 

export default function AboutHero() {
  return (
    <section className="w-full pt-22 pb-10 h-screen px-4 md:px-8 bg-emerald-950">
      
      {/* Background WebThreads Animation (Same as Hero_2) */}
      <div className="absolute inset-0 w-full h-full z-0">
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
      <div className="relative w-full max-w-[1600px] mx-auto h-[85vh] min-h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl flex items-start justify-end bg-emerald-950">

        {/* Background Image inside the floating box */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={aboutImages.hero}
            alt="IT Infrastructure Team"
            fill
            className="object-cover opacity-60 md:opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/40 md:bg-transparent" />
        </div>

        {/* The White Docked Card (Adapted for About Page) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-emerald-50 w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto pt-10 pb-10 px-6 md:px-10 flex flex-col justify-center relative z-10 md:mr-20 lg:mr-48 shadow-2xl rounded-b-[2.5rem] border-b border-emerald-100"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 border border-emerald-200/60 bg-white rounded-full px-4 py-1.5 text-[10px] font-bold text-emerald-900 tracking-widest uppercase mb-6 shadow-sm">
              GET TO KNOW US
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-emerald-950 mb-6 tracking-tight leading-[1.1]">
              Architects of <br /> Reliable IT
            </h1>
            
            {/* Paragraph */}
            <p className="text-emerald-900/70 text-sm md:text-base mb-10 leading-relaxed pr-2">
              Building scalable networks, robust security, and seamless infrastructure to drive your business forward.
            </p>

            {/* Pill Button */}
            <Link href="#contact">
              <Button>Discover Our Story</Button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}