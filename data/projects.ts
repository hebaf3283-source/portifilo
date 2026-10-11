export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Mobile Development" | "Web Development" | "Software Engineering";
  technologies: string[];
  image: string;
  galleryImages: {
    src: string;
    caption: string;
  }[];
  featured: boolean;
  status: "Completed" | "Active" | "In Development";
  githubUrl?: string;
  liveDemoUrl?: string;
  problem: string;
  solution: string;
  keyFeatures: ProjectFeature[];
  technicalHighlights: string[];
  challengesAndLearnings: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "monometro",
    slug: "monometro",
    title: "MonoMetro — Cairo Metro & Monorail Guide",
    subtitle: "Offline-first cross-platform transit assistant & route planner",
    description:
      "A Flutter/Dart mobile application built for Cairo commuters, providing real-time offline route planning, nearest station GPS lookup, dynamic tariff calculation for all rider categories, and step-by-step transfer navigation across Metro and Monorail lines.",
    category: "Mobile Development",
    technologies: ["Flutter", "Dart", "Offline-First", "Geolocation", "Graph Algorithm", "State Management", "Material Design"],
    image: "/images/projects/monometro/hero-mockup.jpeg",
    galleryImages: [
      {
        src: "/images/projects/monometro/hero-mockup.jpeg",
        caption: "Hero splash screen and rider category onboarding in dark mode",
      },
      {
        src: "/images/projects/monometro/overview-en.jpeg",
        caption: "Route calculation, popular destinations, and step-by-step navigation in English",
      },
      {
        src: "/images/projects/monometro/overview-ar.jpeg",
        caption: "Station selector by line, route options, and transfer steps in Arabic",
      },
      {
        src: "/images/projects/monometro/history-settings.jpeg",
        caption: "Trip history list, settings modal, theme toggle, and delete confirmation",
      },
      {
        src: "/images/projects/monometro/history-dark.jpeg",
        caption: "Saved commute history with station count, trip duration, and custom tariff display",
      },
      {
        src: "/images/projects/monometro/settings-dark.jpeg",
        caption: "Bilingual settings (Arabic / English) and dark/light theme switcher",
      },
    ],
    featured: true,
    status: "Completed",
    githubUrl: "https://github.com/hebaf3283",
    problem:
      "Greater Cairo's rapid transit network spans Metro Line 1, Line 2, Line 3, and the Monorail network. Commuters often struggle with determining optimal transfer paths, calculating accurate fares based on their rider category, and accessing reliable route information in underground stations where cellular connectivity drops.",
    solution:
      "MonoMetro solves this through an offline-first mobile architecture built with Flutter and Dart. Commuters can quickly locate their nearest station using GPS, calculate shortest and minimum-transfer itineraries, view step-by-step interchange instructions (including walking transfer durations), and obtain exact fare pricing according to rider eligibility.",
    keyFeatures: [
      {
        title: "Multi-Line Network Topology",
        description: "Complete station database covering Cairo Metro Line 1, Line 2, Line 3, and Monorail stations.",
      },
      {
        title: "Dynamic Tariff Calculation",
        description: "Calculates fares based on station count and rider category: Standard, Student, Senior (60+), and Special Needs.",
      },
      {
        title: "Offline-First Route Planning",
        description: "Graph traversal algorithms compute both fastest route and minimum-transfer route with zero internet required.",
      },
      {
        title: "Nearest Station Geolocation",
        description: "Utilizes device GPS to calculate proximity to the closest metro entrance and route starting point.",
      },
      {
        title: "Detailed Interchange Guidance",
        description: "Provides transfer guidance with designated platform directions (e.g., Nasser, Shohadaa, Ataba) and estimated walking minutes.",
      },
      {
        title: "Trip History & Bookmarks",
        description: "Allows commuters to save favorite daily commutes and access recent search history with one tap.",
      },
      {
        title: "Bilingual & Dual Theme",
        description: "Full Arabic and English UI support with tailored dark and light themes for battery efficiency.",
      },
    ],
    technicalHighlights: [
      "Structured Flutter state management for reactive UI updates and seamless screen transitions.",
      "In-memory graph algorithm for calculating path costs, line transfers, and transit minutes.",
      "Local storage persistence for user preferences, language selection, and trip history.",
      "Native device geolocation integration with graceful permission fallbacks.",
    ],
    challengesAndLearnings: [
      "Designed a transit graph representation capable of penalizing line transfers to offer commuters a choice between fastest time vs. fewer transfer walks.",
      "Implemented a comprehensive Arabic/English localization system adhering to bidirectional UI layouts (RTL/LTR).",
      "Ensured zero-dependency offline reliability so that subway riders underground retain 100% functionality.",
    ],
  },
  {
    id: "educenter",
    slug: "educenter",
    title: "EduCenter — Educational Center Management Platform",
    subtitle: "Comprehensive management, attendance, exam scoring, and analytics portal",
    description:
      "A complete web-based educational management solution designed for tutoring centers and private academies, featuring multi-branch tracking, student enrollment, exam grade management, bubble sheet exam generation, and financial overview reporting.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SQL", "Database Design", "Analytics", "Responsive UI"],
    image: "/images/projects/educenter/dashboard-home.jpeg",
    galleryImages: [
      {
        src: "/images/projects/educenter/dashboard-home.jpeg",
        caption: "Main operational dashboard with revenue analytics, active classes, and quick actions",
      },
      {
        src: "/images/projects/educenter/exam-grades.jpeg",
        caption: "Exam grade records, student scoring tables, and performance tracking",
      },
      {
        src: "/images/projects/educenter/centers-list.jpeg",
        caption: "Educational centers and branch management directory",
      },
      {
        src: "/images/projects/educenter/bubble-sheet-generator.jpeg",
        caption: "Bubble sheet exam generator and assessment configuration interface",
      },
    ],
    featured: true,
    status: "Completed",
    githubUrl: "https://github.com/hebaf3283",
    problem:
      "Private tutoring centers and educational academies frequently struggle with paper-based attendance, manual student grading, uncoordinated multi-branch records, and tedious exam evaluation. This leads to administrative delays, lost grade histories, and inaccurate financial tracking.",
    solution:
      "EduCenter provides an integrated, bilingual management system that centralizes all center operations in one cohesive platform. Administrators can manage student rosters, record exam scores, generate customized bubble sheets, and monitor tuition revenue through intuitive dashboard metrics.",
    keyFeatures: [
      {
        title: "Centralized Academy Dashboard",
        description: "High-level overview of daily active students, scheduled sessions, total revenue, and urgent administrative alerts.",
      },
      {
        title: "Multi-Branch & Room Management",
        description: "Registers and coordinates multiple tutoring center branches, classroom capacities, and instructor schedules.",
      },
      {
        title: "Student Roster & Grade Registry",
        description: "Tracks student enrollment, contact info, attendance records, and comprehensive exam grading history.",
      },
      {
        title: "Bubble Sheet Generator",
        description: "Generates standardized bubble sheets for optical scanning and automated exam scoring.",
      },
      {
        title: "Financial Tracking & Summaries",
        description: "Monitors tuition payments, outstanding student fees, discounts, and revenue statistics.",
      },
      {
        title: "Arabic-First Clean Interface",
        description: "Tailored to Egyptian educational institutions with intuitive terminology and high-contrast usability.",
      },
    ],
    technicalHighlights: [
      "Relational database schema designed with foreign key constraints, indexing, and normalization for multi-center data integrity.",
      "Responsive layout optimized for desktops, tablets, and mobile devices using clean Tailwind CSS styling.",
      "Modular component architecture separating UI views, data tables, and modal dialogs.",
      "Data validation and sanitization ensuring accurate grade and currency calculations.",
    ],
    challengesAndLearnings: [
      "Architected clean relational data models linking students, classes, exams, branches, and payment transactions.",
      "Developed an interactive bubble sheet template layout that maintains exact printable dimensions and optical grid alignments.",
      "Focused heavily on usability to ensure staff members can record grades and attendance with minimal clicks.",
    ],
  },
];
