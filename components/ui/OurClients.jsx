"use client";
import { motion } from 'motion/react';
import { Activity, Fish, Hexagon, ShieldPlus, Component } from 'lucide-react';

// Mock Client Data (Replace with your actual client logo images later)
const clients = [
  { id: 1, name: "Everkind Healthcare", icon: ShieldPlus, color: "text-emerald-400" },
  { id: 2, name: "Growth Shark", icon: Fish, color: "text-blue-500" },
  { id: 3, name: "Emplifi", icon: Component, color: "text-purple-400" },
  { id: 4, name: "S&IB", icon: Hexagon, color: "text-blue-700" },
  { id: 5, name: "TechNova Systems", icon: Activity, color: "text-amber-400" },
];

// Duplicate the array to create a seamless infinite scrolling effect
const duplicatedClients = [...clients, ...clients, ...clients];

export default function OurClients() {
  return (
    <section className="bg-emerald-950 py-10 md:py-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center relative">

        {/* Left Side: Static Title (Solid background prevents overlap) */}
        <div className="w-full md:w-auto shrink-0 relative z-20 bg-emerald-950 px-6 md:px-10 py-4 flex items-center justify-center md:justify-start">
          <h3 className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight whitespace-nowrap">
            Our Clients
          </h3>
          {/* Subtle gradient fade on the right of the text for large screens */}
          <div className="hidden md:block absolute -right-10 top-0 bottom-0 w-12 bg-gradient-to-r from-emerald-950 to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Infinite Scrolling Logos */}
        <div className="flex-1 min-w-0 w-full overflow-hidden relative flex items-center mt-4 md:mt-0">

          {/* Right Gradient Mask for smooth fading out */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-emerald-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35, // Speed of the scroll
            }}
            className="flex items-center gap-12 md:gap-20 w-max pl-4 pr-12 md:pr-20"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                {/* 
                  Note: Replace this entire div block with an <Image /> tag 
                  when you have the actual client logos 
                */}
                <client.icon size={32} className={`${client.color}`} strokeWidth={2} />
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight font-helvetica whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}