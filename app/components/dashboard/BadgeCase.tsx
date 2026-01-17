"use client";

import { motion } from "framer-motion";
import { Shield, Award, Terminal } from "lucide-react";

export function BadgeCase() {
  const badges = [
    { title: "Bug Squad", icon: <Shield className="w-5 h-5" />, color: "text-red-400", border: "border-red-400" },
    { title: "Syntax Speed", icon: <Terminal className="w-5 h-5" />, color: "text-[var(--accent-cyan)]", border: "border-[var(--accent-cyan)]" },
    { title: "Early Riser", icon: <Award className="w-5 h-5" />, color: "text-yellow-400", border: "border-yellow-400" },
  ];

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/10 rounded-2xl p-6 h-full">
      <h3 className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-widest mb-4">Recent Accolades</h3>
      <div className="flex gap-4">
        {badges.map((b, i) => (
            <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`flex-1 aspect-square rounded-xl bg-[var(--bg-primary)] border ${b.border}/30 flex flex-col items-center justify-center gap-2 p-2 text-center group`}
            >
                <div className={`${b.color} group-hover:scale-110 transition-transform`}>{b.icon}</div>
                <span className="text-[10px] font-bold text-[var(--text-secondary)] leading-tight">{b.title}</span>
            </motion.div>
        ))}
      </div>
    </div>
  );
}
