"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({
  children,
  className,
  showArrow = true,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
      
        "relative flex w-max items-center p-1 border border-emerald-100/30 rounded-full bg-emerald-100 overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:border-emerald-300/80 transition-colors duration-300",
        className
      )}
      {...props}
    >
     
      <span className="absolute left-0 top-0 h-full w-0 bg-emerald-500 transition-all duration-300 ease-in-out group-hover:w-full z-0" />

     
      {showArrow && (
        <div className="relative z-10 px-3 text-emerald-950 transition-all duration-300 ease-in-out group-hover:text-emerald-950">
          <ArrowRight size={18} strokeWidth={2} />
        </div>
      )}

     
      <div className="relative z-10 bg-emerald-950 text-emerald-100 text-[15px] font-bold px-7 py-2.5 rounded-full transition-all duration-300 ease-in-out group-hover:bg-emerald-950 group-hover:text-emerald-100 flex-1 text-center whitespace-nowrap shadow-sm backdrop-blur-sm">
        {children}
      </div>
    </motion.button>
  );
}