"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { aboutImages } from '@/data/images';
import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className="pt-28 md:pt-36 pb-12 px-4 md:px-6 bg-emerald-100">

            <div className="relative max-w-[1400px] mx-auto h-[60vh] md:h-[75vh] min-h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center shadow-2xl">

                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={aboutImages.hero}
                        alt="IT Infrastructure"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-indigo-900/50 mix-blend-multiply" />

                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-8 md:mt-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mb-6 md:mb-8 flex justify-center"
                    >

                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Architects of <br className="hidden md:block" /> Reliable IT
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-base md:text-xl text-indigo-50 font-medium max-w-2xl mx-auto leading-relaxed opacity-90"
                    >
                        Building scalable networks, robust security, and seamless infrastructure to drive your business forward.
                    </motion.p>

                </div>
            </div>
        </section>
    );
}