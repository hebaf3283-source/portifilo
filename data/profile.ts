export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  university: string;
  faculty: string;
  trainingProgram: string;
  trainingStatus: string;
  email: string;
  github: string;
  linkedin?: string;
  resumeUrl: string;
  resumeAvailable: boolean;
  shortBio: string;
  fullBio: string[];
  keyHighlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  quickStats: {
    label: string;
    value: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Heba Fathy",
  title: "Software Developer",
  subtitle: "Computer Science Student at Ain Shams University | DEPI Trainee",
  location: "Cairo, Egypt",
  university: "Ain Shams University",
  faculty: "Faculty of Science",
  trainingProgram: "Digital Egypt Pioneers Initiative (DEPI)",
  trainingStatus: "In Progress",
  email: "hebaf3283@gmail.com",
  github: "https://github.com/hebaf3283",
  linkedin: "https://linkedin.com",
  resumeUrl: "/resume/Heba_Fathy_CV.pdf",
  resumeAvailable: true,
  shortBio:
    "I'm a Computer Science student passionate about software development, problem-solving, and building practical applications. Through my university studies and DEPI training, I'm continuously developing my technical skills and turning what I learn into real projects.",
  fullBio: [
    "I'm Heba Fathy, a Computer Science student at Ain Shams University and a participant in the Digital Egypt Pioneers Initiative (DEPI). I'm passionate about software development, programming fundamentals, and building practical, user-friendly applications.",
    "My learning journey includes programming, object-oriented concepts, data structures, algorithms, web development, and mobile application development. I enjoy understanding how software works, solving problems step by step, and improving my ability to write clear and maintainable code.",
    "Through academic projects and practical training, I'm working toward becoming a capable software developer who can contribute to meaningful projects and continue learning modern technologies.",
  ],
  keyHighlights: [
    {
      title: "Computer Science Foundations",
      description: "Strong grounding in OOP, Data Structures, Algorithms, and Software Engineering principles.",
      icon: "Code2",
    },
    {
      title: "DEPI Practical Training",
      description: "Active participant in the Digital Egypt Pioneers Initiative, sharpening practical development skills.",
      icon: "Sparkles",
    },
    {
      title: "Multi-Platform Development",
      description: "Hands-on experience developing cross-platform mobile apps (Flutter) and responsive modern web apps.",
      icon: "Layers",
    },
    {
      title: "Analytical Problem Solving",
      description: "Systematic, step-by-step approach to algorithmic challenges, database design, and clean architecture.",
      icon: "Cpu",
    },
  ],
  quickStats: [
    { label: "University", value: "Ain Shams Univ." },
    { label: "Faculty", value: "Faculty of Science" },
    { label: "Initiative", value: "DEPI Trainee" },
    { label: "Location", value: "Cairo, Egypt" },
  ],
};
