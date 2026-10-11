import React from "react";

interface MonogramProps {
  className?: string;
  size?: number;
}

export function Monogram({ className = "", size = 40 }: MonogramProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center font-bold select-none rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Heba Fathy Monogram Logo"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 opacity-90" />
      <div className="absolute inset-[1.5px] rounded-[10px] bg-white dark:bg-slate-900 transition-colors" />
      <div className="relative flex items-center justify-center font-mono font-black text-blue-600 dark:text-blue-400">
        <span style={{ fontSize: `${size * 0.45}px`, letterSpacing: "-0.05em" }}>HF</span>
      </div>
    </div>
  );
}
