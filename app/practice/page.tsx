"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PracticeArena() {
  return (
    <main className="min-h-screen bg-[#020617] text-white p-8 font-sans">
      <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Mission Control
      </Link>

      <section className="max-w-4xl mx-auto mt-20 text-center space-y-6">
        <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mx-auto border border-blue-500/20 backdrop-blur-xl">
            <Terminal className="w-10 h-10 text-blue-400" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Practice Arena</h1>
        <p className="text-xl text-white/40 max-w-lg mx-auto leading-relaxed">
          Standard coding problems and algorithmic challenges. <br/>
          <span className="text-blue-400">Coming Soon.</span>
        </p>
      </section>
    </main>
  );
}
