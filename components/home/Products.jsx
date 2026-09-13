"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/data/images';
import { X, ArrowRight, Download, Server, Monitor, Zap, Network } from 'lucide-react';
import Button from '@/components/ui/DarkBtn';

export default function Products() {
  const hardwareList = [
    "High-Capacity Online UPS",
    "Server & Storage Arrays",
    "Commercial Workstations",
    "Networking Switches & Routers"
  ];

  const brands = [
    { name: "CISCO", icon: Network },
    { name: "DELL", icon: Server },
    { name: "APC", icon: Zap },
    { name: "HP", icon: Monitor },
    { name: "D-LINK", icon: Network },
  ];

  return (
    <section id="products" className="py-24 bg-emerald-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold text-emerald-50 tracking-widest uppercase mb-6"
          >
            <X size={12} className="text-emerald-200" /> HARDWARE DISTRIBUTION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-emerald-50 Tracking-tight"
          >
            Products We Support
          </motion.h2>
        </div>

        {/* The User-Requested Tab Bar is REMOVED here as instructed */}

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">

          {/* Left: Image with subtle grid background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl bg-emerald-100 flex items-center justify-center p-8 overflow-hidden"
          >
            {/* Subtle Grid Pattern for background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]"></div>

            <div className="relative w-full h-full">
              <Image
                src="/01.png"
                alt="Enterprise Hardware"
                fill
                className="object-center hover:scale-102 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Text, List, Button & Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-3xl font-bold text-emareld-50 mb-4">Enterprise IT Equipment</h3>
            <p className="text-emerald-100/70 text-base mb-8 leading-relaxed max-w-md">
              Functional and resilient hardware solutions that combine performance, scalability, and security for seamless business continuity.
            </p>

            {/* List Items */}
            <ul className="flex flex-col gap-3 mb-10">
              {hardwareList.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm font-semibold text-emerald-100">
                  <ArrowRight size={16} className="text-emerald-100" /> {item}
                </li>
              ))}
            </ul>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/products">
                <Button>Explore Products</Button>
              </Link>

            </div>
          </motion.div>

        </div>

        {/* Bottom Client / Brand Logos Carousel */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          className="mt-24 bg-emerald-200 rounded-[2rem] py-16 px-6 md:px-12 flex items-center justify-center shadow-xl"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
            {brands.map((brand, index) => (
              <div
                key={index}

                className="group w-32 h-32 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center bg-emerald-100 hover:bg-emerald-300 hover:shadow-[0_10px_30px_rgba(167,243,208,0.2)] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <brand.icon
                  size={32}
                  strokeWidth={1.5}

                  className="mb-3 text-emerald-950 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-950 uppercase transition-colors duration-500">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}