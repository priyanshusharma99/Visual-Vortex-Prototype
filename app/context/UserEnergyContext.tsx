"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type EnergyState = 'high' | 'low' | 'returning' | 'focus';

interface UserEnergyContextType {
  energy: EnergyState;
  setEnergy: (energy: EnergyState) => void;
}

const UserEnergyContext = createContext<UserEnergyContextType | undefined>(undefined);

export function UserEnergyProvider({ children }: { children: ReactNode }) {
  const [energy, setEnergy] = useState<EnergyState>('high');

  return (
    <UserEnergyContext.Provider value={{ energy, setEnergy }}>
      {children}
    </UserEnergyContext.Provider>
  );
}

export function useUserEnergy() {
  const context = useContext(UserEnergyContext);
  if (context === undefined) {
    throw new Error('useUserEnergy must be used within a UserEnergyProvider');
  }
  return context;
}
