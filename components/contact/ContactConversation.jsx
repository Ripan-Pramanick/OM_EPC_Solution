"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';
import { contactPageImages } from '@/data/images';
import { contactData } from '@/data/contactData';
import { X, MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

// Custom Social SVGs
const FacebookIcon = ({ size = 18, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const InstagramIcon = ({ size = 18, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const YouTubeIcon = ({ size = 18, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>;

export default function ContactConversation() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
        if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = "Valid phone number is required";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // API call would go here
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    };

    return (
        <section className="py-24 md:py-32 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-400 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1fr_450px] xl:grid-cols-[1.2fr_500px] gap-12 lg:gap-20 items-start relative z-10">

                {/* LEFT COLUMN: Text + Form */}
                <div className="flex flex-col">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-white tracking-widest uppercase mb-6 px-3 py-1.5 border border-indigo-400 rounded-full bg-indigo-800/50">
                            <X size={12} className="text-indigo-300" /> GET IN TOUCH
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            Start Your Conversation
                        </h2>
                        <p className="text-indigo-200 text-base md:text-lg mb-12 max-w-xl leading-relaxed">
                            Have a question, need technical support, or looking for the right technology solution? Tell us what you need and our team will get back to you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#FAF9F6] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                    >
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px] py-12">
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#111827] mb-2">Message Sent!</h3>
                                <p className="text-[#64748B]">Thank you! Your message has been received. Our team will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <input type="text" placeholder="Full Name *" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={`w-full px-5 py-4 bg-[#F8FAFC] border ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-xl text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`} />
                                        {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email Address *" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={`w-full px-5 py-4 bg-[#F8FAFC] border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-xl text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`} />
                                        {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <input type="text" placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={`w-full px-5 py-4 bg-[#F8FAFC] border ${errors.phone ? 'border-red-300' : 'border-gray-200'} rounded-xl text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors`} />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</p>}
                                    </div>
                                    <input type="text" placeholder="Subject (Optional)" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="w-full px-5 py-4 bg-[#F8FAFC] border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" />
                                </div>

                                <div>
                                    <textarea rows={5} placeholder="Your Message *" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className={`w-full px-5 py-4 bg-[#F8FAFC] border ${errors.message ? 'border-red-300' : 'border-gray-200'} rounded-xl text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none min-h-[140px]`}></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.message}</p>}
                                </div>

                                <div className="mt-2">
                                    <Button variant="primary" className="group shadow-lg shadow-indigo-500/20">
                                        Send Message <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Contact Info + Tech Visual */}
                <div className="flex flex-col h-full pt-4">

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-8 mb-12"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-800/50 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Main Office</p>
                                <p className="text-base font-bold text-white">{contactData.locations[0].address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-800/50 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Call Us</p>
                                <p className="text-base font-bold text-white">{contactData.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-800/50 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Email Us</p>
                                <p className="text-base font-bold text-white">{contactData.email}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links matching the reference style */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 mb-16"
                    >
                        <Link href={contactData.social.facebook} className="w-10 h-10 rounded-full border border-indigo-400/30 flex items-center justify-center text-white hover:bg-[#FAF9F6] hover:text-indigo-700 transition-colors"><X size={14} /></Link>
                        <Link href={contactData.social.facebook} className="w-10 h-10 rounded-full border border-indigo-400/30 flex items-center justify-center text-white hover:bg-[#FAF9F6] hover:text-indigo-700 transition-colors"><FacebookIcon size={16} /></Link>
                        <Link href={contactData.social.instagram} className="w-10 h-10 rounded-full border border-indigo-400/30 flex items-center justify-center text-white hover:bg-[#FAF9F6] hover:text-indigo-700 transition-colors"><InstagramIcon size={16} /></Link>
                        <Link href={contactData.social.youtube} className="w-10 h-10 rounded-full border border-indigo-400/30 flex items-center justify-center text-white hover:bg-[#FAF9F6] hover:text-indigo-700 transition-colors"><YouTubeIcon size={16} /></Link>
                    </motion.div>

                    {/* Decorative Floating Tech Visual replacing the lamp/plant */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex-1 min-h-[300px] w-full rounded-[2.5rem] bg-indigo-800/50 overflow-hidden border border-indigo-500/20 shadow-2xl animate-[floating_6s_ease-in-out_infinite]"
                    >
                        <Image src={contactPageImages.visual} alt="IT Infrastructure" fill className="object-cover opacity-80" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent" /> */}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}