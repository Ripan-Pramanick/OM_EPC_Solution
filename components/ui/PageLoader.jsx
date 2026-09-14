"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const LinesAndDots = () => {
 
  const sectors = new Array(60).fill(null);
  const radius = 4.25; // ems

  return (
  
    <div className="lines-and-dots text-emerald-700">
      {sectors.map((_, i) => {
        const key = `sector-${i + 1}`;
        const fraction = i / sectors.length;
        const sectorStyle = {
          animationDelay: `calc(var(--anim-dur) * ${-fraction})`,
          transform: `rotate(${-fraction * 360}deg) translateY(${radius}em)`
        };

        return (
          <div key={key} className="lines-and-dots__sector" style={sectorStyle}>
            <div className="lines-and-dots__line"></div>
            <div className="lines-and-dots__dot"></div>
            <div className="lines-and-dots__dot"></div>
          </div>
        );
      })}
    </div>
  );
};

export default function PageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const handleLoad = () => {
     
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-emerald-50 flex items-center justify-center overflow-hidden"
          >
            <LinesAndDots />
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isLoading && children}
    </>
  );
}