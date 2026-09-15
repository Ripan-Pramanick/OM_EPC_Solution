"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { interactiveServices } from '@/data/servicesData';
import { ArrowRight, CheckCircle2, Settings } from 'lucide-react';
import Link from 'next/link';

export default function ServicesCrafted() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="min-h-[90vh] md:min-h-screen w-full mx-auto bg-emerald-950 relative overflow-hidden flex items-center py-16 md:py-20 lg:py-24">

            {/* Subtle Emerald Pattern */}
            <div className="absolute inset-0 opacity-[0.4] bg-emerald-950 pointer-events-none" />

            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

                {/* Header Section */}
                <div className="mb-8 sm:mb-10 md:mb-14 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-emerald-950 tracking-widest uppercase mb-4 md:mb-6 px-4 py-1.5 border border-emerald-300 rounded-full bg-emerald-200 shadow-sm"
                    >
                        <Settings size={12} className="text-emerald-800" strokeWidth={2.5} /> OUR SERVICES
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-50 mb-3 md:mb-4 tracking-tight"
                    >
                        Services Crafted for Your Business
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-emerald-50/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed"
                    >
                        From installation to ongoing maintenance, we provide the complete technology support your business needs to stay connected and secure.
                    </motion.p>
                </div>

                {/* Desktop Interactive Layout */}
                <div className="hidden lg:grid grid-cols-[1fr_1.2fr] gap-12 xl:gap-16 items-stretch h-[60vh] min-h-[550px] max-h-[700px]">

                    {/* LEFT: Vertical Service List */}
                    <div className="flex flex-col border-l-2 border-emerald-200/50 py-2 h-full justify-between">
                        {interactiveServices?.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={service.id || index}
                                    onClick={() => setActiveIndex(index)}
                                    className="group relative w-full flex-1 flex items-center justify-between px-6 text-left transition-all duration-300"
                                >
                                    <div className={`absolute left-[-2px] top-0 h-full w-[2px] transition-all duration-300 ${isActive ? 'bg-emerald-600' : 'bg-emerald-50 group-hover:bg-emerald-600'}`} />

                                    <div className={`absolute inset-0 rounded-r-2xl transition-all duration-300 ${isActive ? 'bg-emerald-100/10 shadow-[4px_0_15px_rgba(4,120,87,0.05)]' : 'bg-transparent group-hover:bg-emerald-50/5'}`} />

                                    <div className="relative z-10 flex items-center gap-6">
                                        <span className={`text-sm font-bold tracking-widest transition-colors ${isActive ? 'text-emerald-400' : 'text-emerald-100/40'}`}>
                                            {service.number}
                                        </span>
                                        <span className={`text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-emerald-50' : 'text-emerald-100/50 group-hover:text-emerald-100/90'}`}>
                                            {service.title}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT: Dynamic Image & Content Panel */}
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl bg-white border border-emerald-100">
                        {interactiveServices && interactiveServices[activeIndex] && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {/* Background Image Container */}
                                    <div className="absolute inset-0 w-full h-full bg-emerald-50">
                                        {interactiveServices[activeIndex].image && (
                                            <Image
                                                src={interactiveServices[activeIndex].image}
                                                alt={interactiveServices[activeIndex].title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-emerald-950/20" />
                                    </div>

                                    {/* Flushed completely to Bottom-Left */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute bottom-0 left-0 w-[95%] md:w-[90%] xl:w-[85%] bg-white/95 backdrop-blur-md rounded-none rounded-tr-[3rem] p-8 md:p-10 shadow-[10px_-10px_30px_rgba(4,120,87,0.05)] border-t border-r border-emerald-50"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-emerald-100 shrink-0">
                                                {(() => {
                                                    const Icon = interactiveServices[activeIndex].icon;
                                                    return Icon ? <Icon size={22} strokeWidth={1.5} /> : null;
                                                })()}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-emerald-950 leading-tight">
                                                {interactiveServices[activeIndex].title}
                                            </h3>
                                        </div>

                                        <p className="text-emerald-900/70 text-sm leading-relaxed mb-6 max-w-lg">
                                            {interactiveServices[activeIndex].description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                                            {interactiveServices[activeIndex].features?.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-emerald-950 font-medium">
                                                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                                    <span className="truncate">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link 
                                            href="/contact#contact-form" 
                                            prefetch={false}
                                            className="w-fit flex items-center justify-center bg-emerald-950 text-emerald-50 px-7 py-3 rounded-xl font-bold shadow-lg hover:bg-emerald-800 transition-all duration-300 text-[13px] uppercase tracking-wide"
                                        >
                                            Let's Connect
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>

                </div>

                {/* Mobile Accordion Layout */}
                <div className="lg:hidden flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8">
                    {interactiveServices?.map((service, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div key={service.id || index} className="bg-white rounded-[1.25rem] sm:rounded-2xl overflow-hidden border border-emerald-100 shadow-sm transition-all duration-300">
                                <button
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-emerald-50/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 pr-4">
                                        <span className="text-emerald-600 font-bold text-sm sm:text-base">{service.number}</span>
                                        <span className="text-base sm:text-lg font-bold text-emerald-950 leading-snug">{service.title}</span>
                                    </div>
                                    <ArrowRight className={`text-emerald-300 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-90 text-emerald-700' : ''}`} size={18} />
                                </button>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-4 sm:px-5 md:px-6 pb-5 md:pb-6"
                                        >
                                            {service.image && (
                                                <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-5 sm:mb-6 border border-emerald-50">
                                                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                                                </div>
                                            )}
                                            <p className="text-emerald-900/70 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="flex flex-col gap-2.5 sm:gap-3 mb-6">
                                                {service.features?.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-950 font-medium">
                                                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                            <Link 
                                                href="/contact#contact-form" 
                                                prefetch={false}
                                                className="w-full sm:w-fit flex items-center justify-center bg-emerald-950 text-emerald-50 px-6 py-3 rounded-xl font-bold shadow-md hover:bg-emerald-800 transition-all duration-300 text-xs uppercase tracking-wider"
                                            >
                                                Let's Connect
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}