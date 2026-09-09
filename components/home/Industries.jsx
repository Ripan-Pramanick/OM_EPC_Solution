"use client";
import { motion } from 'motion/react';
import { X, ArrowRight, Building2, ShieldCheck, Network } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

// Fallback images in case they are not in your images.js
const defaultImages = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
];

export default function Industries() {
  // IT Infrastructure tailored data to match the UI layout
  const highlightedProjects = [
    {
      id: 1,
      category: "Enterprise",
      title: "Corporate Data Center Setup",
      location: "Salt Lake Sector V, Kolkata • 17 Aug, 2025",
      icon: Building2,
      image: defaultImages[0]
    },
    {
      id: 2,
      category: "Security",
      title: "Multi-Floor CCTV Grid Layout",
      location: "New Town Business Park • 05 Sep, 2025",
      icon: ShieldCheck,
      image: defaultImages[1]
    },
    {
      id: 3,
      category: "Connectivity",
      title: "Structured Network Cabling",
      location: "Rajarhat IT Hub, WB • 22 Oct, 2025",
      icon: Network,
      image: defaultImages[2]
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-navy tracking-widest uppercase mb-6"
          >
            <X size={12} className="text-muted" /> INDUSTRIES SERVED
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy tracking-tight max-w-2xl leading-[1.1]"
          >
            Engineering Infrastructures That Inspire Growth
          </motion.h2>
        </div>

        {/* Expandable Hover Cards List */}
        <div className="flex flex-col gap-6">
          {highlightedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative w-full h-[140px] hover:h-[380px] flex overflow-hidden rounded-[2rem] border border-gray-200 bg-[#FAF9F6] transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer shadow-sm hover:shadow-xl"
            >

              {/* Left Content Area */}
              <div className="relative w-[50%] md:w-[45%] h-full shrink-0 bg-[#FAF9F6]">

                {/* Title & Category (Moves up on hover) */}
                <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-10 right-4 group-hover:top-10 group-hover:-translate-y-0 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-muted mb-2">
                    <project.icon size={14} /> {project.category}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-navy leading-tight pr-4">
                    {project.title}
                  </h3>
                </div>

                {/* Hidden Details & Button (Fades in and slides up on hover) */}
                <div className="absolute bottom-10 left-6 md:left-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 pointer-events-none group-hover:pointer-events-auto">

                  <p className="flex items-center gap-2 text-xs font-medium text-muted mb-6">
                    <ArrowRight size={14} className="text-navy" /> {project.location}
                  </p>

                  {/* Using your exact premium animated button */}
                  <Button variant="premium">Get a Quote</Button>
                </div>

              </div>

              {/* Right Image Area */}
              <div className="relative w-[50%] md:w-[55%] h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[10s] group-hover:scale-110"
                />
                {/* Subtle inner shadow/gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Load More Button (Bottom Center) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button variant="premium">Load More</Button>
        </motion.div>

      </div>
    </section>
  );
}