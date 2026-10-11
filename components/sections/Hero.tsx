"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ArrowRight, Download, Mail, Terminal, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 sm:py-24 overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />

      {/* Subtle Radial Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Ain Shams University &bull; DEPI Trainee</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                {profileData.name}
              </span>
            </h1>

            {/* Professional Title */}
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              {profileData.title}
            </p>

            {/* Subtitle / Affiliation */}
            <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 mt-1">
              {profileData.subtitle}
            </p>

            {/* Bio Blurb */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {profileData.shortBio}
            </p>

            {/* Quick Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>{profileData.university}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              {profileData.resumeAvailable && (
                <a
                  href={profileData.resumeUrl}
                  download="Heba_Fathy_CV.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Profile Picture & Interactive Developer Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full gap-6">
            {/* Profile Picture Frame */}
            <div className="relative group">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 shadow-xl shadow-blue-500/20">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white dark:border-slate-900">
                  <Image
                    src="/profile.jpg"
                    alt="Heba Fathy - Software Developer & Computer Science Student"
                    width={220}
                    height={220}
                    priority
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-md rounded-2xl bg-slate-900 text-slate-100 p-6 shadow-2xl border border-slate-800 relative">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>developer.profile.ts</span>
                </div>
                <div className="w-3" />
              </div>

              {/* Profile Badge Overlay */}
              <div className="flex items-center gap-4 mb-4 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-600 shrink-0">
                  <Image
                    src="/profile.jpg"
                    alt="Heba Fathy profile avatar"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 text-sm">Heba Fathy</h4>
                  <p className="text-xs text-blue-400 font-mono">Software Developer</p>
                  <p className="text-[11px] text-slate-400">Ain Shams Univ &bull; DEPI</p>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-1.5 text-slate-300 overflow-x-auto py-1">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">name</span>:{" "}
                  <span className="text-emerald-300">&quot;Heba Fathy&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">faculty</span>:{" "}
                  <span className="text-emerald-300">&quot;Faculty of Science, ASU&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">initiative</span>:{" "}
                  <span className="text-emerald-300">&quot;DEPI Trainee&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">languages</span>: [
                  <span className="text-emerald-300">&quot;C++&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Dart&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;TS&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">focus</span>:{" "}
                  <span className="text-emerald-300">&quot;Full-Stack &amp; Flutter&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">openToOpportunities</span>:{" "}
                  <span className="text-purple-400">true</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Status footer pill */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ready for practical collaboration</span>
                </span>
                <span className="text-slate-500 font-mono text-[10px]">Cairo, EG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
