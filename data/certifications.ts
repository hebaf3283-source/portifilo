export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  status: "In Progress" | "Completed";
  issueDate?: string;
  description: string;
  badge?: string;
  skillsAcquired: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    id: "depi-cert",
    title: "Digital Egypt Pioneers Initiative (DEPI) — Software Development",
    organization: "Ministry of Communications and Information Technology (MCIT), Egypt",
    status: "In Progress",
    description:
      "A flagship national initiative focused on training top Egyptian students in advanced digital technology stacks, software engineering practices, and practical development methodologies.",
    skillsAcquired: [
      "Software Development Lifecycle",
      "Modern Programming Practices",
      "Hands-On Project Delivery",
      "Collaborative Problem Solving",
    ],
  },
];
