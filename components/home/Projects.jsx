"use client";
import { motion } from 'motion/react';
import { X, Loader2, Settings } from 'lucide-react';
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

const items = [
  { image: '/home/home-industris-1.webp', title: 'Data Center & Servers' },
  { image: '/home/home-industris-2.webp', title: 'Network Infrastructure' },
  { image: '/home/home-industris-3.webp', title: 'CCTV & Security' },
  { image: '/home/home-about-1.webp', title: 'Modern Workstations' },
  { image: '/home/home-about-2.webp', title: 'Technical Support' },
  { image: '/home/home-intreactive-1.webp', title: 'Hardware Solutions' },
  { image: '/home/home-intreactive-2.webp', title: 'Server Management' },
  { image: '/home/home-intreactive-3.webp', title: 'Power & UPS' },
  { image: '/home/home-service-1.webp', title: 'Fiber Optics & Cabling' },
  { image: '/home/home-service-2.webp', title: 'Surveillance Systems' },
  { image: '/home/home-service-3.webp', title: 'IT Consulting' },
  { image: '/home/home-service-hero.webp', title: 'Cloud Infrastructure' },
  
  { image: '/home/home-industris-1.webp', title: 'IT Accessories' },
  { image: '/home//home-about-1.webp', title: 'Data Security' },
  { image: '/home/home-intreactive-3.webp', title: 'Corporate Laptops' },
  { image: '/home/home-industris-2.webp', title: 'Enterprise Printers' },
 
  { image: '/home/home-service-1.webp', title: 'AMC Services' },

];

export default function OurServices() {
  return (
    <section id="services" className="py-24 md:py-32 bg-emerald-100 relative overflow-hidden flex flex-col justify-center">


      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full mb-12">


        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-950 tracking-widest uppercase mb-6 px-4 py-1.5 border border-emerald-300 rounded-full bg-emerald-200 shadow-sm"
          >
            <Settings size={12} className="text-emerald-800" strokeWidth={2.5} /> OUR SERVICES
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