"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { productPageImages } from '@/data/images';
import { Package, CheckCircle2, DollarSign, HeadphonesIcon } from 'lucide-react';

export default function ProductDiscoveryCTA() {
    const trustPoints = [
        { title: "Expert Guidance", desc: "Get the right product for your needs.", icon: CheckCircle2 },
        { title: "Best Market Price", desc: "Competitive and transparent pricing.", icon: DollarSign },
        { title: "Genuine Products", desc: "100% original and reliable items.", icon: Package },
        { title: "After-Sales Support", desc: "Reliable technical assistance.", icon: HeadphonesIcon }
    ];

    return (
        <section className="relative py-32 bg-emerald-800 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image src={productPageImages.discovery} alt="Technology Support" fill className="object-cover opacity-20 mix-blend-overlay" />
                </motion.div>
                <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="w-16 h-16 bg-emerald-100/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                        <Package size={28} />
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Find the Right Product
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-emerald-100 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
                >
                    Not sure which product is right for your business? Our team can help you choose the correct technology solution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-20 flex justify-center"
                >
                    {/* 
                      FIXED: Removed the nested <Button> wrapper. 
                      Added prefetch={false} to stop Next.js from blocking the thread on hover/click.
                      Applied the exact CSS classes directly to the <Link> tag. 
                    */}
                    <Link 
                        href="/contact#contact-form" 
                        prefetch={false}
                        className="flex items-center w-fit gap-1.5 px-6 py-2.5 rounded-full text-[17px] font-bold transition-all duration-300 bg-emerald-950 text-emerald-50 hover:bg-emerald-800/40 hover:text-white shadow-xl border border-emerald-600/30"
                    >
                        Contact Our Experts
                    </Link>
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-12">
                    {trustPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                            className="text-left"
                        >
                            <point.icon size={24} className="text-emerald-300 mb-4" />
                            <h4 className="text-base font-bold text-white mb-2">{point.title}</h4>
                            <p className="text-emerald-200 text-sm">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}