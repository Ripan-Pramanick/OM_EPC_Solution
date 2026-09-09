"use client";
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Network } from 'lucide-react';

// Using internal data to match the new 3-column layout seamlessly.
// You can move this to your @/data/siteData file if preferred.
const featureStats = [
  {
    title: "Reliable Infrastructure",
    desc: "Fresh, innovative systems that inspire unique workspaces with uninterrupted purpose.",
    icon: Cpu
  },
  {
    title: "Expert Technical Support",
    desc: "Technology hardware combining comfort, luxury, and refined professional elegance.",
    icon: ShieldCheck
  },
  {
    title: "Seamless Connectivity",
    desc: "Strong, visionary networking structures that redefine modern office spaces.",
    icon: Network
  }
];

export default function Stats() {
  return (
    <section className="w-full bg-[#FAF9F6]">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1600px] mx-auto">
        {featureStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="flex flex-col w-full group"
          >
            {/* Top Text Section (Light Background) */}
            <div className="bg-[#FAF9F6] pt-24 pb-12 px-8 flex-1 flex flex-col items-center text-center">
              <h3 className="text-[22px] font-bold text-[#111827] mb-5 tracking-tight group-hover:text-indigo-700 transition-colors duration-300">
                {stat.title}
              </h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed max-w-[320px]">
                {stat.desc}
              </p>
            </div>

            {/* Middle Icon Section (Perfectly Split Background) */}
            <div className="relative w-full h-[180px] flex items-center justify-center">
              
              {/* The Seamless Split Background */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#FAF9F6]" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F5F7FF]" />

              {/* Decorative Geometric Elements */}
              <div className="absolute w-[180px] h-[2px] bg-gray-200 rotate-[45deg] z-10 transition-transform duration-700 group-hover:rotate-[135deg]" />
              <div className="absolute w-[140px] h-[140px] rounded-full border border-gray-200 z-10" />

              {/* Main Icon Container */}
              <div className="relative z-20 w-[84px] h-[84px] bg-indigo-100 rounded-full border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center group-hover:border-indigo-100 group-hover:shadow-[0_10px_30px_rgba(67,56,202,0.1)] transition-all duration-500">
                <stat.icon size={34} className="text-[#334155] group-hover:text-indigo-700 transition-colors duration-500" strokeWidth={1.2} />
              </div>

            </div>

            {/* Bottom Padding Area (White Background) */}
            <div className="bg-[#FAF9F6] h-16 w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}