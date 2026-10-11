"use client";

import React, { useState } from "react";
import { skillsData, SkillCategory } from "@/data/skills";
import {
  Code,
  Smartphone,
  Globe,
  Binary,
  Database,
  Wrench,
  Check,
} from "lucide-react";

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Code className="w-5 h-5 text-blue-500" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-emerald-500" />;
      case "web":
        return <Globe className="w-5 h-5 text-indigo-500" />;
      case "cs-core":
        return <Binary className="w-5 h-5 text-purple-500" />;
      case "databases":
        return <Database className="w-5 h-5 text-amber-500" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-rose-500" />;
      default:
        return <Code className="w-5 h-5 text-blue-500" />;
    }
  };

  const filteredCategories =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            Competencies &amp; Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Structured skill categories reflecting completed coursework, practical projects, and active DEPI training.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            All Categories
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200/50 dark:border-slate-700/50">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
                  >
                    <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                        ({skill.level})
                      </span>
                    )}
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
