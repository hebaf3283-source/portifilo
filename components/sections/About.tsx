"use client";

import React from "react";
import { profileData } from "@/data/profile";
import {
  Code2,
  Sparkles,
  Layers,
  Cpu,
  GraduationCap,
  MapPin,
  Mail,
  BookOpen,
  Award,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-blue-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-500" />,
    Layers: <Layers className="w-6 h-6 text-indigo-500" />,
    Cpu: <Cpu className="w-6 h-6 text-violet-500" />,
  };

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            Background &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Dedicated Computer Science student and aspiring software developer bridging foundational computing with real-world applications.
          </p>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {profileData.fullBio.map((paragraph, idx) => (
              <p key={idx} className="bg-white dark:bg-slate-900/90 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Strengths */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.keyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all shadow-xs"
                >
                  <div className="mb-2 p-2 w-fit rounded-lg bg-slate-100 dark:bg-slate-800">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-blue-500" />}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Facts & Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Profile Details</span>
              </h3>

              <div className="space-y-4 text-sm divide-y divide-slate-100 dark:divide-slate-800/80">
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Full Name</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{profileData.name}</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Role</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{profileData.title}</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Location</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {profileData.location}
                  </span>
                </div>

                <div className="flex justify-between items-start py-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">University</span>
                  <div className="text-right">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 block">{profileData.university}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{profileData.faculty}</span>
                  </div>
                </div>

                <div className="flex justify-between items-start py-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Training</span>
                  <div className="text-right">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 block">DEPI</span>
                    <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                      {profileData.trainingStatus}
                    </span>
                  </div>
                </div>

                {profileData.email && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Email</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-mono text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      {profileData.email}
                    </a>
                  </div>
                )}

                {profileData.github && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">GitHub</span>
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      github.com/hebaf3283
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Focus Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-indigo-900/10 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200/50 dark:border-blue-900/50">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  Continuous Learning Commitment
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Aiming to build a strong engineering career through practical mastery of clean code, algorithmic thinking, and modern multi-platform frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
