"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock, Unlock, Zap, Crown, CheckCircle2, Code2, Binary, Database, Cpu } from "lucide-react";

export default function SkillTree() {
  const levels = [
    { 
        id: 1, 
        title: "The Awakening", 
        subtitle: "Variables & Types", 
        status: "completed", 
        bounties: 100,
        icon: <Zap className="w-5 h-5" />,
        align: "center"
    },
    { 
        id: 2, 
        title: "Logic Gates", 
        subtitle: "Control Flow", 
        status: "active", 
        bounties: 150,
        icon: <Unlock className="w-5 h-5" />,
        align: "left"
    },
    { 
        id: 3, 
        title: "The Loop", 
        subtitle: "Iteration", 
        status: "active", 
        bounties: 200,
        icon: <Lock className="w-5 h-5" />,
        align: "right"
    },
    { 
        id: 4, 
        title: "Function Core", 
        subtitle: "Modular Code", 
        status: "active", 
        bounties: 300,
        icon: <Code2 className="w-5 h-5" />,
        align: "left"
    },
    { 
        id: 5, 
        title: "Data Matrix", 
        subtitle: "Arrays & Objects", 
        status: "active", 
        bounties: 500,
        icon: <Crown className="w-5 h-5" />,
        align: "center"
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white font-sans overflow-x-hidden relative selection:bg-cyan-500/30">
      
      {/* Creative Ambience: Floating Artifacts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] text-white/5 animate-float-slow"><Binary className="w-32 h-32" /></div>
        <div className="absolute top-[40%] right-[5%] text-white/5 animate-float-delayed"><Database className="w-24 h-24" /></div>
        <div className="absolute bottom-[20%] left-[10%] text-white/5 animate-float"><Cpu className="w-40 h-40" /></div>
        <div className="absolute top-[20%] right-[20%] w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
        <Link href="/" className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all text-white/70 hover:text-white backdrop-blur-md">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="text-right pointer-events-auto">
            <h1 className="text-2xl font-bold tracking-tight text-white/90">Skill Map</h1>
            <p className="text-sm font-mono text-cyan-400">Section 1: Foundations</p>
        </div>
      </nav>

      {/* The Winding Path */}
      <div className="relative max-w-3xl mx-auto pt-32 pb-32 min-h-screen flex flex-col items-center">
        
        {/* SVG Bezier Path */}
        <div className="absolute top-0 bottom-0 w-full h-full pointer-events-none z-0">
             <svg className="w-full h-full visible" preserveAspectRatio="none" viewBox="0 0 100 1000">
                {/* Background Track */}
                <path d="M50 50 C 50 150, 20 250, 30 350 S 70 550, 50 650 S 30 850, 50 950" 
                      fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 2" />
                
                {/* Active Progress (Gradient) */}
                <path d="M50 50 C 50 150, 20 250, 30 350 S 70 550, 50 650 S 30 850, 50 950" 
                      fill="none" stroke="url(#gradient)" strokeWidth="1" 
                      strokeDasharray="1000" strokeDashoffset="750" // Simulated progress
                      className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
             </svg>
        </div>

        {/* Level Nodes */}
        <div className="w-full relative z-10 space-y-32 mt-12">
            {levels.map((level, i) => (
                <div key={level.id} className={`flex w-full ${
                    level.align === 'left' ? 'justify-start md:pl-20' : 
                    level.align === 'right' ? 'justify-end md:pr-20' : 
                    'justify-center'
                }`}>
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="relative group"
                    >
                        {/* Node Connector Point */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 z-0
                            ${level.align === 'left' ? '-right-12 border-white/10' : 
                              level.align === 'right' ? '-left-12 border-white/10' : 
                              'hidden'} 
                            hidden md:block`} 
                        />

                        {/* Card */}
                        <div className={`
                            relative w-72 md:w-80 p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer
                            ${level.status === 'active' 
                                ? 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:scale-105 hover:bg-white/15' 
                                : level.status === 'completed'
                                ? 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10'
                                : 'bg-black/40 border-white/5 opacity-60 hover:opacity-100'
                            }
                        `}>
                            {/* Status Indicator */}
                            {level.status === 'active' && <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]" />}

                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border
                                    ${level.status === 'active' ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300' :
                                      level.status === 'completed' ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-400' :
                                      'bg-white/5 border-white/10 text-white/20'}
                                `}>
                                    {level.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : level.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className={`font-bold text-lg leading-tight truncate ${level.status === 'locked' ? 'text-white/50' : 'text-white'}`}>
                                        {level.title}
                                    </h3>
                                    <p className="text-xs text-white/40 font-mono mt-1 uppercase tracking-wide">{level.subtitle}</p>
                                </div>
                            </div>
                            
                            {/* Footer / Reward */}
                            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                                <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">
                                    {level.status}
                                </span>
                                {level.status !== 'locked' && (
                                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                                        + {level.bounties} Bounties
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
