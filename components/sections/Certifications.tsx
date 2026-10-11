"use client";

import React from "react";
import { certificationsData } from "@/data/certifications";
import { Award, CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            Verification &amp; Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Certifications &amp; Training
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Structured national technology initiatives and formal software engineering programs.
          </p>
        </div>

        {/* Certifications Card */}
        <div className="max-w-4xl mx-auto space-y-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl p-8 sm:p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{cert.status}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Issuing Organization: {cert.organization}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Acquired */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {cert.skillsAcquired.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Graphic */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shrink-0 w-full md:w-56 shadow-xs">
                <ShieldCheck className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  MCIT Initiative
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Active Enrollment Verified
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
