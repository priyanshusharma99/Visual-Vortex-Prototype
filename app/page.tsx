"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, Bug, BrainCircuit, Trophy, Flame } from "lucide-react";
import Link from 'next/link';
import { useGameState } from "./context/GameStateContext";
import { EnergyCheckIn } from "./components/home/EnergyCheckIn";

export default function MissionControl() {
  const { xp, level, streak, coins, energy } = useGameState();

  const menuItems = [
    { title: "Syntax Surge", subtitle: "Speed Drills", icon: <Zap className="w-5 h-5 text-[var(--accent-cyan)]" />, href: "/zero-resistance", color: "border-[var(--accent-cyan)]" },
    { title: "Bug Bounty", subtitle: "Debug Code", icon: <Bug className="w-5 h-5 text-[var(--accent-green)]" />, href: "/mistakes", color: "border-[var(--accent-green)]" },
    { title: "Skill Tree", subtitle: "Unlock Nodes", icon: <BrainCircuit className="w-5 h-5 text-[var(--accent-purple)]" />, href: "/thinking-shift", color: "border-[var(--accent-purple)]" },
  ];

  // Logic for Adaptive Suggestion
  const getAdaptiveQuest = () => {
    switch (energy) {
        case 'low':
            return {
                title: "Momentum Builder: Syntax Surge",
                desc: "Energy levels detected low. Maintain your streak with 60s of low-friction pattern matching.",
                icon: <Zap className="w-32 h-32 text-[var(--accent-cyan)]" />,
                action: "Start Quick Drill",
                href: "/zero-resistance",
                borderColor: "border-[var(--accent-cyan)]"
            };
        case 'returning':
            return {
                title: "Context Restore: Refresher",
                desc: "Welcome back. Let's briefly review the last concept (Loops) to get you back in flow.",
                icon: <BrainCircuit className="w-32 h-32 text-orange-400" />,
                action: "Restore Context",
                href: "/return",
                borderColor: "border-orange-400"
            };
        case 'focus':
            return {
                title: "Deep Dive: Algorithm Logic",
                desc: "Focus mode active. Perfect state for complex connecting nodes.",
                icon: <BrainCircuit className="w-32 h-32 text-[var(--accent-purple)]" />,
                action: "Enter Skill Tree",
                href: "/thinking-shift",
                borderColor: "border-[var(--accent-purple)]"
            };
        default: // high
            return {
                title: "Daily Quest: Recursion Reality",
                desc: "Complete 3 critical recursion bugs to earn a \"Stack Overflow\" badge.",
                icon: <Terminal className="w-32 h-32 text-[var(--accent-green)]" />,
                action: "Start Mission",
                href: "/mistakes",
                borderColor: "border-[var(--accent-green)]"
            };
    }
  };

  const quest = getAdaptiveQuest();

  return (
    <main className="min-h-screen p-6 md:p-12 relative overflow-hidden flex flex-col gap-8">
      {/* Header / HUD */}
      <header className="flex justify-between items-center mb-0">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/20 flex items-center justify-center">
                <span className="font-mono font-bold text-xl text-[var(--accent-cyan)]">{level}</span>
            </div>
            <div>
                <h1 className="text-xl font-bold tracking-tight">DEV_01</h1>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="text-[var(--accent-cyan)]">{xp} XP</span> / {(level + 1) * 1000} XP
                </div>
                {/* XP Bar */}
                <div className="w-32 h-1.5 bg-[var(--bg-secondary)] mt-1 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(xp % 1000) / 10}%` }}
                        className="h-full bg-[var(--accent-cyan)]"
                    />
                </div>
            </div>
        </div>

        <div className="flex gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)]/50 border border-[var(--text-secondary)]/10">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-sm font-mono font-bold text-orange-400">{streak}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)]/50 border border-[var(--text-secondary)]/10">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-mono font-bold text-yellow-400">{coins}</span>
            </div>
        </div>
      </header>
      
      <EnergyCheckIn />

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
        {/* Daily Quest Card */}
        <Link href={quest.href} className="col-span-1 md:col-span-2">
            <motion.div 
                key={energy} // Re-animate on energy change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-2xl bg-[var(--bg-secondary)] border ${quest.borderColor} relative overflow-hidden group hover:bg-[var(--bg-secondary)]/80 transition-colors cursor-pointer`}
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {quest.icon}
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{quest.title}</h2>
                <p className="text-[var(--text-secondary)] mb-6 max-w-md">{quest.desc}</p>
                <button className="px-6 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded-lg group-hover:scale-105 transition-transform">
                    {quest.action}
                </button>
            </motion.div>
        </Link>

        {/* Navigation Grid */}
        {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className="block">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`h-full p-6 rounded-2xl bg-[var(--bg-secondary)]/40 border-l-4 ${item.color} hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer flex items-center justify-between group`}
                >
                    <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.title}</h3>
                        <p className="text-sm text-[var(--text-secondary)] font-mono">{item.subtitle}</p>
                    </div>
                    <div className="p-3 rounded-full bg-[var(--bg-primary)] group-hover:scale-110 transition-transform">
                        {item.icon}
                    </div>
                </motion.div>
            </Link>
        ))}
      </div>
    </main>
  );
}
