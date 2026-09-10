"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '@/data/siteData';
import { Plus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
  
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight">
            Your Queries, Our Answers
          </h2>
        </div>

        {/* Inner Container with Grid Background */}
        <div className="relative bg-emerald-100/50 shadow-xl w-full rounded-[2.5rem] p-6 md:p-12 lg:p-16 border border-emerald-100 overflow-hidden">
          
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* FAQ List */}
          <div className="relative z-10 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={`rounded-[2rem] overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'bg-emerald-950 shadow-lg' 
                      : 'bg-white shadow-sm border border-emerald-100 hover:border-emerald-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-4 md:py-5 text-left focus:outline-none group"
                  >
                    {/* Question Text with Q1, Q2 prefix */}
                    <span className={`font-bold text-base md:text-lg pr-4 transition-colors duration-300 ${
                      isOpen ? 'text-emerald-50' : 'text-emerald-950'
                    }`}>
                      Q{index + 1}: {faq.question}
                    </span>
                    
                    {/* Circle Icon */}
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-white text-emerald-950' 
                        : 'bg-emerald-50 text-emerald-900 group-hover:bg-emerald-100'
                    }`}>
                      <Plus 
                        size={18} 
                        strokeWidth={2.5} 
                        className={`transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
                      />
                    </div>
                  </button>
                  
                  {/* Expandable Answer Section */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-6 md:px-8"
                      >
                        <div className="pb-6 pt-2 text-emerald-100/80 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Footer Text & Link */}
          <div className="relative z-10 mt-12 text-center flex flex-col items-center">
            <p className="text-emerald-900/40 font-bold text-sm mb-3 tracking-wide lowercase">
              if you still have any questions
            </p>
            <Link 
              href="#contact" 
              className="inline-flex items-center gap-2 font-bold text-emerald-950 hover:text-emerald-700 transition-colors"
            >
              <ArrowRight size={18} strokeWidth={2.5} /> Let's Talk!
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}