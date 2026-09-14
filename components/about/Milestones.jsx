"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { aboutImages } from '@/data/images';
import { milestones } from '@/data/aboutData';
import { X, Award, Trophy } from 'lucide-react';

export default function Milestones() {
    return (
        <section className="py-24 md:py-32 h-screen min-h-[750px] bg-emerald-950 relative overflow-hidden">

            {/* Subtle Emerald Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-800 tracking-widest uppercase mb-6 px-4 py-1.5 border border-emerald-200/80 rounded-full bg-emerald-100/90 backdrop-blur-sm shadow-sm"
                    >
                        <Trophy size={12} className="text-emerald-900" strokeWidth={2.5} /> OUR ACHIEVEMENTS
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-emerald-50 mb-6 tracking-tight"
                    >
                        Recognitions & Milestones
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    >
                        Discover a technical partner that reflects your business goals and transforms your IT infrastructure.
                    </motion.p>
                </div>

                {/* Image with Overlapping Badges */}
                <div className="relative max-w-4xl mx-auto mb-20 md:mb-28">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-[300px] md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-100"
                    >
                        <Image src={aboutImages.milestones} alt="Technical Team" fill className="object-cover" />
                    </motion.div>

                    {/* Left Award Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-24 w-[140px] h-[140px] md:w-[240px] md:h-[240px] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_15px_40px_-10px_rgba(4,120,87,0.15)] p-4 md:p-8 text-center border border-emerald-50"
                    >
                        <Award size={28} className="text-emerald-600 mb-2 md:mb-4" strokeWidth={1.5} />
                        <span className="text-[7px] md:text-[10px] font-bold text-emerald-600/70 tracking-widest uppercase mb-1 md:mb-2">TECH AWARDS</span>
                        <span className="text-[10px] md:text-sm font-bold text-emerald-950 leading-snug mb-1 md:mb-3">Trusted IT<br />Infrastructure<br />Firm</span>
                        <span className="text-[8px] md:text-[11px] font-semibold text-emerald-500">2026</span>
                    </motion.div>

                    {/* Right Award Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-24 w-[140px] h-[140px] md:w-[240px] md:h-[240px] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_15px_40px_-10px_rgba(4,120,87,0.15)] p-4 md:p-8 text-center border border-emerald-50"
                    >
                        <Award size={28} className="text-emerald-600 mb-2 md:mb-4" strokeWidth={1.5} />
                        <span className="text-[7px] md:text-[10px] font-bold text-emerald-600/70 tracking-widest uppercase mb-1 md:mb-2">TECH AWARDS</span>
                        <span className="text-[10px] md:text-sm font-bold text-emerald-950 leading-snug mb-1 md:mb-3">Trusted IT<br />Infrastructure<br />Firm</span>
                        <span className="text-[8px] md:text-[11px] font-semibold text-emerald-500">2026</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}