"use client";
import { motion } from 'motion/react';
import { X, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import DriftWall to prevent it from blocking the initial page load (speeds up website)
const DriftWall = dynamic(() => import('@/components/ui/DriftWall'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-emerald-950 rounded-[2.5rem]">
      <Loader2 size={40} className="text-emerald-500 animate-spin" />
    </div>
  )
});

// IT and Infrastructure themed images (Optimized with &w=400&h=300 to drastically reduce loading time)
const items = [
  { image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=300', title: 'Data Center & Servers', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400&h=300', title: 'Network Infrastructure', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400&h=300', title: 'CCTV & Security', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300', title: 'Modern Workstations', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300', title: 'Technical Support', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300', title: 'Hardware Solutions', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=300', title: 'Server Management', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400&h=300', title: 'Power & UPS', href: '#contact' },
];

export default function OurServices() {
  return (
    <section id="services" className="py-24 md:py-32 bg-emerald-100 relative overflow-hidden flex flex-col justify-center">

      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full mb-12">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-950 tracking-widest uppercase mb-6 px-4 py-1.5 border border-emerald-300 rounded-full bg-emerald-200 shadow-sm"
          >
            <X size={12} className="text-emerald-800" strokeWidth={2.5} /> OUR SERVICES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 tracking-tight leading-[1.1]"
          >
            What We Offer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-900/70 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our comprehensive range of IT infrastructure, networking, and technical support services tailored for your business needs.
          </motion.p>
        </div>
      </div>

      {/* DriftWall Animation Section - Limited to 1400px */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 z-10">
        <div 
          className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-900/10 bg-emerald-950 relative" 
          style={{ height: 600 }}
        >
          <DriftWall
            items={items}
            columns={5}
            tileWidth={200}
            tileHeight={132}
            gap={18}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0.6}
            dim={0.55}
            overlayColor="#022c22"
            radius={14}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
          />
        </div>
      </div>

    </section>
  );
}