"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!formState.name.trim()) errs.name = "Please enter your full name.";
    if (!formState.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formState.message.trim()) {
      errs.message = "Please write your message.";
    } else if (formState.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    if (profileData.email) {
      navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    formState.subject || "Inquiry from Portfolio"
  )}&body=${encodeURIComponent(
    `From: ${formState.name} (${formState.email})\n\n${formState.message}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Let&apos;s Connect
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            I&apos;m always interested in learning, collaborating on projects, and connecting with people who share an interest in software development. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you want to discuss a project, exchange ideas on software engineering, or explore potential internship opportunities, my inbox is open.
              </p>

              {/* Direct email pill */}
              {profileData.email && (
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-medium text-slate-400 block">Direct Email</span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 truncate block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {profileData.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-3">
                  Online Presence
                </span>
                <div className="flex gap-3">
                  {profileData.github && (
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-2xs transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {profileData.linkedin && (
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-2xs transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-900 dark:text-emerald-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="font-bold text-base">Message Ready to Send!</h4>
                  </div>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    Thank you, <strong>{formState.name}</strong>. Because this is a static client portfolio, click the button below to launch your default email client with your message prefilled:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl border border-emerald-300 dark:border-emerald-700 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Heba Fathy"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-rose-400 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-700 focus:ring-blue-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-rose-400 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-700 focus:ring-blue-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => {
                        setFormState({ ...formState, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Project Inquiry / Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? "border-rose-400 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-700 focus:ring-blue-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message
                          ? "border-rose-400 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-700 focus:ring-blue-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Validating message...</span>
                    ) : (
                      <>
                        <span>Compose Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
