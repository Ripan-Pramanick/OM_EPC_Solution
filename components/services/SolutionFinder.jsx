"use client";
import { motion } from 'motion/react';
import { solutionFinders } from '@/data/servicesData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SolutionFinder() {
    return (
        <section className="py-24 md:py-32 bg-emerald-100 relative overflow-hidden">
            {/* Subtle technical background grid */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4338CA_1px,transparent_1px),linear-gradient(to_bottom,#4338CA_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Updated Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-indigo-700 tracking-widest uppercase mb-6 px-3 py-1.5 border border-indigo-100 rounded-full bg-indigo-50 shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span> OUR EXPERTISE
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight leading-[1.1]"
                    >
                        Find the Right Technology Solution
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#64748B] text-lg leading-relaxed"
                    >
                        Every business has different technology needs. Choose the solution that fits your requirements.
                    </motion.p>
                </div>

                {/* Premium Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 xl:gap-10">
                    {solutionFinders.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative bg-emerald-100 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-15px_rgba(67,56,202,0.15)] hover:-translate-y-2 hover:border-indigo-100 transition-all duration-500 ease-out flex flex-col overflow-hidden z-10"
                        >

                            {/* Premium Watermark Number in Background */}
                            <div className="absolute -bottom-8 -right-4 text-[9rem] leading-none font-black text-gray-50/80 group-hover:text-indigo-50/60 transition-colors duration-500 select-none z-0">
                                {item.id}
                            </div>

                            {/* Card Content (Relative z-10 to stay above watermark) */}
                            <div className="relative z-10 flex-1 flex flex-col">

                                {/* Refined Icon Box */}
                                <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] border border-indigo-100/50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white flex items-center justify-center transition-all duration-500 mb-10 shadow-sm">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold text-[#111827] mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-[#64748B] text-base leading-relaxed mb-10">
                                    {item.desc}
                                </p>

                                {/* Separated CTA Area */}
                                <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-indigo-100 transition-colors duration-300">
                                    <Link href="#services" className="inline-flex items-center gap-2 text-sm font-bold text-[#111827] group-hover:text-indigo-700 transition-colors">
                                        {item.cta}
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}