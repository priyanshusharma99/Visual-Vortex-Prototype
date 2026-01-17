"use client";

import { ReactNode } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { motion } from 'framer-motion';

export function GameShell({ children }: { children: ReactNode }) {
  // We can use this shell to trigger global level-up animations or overlays
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-cyan)] selection:text-black">
      {/* Optional: Global Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
