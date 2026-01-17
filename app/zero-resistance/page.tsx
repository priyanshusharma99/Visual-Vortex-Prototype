"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Eye, CheckCircle } from "lucide-react";
import Link from 'next/link';
import { useGameState } from "../context/GameStateContext";

export default function ZeroResistance() {
  const { addXp } = useGameState();
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const stream = [
    { 
        code: "def resolve_conflict(self):", 
        insight: "Conflict resolution is just a function." 
    },
    { 
        code: "  if energy < 10:\n    return 'rest'", 
        insight: "Listen to your system signals." 
    },
    { 
        code: "  else:\n    push_forward()", 
        insight: "Momentum builds when you are ready." 
    },
    {
        code: "while True:\n  learn()",
        insight: "Consistency is an infinite loop."
    }
  ];

  // Timer & Stream Logic
  useEffect(() => {
    if (complete) return;

    // Stream progression (change every 5s)
    const streamInterval = setInterval(() => {
        setStep((prev) => (prev + 1) % stream.length);
    }, 5000);

    // Countdown
    const timerInterval = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev <= 1) {
                setComplete(true);
                addXp(100); // Passive reward
                clearInterval(timerInterval);
                clearInterval(streamInterval);
                return 0;
            }
            return prev - 1;
        });
    }, 1000);

    return () => {
        clearInterval(streamInterval);
        clearInterval(timerInterval);
    };
  }, [complete, addXp]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative bg-black">
      <Link href="/" className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors z-50">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      {!complete ? (
        <div className="w-full max-w-2xl text-center space-y-12 p-8">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyan-500/50 font-mono text-sm tracking-[0.3em] uppercase animate-pulse"
            >
                Observation Mode Active • {timeLeft}s
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="space-y-8"
                >
                    <div className="font-mono text-2xl md:text-4xl text-white font-bold opacity-90">
                        {stream[step].code}
                    </div>
                    <div className="text-xl text-purple-400/80 font-light italic">
                        "{stream[step].insight}"
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-12 left-0 right-0 text-center">
                <p className="text-white/20 text-xs uppercase tracking-widest">
                    No action required. Just breathe.
                </p>
            </div>
        </div>
      ) : (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6"
        >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
            <h2 className="text-3xl font-bold text-white">Identity Reinforced.</h2>
            <p className="text-white/60">You showed up. That matters more than the code.</p>
            <Link href="/">
                <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    Return to Base
                </button>
            </Link>
        </motion.div>
      )}

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
    </main>
  );
}
