// ─────────────────────────────────────────────────────────────
// Edit everything about your portfolio right here.
// This is the only file you need to touch to make it yours.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Muhammad Illyas",
  role: "Software Developer",
  tagline:
    "I build modern, responsive frontends with React, Next.js, and Tailwind CSS.",
  location: "Gulistan-e-Johar, Karachi",
  focus: ["React.js", "Next.js", "Tailwind CSS"],
  yearsExperience: 2,
  availability: "Final-year student — open to internships", // e.g. "Open to freelance" / "Not looking right now"
  email: "illiyashaider3@gmail.com",
  phone: "+92 332 7334447",
  resumeUrl: "#", // TODO: add a link to your hosted PDF resume here
  socials: [
    { label: "GitHub", href: "https://github.com/Muhammadilliyas" },
    // Add more, e.g.:
    // { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a software developer focused on building modern web applications, with a solid foundation in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and TypeScript developed through hands-on project work and continuous learning.",
    "I'm skilled at creating responsive, user-friendly frontend experiences, and I'm actively expanding into backend development so I can ship scalable, full-stack solutions on my own.",
    "I'm currently in my final year of a Computer Science degree, and most of what I know outside class has come from building real projects — an expense tracker, a streaming-site clone, an agency landing page — and shipping every one of them to production.",
  ],
  stats: [
    { label: "Live projects shipped", value: "3" },
    { label: "Figma designs converted", value: "5+" },
    { label: "Final year", value: "CS @ MAJU" },
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "frameworks",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "tools",
    items: ["Firebase", "Git", "GitHub", "Figma (design-to-code)"],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: "stable" | "active" | "archived";
  href?: string;
  repo?: string;
  metric?: string; // a real, concrete result — keep this honest
};

export const projects: Project[] = [
  {
    name: "expense-tracker",
    description:
      "A client-side finance tracker built with 10+ reusable components. Routing spans four views — dashboard, reports, entry form, and a custom 404 — for clear navigation, with a responsive, component-scoped UI.",
    stack: ["React.js", "CSS Modules", "Vercel"],
    status: "stable",
    href: "https://react-expense-tracker-rust.vercel.app/",
    repo: "https://github.com/Muhammadilliyas/React-Expense-Tracker-Project.git",
  },
  {
    name: "netflix-clone",
    description:
      "A high-fidelity streaming interface with 6+ dynamic content carousels. Integrates 3 REST APIs for real-time movie data and ships with secure Firebase authentication.",
    stack: ["React.js", "Tailwind CSS", "Firebase Auth"],
    status: "stable",
    href: "https://netflix-clone-beta-gilt-69.vercel.app/",
    repo: "https://github.com/Muhammadilliyas/Netflix-Clone.git",
    metric: "3 REST APIs integrated for real-time data",
  },
  {
    name: "ai-agency-landing",
    description:
      "A responsive landing page with 5+ modular sections — hero, services, contact — built around custom SVG assets and partner-logo integrations for a fast, polished feel.",
    stack: ["React.js", "SVG", "Vercel"],
    status: "stable",
    href: "https://house-agency-fawn.vercel.app/",
    repo: "https://github.com/Muhammadilliyas/House-agency.git",
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string; // "present" for current
  summary: string;
  highlights: string[];
};

// This doubles as an "education & milestones" timeline since most students
// don't have prior job history yet — replace with real roles once you do.
export const experience: ExperienceEntry[] = [
  {
    company: "Muhammad Ali Jinnah University, Karachi",
    role: "BS in Computer Science",
    start: "2022",
    end: "2026 (expected)",
    summary:
      "Final-year student (8th semester), self-directing a specialization in frontend and full-stack web development alongside core coursework.",
    highlights: [
      "Built and shipped 3 production projects with React.js and Next.js",
      "Converted 5+ Figma wireframes into pixel-perfect, responsive layouts",
      "Actively expanding into backend development for full-stack work",
    ],
  },
];

export const certifications: string[] = [
  "Software Testing and Automation Bootcamp — Google Developer Group on Campus",
  "Zero to MERN: React to Reality — Microsoft Learn Student Community",
];

export const contact = {
  heading: "Let's build something.",
  subheading:
    "Have a project in mind, or just want to talk shop? My inbox is open.",
  formEndpoint: "", // e.g. a Formspree/Getform endpoint — leave empty to just show mailto
};
