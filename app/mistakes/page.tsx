"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Bug, Terminal, ShieldAlert } from "lucide-react";
import { useGameState } from "../context/GameStateContext";

export default function BugBounty() {
  const { addXp } = useGameState();

  const handleFix = () => {
    addXp(150);
    alert("Bug Squashed! +150 XP");
  };

  return (
    <main className="min-h-screen p-8 md:p-12 flex flex-col items-center">
      <Link href="/" className="absolute top-8 left-8 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="flex items-center gap-4 mb-12">
        <div className="p-4 rounded-full bg-[var(--accent-green)]/20 border border-[var(--accent-green)] text-[var(--accent-green)]">
            <Bug className="w-8 h-8" />
        </div>
        <div>
            <h1 className="text-3xl font-bold tracking-tight">LOGIC DIAGNOSTICS</h1>
            <p className="text-[var(--text-secondary)] font-mono">Prove your understanding by fixing these critical errors.</p>
        </div>
      </div>

      <div className="w-full max-w-4xl grid gap-6">
        {/* Bug Card 1 */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/20 flex gap-6 items-start group hover:border-[var(--accent-green)] transition-all"
        >
            <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs">
                    <ShieldAlert className="w-4 h-4" />
                    LOGIC FAILURE: Infinite Loop
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                    The condition <code className="text-[var(--accent-cyan)]">true</code> never changes, causing the program to hang.
                    How do we ensure termination?
                </p>
                <div className="bg-[var(--code-bg)] p-4 rounded-lg font-mono text-sm border-l-2 border-red-500/50">
                    <code className="text-[var(--text-secondary)]">
                        while(true) {'{'}<br/>
                        &nbsp;&nbsp;console.log("Crash");<br/>
                        {'}'}
                    </code>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={handleFix}
                        className="px-4 py-2 bg-[var(--accent-green)] text-[var(--bg-primary)] font-bold rounded hover:bg-[var(--accent-green)]/90 transition-colors text-sm"
                    >
                        DEPLOY POISON PILL (FIX)
                    </button>
                    <button className="px-4 py-2 border border-[var(--text-secondary)]/20 rounded hover:bg-[var(--text-secondary)]/10 text-sm">
                        View Stack Trace
                    </button>
                </div>
            </div>
            
            <div className="w-32 text-right">
                <span className="font-mono text-xl font-bold text-[var(--accent-green)]">+150 XP</span>
                <p className="text-xs text-[var(--text-secondary)]">Reward</p>
            </div>
        </motion.div>
      </div>
    </main>
  );
}
