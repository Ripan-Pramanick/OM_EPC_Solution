"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { images } from '@/data/images';
import { X, Award, Lightbulb, UserCog, Server, Headset, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    // Updated background color to #F5F7FF to match the reference image
    <section className="relative py-24 bg-[#F5F7FF] overflow-hidden">

      {/* Subtle Grid Background Pattern replacing the old wireframe */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#4338CA_1px,transparent_1px),linear-gradient(to_bottom,#4338CA_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Added relative z-10 to keep content above the grid pattern */}
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Column: Content */}
        <div className="relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-[#FAF9F6] rounded-full px-4 py-1.5 text-xs font-bold text-navy tracking-widest uppercase mb-8 shadow-sm">
              <X size={12} className="text-muted" /> WHY CHOOSE US
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.1] mb-6 tracking-tight">
              Discover the Difference We Can Make
            </h2>

            <p className="text-muted text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
              Simple and easy to distinguish in a free hour, when our power of choice is untrammelled. We deliver uncompromising IT quality, ensuring your digital and physical infrastructure is resilient and scalable.
            </p>
          </motion.div>

          {/* Middle: 2 Feature Blocks (Half-circle icon design) */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              {/* Half-Circle Icon */}
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <div className="absolute left-0 w-10 h-full bg-indigo-100/50 rounded-l-full"></div>
                <Award className="relative z-10 text-navy" size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Proven Expertise</h4>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  Many years of hands-on experience in delivering successful IT and networking projects.
                </p>
                <Link href="#about" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-primary transition-colors group">
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
              className="flex gap-4"
            >
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <div className="absolute left-0 w-10 h-full bg-indigo-100/50 rounded-l-full"></div>
                <Lightbulb className="relative z-10 text-navy" size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Creative Solutions</h4>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  Advanced hardware configurations that blend high functionality with security.
                </p>
                <Link href="#services" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-primary transition-colors group">
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
            className="bg-indigo-700 rounded-[2rem] p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl"
          >
            {/* Reason 01 */}
            <div>
              <UserCog className="text-white/80 mb-5" size={28} strokeWidth={1.5} />
              <p className="text-[10px] font-bold text-white/50 tracking-[0.2em] mb-2">REASON 01</p>
              <h4 className="text-lg font-bold text-white mb-3">Expert Technicians</h4>
              <p className="text-sm text-indigo-100 leading-relaxed">
                Skilled IT professionals configuring resilient and secure enterprise networks.
              </p>
            </div>

            {/* Reason 02 */}
            <div>
              <Server className="text-white/80 mb-5" size={28} strokeWidth={1.5} />
              <p className="text-[10px] font-bold text-white/50 tracking-[0.2em] mb-2">REASON 02</p>
              <h4 className="text-lg font-bold text-white mb-3">Premium Hardware</h4>
              <p className="text-sm text-indigo-100 leading-relaxed">
                Durable, enterprise-grade materials and servers for lasting operational uptime.
              </p>
            </div>

            {/* Reason 03 */}
            <div>
              <Headset className="text-white/80 mb-5" size={28} strokeWidth={1.5} />
              <p className="text-[10px] font-bold text-white/50 tracking-[0.2em] mb-2">REASON 03</p>
              <h4 className="text-lg font-bold text-white mb-3">24/7 AMC Support</h4>
              <p className="text-sm text-indigo-100 leading-relaxed">
                Dedicated maintenance contracts ensuring every project runs on time, every time.
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
          className="relative w-full h-[500px] lg:h-full min-h-[700px] rounded-[2rem] overflow-hidden shadow-xl"
        >
          <Image
            src={images.services.cctv}
            alt="OM EPC Infrastructure Setup"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
          {/* Subtle overlay for better blending */}
          <div className="absolute inset-0 bg-navy/10 mix-blend-overlay"></div>
        </motion.div>

      </div>
    </section>
  );
}