"use client";
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Network, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const defaultImages = [
  "/images/default_1.jpg",
  "/images/default_2.jpg",
  "/images/default_3.jpg"
];

export default function Industries() {
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
    <section className="relative py-20 md:py-24 bg-emerald-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-emerald-200 bg-emerald-100 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold text-emerald-950 tracking-widest uppercase mb-6 shadow-sm"
        >
          <Building2 size={12} className="text-emerald-800" /> INDUSTRIES SERVED
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight max-w-2xl leading-[1.1] mb-10 md:mb-12"
        >
          Engineering Infrastructures That Inspire Growth
        </motion.h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {highlightedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // FIXED: Adjusted heights for mobile (120px to 320px) and desktop (140px to 380px)
              className="group relative w-full h-[120px] hover:h-[300px] sm:h-[130px] sm:hover:h-[320px] md:h-[140px] md:hover:h-[380px] flex overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-emerald-200 bg-emerald-100 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer shadow-sm hover:shadow-xl"
            >
              
              {/* Left Content Area */}
              {/* FIXED: Gave the left side 55% width on mobile so content doesn't squish */}
              <div className="relative w-[55%] sm:w-[50%] md:w-[45%] h-full shrink-0 bg-emerald-100">
                
                <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-10 right-3 md:right-4 group-hover:top-5 sm:group-hover:top-8 md:group-hover:top-10 group-hover:-translate-y-0 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-emerald-900/60 mb-1.5 md:mb-2">
                    <project.icon size={12} className="md:w-[14px] md:h-[14px]" /> <span className="truncate">{project.category}</span>
                  </div>
                  <h3 className="text-[15px] sm:text-lg md:text-2xl font-bold text-emerald-950 leading-tight md:pr-4">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute bottom-5 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-10 right-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 pointer-events-none group-hover:pointer-events-auto">
                  <p className="flex items-start md:items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-medium text-emerald-900/70 mb-4 md:mb-6">
                    <ArrowRight size={12} className="text-emerald-950 mt-0.5 md:mt-0 shrink-0" /> 
                    <span className="leading-snug">{project.location}</span>
                  </p>
                  
                  {/* FIXED: Replaced nested Button with a properly styled Link tag for better performance */}
                  <Link 
                    href="/contact#contact-form"
                    prefetch={false}
                    className="w-fit flex items-center justify-center bg-emerald-950 hover:bg-emerald-800 text-emerald-50 px-5 md:px-7 py-2.5 md:py-3 rounded-xl text-[10px] md:text-[13px] font-bold transition-all shadow-md uppercase tracking-widest"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>

              {/* Right Image Area */}
              {/* FIXED: Adjusted width to 45% on mobile */}
              <div className="relative w-[45%] sm:w-[50%] md:w-[55%] h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[10s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}