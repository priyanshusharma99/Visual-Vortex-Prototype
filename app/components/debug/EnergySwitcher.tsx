"use client";

import { useUserEnergy, EnergyState } from "../../context/UserEnergyContext";

export function EnergySwitcher() {
  const { energy, setEnergy } = useUserEnergy();
  
  const states: EnergyState[] = ['high', 'low', 'returning', 'focus'];

  return (
    <div className="fixed bottom-4 right-4 p-2 bg-black/10 backdrop-blur-md rounded-lg flex gap-2 opacity-30 hover:opacity-100 transition-opacity z-50">
      {states.map((state) => (
        <button
          key={state}
          onClick={() => setEnergy(state)}
          className={`px-3 py-1 rounded text-xs capitalize font-medium transition-colors ${
            energy === state 
              ? 'bg-white text-black shadow-sm' 
              : 'bg-transparent text-black/50 hover:bg-black/5'
          }`}
        >
          {state}
        </button>
      ))}
    </div>
  );
}
