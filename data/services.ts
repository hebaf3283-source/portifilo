export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Responsive Web Development",
    subtitle: "Modern, clean, and accessible web pages",
    description:
      "Developing well-structured, mobile-friendly websites using modern HTML, CSS, JavaScript, React, and Next.js, tailored to client and project needs.",
    deliverables: [
      "Responsive layout for mobile, tablet, and desktop",
      "Clean semantic HTML5 structure with SEO best practices",
      "Fast page loading and smooth UI transitions",
      "Accessible interactive forms and buttons",
    ],
    icon: "Layout",
  },
  {
    id: "flutter-apps",
    title: "Flutter Mobile App UI",
    subtitle: "Cross-platform Android & iOS interfaces",
    description:
      "Crafting intuitive, cross-platform mobile user interfaces with Flutter and Dart, supporting smooth animations, dark/light themes, and offline functionality.",
    deliverables: [
      "Clean Material Design & Cupertino components",
      "Bilingual support (Arabic & English RTL/LTR)",
      "Dark and light theme implementation",
      "State management & local storage integration",
    ],
    icon: "Smartphone",
  },
  {
    id: "programming-algorithms",
    title: "Software & Algorithmic Problem Solving",
    subtitle: "Clean C++, Java, and Python programming",
    description:
      "Writing clean, well-commented code to solve algorithmic challenges, build structured console tools, and implement Object-Oriented software architectures.",
    deliverables: [
      "Efficient algorithm design and complexity optimization",
      "Object-Oriented system design (classes, interfaces, design patterns)",
      "Bug analysis, edge-case testing, and code refactoring",
    ],
    icon: "Code",
  },
  {
    id: "database-design",
    title: "Database Modeling & SQL Queries",
    subtitle: "Structured schema design and relational queries",
    description:
      "Designing clean relational database architectures, Entity-Relationship (ER) diagrams, and writing optimized SQL queries for application backends.",
    deliverables: [
      "Entity-Relationship diagrams (ERD) & schema mapping",
      "Database normalization (1NF, 2NF, 3NF)",
      "Custom SQL queries, joins, views, and aggregate reports",
    ],
    icon: "Database",
  },
];
