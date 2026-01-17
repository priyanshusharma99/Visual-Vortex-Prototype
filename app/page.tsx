"use client";

import { motion } from "framer-motion";
import { ChevronRight, Battery, BatteryLow, BatteryCharging, Zap, Target, Flame, Trophy, Terminal, Bug, BrainCircuit, Eye } from "lucide-react";
import Link from 'next/link';
import { useGameState } from "./context/GameStateContext";
import { EnergyCheckIn } from "./components/home/EnergyCheckIn";
import { ActivityGraph } from "./components/dashboard/ActivityGraph";
import { BadgeCase } from "./components/dashboard/BadgeCase";

export default function MissionControl() {
  const { xp, level, streak, bounties, energy } = useGameState();

  const menuItems = [
    { title: "Syntax Surge", subtitle: "Speed Drills", icon: <Zap className="w-5 h-5 text-[var(--accent-cyan)]" />, href: "/zero-resistance", color: "border-[var(--accent-cyan)]" },
    { title: "Bug Bounty", subtitle: "Debug Code", icon: <Bug className="w-5 h-5 text-[var(--accent-green)]" />, href: "/mistakes", color: "border-[var(--accent-green)]" },
    { title: "Skill Tree", subtitle: "Unlock Nodes", icon: <BrainCircuit className="w-5 h-5 text-[var(--accent-purple)]" />, href: "/thinking-shift", color: "border-[var(--accent-purple)]" },
    { title: "Practice Arena", subtitle: "Solve Problems", icon: <Terminal className="w-5 h-5 text-blue-400" />, href: "/practice", color: "border-blue-400" },
  ];

  // Identity Logic
  const getIdentityStatement = () => {
    if (level < 5) return "You are learning to speak the machine's language.";
    if (level < 10) return "You are becoming a problem solver.";
    return "Consistency is your code.";
  };

  // Logic for Adaptive Suggestion
  const getAdaptiveQuest = () => {
    switch (energy) {
        case 'low':
            return {
                title: "Too tired? Just observe.",
                desc: "No questions. No pressure. Just 60 seconds of passive code flow to keep your identity alive.",
                icon: <Eye className="w-32 h-32 text-[var(--accent-cyan)]" />,
                action: "Start Observation",
                href: "/zero-resistance",
                borderColor: "border-[var(--accent-cyan)] shadow-[0_0_30px_-5px_var(--accent-cyan)]" // Extra glow for the "Big Button" feel
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
    <main className="min-h-screen p-6 md:p-8 relative overflow-hidden flex flex-col gap-10 max-w-7xl mx-auto font-sans">
      {/* Subtle Ambient Background */}
      <div className="fixed -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="fixed top-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
        <div className="space-y-4 max-w-2xl">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
            >
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[var(--accent-cyan)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                    DEV_01 // LEVEL {level}
                </div>
            </motion.div>
            
            <div>
                <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
                >
                    {getIdentityStatement()}
                </motion.h1>
                
                {/* Minimal XP Bar */}
                <div className="flex items-center gap-4 mt-4">
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden max-w-md">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(xp % 1000) / 10}%` }}
                            className="h-full bg-white"
                        />
                    </div>
                    <span className="text-xs font-mono text-white/40">{(level + 1) * 1000} XP to Next</span>
                </div>
            </div>
        </div>

        {/* Stats Pills */}
        <div className="flex gap-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Flame className="w-5 h-5 text-orange-400 opacity-90" />
                <div className="flex flex-col leading-none">
                    <span className="font-bold text-white text-sm">{streak}</span>
                    <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Streak</span>
                </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Target className="w-5 h-5 text-emerald-400 opacity-90" />
                <div className="flex flex-col leading-none">
                    <span className="font-bold text-white text-sm">{bounties}</span>
                    <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Bounties</span>
                </div>
            </div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        
        {/* Left Column: Status & Quest */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-8">
            <EnergyCheckIn />

            {/* Daily Quest Card (Clean Professional) */}
            <Link href={quest.href} className="block group">
                <motion.div 
                    key={energy} 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/10 group-hover:shadow-2xl"
                >
                    {/* Subtle Internal Gradient for Active Feel */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${energy === 'low' ? 'from-cyan-500' : energy === 'focus' ? 'from-purple-500' : 'from-green-500'} to-transparent`} />

                    <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 space-y-4 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-widest font-mono text-white/50">
                                <span className={`w-1.5 h-1.5 rounded-full ${energy === 'low' ? 'bg-cyan-400' : 'bg-green-400'}`} />
                                Recommended for you
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-white max-w-xl">{quest.title}</h2>
                            <p className="text-white/60 text-lg leading-relaxed max-w-lg">{quest.desc}</p>
                            
                            <div className="pt-4">
                                <button className="px-8 py-3 bg-white text-black font-bold rounded-full group-hover:scale-105 transition-transform flex items-center gap-2 mx-auto md:mx-0">
                                    {quest.action} <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        
                        {/* Minimal Icon Representation */}
                        <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0">
                            {quest.icon}
                        </div>
                    </div>
                </motion.div>
            </Link>

            {/* Middle Row: Activity & Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Navigation Grid */}
                {menuItems.map((item, i) => (
                    <Link key={i} href={item.href} className="block h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer flex items-center justify-between group"
                        >
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors">{item.title}</h3>
                                <p className="text-sm text-white/40 font-mono">{item.subtitle}</p>
                            </div>
                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors text-white/60 group-hover:text-white">
                                {item.icon}
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>

        {/* Right Column: Stats & Badges */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col gap-6">
            <ActivityGraph />
            
            <div className="bg-white/5 border border-white/5 rounded-3xl p-6 backdrop-blur-md">
                <BadgeCase />
            </div>
            
            {/* Course Progress Mini-Widget */}
            <div className="bg-white/5 border border-white/5 rounded-3xl p-6 backdrop-blur-md">
                <h3 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-4">Course Progress</h3>
                <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white">Python Mastery</span>
                    <span className="text-[var(--accent-cyan)] font-mono">72%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "72%" }}
                        transition={{ delay: 1, duration: 1 }}
                        className="h-full bg-[var(--accent-cyan)]"
                    />
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}
