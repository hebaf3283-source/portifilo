import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Smartphone,
  Globe,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
              {project.category === "Mobile Development" ? (
                <Smartphone className="w-3.5 h-3.5" />
              ) : (
                <Globe className="w-3.5 h-3.5" />
              )}
              <span>{project.category}</span>
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-3xl">
            {project.subtitle}
          </p>

          {/* Links and Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 font-semibold text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl mb-16 bg-slate-950/30">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Tech Stack Pills */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-3">
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-lg font-bold">The Challenge</h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-3">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
              <Lightbulb className="w-5 h-5" />
              <h3 className="text-lg font-bold">The Solution</h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6 flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600" />
            <span>Key Features &amp; Capabilities</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture & Implementation Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-indigo-600" />
            <span>Architecture &amp; Implementation</span>
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            {project.technicalHighlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                <span className="leading-relaxed">{hl}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Screenshots */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6">
            Project Visuals &amp; Screenshots
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.galleryImages.map((img, idx) => (
              <figure
                key={idx}
                className="group rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950/20">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="p-4 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16 p-8 rounded-3xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Challenges &amp; Lessons Learned
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            {project.challengesAndLearnings.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-blue-600 dark:text-blue-400 font-bold">&bull;</span>
                <span className="leading-relaxed">{lesson}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md transition-colors"
          >
            <span>Discuss This Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}
