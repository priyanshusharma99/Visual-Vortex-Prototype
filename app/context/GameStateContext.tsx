"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type EnergyState = 'high' | 'low' | 'returning' | 'focus';


interface GameState {
  xp: number;
  level: number;
  streak: number;
  bounties: number;
  energy: EnergyState;
}

interface GameStateContextType extends GameState {
  addXp: (amount: number) => void;
  levelUp: () => void;
  incrementStreak: () => void;
  collectBounty: (amount: number) => void;
  setEnergy: (energy: EnergyState) => void;
}

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [xp, setXp] = useState(1250);
  const [level, setLevel] = useState(5);
  const [streak, setStreak] = useState(12);
  const [bounties, setBounties] = useState(450);
  const [energy, setEnergy] = useState<EnergyState>('high'); // Default to high, but should ideally be 'returning' on first load after absence

  const addXp = (amount: number) => {
    setXp((prev) => prev + amount);
    // Simple level up logic check 
    if ((xp + amount) > level * 1000) {
        levelUp();
    }
  };

  const levelUp = () => {
    setLevel((prev) => prev + 1);
    setBounties((prev) => prev + 100); // Level up bonus
  };

  const collectBounty = (amount: number) => {
    setBounties((prev) => prev + amount);
  }

  const incrementStreak = () => {
    setStreak((prev) => prev + 1);
  };

  return (
    <GameStateContext.Provider value={{ xp, level, streak, bounties, energy, addXp, levelUp, incrementStreak, collectBounty, setEnergy }}>
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
}
