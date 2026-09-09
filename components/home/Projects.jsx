"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { projects } from '@/data/siteData';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden">

      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4338CA_1px,transparent_1px),linear-gradient(to_bottom,#4338CA_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[10px] font-bold text-indigo-700 tracking-widest uppercase mb-6 px-4 py-1.5 border border-indigo-100 rounded-full bg-indigo-50 shadow-sm"
            >
              <X size={12} className="text-indigo-400" /> OUR WORK
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight leading-[1.1]"
            >
              Recent Installations
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#projects" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-800 transition-colors group pb-1 border-b border-indigo-700">
              View All Projects <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Premium Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#FAF9F6] rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-15px_rgba(67,56,202,0.15)] hover:-translate-y-2 hover:border-indigo-100 transition-all duration-500 ease-out flex flex-col cursor-pointer"
            >

              {/* Image & Floating Category Badge */}
              <div className="relative w-full h-[280px] md:h-[320px] bg-[#F5F7FF] overflow-hidden">
                <div className="absolute top-6 left-6 z-10 bg-[#FAF9F6]/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-indigo-700 uppercase tracking-widest shadow-sm border border-gray-100">
                  {project.category}
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Details */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-[#111827] mb-8 leading-snug group-hover:text-indigo-700 transition-colors duration-300">
                  {project.title}
                </h4>

                <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-indigo-100 flex items-center justify-between transition-colors duration-300">
                  <span className="text-sm font-bold text-[#111827] group-hover:text-indigo-700 transition-colors duration-300">
                    Explore Project
                  </span>
                  <span className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-indigo-200 group-hover:bg-indigo-50 flex items-center justify-center text-gray-500 group-hover:text-indigo-700 transition-all duration-300">
                    {/* Cool modern hover rotation effect */}
                    <ArrowRight size={16} className="transform group-hover:-rotate-45 transition-transform duration-300" />
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}