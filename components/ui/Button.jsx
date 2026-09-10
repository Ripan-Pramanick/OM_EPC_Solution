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
        // Outer Wrapper: Original Emerald borders, relative and overflow-hidden for the sweep
        "relative flex w-max items-center p-1 border border-emerald-900 rounded-full bg-transparent overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:border-emerald-100",
        className
      )}
      {...props}
    >
      {/* Left-to-Right Sweep Animation Background */}
      <span className="absolute left-0 top-0 h-full w-0 bg-emerald-950 transition-all duration-300 ease-in-out group-hover:w-full z-0" />

      {/* Icon Section (Left Side) */}
      {showArrow && (
        <div className="relative z-10 px-3 text-emerald-950 transition-all duration-300 ease-in-out group-hover:text-emerald-100">
          <ArrowRight size={18} strokeWidth={2} />
        </div>
      )}

      {/* Text Section (Right Side) */}
      <div className="relative z-10 bg-emerald-950 text-emerald-100 text-[15px] font-bold px-7 py-2.5 rounded-full transition-all duration-300 ease-in-out group-hover:bg-emerald-100 group-hover:text-emerald-950 flex-1 text-center whitespace-nowrap shadow-sm">
        {children}
      </div>
    </motion.button>
  );
}