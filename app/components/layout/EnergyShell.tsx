"use client";

import { useEffect } from 'react';
import { useUserEnergy } from '../../context/UserEnergyContext';
import { EnergySwitcher } from '../debug/EnergySwitcher';

export function EnergyShell({ children }: { children: React.ReactNode }) {
  const { energy } = useUserEnergy();

  useEffect(() => {
    // Apply the energy state to the body for global styling
    document.body.setAttribute('data-energy', energy);
  }, [energy]);

  return (
    <div className="min-h-screen transition-colors duration-1000 ease-in-out">
      {children}
      <EnergySwitcher />
    </div>
  );
}
