"use client";

import { motion } from "framer-motion";

export function ActivityGraph() {
  const data = [30, 45, 20, 80, 60, 90, 40]; // Mock activity percentages
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="bg-white/5 border border-white/5 rounded-3xl p-6 backdrop-blur-md h-full flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <div>
            <h3 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-1">Weekly Neural Activity</h3>
            <div className="text-2xl font-bold text-white">4.2 Hrs <span className="text-sm font-normal text-white/40 ml-1">avg</span></div>
        </div>
        <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-white/40 border border-white/5 font-mono">
            LAST 7 DAYS
        </div>
      </div>
      
      <div className="flex-1 flex items-end justify-between gap-3 h-32">
        {data.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-3 w-full group cursor-pointer relative">
            <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className={`w-full max-w-[0.75rem] bg-white/10 rounded-full relative group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300`}
            >
            </motion.div>
            
             {/* Floating Tooltip (Clean) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-all transform scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap shadow-xl z-20">
                {h} min
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10"></div>
            </div>

            <span className="text-[10px] text-white/30 font-mono group-hover:text-white transition-colors">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
