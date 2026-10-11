# Heba Fathy — Personal Developer Portfolio

A modern, responsive, production-ready personal developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Overview

- **Owner:** Heba Fathy
- **Title:** Software Developer | Computer Science Student
- **Affiliation:** Faculty of Science, Ain Shams University
- **Training:** Digital Egypt Pioneers Initiative (DEPI) Trainee
- **Location:** Cairo, Egypt

---

## 🚀 Key Features

1. **Complete Portfolio Sections:**
   - **Hero:** Interactive developer credential widget, dynamic headline, quick badges, and call-to-actions.
   - **About:** Verified biographical narrative, computer science philosophy, and core focus highlights.
   - **Technical Skills:** Categorized skill badges (Languages, Mobile, Web, CS Core, Databases, Tools) with interactive category filtering.
   - **Featured Projects:** Project cards with real gallery images, tags, status badges, and deep case studies.
   - **Experience & Practical Learning:** Timeline highlighting active DEPI training and Ain Shams University coursework.
   - **Education:** Academic credentials from Ain Shams University and essential computer science coursework.
   - **Certifications & Training:** Verified DEPI program verification and technical curriculum.
   - **Services:** Real-world student capabilities (Responsive Web, Flutter Mobile UI, Algorithmic Problem Solving, Database Modeling).
   - **Contact & Connect:** Direct contact card and an interactive contact form with client validation and 1-click email client fallback.

2. **In-Depth Project Case Studies:**
   - Dynamic Next.js routes at `/projects/[slug]` (e.g. `/projects/monometro`, `/projects/educenter`).
   - Detailed breakdown of Problem Statements, Proposed Solutions, Architecture Highlights, Screenshot Galleries, and Lessons Learned.

3. **Design & Theming:**
   - Tailored color palette: Primary Blue (`#3B82F6`), Dark Navy (`#0F172A`), Emerald (`#10B981`).
   - Smooth light/dark mode switcher with system preference detection and `localStorage` persistence.
   - Responsive design tested across mobile, tablet, and desktop viewports.

4. **SEO & Accessibility:**
   - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
   - Automated Sitemap (`/sitemap.xml`) and Robots (`/robots.txt`).
   - OpenGraph and Twitter cards metadata.

---

## 📁 Project Structure

```text
├── app/
│   ├── layout.tsx              # Root layout with ThemeProvider, Navbar, Footer & SEO
│   ├── page.tsx                # Single-page portfolio assembling all sections
│   ├── not-found.tsx           # Custom 404 page
│   ├── sitemap.ts              # Dynamic sitemap generator
│   ├── robots.ts               # Robots.txt configuration
│   └── projects/
│       └── [slug]/
│           └── page.tsx        # Dynamic project case study template
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive sticky navigation with mobile drawer
│   │   ├── Footer.tsx          # Modern footer with quick links & back-to-top
│   │   └── ThemeProvider.tsx   # React context for theme toggling
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with interactive terminal
│   │   ├── About.tsx           # Verified biography and profile facts
│   │   ├── Skills.tsx          # Filterable skills directory
│   │   ├── Projects.tsx        # Projects showcase grid
│   │   ├── Experience.tsx      # DEPI & academic journey
│   │   ├── Education.tsx       # Faculty of Science credentials & coursework
│   │   ├── Certifications.tsx  # DEPI training details
│   │   ├── Services.tsx        # Practical development offerings
│   │   └── Contact.tsx         # Contact info & validated contact form
│   └── ui/
│       ├── Monogram.tsx        # Custom geometric HF monogram logo
│       └── Icons.tsx           # Clean SVG brand icons (GitHub, LinkedIn)
├── data/
│   ├── profile.ts              # Centralized profile and bio information
│   ├── skills.ts               # Categorized technical skills
│   ├── projects.ts             # Featured projects and case studies
│   ├── experience.ts           # Practical experience & DEPI data
│   ├── education.ts            # University and coursework data
│   ├── certifications.ts       # Certification & training entries
│   └── services.ts             # Services offerings data
└── public/
    ├── images/
    │   └── projects/           # High-resolution screenshots & mockups
    └── resume/
        └── Heba_Fathy_CV.pdf   # Resume download document
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build & Run for Production
```bash
npm run build
npm start
```

---

## ✏️ How to Update Information

All portfolio content is decoupled from UI presentation and can be managed directly in the `data/` directory:

- **Personal Information & Bio:** Edit [data/profile.ts](file:///c:/portofilo/data/profile.ts)
- **Projects & Case Studies:** Edit [data/projects.ts](file:///c:/portofilo/data/projects.ts)
- **Skills & Categories:** Edit [data/skills.ts](file:///c:/portofilo/data/skills.ts)
- **Experience:** Edit [data/experience.ts](file:///c:/portofilo/data/experience.ts)
- **Education & Courses:** Edit [data/education.ts](file:///c:/portofilo/data/education.ts)
- **Certificates:** Edit [data/certifications.ts](file:///c:/portofilo/data/certifications.ts)
- **Services:** Edit [data/services.ts](file:///c:/portofilo/data/services.ts)
- **CV / Resume:** Replace the file in `public/resume/Heba_Fathy_CV.pdf`.
