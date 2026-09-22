"use client";
import { motion } from 'motion/react';
import { solutionFinders } from '@/data/servicesData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SolutionFinder() {
    return (
        // FIXED: Removed 'h-screen' so the section can expand naturally based on content height
        <section className="py-16 md:py-20 lg:py-24 w-full mx-auto bg-emerald-100 relative overflow-hidden">
            {/* Subtle Emerald technical background grid */}
            <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

                {/* Updated Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-emerald-800 tracking-widest uppercase mb-4 md:mb-6 px-3 md:px-4 py-1.5 border border-emerald-200/80 rounded-full bg-emerald-100/30 backdrop-blur-sm shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> OUR EXPERTISE
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 mb-3 md:mb-6 tracking-tight leading-tight md:leading-[1.1]"
                    >
                        Find the Right Technology Solution
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-900/70 text-sm sm:text-base md:text-lg leading-relaxed px-2"
                    >
                        Every business has different technology needs. Choose the solution that fits your requirements.
                    </motion.p>
                </div>

                {/* Premium Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 xl:gap-10">
                    {solutionFinders.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            // FIXED: Adjusted padding and border radius for mobile
                            className="group relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-emerald-100 shadow-[0_4px_20px_rgba(4,120,87,0.02)] hover:shadow-[0_20px_50px_-15px_rgba(4,120,87,0.15)] hover:-translate-y-2 hover:border-emerald-200 transition-all duration-500 ease-out flex flex-col overflow-hidden z-10"
                        >

                            {/* Premium Watermark Number in Background */}
                            <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-4 text-[7rem] md:text-[9rem] leading-none font-black text-emerald-50 group-hover:text-emerald-100/60 transition-colors duration-500 select-none z-0">
                                {item.id}
                            </div>

                            {/* Card Content (Relative z-10 to stay above watermark) */}
                            <div className="relative z-10 flex-1 flex flex-col">

                                {/* Refined Icon Box */}
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-50 border border-emerald-100/50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center transition-all duration-500 mb-5 md:mb-10 shadow-sm">
                                    <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-emerald-950 mb-2 md:mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-emerald-900/70 text-sm md:text-base leading-relaxed mb-4 md:mb-10">
                                    {item.desc}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}