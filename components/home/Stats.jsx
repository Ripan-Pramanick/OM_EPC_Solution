"use client";
import { motion } from 'framer-motion';
import { BatteryCharging, Wrench, Zap, Activity, Target } from 'lucide-react';

const features = [
  {
    id: "01",
    title: "Reliable Power Protection",
    desc: "Online UPS systems engineered to deliver stable, uninterrupted power for critical equipment.",
    icon: BatteryCharging
  },

  {
    id: "02",
    title: "Expert Technical Support",
    desc: "Professional installation, maintenance, and troubleshooting to keep your UPS system performing reliably.",
    icon: Wrench
  },

  {
    id: "03",
    title: "Seamless Power Continuity",
    desc: "High-performance backup power solutions that protect servers, networks, and essential business equipment.",
    icon: Zap
  }
];

export default function Stats() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#F4F9F7] overflow-hidden">

      {/* Subtle Technical Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Gentle Mint Gradient Overlay for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          {/* LEFT COLUMN: Content & Understated Visual */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-emerald-200/60 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 text-[10px] font-bold text-emerald-950 tracking-widest uppercase mb-6 shadow-sm w-fit"
            >
              <Target size={12} className="text-emerald-700" strokeWidth={2.5} />
              WHY EPC
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-emerald-950 tracking-tight leading-[1.1] mb-6"
            >
              Power Infrastructure Built Around Your Business
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-emerald-900/70 text-base md:text-lg leading-relaxed max-w-lg mb-10"
            >
              Reliable UPS systems, backup power, and expert support designed to keep your critical operations running without interruption.
            </motion.p>

            {/* Subtle Supporting Visual Element (Understated Statistic) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-5 p-4 pr-8 bg-white/70 backdrop-blur-md border border-emerald-100 rounded-2xl w-fit"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                <Activity size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-emerald-950 font-bold text-[22px] leading-none mb-1.5 tracking-tight">
                  99.9% Power Availability
                </h5>
                <p className="text-emerald-900/60 text-xs font-bold uppercase tracking-widest">
                  RELIABLE BACKUP POWER
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stacked Feature Items */}
          <div className="flex flex-col border-t border-emerald-900/10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                // Thin divider between items
                className="group flex flex-row items-start gap-5 md:gap-8 py-8 md:py-10 border-b border-emerald-900/10 cursor-default"
              >
                {/* Large Subtle Number */}
                <div className="w-14 md:w-20 shrink-0 pt-1">
                  <span className="text-4xl md:text-5xl font-bold text-emerald-900/15 group-hover:text-emerald-700 transition-colors duration-500 font-mono">
                    {feature.id}
                  </span>
                </div>

                {/* Text & Outline Icon */}
                <div className="flex-1">
                  <h4 className="flex items-center gap-3 text-xl md:text-[22px] font-bold text-emerald-950 mb-3 group-hover:text-emerald-800 transition-colors duration-300 tracking-tight">
                    <feature.icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-emerald-700 group-hover:scale-110 transition-transform duration-500 shrink-0"
                    />
                    {feature.title}
                  </h4>
                  <p className="text-emerald-900/70 text-sm md:text-base leading-relaxed max-w-md">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}