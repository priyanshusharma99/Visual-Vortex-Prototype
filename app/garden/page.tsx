"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Droplets, Zap, AlertTriangle, Leaf } from "lucide-react";
import { useGameState } from "../context/GameStateContext";
import { useState } from "react";

export default function ConsistencyGarden() {
  const { streak, xp, incrementStreak } = useGameState();
  const [isWatering, setIsWatering] = useState(false);

  // Logic: 
  // Streak > 3 = Thriving
  // Streak 1-2 = Withering
  // Streak 0 = Dying
  // This is simplified for demo purposes.
  const plantState = streak > 3 ? 'thriving' : streak > 0 ? 'withering' : 'dying';

  const handleWater = () => {
    setIsWatering(true);
    setTimeout(() => {
        incrementStreak(); // Simulate watering restoring streak
        setIsWatering(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white font-sans overflow-hidden relative selection:bg-emerald-500/30">
      
      {/* Ambient Background - Green for Life, Yellow/Red for warning */}
      <div className={`fixed inset-0 transition-colors duration-1000 ${
          plantState === 'thriving' ? 'bg-emerald-900/10' :
          plantState === 'withering' ? 'bg-yellow-900/10' :
          'bg-red-900/5'
      }`} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
        <Link href="/" className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white backdrop-blur-md">
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </nav>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
        
        {/* Status Text */}
        <div className="text-center mb-12 space-y-2 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-widest ${
                    plantState === 'thriving' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                    plantState === 'withering' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                    'bg-red-500/10 border-red-500/20 text-red-400'
                }`}
            >
                {plantState === 'thriving' && <Leaf className="w-3 h-3" />}
                {plantState === 'withering' && <AlertTriangle className="w-3 h-3" />}
                {plantState === 'dying' && <AlertTriangle className="w-3 h-3" />}
                <span>
                    {plantState === 'thriving' ? 'System Thriving' : 
                     plantState === 'withering' ? 'System Unstable' : 
                     'Connection Lost'}
                </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
                Neural Sapling
            </h1>
            <p className="text-white/40 max-w-md mx-auto">
                This digital flora is powered by your consistency. 
                {plantState === 'thriving' ? " It is currently blooming due to your active streak." :
                 plantState === 'withering' ? " It is beginning to wither. Return to code to save it." :
                 " It has gone dormant. Re-establish connection immediately."}
            </p>
        </div>

        {/* The Plant */}
        <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-full blur-[100px] transition-all duration-1000 ${
                plantState === 'thriving' ? 'bg-emerald-500/20 opacity-100' :
                plantState === 'withering' ? 'bg-yellow-500/10 opacity-60' :
                'bg-red-500/5 opacity-30'
            }`} />

            <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 ${isWatering ? 'scale-110 brightness-125' : ''}`}>
                <Image 
                    src={
                        plantState === 'thriving' ? '/garden/plant-thriving.png' :
                        plantState === 'withering' ? '/garden/plant-withering.png' :
                        '/garden/plant-dying.png'
                    }
                    alt="Digital Plant"
                    fill
                    className="object-contain drop-shadow-2xl"
                />
            </div>
            
            {/* Water Particles Animation (only when watering) */}
            {isWatering && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 0], scale: 1.5 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-full h-full border-2 border-cyan-400/50 rounded-full animate-ping"
                    />
                </div>
            )}
        </div>

        {/* Action Button */}
        <div className="mt-12 relative z-10">
            {plantState !== 'thriving' && (
                <button 
                    onClick={handleWater}
                    disabled={isWatering}
                    className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold rounded-xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center gap-3 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Droplets className={`w-5 h-5 ${isWatering ? 'animate-bounce' : ''}`} />
                    <span>{isWatering ? "Restoring Connection..." : "Water with Code"}</span>
                </button>
            )}
            
            {plantState === 'thriving' && (
                 <div className="flex flex-col items-center gap-2">
                    <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span className="text-white/80 font-mono text-sm">Streak Active: {streak} Days</span>
                    </div>
                    <p className="text-xs text-white/30 mt-2">Keep coming back to maintain bloom.</p>
                 </div>
            )}
        </div>

      </div>
    </main>
  );
}
