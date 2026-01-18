import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CourseValueCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-emerald-200/10 p-8 backdrop-blur-xl group"
    >
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-emerald-400/20 transition-colors duration-700" />
        
        <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-300">
                    <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-emerald-200/80 text-xs font-medium uppercase tracking-widest">Value Realized</span>
            </div>

            <div className="space-y-1">
                <h3 className="text-5xl font-serif text-emerald-100/90 leading-none">₹200</h3>
                <p className="text-emerald-200/50 text-sm font-medium">Out of ₹10,000</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <p className="text-emerald-100/70 text-sm leading-relaxed font-sans">
                    You’ve already utilized <span className="text-emerald-300 font-bold">₹200</span> of this course. 
                    Even if this course were free, you’d still have gained this much.
                </p>
            </div>
        </div>
    </motion.div>
  );
}
