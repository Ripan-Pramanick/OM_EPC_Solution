"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { productPageImages } from '@/data/images';
import { Package, CheckCircle2, DollarSign, HeadphonesIcon } from 'lucide-react';
import DarkBtn from '@/components/ui/DarkBtn';

export default function ProductDiscoveryCTA() {
    const hero = "/home/home-hero.webp";
    const trustPoints = [
        { title: "Expert Guidance", desc: "Get the right product for your needs.", icon: CheckCircle2 },
        { title: "Best Market Price", desc: "Competitive and transparent pricing.", icon: DollarSign },
        { title: "Genuine Products", desc: "100% original and reliable items.", icon: Package },
        { title: "After-Sales Support", desc: "Reliable technical assistance.", icon: HeadphonesIcon }
    ];

    return (
        <section className="relative py-20 md:py-24 lg:py-32 bg-emerald-800 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image src={hero} alt="Technology Support" fill className="object-cover opacity-20 mix-blend-overlay" />
                </motion.div>
                <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6 md:mb-8"
                >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                        <Package size={24} className="md:w-7 md:h-7" />
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight"
                >
                    Find the Right Product
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-emerald-100/90 text-sm sm:text-base md:text-xl mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto"
                >
                    Not sure which product is right for your business? Our team can help you choose the correct technology solution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16 md:mb-20 flex justify-center"
                >
                    {/* FIXED: Removed nested <DarkBtn> to fix Next.js hydration & INP issue. Styled directly on Link. */}
                    <Link 
                        href="/contact#contact-form" 
                        prefetch={false}
                       
                    >
                        <DarkBtn>Contact Our Experts</DarkBtn>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 border-t border-white/20 pt-10 md:pt-12">
                    {trustPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                            className="text-center sm:text-left flex flex-col items-center sm:items-start"
                        >
                            <point.icon size={24} className="text-emerald-300 mb-3 md:mb-4" />
                            <h4 className="text-base md:text-lg font-bold text-white mb-2">{point.title}</h4>
                            <p className="text-emerald-200/80 text-xs md:text-sm leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}