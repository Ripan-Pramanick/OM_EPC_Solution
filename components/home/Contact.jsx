"use client";
import { motion } from 'motion/react';
import { X, MapPin, Phone, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { images } from '@/data/images';

// Custom Social Icons (Lucide alternatives)
const Facebook = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const Twitter = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const Instagram = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const Linkedin = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Inner Light Container */}
        <div className="relative bg-[#F5F7FF] text-black rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">

          <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none z-0"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-black"
            >
              <div className="inline-flex items-center gap-2 border border-gray-700/20 rounded-full px-4 py-1.5 text-xs font-bold text-gray-700 tracking-widest uppercase mb-6 backdrop-blur-sm">
                <X size={12} /> GET IN TOUCH
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Start Your Conversation
              </h2>
              {/* Changed text color from text-gray-300 to text-gray-600 */}
              <p className="text-gray-600 text-base md:text-lg max-w-xl">
                Reach us anytime, let's architect your resilient IT infrastructure together.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FAF9F6] rounded-[2rem] p-8 shadow-xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <input type="text" placeholder="Name" className="w-full px-5 py-4 bg-transparent border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  <input type="email" placeholder="Email" className="w-full px-5 py-4 bg-transparent border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <input type="text" placeholder="Phone" className="w-full px-5 py-4 bg-transparent border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  <input type="text" placeholder="Subject" className="w-full px-5 py-4 bg-transparent border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>

                <div className="mb-8">
                  <textarea rows={4} placeholder="Your message" className="w-full px-5 py-4 bg-transparent border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
                </div>

                <Button variant="premium" className="w-auto">Submit</Button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-10 pt-4"
              >
                <div className="flex gap-4">
                  <div className="mt-1 text-primary"><MapPin size={24} /></div>
                  <div>
                    {/* Changed text-gray-400 to text-gray-500, text-white to text-navy */}
                    <p className="text-sm text-gray-500 mb-1">Just Visit Us:</p>
                    <p className="text-base font-bold text-navy">Sector V, Salt Lake,<br />Kolkata, WB 700091</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-primary"><Phone size={24} /></div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Need help? Call Us:</p>
                    <p className="text-base font-bold text-navy">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-primary"><Mail size={24} /></div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Just Mail Us:</p>
                    <p className="text-base font-bold text-navy">support@omepcsolution.com</p>
                  </div>
                </div>

                {/* Changed hover:text-white to hover:text-primary for better contrast on hover */}
                <div className="flex items-center gap-6 mt-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                </div>
              </motion.div>

            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-10 -right-10 w-96 h-96 opacity-30 pointer-events-none z-0">
            <Image src={images.services.networking} alt="Decoration" fill className="object-cover rounded-full mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}