import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heba Fathy | Software Developer & Computer Science Student",
  description:
    "Personal portfolio and project showcase of Heba Fathy, Computer Science student at Ain Shams University and Digital Egypt Pioneers Initiative (DEPI) trainee.",
  keywords: [
    "Heba Fathy",
    "Software Developer",
    "Computer Science",
    "Ain Shams University",
    "DEPI",
    "Flutter",
    "Next.js",
    "TypeScript",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "Heba Fathy" }],
  openGraph: {
    title: "Heba Fathy | Software Developer & Computer Science Student",
    description:
      "Personal portfolio and project showcase of Heba Fathy, Computer Science student at Ain Shams University and DEPI trainee.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
