export interface CourseItem {
  code?: string;
  name: string;
  description?: string;
}

export interface EducationData {
  institution: string;
  faculty: string;
  degree: string;
  location: string;
  status: string;
  description: string;
  coursework: CourseItem[];
  academicFocus: string[];
}

export const educationData: EducationData = {
  institution: "Ain Shams University",
  faculty: "Faculty of Science",
  degree: "Undergraduate Studies in Computer Science",
  location: "Cairo, Egypt",
  status: "In Progress",
  description:
    "Pursuing comprehensive computer science studies at Ain Shams University with a focus on fundamental computing principles, software development methodologies, and analytical problem-solving.",
  coursework: [
    { name: "Object-Oriented Programming (OOP)", description: "Encapsulation, inheritance, polymorphism, and modular software design." },
    { name: "Data Structures & Algorithms", description: "Lists, stacks, queues, trees, graphs, sorting, and algorithmic complexity." },
    { name: "Database Systems & SQL", description: "Relational database concepts, ER diagrams, normalization, and relational algebra." },
    { name: "Programming Fundamentals", description: "Structured programming principles, memory allocation, and debugging techniques." },
    { name: "Discrete Mathematics", description: "Logic, set theory, combinatorics, and graph theory foundations." },
    { name: "Web Development Technologies", description: "Client-server architecture, modern DOM manipulation, and responsive web design." },
  ],
  academicFocus: [
    "Software Architecture & Design Patterns",
    "Algorithm Optimization & Complexity Analysis",
    "Database Modeling & Entity Relationship Diagrams",
    "Practical Application Development",
  ],
};
