"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { Layout, Smartphone, Code, Database, Check, ArrowRight } from "lucide-react";

export function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-6 h-6 text-blue-500" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-emerald-500" />;
      case "Code":
        return <Code className="w-6 h-6 text-indigo-500" />;
      case "Database":
        return <Database className="w-6 h-6 text-amber-500" />;
      default:
        return <Code className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            Practical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            What I Can Help With
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical development services tailored to student collaboration, prototype implementation, and client needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      {service.title}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-8">
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Discuss a project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
