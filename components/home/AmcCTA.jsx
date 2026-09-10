"use client";
import { motion } from 'motion/react';
import Button from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';

export default function AmcCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-emerald-100/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive IT AMC Support</h2>
          <p className="text-lg text-primary-100 mb-10 max-w-2xl">
            Protect your investments with our Annual Maintenance Contracts. We offer priority support, routine health checks, and rapid hardware replacements to guarantee zero downtime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-emerald-100 text-primary hover:bg-gray-50 shadow-lg">View AMC Packages</Button>
            <Button className="bg-transparent border border-white text-white hover:bg-emerald-100/10">Request Audit</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}