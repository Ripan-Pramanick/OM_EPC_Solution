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
  variant = "premium", 
  className, 
  showArrow = true,
  ...props 
}) {
  // 1. Premium Variant (Special Pill Style)
  if (variant === "premium") {
    return (
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "group relative inline-flex items-center gap-4 rounded-full border border-gray-200 bg-transparent py-1.5 pl-6 pr-1.5 transition-all duration-300 hover:border-primary hover:bg-primary shadow-sm hover:shadow-md",
          className
        )}
        {...props}
      >
        {showArrow && (
          <ArrowRight 
            size={18} 
            className="text-navy transition-colors duration-300 group-hover:text-white" 
          />
        )}
        <span className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-navy">
          {children}
        </span>
      </motion.button>
    );
  }

  // 2. Standard Variants with Left-to-Right Sweep Animation
  const styles = {
    primary: {
      base: "bg-primary text-white shadow-md border border-primary",
      sweep: "bg-navy",
      text: "group-hover:text-white",
      arrow: "group-hover:text-white",
    },
    outline: {
      base: "bg-transparent text-primary border-2 border-primary",
      sweep: "bg-primary",
      text: "group-hover:text-white",
      arrow: "text-primary group-hover:text-white",
    },
    dark: {
      base: "bg-navy text-white shadow-md border border-navy",
      sweep: "bg-primary", // Dark button sweeps with primary (Indigo) color
      text: "group-hover:text-white",
      arrow: "group-hover:text-white",
    },
    light: {
      base: "bg-white text-navy shadow-sm border border-gray-200",
      sweep: "bg-primary",
      text: "group-hover:text-white",
      arrow: "text-navy group-hover:text-white",
    },
  };

  const currentStyle = styles[variant] || styles.primary;

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }} 
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
        currentStyle.base,
        className
      )} 
      {...props}
    >
      {/* Left to Right sliding background */}
      <span 
        className={cn(
          "absolute left-0 top-0 h-full w-0 transition-all duration-300 ease-in-out group-hover:w-full",
          currentStyle.sweep
        )} 
      />
      
      {/* Text & Icon Layer */}
      <span className={cn(
        "relative z-10 flex items-center gap-2 transition-colors duration-300 ease-in-out",
        currentStyle.text
      )}>
        {children}
        {showArrow && (
          <ArrowRight 
            size={18} 
            strokeWidth={2.5}
            className={cn(
              "transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-black",
              currentStyle.arrow
            )} 
          />
        )}
      </span>
    </motion.button>
  );
}