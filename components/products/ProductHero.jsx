"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { productPageImages } from '@/data/images';
import Button from '@/components/ui/Button';
import { ShieldCheck, MonitorSmartphone, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function ProductHero() {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#EEF2FF]/60 to-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 grid xl:grid-cols-2 gap-12 lg:gap-16 items-center">

                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#111827] leading-[1.1] mb-6 tracking-tight"
                    >
                        Reliable Technology<br /> Products for <span className="text-indigo-700">Your Business</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-10"
                    >
                        Discover a wide range of high-quality computers, UPS, printers, CCTV, networking equipment and more — all in one place.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-14"
                    >
                        <Button variant="primary" className="w-full sm:w-auto shadow-lg hover:shadow-indigo-500/25">
                            Browse Products
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto border-gray-300 text-[#111827] hover:bg-gray-50">
                            Get a Quote
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200"
                    >
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                            <ShieldCheck size={18} className="text-indigo-600" /> 100% Genuine Products
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                            <MonitorSmartphone size={18} className="text-indigo-600" /> Multi-Brand Availability
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                            <HeadphonesIcon size={18} className="text-indigo-600" /> Expert Support & Guidance
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[550px] w-full hidden md:block"
                >
                    {/* Art-directed composition instead of simple grid */}
                    <div className="absolute right-0 top-0 w-3/4 h-4/5 rounded-[2.5rem] bg-[#EEF2FF] overflow-hidden shadow-2xl z-10 animate-[floating_6s_ease-in-out_infinite]">
                        <Image src={productPageImages.hero.main} alt="Technology Infrastructure" fill className="object-cover opacity-90" />
                        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay" />
                    </div>

                    <div className="absolute left-0 bottom-[10%] w-3/5 h-3/5 rounded-[2rem] bg-[#FAF9F6] overflow-hidden shadow-2xl z-20 border-4 border-white animate-[floating_8s_ease-in-out_infinite_reverse]">
                        <Image src={productPageImages.hero.secondary} alt="Business IT" fill className="object-cover" />
                    </div>

                    <div className="absolute top-[20%] -left-8 bg-[#FAF9F6]/95 backdrop-blur-md p-5 rounded-2xl shadow-xl z-30 flex items-center gap-4 border border-indigo-50">
                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-700 shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Quality Products</p>
                            <p className="text-sm font-bold text-[#111827]">Stronger Business</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-indigo-700 text-white flex items-center justify-center ml-2 cursor-pointer hover:bg-indigo-800 transition-colors">
                            <ArrowRight size={14} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}