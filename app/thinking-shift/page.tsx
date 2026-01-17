"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock, Unlock, Star } from "lucide-react";

export default function SkillTree() {
  const nodes = [
    { title: "Variables", status: "mastered", x: 50, y: 10 },
    { title: "Control Flow", status: "unlocked", x: 30, y: 40 },
    { title: "Functions", status: "locked", x: 70, y: 40 },
    { title: "Data Structs", status: "locked", x: 50, y: 70 },
    { title: "Algorithms", status: "locked", x: 50, y: 90 },
  ];

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <Link href="/" className="absolute top-8 left-8 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <h1 className="text-3xl font-bold mb-12">SKILL MAINFRAME</h1>

      <div className="relative w-full max-w-2xl h-[600px] border border-[var(--text-secondary)]/10 rounded-3xl bg-[var(--bg-secondary)]/20 backdrop-blur-sm">
        {/* Connecting Lines (Mocked via absolute div for speed) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
             <svg width="100%" height="100%">
                <line x1="50%" y1="10%" x2="30%" y2="40%" stroke="currentColor" strokeWidth="2" />
                <line x1="50%" y1="10%" x2="70%" y2="40%" stroke="currentColor" strokeWidth="2" />
                <line x1="30%" y1="40%" x2="50%" y2="70%" stroke="currentColor" strokeWidth="2" />
                <line x1="70%" y1="40%" x2="50%" y2="70%" stroke="currentColor" strokeWidth="2" />
                <line x1="50%" y1="70%" x2="50%" y2="90%" stroke="currentColor" strokeWidth="2" />
             </svg>
        </div>

        {nodes.map((node, i) => (
            <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`absolute w-24 h-24 -ml-12 -mt-12 flex flex-col items-center justify-center gap-2 rounded-full border-4 shadow-lg cursor-pointer transition-transform hover:scale-110
                    ${node.status === 'mastered' ? 'bg-[var(--accent-cyan)] border-[var(--accent-cyan)] text-white shadow-cyan-500/50' : ''}
                    ${node.status === 'unlocked' ? 'bg-[var(--bg-primary)] border-[var(--accent-purple)] text-[var(--accent-purple)]' : ''}
                    ${node.status === 'locked' ? 'bg-[var(--bg-secondary)] border-[var(--text-secondary)] text-[var(--text-secondary)] opacity-50 grayscale' : ''}
                `}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
                {node.status === 'mastered' && <Star className="w-6 h-6 fill-current" />}
                {node.status === 'unlocked' && <Unlock className="w-6 h-6" />}
                {node.status === 'locked' && <Lock className="w-6 h-6" />}
                
                <span className="text-xs font-bold">{node.title}</span>
            </motion.div>
        ))}
      </div>
    </main>
  );
}
