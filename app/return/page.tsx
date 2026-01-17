"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowRight, BrainCircuit, RotateCcw } from "lucide-react";
import Link from 'next/link';
import { useGameState } from "../context/GameStateContext";

export default function DailyReward() {
  const { addXp } = useGameState();
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    addXp(500);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur">
      <div className="text-center space-y-8 max-w-xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium animate-pulse">
            <RotateCcw className="w-4 h-4" />
            <span>CONTEXT RESTORATION ACTIVE</span>
        </div>
        
        <h1 className="text-4xl font-bold text-[var(--text-primary)]">
            Let's get you back in flow.
        </h1>
        <p className="text-[var(--text-secondary)] leading-relaxed">
            It's been 3 days. Your brain often archives unused syntax to save energy. 
            <br/>We've prepared a <strong>Micro-Refresher</strong> on Python Loops to restore your context before you continue.
        </p>

        <motion.div
            onClick={handleOpen}
            className="cursor-pointer relative group mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {!opened ? (
                <div className="w-64 h-24 bg-[var(--bg-secondary)] rounded-xl flex items-center gap-4 px-6 border hover:border-[var(--accent-cyan)] transition-colors">
                     <div className="p-3 bg-[var(--bg-primary)] rounded-full">
                        <BrainCircuit className="w-8 h-8 text-[var(--accent-cyan)]" />
                     </div>
                     <div className="text-left">
                        <div className="font-bold text-[var(--text-primary)]">Initialize Context</div>
                        <div className="text-xs text-[var(--text-secondary)]">Click to restore +500 XP</div>
                     </div>
                </div>
            ) : (
                <div className="w-64 h-24 flex flex-col items-center justify-center">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-2xl font-black text-[var(--accent-green)] flex items-center gap-2"
                    >
                        <span>CONTEXT RESTORED</span>
                    </motion.div>
                </div>
            )}
        </motion.div>

        {opened && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-4"
            >
                <Link href="/">
                    <button className="px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded-lg hover:opacity-90 flex items-center gap-2 mx-auto">
                        Continue to Mission Control <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
            </motion.div>
        )}
      </div>
    </main>
  );
}
