"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useUserEnergy } from "../../context/UserEnergyContext";

export function LearningPulse() {
  const { energy } = useUserEnergy();
  
  // Adaptive animation parameters based on energy
  const speed = energy === 'high' ? 2 : energy === 'low' ? 6 : energy === 'returning' ? 8 : 4;
  const amplitude = energy === 'high' ? 1.2 : 0.8;

  return (
    <div className="w-full h-32 flex items-center justify-center relative overflow-hidden">
      {/* Container for the pulse */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-full bg-[var(--waveform)] opacity-60"
            animate={{
              height: [20, 40 * amplitude, 20],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2, // Staggered delay for wave effect
            }}
            initial={{ height: 20 }}
          />
        ))}
      </div>
      
      {/* Optional: Subtle background glow */}
      <motion.div 
        className="absolute inset-0 bg-[var(--waveform)] blur-3xl opacity-10"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
