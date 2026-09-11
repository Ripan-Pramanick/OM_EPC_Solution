"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { X, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Using local data matching the exact image provided
const reviews = [
  {
    id: 1,
    author: "Mac Alister",
    role: "Senior Marketing, Spotify",
    rating: "4.8",
    title: "Perfect Quality",
    text: "Hubfolio ability to create a high-quality user interface stands out. Its something we placed a premium Recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    author: "Leslie Alexander",
    role: "Nintendo",
    rating: "4.8",
    title: "Highly Recommended!",
    text: "From start to finish, the team was professional, responsive,and truly cared about delivering the best result.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    // Section Background: emerald-50
    <section className="py-24 bg-emerald-50">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pb-2"
          >
            <Link href="#reviews" className="flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700 transition-colors">
              <ArrowRight size={18} strokeWidth={2} /> Read All Reviews
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // Cards updated to emerald-100 instead of white
              className="bg-emerald-100 rounded-[2rem] p-8 md:p-10 border border-emerald-200 shadow-sm"
            >
              {/* Card Header with Border & Overlapping Image */}
              <div className="relative pt-2">
                <div className="pr-[80px] pb-5 border-b border-emerald-200/80 mb-6">
                  <span className="text-xl font-semibold text-emerald-950 mr-2">{review.author}</span>
                  <span className="text-sm text-emerald-800/70 font-medium">{review.role}</span>
                </div>
                
                {/* Profile Squircle Image */}
                <div className="absolute right-0 top-0 w-[68px] h-[68px] rounded-b-full rounded-t-xl overflow-hidden shadow-sm border border-emerald-200/50">
                  <Image src={review.image} alt={review.author} fill className="object-cover" />
                </div>
              </div>

              {/* Rating Section - Stars are now Emerald as well */}
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
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center gap-6 mt-12 text-[13px] font-bold tracking-wider"
        >
          <button className="flex items-center gap-2 text-emerald-800/60 hover:text-emerald-950 transition-colors">
            <ChevronLeft size={18} strokeWidth={2.5} /> Prev
          </button>
          
          {/* Divider updated to Emerald */}
          <div className="w-[1.5px] h-4 bg-emerald-300 rounded-full"></div>
          
          <button className="flex items-center gap-2 text-emerald-800/60 hover:text-emerald-950 transition-colors">
            Next <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}