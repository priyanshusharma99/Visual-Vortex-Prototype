import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Zap } from "lucide-react";

export function StreakCalendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  
  // Mock Data: 1 = Active, 0 = Inactive
  // Simulating a dedicated user with a recent streak
  const calendarData = [
    0, 0, 0, 1, 1, 1, 1, // Week 1
    1, 0, 1, 1, 1, 0, 0, // Week 2
    1, 1, 1, 1, 1, 1, 1, // Week 3 (Perfect!)
    1, 1, 1, 1, 0, 0, 0, // Week 4
    0, 0, 0               // Remaining
  ];

  const currentDayIndex = 24; // Simulating 'today' is the 25th (index 24)

  return (
    <div className="h-full w-full flex flex-col p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-purple-500/10 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-end mb-6 relative z-10">
        <div>
            <div className="flex items-center gap-2 text-white/40 mb-1">
                <CalendarIcon className="w-3 h-3" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Consistency</span>
            </div>
            <h3 className="text-xl font-bold text-white">January</h3>
        </div>
        <div className="text-right">
             <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                18 Day
             </div>
             <p className="text-[10px] text-white/40">Longest Streak</p>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 relative z-10 flex-1 content-center">
        {/* Days of Week */}
        {days.map((d, i) => (
            <div key={i} className="text-center text-[10px] font-bold text-white/30 mb-2">
                {d}
            </div>
        ))}

        {/* Calendar Days */}
        {calendarData.map((active, i) => (
            <div key={i} className="aspect-square flex items-center justify-center relative group">
                {/* Connecting Line (Horizontal) - Simplified visual trick */}
                {/* This could be complex, sticking to cell styles for now to ensure robustness */}
                
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                        active 
                        ? 'text-white shadow-[0_0_10px_rgba(34,211,238,0.3)] bg-gradient-to-tr from-cyan-500 to-blue-500 hover:scale-110 relative z-10' 
                        : 'text-white/10 bg-white/5 hover:bg-white/10'
                    } ${i === currentDayIndex ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0f172a]' : ''}`}
                >
                    {active ? (
                        <Zap className="w-3 h-3 fill-white text-white" />
                    ) : (
                        <span>{i + 1}</span>
                    )}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  );
}
