export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  status?: string;
  type: "Training" | "Academic" | "Project";
  description: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "depi",
    role: "DEPI Trainee — Software Development",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Cairo, Egypt",
    period: "Currently Active",
    status: "In Progress",
    type: "Training",
    description:
      "Participating in the prestigious Digital Egypt Pioneers Initiative (DEPI) by the Egyptian Ministry of Communications and Information Technology (MCIT), undergoing rigorous hands-on technical training.",
    highlights: [
      "Structured learning path covering modern software engineering and industry practices.",
      "Practical project-based implementation turning conceptual knowledge into working applications.",
      "Collaborative coding sessions, problem-solving workshops, and technical reviews.",
    ],
  },
  {
    id: "asu-cs",
    role: "Computer Science Student & Software Developer",
    organization: "Ain Shams University",
    location: "Cairo, Egypt",
    period: "Undergraduate Studies",
    status: "Active",
    type: "Academic",
    description:
      "Developing deep theoretical and practical programming foundations through rigorous university coursework, laboratory sessions, and software design assignments.",
    highlights: [
      "Extensive implementation of data structures and algorithms in C++ and Java.",
      "Designing relational database schemas, normalization rules, and complex SQL queries.",
      "Developing desktop and web prototypes adhering to Object-Oriented design principles.",
    ],
  },
];
