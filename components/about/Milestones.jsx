"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { aboutImages } from '@/data/images';
import { milestones } from '@/data/aboutData';
import { X, Award } from 'lucide-react';

export default function Milestones() {
    return (
        <section className="py-24 md:py-32 h-screen min-h-[750px] bg-[#F5F7FF] relative overflow-hidden">

            {/* Subtle Background Pattern (Optional to match the wireframe feel) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#4338CA_1px,transparent_1px),linear-gradient(to_bottom,#4338CA_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-[#111827] tracking-widest uppercase mb-6 px-4 py-1.5 border border-gray-200 rounded-full bg-emerald-100 shadow-sm"
                    >
                        <X size={12} className="text-gray-400" /> OUR ACHIEVEMENTS
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight"
                    >
                        Recognitions & Milestones
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#64748B] text-sm md:text-base max-w-xl mx-auto"
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
                        className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image src={aboutImages.milestones} alt="Technical Team" fill className="object-cover" />
                    </motion.div>

                    {/* Left Award Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-24 w-[140px] h-[140px] md:w-[240px] md:h-[240px] bg-emerald-100 rounded-full flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-4 md:p-8 text-center"
                    >
                        <Award size={28} className="text-[#111827] mb-2 md:mb-4" strokeWidth={1.5} />
                        <span className="text-[7px] md:text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1 md:mb-2">TECH AWARDS</span>
                        <span className="text-[10px] md:text-sm font-bold text-[#111827] leading-snug mb-1 md:mb-3">Trusted IT<br />Infrastructure<br />Firm</span>
                        <span className="text-[8px] md:text-[11px] font-semibold text-gray-400">2026</span>
                    </motion.div>

                    {/* Right Award Badge (Identical to Left as per reference image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-24 w-[140px] h-[140px] md:w-[240px] md:h-[240px] bg-emerald-100 rounded-full flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-4 md:p-8 text-center"
                    >
                        <Award size={28} className="text-[#111827] mb-2 md:mb-4" strokeWidth={1.5} />
                        <span className="text-[7px] md:text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1 md:mb-2">TECH AWARDS</span>
                        <span className="text-[10px] md:text-sm font-bold text-[#111827] leading-snug mb-1 md:mb-3">Trusted IT<br />Infrastructure<br />Firm</span>
                        <span className="text-[8px] md:text-[11px] font-semibold text-gray-400">2026</span>
                    </motion.div>
                </div>



            </div>
        </section>
    );
}