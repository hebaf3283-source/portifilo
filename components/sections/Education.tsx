"use client";

import React from "react";
import { educationData } from "@/data/education";
import { GraduationCap, BookOpen, MapPin, CheckCircle, School } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Undergraduate Computer Science studies at Ain Shams University with an emphasis on rigorous computational theory and software design.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 shrink-0">
                <School className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {educationData.status}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  {educationData.institution}
                </h3>
                <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                  {educationData.faculty} &bull; {educationData.degree}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{educationData.location}</span>
            </div>
          </div>

          <p className="mt-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {educationData.description}
          </p>

          {/* Academic Focus */}
          <div className="mt-6 flex flex-wrap gap-2">
            {educationData.academicFocus.map((focus, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>

        {/* Coursework Grid */}
        <div className="max-w-5xl mx-auto">
          <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Key Coursework &amp; Topics</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationData.coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400/50 dark:hover:border-blue-500/50 shadow-2xs transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {course.name}
                  </h5>
                </div>
                {course.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    {course.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
