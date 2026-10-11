import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          The page or project you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="pt-4 flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
