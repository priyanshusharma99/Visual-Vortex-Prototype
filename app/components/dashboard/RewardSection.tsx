import { motion } from "framer-motion";
import { Sparkles, Trophy, Clock, CheckCircle } from "lucide-react";

export function RewardSection() {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full relative overflow-hidden rounded-[2rem] border border-amber-500/20 bg-black/20 backdrop-blur-md group"
    >
        {/* Golden Ambient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/5 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Left: Trophy Icon */}
            <div className="relative">
                <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 animate-pulse" />
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 transform group-hover:scale-110 transition-transform duration-500 border border-white/20">
                    <Trophy className="w-10 h-10 text-white drop-shadow-md" />
                </div>
            </div>

            {/* Middle: Content */}
            <div className="flex-1 text-center md:text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
                    <Sparkles className="w-3 h-3" />
                    Final Milestone
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Full Stack Certification</h3>
                <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                    Complete the final 3 modules to unlock your verified certification and exclusive alumni benefits.
                </p>
                
                {/* Rewards List */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                    {["Verified Certificate", "Alumni Network Access", "1-on-1 Career Coaching"].map((reward, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-amber-200/80">
                            <CheckCircle className="w-3 h-3 text-amber-500" /> {reward}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Countdown & Action */}
            <div className="flex flex-col items-center gap-4 min-w-[160px]">
                <div className="text-center space-y-1">
                    <div className="flex items-center justify-center gap-2 text-amber-400 font-mono text-sm uppercase tracking-widest">
                        <Clock className="w-4 h-4" /> Time Left
                    </div>
                    <div className="text-3xl font-bold text-white tabular-nums">12 Days</div>
                </div>
                
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 w-[72%] shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                </div>
                <div className="text-[10px] text-white/40 font-mono flex justify-between w-full px-1">
                    <span>72% Done</span>
                    <span>Goal: 100%</span>
                </div>
            </div>

        </div>
    </motion.div>
  );
}
