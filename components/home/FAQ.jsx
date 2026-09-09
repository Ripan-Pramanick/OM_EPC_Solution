"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '@/data/siteData';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-muted">Clear answers regarding our installations, AMC contracts, and support.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#FAF9F6] rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-navy">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6"
                  >
                    <div className="pb-6 text-muted">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}