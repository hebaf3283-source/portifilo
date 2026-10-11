"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            Journey &amp; Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Experience &amp; Practical Learning
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Structured hands-on engineering training and academic software development practice.
          </p>
        </div>

        {/* Timeline / Card Structure */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 hidden md:block">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative flex items-start gap-8 group">
              {/* Timeline marker */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.type === "Training" ? (
                  <Sparkles className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                ) : (
                  <GraduationCap className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                )}
              </div>

              {/* Card content */}
              <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                    {item.organization}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {item.role}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                  {item.organization}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {item.period}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {item.role}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
