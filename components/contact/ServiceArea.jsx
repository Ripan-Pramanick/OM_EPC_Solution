"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { contactPageImages } from '@/data/images';
import { contactData } from '@/data/contactData';
import { X, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceArea() {
    return (
        <section className="py-24 md:py-32 bg-[#F5F7FF] relative overflow-hidden">

            {/* Subtle Grid Background Pattern matching the image */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#4338CA_1px,transparent_1px),linear-gradient(to_bottom,#4338CA_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-indigo-700 tracking-widest uppercase mb-6 px-4 py-1.5 border border-indigo-100 rounded-full bg-[#FAF9F6] shadow-sm"
                    >
                        <X size={12} className="text-indigo-400" /> OUR SERVICE AREA
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 tracking-tight"
                    >
                        Find OM EPC Near You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#64748B] text-lg leading-relaxed"
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
                            className="group bg-[#FAF9F6] rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col md:flex-row"
                        >
                            {/* Left Image */}
                            <div className="relative w-full md:w-[350px] h-[250px] md:h-auto bg-gray-100 overflow-hidden shrink-0">
                                <Image src={contactPageImages.office} alt={loc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-[#FAF9F6]/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center font-bold text-indigo-700 shadow-sm">
                                    HQ
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#111827] mb-4">{loc.name}</h3>
                                    <div className="flex items-start gap-3 mb-6">
                                        <MapPin size={20} className="text-indigo-600 shrink-0 mt-0.5" />
                                        <p className="text-[#64748B] text-base leading-relaxed">{loc.address}</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center text-indigo-700 shrink-0"><Phone size={16} /></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                                            <p className="text-sm font-semibold text-[#111827]">{loc.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center text-indigo-700 shrink-0"><Mail size={16} /></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                                            <p className="text-sm font-semibold text-[#111827]">{loc.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <Link href="#map" className="inline-flex items-center gap-2 text-sm font-bold text-[#111827] group-hover:text-indigo-700 transition-colors w-max">
                                    <span className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-indigo-200 flex items-center justify-center transition-colors"><ArrowRight size={14} /></span>
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