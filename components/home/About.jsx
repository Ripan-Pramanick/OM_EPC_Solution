"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/data/images';
import { ArrowRight, ServerCog, Target, Zap, Info } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const steps = [
    { id: "01", title: "Assess & Design", icon: Target },
    { id: "02", title: "Deploy & Execute", icon: Zap },
    { id: "03", title: "Maintain & Manage", icon: ServerCog },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-emerald-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

        {/* LEFT COLUMN: Images & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          // FIXED: Adjusted height for mobile/tablet to prevent stretching
          className="relative h-[480px] sm:h-[550px] lg:h-[650px] w-full max-w-[500px] lg:max-w-none mx-auto"
        >
          {/* Top Left Image */}
          {/* FIXED: Responsive width and height */}
          <div className="absolute top-0 left-0 w-[65%] md:w-[55%] h-[260px] sm:h-[320px] lg:h-[380px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden z-0 shadow-[0_8px_30px_rgba(4,60,38,0.06)]">
            <Image
              src={images.about}
              alt="Engineering Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right White Info Card: "The Foundation" */}
          {/* FIXED: Increased width on mobile, reduced padding/gap and font sizes to prevent squishing */}
          <div className="absolute top-[2%] md:top-[8%] right-0 w-[70%] sm:w-[55%] md:w-[45%] bg-white rounded-[1.25rem] md:rounded-2xl p-4 md:p-6 shadow-[0_15px_40px_rgba(4,60,38,0.05)] z-20 flex gap-3 md:gap-5 border border-emerald-50">
            <div className="shrink-0 w-8 h-8 md:w-11 md:h-11 rounded-t-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <ServerCog className="w-4 h-4 md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 text-sm md:text-base mb-1 md:mb-1.5 tracking-tight">The Foundation</h4>
              <p className="text-[11px] md:text-[13px] text-emerald-900/60 leading-relaxed mb-3 md:mb-4 font-medium line-clamp-4 sm:line-clamp-none">
                Since 2010, we’ve built reliable IT infrastructure designed for performance, security, and growth.
              </p>
              <Link href="#services" className="text-[11px] md:text-[13px] font-bold text-emerald-950 flex items-center gap-1.5 hover:text-emerald-700 transition-colors group w-fit">
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> Read More
              </Link>
            </div>
          </div>

          {/* Bottom Right Image */}
          {/* FIXED: Responsive width, height and bottom position */}
          <div className="absolute bottom-[8%] md:bottom-[10%] right-0 w-[75%] md:w-[60%] h-[240px] sm:h-[280px] lg:h-[340px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden z-10 shadow-[0_8px_30px_rgba(4,60,38,0.06)] border-4 border-[#F4F9F7]">
            <Image
              src={images.services.networking}
              alt="Server Infrastructure"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Left Dark Stats Card: "500+ Projects" */}
          {/* FIXED: Responsive width, padding, text sizes, and hid the icon on extra small screens */}
          <div className="absolute bottom-0 md:bottom-[5%] left-0 md:left-[2%] w-[55%] sm:w-[45%] md:w-[42%] bg-emerald-950 rounded-2xl p-4 md:p-7 shadow-[0_20px_40px_rgba(4,60,38,0.12)] z-30 flex items-center justify-between gap-2">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-white leading-none tracking-tight mb-1 md:mb-2">500+</h3>
              <p className="text-[9px] sm:text-[11px] md:text-[13px] font-semibold text-emerald-200/80 leading-snug uppercase tracking-widest">
                Projects<br className="hidden sm:block" /> Completed
              </p>
            </div>
            <div className="hidden sm:flex w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 items-center justify-center text-white shrink-0">
              <Target className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Text & Process Rows */}
        <div className="flex flex-col lg:pl-10">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-emerald-200/60 bg-white/60 rounded-full px-4 py-1.5 text-[10px] font-bold text-emerald-950 tracking-widest uppercase mb-8 shadow-sm">
            <Info size={12} className="text-emerald-700" strokeWidth={2.5} /> ABOUT US
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-emerald-950 leading-[1.1] mb-6 tracking-tight">
              Innovating Systems,<br />Empowering Growth
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-emerald-900/70 text-base md:text-lg leading-relaxed max-w-lg mb-12">
              We are a dedicated IT and infrastructure agency, focused on designing functional, secure, and timeless operational spaces for modern businesses.
            </p>
          </motion.div>

          {/* Process Rows (01, 02, 03) */}
          <div className="flex flex-col mb-12 border-t border-emerald-900/10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between py-5 border-b border-emerald-900/10 hover:bg-emerald-50/50 hover:pl-4 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-6">
                  {/* Subtle Number */}
                  <span className="text-sm font-bold text-emerald-900/30 font-mono tracking-widest group-hover:text-emerald-700 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-lg md:text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors tracking-tight">
                    {step.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm font-medium text-emerald-900/50 mb-4 uppercase tracking-widest">
              Discover our story before you decide.
            </p>
            
            {/* CTA */}
            <Link href="/about" className="inline-flex items-center gap-2 font-bold text-emerald-950 hover:text-emerald-700 transition-colors group text-lg pb-1 border-b-2 border-emerald-900 w-fit">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              More About Us
            </Link>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}