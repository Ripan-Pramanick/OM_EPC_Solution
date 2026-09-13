"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutImages } from '@/data/images';
import { foundationRows } from '@/data/aboutData';
import { ArrowRight, ShieldCheck, Target, X } from 'lucide-react';
import Link from 'next/link';

export default function Foundation() {
  return (
    <section className="py-24 lg:py-32 bg-emerald-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

        {/* LEFT COLUMN: Overlapping Masonry Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-[550px] lg:h-[650px] w-full"
        >
          {/* Top Left Image (Foundation Main) */}
          <div className="absolute top-0 left-0 w-[55%] h-[320px] lg:h-[380px] rounded-[2.5rem] overflow-hidden z-0 shadow-[0_8px_30px_rgba(4,60,38,0.06)]">
            <Image
              src={aboutImages.foundationMain}
              alt="Technical Engineer Workspace"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right White Info Card: "Our Guarantee" */}
          <div className="absolute top-[8%] right-0 w-[45%] bg-white rounded-2xl p-6 shadow-[0_15px_40px_rgba(4,60,38,0.05)] z-20 flex gap-5 border border-emerald-50">
            <div className="shrink-0 w-11 h-11 rounded-t-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <ShieldCheck size={22} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 text-base mb-1.5 tracking-tight">Our Guarantee</h4>
              <p className="text-[13px] text-emerald-900/60 leading-relaxed mb-4 font-medium">
                Providing the right technology, professional service, and dependable support for your business.
              </p>
              <Link href="/services" className="text-[13px] font-bold text-emerald-950 flex items-center gap-1.5 hover:text-emerald-700 transition-colors group w-fit">
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> Read More
              </Link>
            </div>
          </div>

          {/* Bottom Right Image (Foundation Secondary) */}
          <div className="absolute bottom-[10%] right-0 w-[60%] h-[280px] lg:h-[340px] rounded-[2.5rem] overflow-hidden z-10 shadow-[0_8px_30px_rgba(4,60,38,0.06)] border-4 border-emerald-50">
            <Image
              src={aboutImages.foundationSecondary}
              alt="Computer Servicing"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Left Dark Stats Card: "10+ Years" */}
          <div className="absolute bottom-[5%] left-[2%] w-[42%] bg-emerald-950 rounded-2xl p-7 shadow-[0_20px_40px_rgba(4,60,38,0.12)] z-30 flex items-center justify-between">
            <div>
              <h3 className="text-[2.5rem] font-bold text-white leading-none tracking-tight mb-2">10+</h3>
              <p className="text-[13px] font-semibold text-emerald-200/80 leading-snug uppercase tracking-widest">
                Years of<br />Experience
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Target size={20} strokeWidth={1.5} />
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
              <X size={12} className="text-emerald-700" strokeWidth={2.5} /> ABOUT OM EPC
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-emerald-950 leading-[1.1] mb-6 tracking-tight">
              Technology Solutions,<br />Built Around Your Business
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-emerald-900/70 text-base md:text-lg leading-relaxed max-w-lg mb-12">
              OM EPC Solution provides reliable computer, printer, UPS, CCTV, networking and technical support solutions for businesses.
            </p>
          </motion.div>

          {/* Foundation Rows (from data) */}
          <div className="flex flex-col mb-12 border-t border-emerald-900/10">
            {foundationRows.map((row, index) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start justify-between py-5 border-b border-emerald-900/10 hover:bg-emerald-50/50 hover:pl-4 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-5 md:gap-6">
                  {/* Subtle Number */}
                  <span className="text-sm font-bold text-emerald-900/30 font-mono tracking-widest group-hover:text-emerald-700 transition-colors mt-1">
                    {row.id}
                  </span>
                  
                  {/* Title & Description */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-lg md:text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors tracking-tight">
                      {row.title}
                    </span>
                    <p className="text-emerald-900/70 text-sm leading-relaxed max-w-[340px]">
                      {row.desc}
                    </p>
                  </div>
                </div>
                
                {/* Arrow reveals on hover */}
                <ArrowRight size={18} className="text-emerald-700 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-2 shrink-0" strokeWidth={2} />
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