"use client";

import { motion } from "framer-motion";

interface HeatmapData {
  day: string;
  value: number; // 0-4 intensity
  label?: string;
}

export function MistakeHeatmap() {
  // Mock data for last 4 weeks (28 days)
  const data: HeatmapData[] = Array.from({ length: 28 }, (_, i) => ({
    day: `Day ${i + 1}`,
    value: Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0,
    label: Math.random() > 0.8 ? "Tense usage" : undefined
  }));

  // Force some patterns
  data[5].value = 3; data[5].label = "Verb ending confusion";
  data[6].value = 2;
  data[12].value = 4; data[12].label = "Word order transfer";
  data[13].value = 1;

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs text-[var(--text-secondary)] opacity-70 mb-2">LAST 28 DAYS ACTIVITY</div>
      <div className="grid grid-cols-7 gap-1.5 w-full max-w-sm">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.02 }}
            className={`
              w-full pt-[100%] rounded-sm relative group cursor-help
              ${item.value === 0 ? 'bg-[var(--bg-secondary)] opacity-30' : ''}
              ${item.value === 1 ? 'bg-[var(--waveform)] opacity-40' : ''}
              ${item.value === 2 ? 'bg-[var(--waveform)] opacity-60' : ''}
              ${item.value === 3 ? 'bg-[var(--waveform)] opacity-80' : ''}
              ${item.value === 4 ? 'bg-[var(--waveform)] opacity-100' : ''}
            `}
          >
            {item.label && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                    {item.label}
                </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
