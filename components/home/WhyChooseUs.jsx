"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { images } from '@/data/images';
import { Award, Lightbulb, UserCog, Server, Headset, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-emerald-50 overflow-hidden">

      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#047857_1px,transparent_1px),linear-gradient(to_bottom,#047857_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Column: Content */}
        <div className="relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 border border-emerald-200 bg-emerald-100 rounded-full px-4 py-1.5 text-xs font-bold text-emerald-950 tracking-widest uppercase mb-6 md:mb-8 shadow-sm">
              <Award size={12} className="text-emerald-950/70" /> WHY CHOOSE US
            </div>

            {/* Headings and Paragraphs */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] mb-4 md:mb-6 tracking-tight">
              Reliable Power. Trusted Support.
            </h2>

            <p className="text-slate-500 text-sm sm:text-base md:text-lg mb-10 md:mb-12 max-w-2xl leading-relaxed">
              We provide dependable UPS and power backup solutions designed to keep your business running smoothly. From system selection and installation to maintenance and support, we focus on reliable performance and long-term value.
            </p>
          </motion.div>

          {/* Middle: 2 Feature Blocks */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10 md:mb-12">

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Half-Circle Icon */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
                <div className="absolute left-0 w-8 sm:w-10 h-full bg-emerald-200/60 rounded-l-full"></div>
                <Award className="relative z-10 text-slate-900" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Expert Guidance</h4>
                <p className="text-sm text-slate-500 mb-3 sm:mb-4 leading-relaxed">
                 We help you choose the right UPS and power backup solution based on your equipment, load requirements, and business needs.
                </p>
                <Link href="#about" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors group">
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /> Read More
                </Link>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
                <div className="absolute left-0 w-8 sm:w-10 h-full bg-emerald-200/60 rounded-l-full"></div>
                <Lightbulb className="relative z-10 text-slate-900" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Professional Installation</h4>
                <p className="text-sm text-slate-500 mb-3 sm:mb-4 leading-relaxed">
                 Our team ensures proper installation, configuration, and testing for safe and reliable UPS performance.
                </p>
                <Link href="#services" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors group">
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /> Read More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom: Dark 3-Column Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-emerald-700 rounded-[2rem] p-6 sm:p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 shadow-2xl"
          >
            {/* Reason 01 */}
            <div>
              <UserCog className="text-emerald-50 mb-4 md:mb-5" size={28} strokeWidth={1.5} />
              <p className="text-[10px] font-bold text-emerald-50 tracking-[0.2em] mb-1.5 md:mb-2 uppercase">Reason 01</p>
              <h4 className="text-base md:text-lg font-bold text-emerald-100 mb-2 md:mb-3">Reliable UPS Solutions</h4>
              <p className="text-xs md:text-sm text-emerald-50 leading-relaxed">
               Quality UPS systems designed to provide stable and uninterrupted power for critical equipment.
              </p>
            </div>

            {/* Reason 02 */}
            <div>
              <Server className="text-emerald-50 mb-4 md:mb-5" size={28} strokeWidth={1.5} />
              <p className="text-[10px] font-bold text-emerald-50 tracking-[0.2em] mb-1.5 md:mb-2 uppercase">Reason 02</p>
              <h4 className="text-base md:text-lg font-bold text-emerald-100 mb-2 md:mb-3">Professional Service</h4>
              <p className="text-xs md:text-sm text-emerald-50 leading-relaxed">
                Complete support from installation and setup to maintenance and troubleshooting.
              </p>
            </div>

            {/* Reason 03 */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Headset className="text-emerald-50 mb-4 md:mb-5" size={28} strokeWidth={1.5} />
              <p className="text-[10px] font-bold text-emerald-50 tracking-[0.2em] mb-1.5 md:mb-2 uppercase">Reason 03</p>
              <h4 className="text-base md:text-lg font-bold text-emerald-100 mb-2 md:mb-3">Fast Technical Support</h4>
              <p className="text-xs md:text-sm text-emerald-50 leading-relaxed">
                Responsive assistance to help minimize downtime and keep your systems running.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Tall Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          // FIXED: Adjusted height for mobile/tablet to prevent massive stretching
          className="relative w-full h-[350px] sm:h-[450px] lg:h-full lg:min-h-[700px] rounded-[2rem] overflow-hidden shadow-xl"
        >
          <Image
            src={images.services.cctv}
            alt="OM EPC Infrastructure Setup"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
          {/* Subtle overlay for better blending */}
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
        </motion.div>

      </div>
    </section>
  );
}