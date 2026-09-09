"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { aboutImages } from '@/data/images';
import { foundationRows } from '@/data/aboutData';
import Button from '@/components/ui/Button';

export default function Foundation() {
    return (
        <section className="py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                <div className="relative h-[600px] w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-0 left-0 w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl"
                    >
                        <Image src={aboutImages.foundationMain} alt="Technical Engineer Workspace" fill className="object-cover" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="absolute bottom-0 right-0 w-[55%] h-[45%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
                    >
                        <Image src={aboutImages.foundationSecondary} alt="Computer Servicing" fill className="object-cover" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="absolute top-[10%] -right-4 md:-right-8 bg-[#FAF9F6] p-6 rounded-2xl shadow-xl border border-indigo-50 flex items-center gap-4 z-10"
                    >
                        <div className="text-4xl font-black text-indigo-700">10+</div>
                        <div className="text-sm font-bold text-[#111827] leading-tight">Years of<br />Technical<br />Experience</div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col"
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 tracking-widest uppercase mb-6">
                        <span className="w-8 h-px bg-indigo-700"></span> ABOUT OM EPC
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                        Technology Solutions<br />Built Around Your Business
                    </h2>

                    <p className="text-[#64748B] text-lg mb-10 leading-relaxed">
                        OM EPC Solution provides reliable computer, printer, UPS, CCTV, networking and technical support solutions for businesses. Our focus is simple — provide the right technology, professional service and dependable support.
                    </p>

                    <div className="space-y-4 mb-10">
                        {foundationRows.map((row, index) => (
                            <motion.div
                                key={row.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group flex gap-6 p-4 rounded-xl hover:bg-[#F5F7FF] transition-colors border border-transparent hover:border-indigo-100"
                            >
                                <div className="text-sm font-bold text-indigo-500 mt-1">{row.id}</div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#111827] mb-1">{row.title}</h4>
                                    <p className="text-[#64748B] text-sm leading-relaxed">{row.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Button variant="primary" className="w-max">More About Us</Button>
                </motion.div>
            </div>
        </section>
    );
}