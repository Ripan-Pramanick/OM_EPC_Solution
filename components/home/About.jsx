"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { images } from '@/data/images';
import { ArrowRight, ChevronsRight, ServerCog, Target, X, Zap } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const steps = [
    { id: "01", title: "Assess & Design", icon: Target },
    { id: "02", title: "Deploy & Execute", icon: Zap },
    { id: "03", title: "Maintain & Manage", icon: ServerCog },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Column: Overlapping Masonry Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] w-full"
        >
          {/* Top Left Image */}
          <div className="absolute top-0 left-0 w-[55%] h-[320px] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-sm z-0">
            <Image
              src={images.about}
              alt="Engineering Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right White Info Card */}
          <div className="absolute top-[8%] right-0 w-[50%] bg-[#FAF9F6] rounded-2xl p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] z-20 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary">
              <ServerCog size={20} />
            </div>
            <div>
              <h4 className="font-bold text-navy text-sm md:text-base mb-1">The Foundation</h4>
              <p className="text-xs text-muted mb-3 leading-relaxed">
                Since 2010, we've been crafting robust IT infrastructure that balances performance and security.
              </p>
              <Link href="#services" className="text-xs font-bold text-navy flex items-center gap-1 hover:text-primary transition-colors">
                <ArrowRight size={14} /> Read More
              </Link>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-[10%] right-0 w-[60%] h-[280px] rounded-[2rem] overflow-hidden shadow-xl z-10">
            <Image
              src={images.services.networking}
              alt="Server Infrastructure"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Left Dark Stats Card */}
          <div className="absolute bottom-[5%] left-[5%] w-[45%] bg-[#36454F] rounded-2xl p-6 shadow-2xl z-30 flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
              <p className="text-sm font-medium text-gray-200 leading-snug">Projects<br />Completed</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6]/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm">
              <Target size={24} />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text & Features Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-navy tracking-wider mb-8 w-max hover:bg-soft transition-colors">
            <X size={12} className="text-muted" /> ABOUT US
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.1] mb-6 tracking-tight">
            Innovating Systems,<br />
            Empowering Growth
          </h2>

          <p className="text-muted mb-10 text-base leading-relaxed max-w-lg">
            We are a dedicated IT and infrastructure agency, focused on designing functional, secure, and timeless operational spaces for modern businesses.
          </p>

          {/* Styled List */}
          <div className="space-y-3 mb-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-center justify-between bg-soft/60 hover:bg-soft rounded-xl p-4 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <ChevronsRight size={18} className="text-muted" />
                  <span className="font-bold text-navy">{step.title}</span>
                </div>
                <span className="text-sm font-bold text-muted">{step.id}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted mb-4">Discover our story before you decide.</p>

          <Link href="#contact" className="inline-flex items-center gap-2 font-bold text-navy hover:text-primary transition-colors group">
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            More About Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}