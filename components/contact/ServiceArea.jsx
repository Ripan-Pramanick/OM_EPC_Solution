"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { contactPageImages } from '@/data/images';
import { contactData } from '@/data/contactData';
import { X, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceArea() {
    return (
        <section className="py-24 md:py-32 bg-emerald-50/40 relative overflow-hidden">

            {/* Emerald Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-800 tracking-widest uppercase mb-6 px-4 py-1.5 border border-emerald-200/80 rounded-full bg-emerald-100/30 shadow-sm"
>
    <MapPin size={12} className="text-emerald-600" strokeWidth={2.5} /> OUR SERVICE AREA
</motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6 tracking-tight"
                    >
                        Find OM EPC Near You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-emerald-900/70 text-lg leading-relaxed"
                    >
                        We provide technology products, installation and technical support for businesses and organizations.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                    {contactData.locations.map((loc, index) => (
                        <motion.div
                            key={loc.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-[2rem] border border-emerald-100 overflow-hidden shadow-[0_4px_20px_rgba(4,120,87,0.02)] hover:shadow-[0_15px_40px_-10px_rgba(4,120,87,0.15)] hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 flex flex-col md:flex-row"
                        >
                            {/* Left Image */}
                            <div className="relative w-full md:w-[350px] h-[250px] md:h-auto bg-emerald-50/50 overflow-hidden shrink-0">
                                <Image src={contactPageImages.office} alt={loc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center font-bold text-emerald-700 shadow-sm border border-emerald-50">
                                    HQ
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-emerald-950 mb-4">{loc.name}</h3>
                                    <div className="flex items-start gap-3 mb-6">
                                        <MapPin size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                                        <p className="text-emerald-900/70 text-base leading-relaxed">{loc.address}</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-emerald-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0"><Phone size={16} /></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-widest">Call Us</p>
                                            <p className="text-sm font-semibold text-emerald-950">{loc.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0"><Mail size={16} /></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-emerald-600/60 uppercase tracking-widest">Email Us</p>
                                            <p className="text-sm font-semibold text-emerald-950">{loc.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <Link href="#map" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors w-max">
                                    <span className="w-8 h-8 rounded-full border border-emerald-100 group-hover:border-emerald-200 flex items-center justify-center transition-colors"><ArrowRight size={14} /></span>
                                    View On Map
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}