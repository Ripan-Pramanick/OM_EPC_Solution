"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { contactPageImages } from '@/data/images';
import Button from '@/components/ui/Button';

export default function ContactCTA() {
    return (
        <section className="relative py-32 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-400 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image src={contactPageImages.cta} alt="Technology Support" fill className="object-cover opacity-20 mix-blend-overlay" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/90 to-indigo-700/60" />

                {/* Subtle White Grid Pattern added over the dark background */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-200 tracking-widest uppercase mb-6">
                        <span className="w-8 h-px bg-indigo-300"></span> NEED TECHNICAL SUPPORT? <span className="w-8 h-px bg-indigo-300"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Let's Build a Better Technology Setup</h2>
                    <p className="text-indigo-100 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                        From computers and UPS to CCTV, networking and ongoing maintenance, OM EPC Solution is here to help.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="light" className="w-full sm:w-auto text-indigo-700 group px-8">
                        Get a Free Quote
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-emerald-100/10 px-8">
                        WhatsApp Us
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}