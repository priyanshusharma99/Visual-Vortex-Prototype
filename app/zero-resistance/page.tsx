"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Zap } from "lucide-react";
import Link from 'next/link';
import { useGameState } from "../context/GameStateContext";

export default function SyntaxSurge() {
  const { addXp } = useGameState();
  const [qIndex, setQIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const questions = [
    { 
        code: "print('Hello World')", 
        lang: "Select the correct output:", 
        options: ["Hello World", "\"Hello World\"", "Error"], 
        answer: 0 
    },
    { 
        code: "x = 5\ny = '5'\nprint(x + y)", 
        lang: "What happens?", 
        options: ["10", "55", "TypeError"], 
        answer: 2 
    },
    { 
        code: "def foo(a, b):\n  return a * b", 
        lang: "What is foo(3, 4)?", 
        options: ["7", "12", "34"], 
        answer: 1 
    },
  ];

  const handleAnswer = (idx: number) => {
    if (feedback) return; // Prevent double clicks

    if (idx === questions[qIndex].answer) {
        setFeedback('correct');
        addXp(50);
        setTimeout(() => {
            setFeedback(null);
            setQIndex((prev) => (prev + 1) % questions.length);
        }, 1000);
    } else {
        setFeedback('wrong');
        setTimeout(() => setFeedback(null), 1000);
    }
  };

  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center relative">
      <Link href="/" className="absolute top-8 left-8 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="w-full max-w-lg space-y-8">
        <div className="flex items-center justify-between text-[var(--accent-cyan)] font-mono text-sm">
            <span>SURGE_MODE</span>
            <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>SPEED BONUS ACTIVE</span>
            </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
            <motion.div
                key={qIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/20 rounded-xl overflow-hidden shadow-2xl"
            >
                {/* Code Block */}
                <div className="bg-[var(--code-bg)] p-6 font-mono text-sm md:text-base border-b border-[var(--text-secondary)]/10 text-[var(--text-primary)]">
                    <pre className="whitespace-pre-wrap">{questions[qIndex].code}</pre>
                </div>

                <div className="p-6 space-y-4">
                    <h3 className="text-[var(--text-secondary)] font-medium">{questions[qIndex].lang}</h3>
                    
                    <div className="grid gap-3">
                        {questions[qIndex].options.map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswer(i)}
                                className={`
                                    w-full p-4 rounded-lg font-mono text-left transition-all border
                                    ${feedback === 'correct' && i === questions[qIndex].answer 
                                        ? 'bg-[var(--accent-green)]/20 border-[var(--accent-green)] text-[var(--accent-green)]' 
                                        : feedback === 'wrong' && i !== questions[qIndex].answer 
                                            ? 'opacity-50 border-transparent bg-[var(--bg-primary)]'
                                            : 'bg-[var(--bg-primary)] border-transparent hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]'
                                    }
                                `}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

        {/* Feedback Overlay */}
        <AnimatePresence>
            {feedback === 'correct' && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="bg-[var(--accent-green)]/10 backdrop-blur-sm p-8 rounded-full border border-[var(--accent-green)]">
                        <CheckCircle className="w-16 h-16 text-[var(--accent-green)]" />
                    </div>
                </motion.div>
            )}
            {feedback === 'wrong' && (
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="bg-red-500/10 backdrop-blur-sm p-8 rounded-full border border-red-500">
                        <XCircle className="w-16 h-16 text-red-500" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </main>
  );
}
