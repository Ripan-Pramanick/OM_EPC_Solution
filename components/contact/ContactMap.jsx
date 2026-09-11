"use client";
import { motion } from 'motion/react';
import { contactData } from '@/data/contactData';
import { MapPin } from 'lucide-react';

export default function ContactMap() {
    const location = contactData.locations[0];

    return (
        <section id="map" className="py-16 md:py-24 px-4 md:px-6 bg-emerald-50/40">

            {/* Floating Card Container */}
            <div className="relative max-w-[1400px] mx-auto h-[500px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-emerald-100/50">

                {/* 100% Reliable SSR-Safe OpenStreetMap Embed */}
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={location.mapUrl}
                    className="absolute inset-0 w-full h-full grayscale-[20%] contrast-125 opacity-90"
                    title="OM EPC Solution Map Location"
                ></iframe>

                {/* Centered Overlay Card */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-emerald-100 max-w-sm w-full pointer-events-auto"
                    >
                        <div className="flex justify-between items-start mb-4 border-b border-emerald-50 pb-4">
                            <div>
                                <h3 className="text-xl font-bold text-emerald-950">OM EPC Solution</h3>
                                <p className="text-sm font-semibold text-emerald-600">{location.name}</p>
                            </div>
                            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                <MapPin size={18} />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm text-emerald-900/70 leading-relaxed">
                                <strong className="text-emerald-950">Address:</strong><br />
                                {location.address}
                            </p>
                            <p className="text-sm text-emerald-900/70">
                                <strong className="text-emerald-950">Phone:</strong> {location.phone}
                            </p>
                            <p className="text-sm text-emerald-900/70">
                                <strong className="text-emerald-950">Email:</strong> {location.email}
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}