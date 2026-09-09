"use client";
import { motion } from 'motion/react';
import { testimonials } from '@/data/siteData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Client Trust</h2>
          <h3 className="text-4xl font-bold text-navy">What Our Partners Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-soft relative"
            >
              <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
              <p className="text-dark mb-8 relative z-10 italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-bold text-navy">{testimonial.author}</h4>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}