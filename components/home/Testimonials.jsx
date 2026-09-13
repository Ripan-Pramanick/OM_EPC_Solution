"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { testimonials } from '@/data/siteData';

const reviews = testimonials;

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Show 2 reviews per slide
  
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  
  // Get the reviews for the current slide
  const currentReviews = reviews.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    // Section Background: emerald-50
    <section className="py-24 bg-emerald-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-[10px] font-bold text-emerald-950 tracking-widest uppercase mb-6 shadow-sm"
            >
              <X size={12} className="text-emerald-800" strokeWidth={2.5} /> TESTIMONIALS
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[2.75rem] font-bold text-emerald-950 tracking-tight leading-tight"
            >
              Stories of Style and Trust
            </motion.h2>
          </div>

          
        </div>

        {/* Cards Grid with Slider Animation */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {currentReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-emerald-100 rounded-[2rem] p-8 md:p-10 border border-emerald-200 shadow-sm flex flex-col h-full"
                >
                  {/* Card Header with Border & Overlapping Image */}
                  <div className="relative pt-2">
                    <div className="pr-[80px] pb-5 border-b border-emerald-200/80 mb-6 flex flex-col">
                      <span className="text-xl font-semibold text-emerald-950 mr-2">{review.author}</span>
                      <span className="text-sm text-emerald-800/70 font-medium">{review.role}</span>
                    </div>
                    
                    {/* Profile Squircle Image */}
                    <div className="absolute right-0 top-0 w-[68px] h-[68px] rounded-b-full rounded-t-xl overflow-hidden shadow-sm border border-emerald-200/50">
                      <Image src={review.image} alt={review.author} fill className="object-cover" />
                    </div>
                  </div>

                  {/* Rating Section */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-emerald-600 text-emerald-600" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-950 tracking-wider uppercase">
                      {review.rating} OUT OF 5
                    </span>
                  </div>

                  {/* Review Content */}
                  <h4 className="text-xl font-bold text-emerald-950 mb-3">{review.title}</h4>
                  <p className="text-emerald-900/70 leading-relaxed text-[15px]">
                    {review.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center gap-6 mt-12 text-[13px] font-bold tracking-wider"
        >
          <button 
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="flex items-center gap-2 text-emerald-800 hover:text-emerald-950 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} strokeWidth={2.5} /> Prev
          </button>
          
          {/* Divider */}
          <div className="w-[1.5px] h-4 bg-emerald-300 rounded-full"></div>
          
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 text-emerald-800 hover:text-emerald-950 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}