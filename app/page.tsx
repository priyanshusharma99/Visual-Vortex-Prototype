"use client";

import { motion } from "framer-motion";
import { ChevronRight, Battery, BatteryLow, BatteryCharging, Zap, Target, Flame, Trophy, Terminal, Bug, BrainCircuit, Eye } from "lucide-react";
import Link from 'next/link';
import { useGameState } from "./context/GameStateContext";
import { EnergyCheckIn } from "./components/home/EnergyCheckIn";
import { BadgeCase } from "./components/dashboard/BadgeCase";
import { CourseValueCard } from "./components/dashboard/CourseValueCard";
import { StreakCalendar } from "./components/dashboard/StreakCalendar";
import { RewardSection } from "./components/dashboard/RewardSection";

export default function MissionControl() {
  const { xp, level, streak, bounties, energy } = useGameState();

  const menuItems = [
    { 
        title: "Syntax Surge", 
        subtitle: "Speed Drills", 
        icon: <Zap className="w-6 h-6 text-white" />, 
        href: "/zero-resistance", 
        gradient: "from-cyan-500 to-blue-500",
        shadow: "shadow-cyan-500/20"
    },
    { 
        title: "Bug Bounty", 
        subtitle: "Debug Code", 
        icon: <Bug className="w-6 h-6 text-white" />, 
        href: "/mistakes", 
        gradient: "from-emerald-500 to-teal-500",
        shadow: "shadow-emerald-500/20"
    },
    { 
        title: "Skill Tree", 
        subtitle: "Unlock Nodes", 
        icon: <BrainCircuit className="w-6 h-6 text-white" />, 
        href: "/thinking-shift", 
        gradient: "from-purple-500 to-indigo-500",
        shadow: "shadow-purple-500/20"
    },
    { 
        title: "Practice Arena", 
        subtitle: "Solve Problems", 
        icon: <Terminal className="w-6 h-6 text-white" />, 
        href: "/practice", 
        gradient: "from-pink-500 to-rose-500",
        shadow: "shadow-pink-500/20"
    },
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
      
      {/* VIBRANT Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-700" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen delay-1000" />
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
        <div className="space-y-4 max-w-2xl">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
            >
                <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 flex items-center gap-2 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_5px_rgba(34,211,238,1)]" />
                    DEV_01 // LEVEL {level}
                </div>
            </motion.div>
            
            <div>
                <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-lg"
                >
                    {getIdentityStatement()}
                </motion.h1>
                
                {/* Minimal XP Bar */}
                <div className="flex items-center gap-4 mt-4">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden max-w-md border border-white/5">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(xp % 1000) / 10}%` }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                        />
                    </div>
                    <span className="text-xs font-mono text-white/60 font-bold">{(level + 1) * 1000} XP to Next</span>
                </div>
            </div>
        </div>

        {/* Stats Pills - Colorful Glass */}
        <div className="flex gap-3">
            <Link href="/garden">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 backdrop-blur-md hover:from-orange-500/20 hover:to-red-500/20 transition-all cursor-pointer group hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                    <div className="p-2 rounded-full bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Flame className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-white text-lg">{streak}</span>
                        <span className="text-[10px] text-orange-300/60 font-mono uppercase tracking-wider">Streak</span>
                    </div>
                </div>
            </Link>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-md hover:from-emerald-500/20 hover:to-teal-500/20 transition-all cursor-pointer group hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Target className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-bold text-white text-lg">{bounties}</span>
                    <span className="text-[10px] text-emerald-300/60 font-mono uppercase tracking-wider">Bounties</span>
                </div>
            </div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full relative z-10">
        
        {/* Left Column: Status & Quest */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-8">
            <EnergyCheckIn />
            
            {/* Adaptive Quest Card - Hero */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Link href={quest.href} className={`block group relative overflow-hidden rounded-3xl border border-white/10 transition-all hover:scale-[1.01] hover:shadow-2xl`}>
                    
                    {/* Dynamic Gradient Background */}
                    <div className={`absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30 bg-gradient-to-br ${
                        energy === 'low' ? 'from-cyan-500 via-blue-500 to-indigo-500' :
                        energy === 'returning' ? 'from-orange-500 via-amber-500 to-yellow-500' :
                        energy === 'focus' ? 'from-purple-500 via-violet-500 to-fuchsia-500' :
                        'from-emerald-500 via-teal-500 to-cyan-500'
                    }`} />
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/40 group-hover:bg-black/30 transition-colors" />

                    <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
                        <div className={`p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                            {quest.icon}
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-white/80">
                                Recommended for You
                            </div>
                            <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                {quest.title}
                            </h3>
                            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                                {quest.desc}
                            </p>
                        </div>
                        <div className="md:self-center">
                            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-lg shadow-lg group-hover:shadow-white/25 group-hover:-translate-y-1 transition-all">
                                {quest.action} <ChevronRight className="w-5 h-5" />
                            </span>
                        </div>
                    </div>
                </Link>
            </motion.div>

            {/* Quick Actions Grid - Colorful Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {menuItems.map((item, i) => (
                    <Link href={item.href} key={i}>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className={`h-full p-6 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-xl ${item.shadow}`}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${item.gradient}`} />
                            <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm" />

                            <div className="relative z-10 flex flex-col items-start gap-4 h-full justify-between">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-white/50 font-mono mt-1">{item.subtitle}</p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>

            {/* Reward Section */}
            <RewardSection />
        </div>

        {/* Right Column: Analytics */}
        <div className="col-span-1 space-y-6">
            <CourseValueCard />

            <div className="h-[350px] border border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-xl">
                 <StreakCalendar />
            </div>
            
            <div className="p-6 rounded-3xl border border-white/10 bg-gradient-to-b from-purple-900/10 to-blue-900/10 backdrop-blur-xl">
                 <BadgeCase />
            </div>
        </div>
      </div>
    </main>
  );
}
