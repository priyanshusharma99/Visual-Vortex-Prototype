"use client";

import { motion } from "framer-motion";
import { Battery, BatteryCharging, BatteryLow, Zap } from "lucide-react";
import { useGameState, EnergyState } from "../../context/GameStateContext";

export function EnergyCheckIn() {
  const { energy, setEnergy } = useGameState();

  return (
    <div className="flex flex-col gap-2 mb-8">
      <div className="text-xs text-[var(--text-secondary)] font-mono uppercase tracking-widest">System Status Check</div>
      <div className="flex gap-3">
        {[
          { id: "low", label: "Low Energy", icon: <BatteryLow className="w-4 h-4" />, color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30" },
          { id: "returning", label: "Returning", icon: <BatteryCharging className="w-4 h-4" />, color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30" },
          { id: "high", label: "High Energy", icon: <Zap className="w-4 h-4" />, color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/30" },
          { id: "focus", label: "Focus Mode", icon: <Battery className="w-4 h-4" />, color: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500/30" },
        ].map((state) => (
          <button
            key={state.id}
            onClick={() => setEnergy(state.id as EnergyState)}
            className={`
                px-4 py-2 rounded-full border flex items-center gap-2 transition-all duration-300 text-sm
                ${energy === state.id 
                    ? `${state.bg} ${state.border} ${state.color} font-bold shadow-lg shadow-black/20` 
                    : `border-white/5 text-white/40 hover:bg-white/5 hover:text-white`
                }
            `}
          >
            {state.icon}
            <span className="">{state.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
