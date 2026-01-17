"use client";

import { motion } from "framer-motion";
import { Battery, BatteryCharging, BatteryLow, Zap } from "lucide-react";
import { useGameState, EnergyState } from "../../context/GameStateContext";

export function EnergyCheckIn() {
  const { energy, setEnergy } = useGameState();

  const states = [
    { id: 'high', label: 'High Energy', icon: <Zap className="w-4 h-4" />, color: 'text-[var(--accent-cyan)]', border: 'border-[var(--accent-cyan)]' },
    { id: 'focus', label: 'Deep Focus', icon: <BatteryCharging className="w-4 h-4" />, color: 'text-[var(--accent-purple)]', border: 'border-[var(--accent-purple)]' },
    { id: 'low', label: 'Low Energy', icon: <BatteryLow className="w-4 h-4" />, color: 'text-[var(--accent-green)]', border: 'border-[var(--accent-green)]' },
    // 'returning' is usually a system state, but user can set it manually for demo
    { id: 'returning', label: 'Returning', icon: <Battery className="w-4 h-4" />, color: 'text-orange-400', border: 'border-orange-400' },
  ];

  return (
    <div className="flex flex-col gap-2 mb-8">
      <div className="text-xs text-[var(--text-secondary)] font-mono uppercase tracking-widest">System Status Check</div>
      <div className="flex flex-wrap gap-2">
        {states.map((s) => (
          <button
            key={s.id}
            onClick={() => setEnergy(s.id as EnergyState)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg border transition-all text-sm font-medium
              ${energy === s.id 
                ? `${s.color} ${s.border} bg-[var(--bg-secondary)] shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] shadow-current` 
                : 'border-[var(--text-secondary)]/20 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]/50'
              }
            `}
          >
            {s.icon}
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
