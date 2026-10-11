export interface SkillItem {
  name: string;
  level?: "Core" | "Proficient" | "Familiar" | "Learning";
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for coursework, algorithms, and application logic.",
    skills: [
      { name: "C++", level: "Core" },
      { name: "Java", level: "Core" },
      { name: "Python", level: "Proficient" },
      { name: "JavaScript", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Dart", level: "Proficient" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Cross-platform mobile application development with Flutter & Dart.",
    skills: [
      { name: "Flutter", level: "Core" },
      { name: "Dart", level: "Core" },
      { name: "Cross-Platform UI", level: "Proficient" },
      { name: "State Management", level: "Proficient" },
      { name: "Offline-First Mobile UX", level: "Proficient" },
      { name: "Geolocation & Maps Integration", level: "Familiar" },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    description: "Building responsive, modern user interfaces and front-end architectures.",
    skills: [
      { name: "HTML5", level: "Core" },
      { name: "CSS3 / Styling", level: "Core" },
      { name: "Responsive Web Design", level: "Core" },
      { name: "React", level: "Proficient" },
      { name: "Next.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
    ],
  },
  {
    id: "cs-core",
    title: "Computer Science Fundamentals",
    description: "Theoretical and algorithmic foundations developed through academic study.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: "Core" },
      { name: "Data Structures", level: "Core" },
      { name: "Algorithms", level: "Core" },
      { name: "Problem Solving", level: "Core" },
      { name: "Software Design Principles", level: "Proficient" },
      { name: "Discrete Mathematics", level: "Proficient" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Relational data structures, query composition, and database design.",
    skills: [
      { name: "SQL", level: "Core" },
      { name: "Relational Database Concepts", level: "Core" },
      { name: "Database Design & Normalization", level: "Proficient" },
      { name: "ER Diagrams & Schema Modeling", level: "Proficient" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools & Environment",
    description: "Version control, IDEs, and developer tooling used in day-to-day work.",
    skills: [
      { name: "Git", level: "Core" },
      { name: "GitHub", level: "Core" },
      { name: "Visual Studio Code", level: "Core" },
      { name: "IntelliJ IDEA", level: "Proficient" },
      { name: "Android Studio", level: "Proficient" },
      { name: "Postman", level: "Familiar" },
    ],
  },
];
