"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { servicePageImages } from '@/data/images';
import Button from '@/components/ui/Button';
import { Phone, Mail } from 'lucide-react';

const WhatsAppIcon = ({ size = 18, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
);

export default function ServicesCTA() {
    const contactChannels = [
        { label: "Call Us", icon: Phone, href: "tel:+919876543210" },
        { label: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/919876543210" },
        { label: "Email", icon: Mail, href: "mailto:support@omepc.com" }
    ];

    return (
        <section className="relative py-32 bg-indigo-700 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image src={servicePageImages.cta} alt="Technical Support" fill className="object-cover opacity-20 mix-blend-overlay" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/90 to-indigo-700/60" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-200 tracking-widest uppercase mb-6">
                        <span className="w-8 h-px bg-indigo-300"></span> LET'S GET STARTED <span className="w-8 h-px bg-indigo-300"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Need the Right Technology Solution?</h2>
                    <p className="text-indigo-100 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                        Tell us what your business needs and our team will help you choose the right products, services and support.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
                >
                    <Button variant="light" className="w-full sm:w-auto text-indigo-700">Get a Free Quote</Button>
                    <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-[#FAF9F6]/10">Contact Us</Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
                >
                    {contactChannels.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FAF9F6]/10 hover:bg-[#FAF9F6]/20 border border-white/20 backdrop-blur-md text-white text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-sm"
                        >
                            <item.icon size={16} className="text-indigo-200" />
                            <span>{item.label}</span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}