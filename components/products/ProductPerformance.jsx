"use client";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { productPageImages } from '@/data/images';
import { ShieldCheck } from 'lucide-react';

const ProgressBar = ({ label, percentage, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-emerald-950 uppercase tracking-wider">{label}</span>
                <span className="text-sm font-bold text-emerald-700">{percentage}%</span>
            </div>
            <div className="w-full h-2.5 bg-emerald-100/50 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay, ease: "easeOut" }}
                    className="h-full bg-emerald-700 rounded-full"
                />
            </div>
        </div>
    );
};

export default function ProductPerformance() {
    return (
        <section className="py-24 md:py-32 bg-emerald-50 relative overflow-hidden">

            {/* Emerald Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[450px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10"
                >
                    <Image src={productPageImages.performance} alt="IT Infrastructure Performance" fill className="object-cover" />
                    <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />

                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-emerald-50/95 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-emerald-950 mb-1">Trusted Technology Partner</p>
                            <p className="text-xs text-emerald-900/70">Products backed by professional guidance.</p>
                        </div>
                    </div>
                </motion.div>

                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-800 tracking-widest uppercase mb-6 px-3 py-1.5 border border-emerald-200/80 rounded-full bg-emerald-100/30 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> OUR PERFORMANCE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 leading-[1.15] mb-6 tracking-tight">
                            Why Businesses Choose Our Products
                        </h2>
                        <p className="text-emerald-900/70 text-lg mb-12 leading-relaxed">
                            We focus on reliable technology products, practical recommendations and professional support to help businesses operate smoothly.
                        </p>
                    </motion.div>

                    <div className="w-full">
                        <ProgressBar label="Product Quality" percentage={95} delay={0.2} />
                        <ProgressBar label="Customer Satisfaction" percentage={92} delay={0.4} />
                        <ProgressBar label="On-Time Delivery" percentage={90} delay={0.6} />
                    </div>
                </div>

            </div>
        </section>
    );
}