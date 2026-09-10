"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { aboutImages } from '@/data/images';
import { serviceBenefits } from '@/data/servicesData';
import { X, Cpu } from 'lucide-react';

// Custom SVG Icon replicating the exact Blueprint/Design icon from your image
const BlueprintIcon = ({ size = 48, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Blueprint Paper */}
        <rect x="3" y="4" width="14" height="12" rx="1" />
        {/* Structure inside paper */}
        <path d="M6 10l4-3 4 3v4H6z" />
        <path d="M9 10v4" />
        {/* Set square (Triangle tool) */}
        <path d="M12 21h9V12L12 21z" />
        <path d="M15 19h3v-3l-3 3z" />
        {/* Pencil */}
        <path d="M19.5 4.5a2.12 2.12 0 0 0-3-3L11 7l-1 3 3-1 5.5-5.5z" />
    </svg>
);

export default function DiscoverDifference() {
    return (
        <section className="py-24 md:py-32 bg-emerald-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-indigo-700 tracking-widest uppercase mb-6 px-3 py-1 border border-gray-200 rounded-full">
                            <X size={12} className="text-gray-400" /> WHY CHOOSE OM EPC
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1]">
                            Discover the Difference<br />We Can Make
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-md">
                            Technology is only valuable when it works reliably. We combine quality products, technical expertise and responsive support to deliver dependable solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Main 3-Column Layout */}
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">

                    {/* Column 1: Hanging Tech Visual & Rotating Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:flex flex-col items-center relative h-[500px]"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[300px] bg-gray-800 z-0"></div>

                        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white z-20">
                                <Cpu size={28} strokeWidth={1.5} />
                            </div>

                            <svg viewBox="0 0 100 100" className="absolute w-[180px] h-[180px] animate-spin" style={{ animationDuration: '15s' }}>
                                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                <text className="text-[9.5px] font-bold fill-gray-600 uppercase tracking-[0.2em]">
                                    <textPath href="#textPath" startOffset="0%">
                                        RELIABLE IT SOLUTIONS • TECHNICAL SUPPORT •
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        <div className="absolute top-[280px] left-1/2 -translate-x-1/2 z-20">
                            <div className="w-32 h-24 bg-gradient-to-b from-gray-200 via-gray-100 to-white rounded-t-full rounded-b-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] relative border border-gray-100 flex items-end justify-center pb-2">
                                <div className="w-24 h-1.5 bg-indigo-400 rounded-full blur-[2px] opacity-70"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2: Center Pill Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="w-full max-w-[400px] h-[550px] rounded-b-full border border-[#111827] overflow-hidden flex flex-col bg-emerald-100">

                            {/* Top Text Half (Left Aligned) */}
                            <div className="pt-10 pb-6 px-8 flex flex-col items-start text-left">
                                <div className="text-gray-700 mb-6">
                                    {/* Using the custom Blueprint icon */}
                                    <BlueprintIcon size={46} />
                                </div>
                                <h3 className="text-[2.5rem] font-light text-[#334155] mb-2 leading-none">10+</h3>
                                <p className="text-[15px] font-bold text-[#111827]">Core IT Solutions</p>
                            </div>

                            {/* Bottom Image Half */}
                            <div className="relative flex-1 w-full bg-gray-100">
                                <Image
                                    src={aboutImages.whyChooseUs || aboutImages.hero}
                                    alt="Technology Experience"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </motion.div>

                    {/* Column 3: Benefits List & Signature */}
                    <div className="flex flex-col justify-between h-full pt-4">
                        <div className="space-y-8">
                            {/* Note: I'm mapping through serviceBenefits array here instead of benefits array from aboutData to keep the content relevant to the services page */}
                            {serviceBenefits.slice(0, 4).map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-5"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#F5F7FF] flex items-center justify-center text-gray-500 border border-gray-100">
                                        <benefit.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#111827] mb-1.5">{benefit.title}</h4>
                                        <p className="text-[#64748B] text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6"
                        >
                            <svg width="80" height="40" viewBox="0 0 200 80" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                <path d="M 20 60 C 40 20, 60 20, 80 50 C 90 70, 100 70, 110 40 C 130 10, 150 30, 170 50" />
                                <path d="M 60 40 L 100 40" />
                            </svg>
                            <div>
                                <h5 className="font-bold text-[#111827] text-sm mb-0.5">Srijan Das</h5>
                                <p className="text-xs text-gray-400">Founder & Technical Lead</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}