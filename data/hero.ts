export interface HeroTech {
  name: string;
  /** Icon path (without extension) relative to /assets/skills/, e.g. "framework/flutter" */
  icon: string;
}

export const HERO_TECH_STACK: HeroTech[] = [
  { name: "Flutter", icon: "framework/flutter" },
  { name: "React", icon: "framework/react" },
  { name: "TypeScript", icon: "languages/typescript" },
  { name: "Node.js", icon: "framework/nodejs" },
  { name: "MongoDB", icon: "database/mongodb" },
  { name: "PostgreSQL", icon: "database/postgresql" },
  { name: "Docker", icon: "database/docker" },
  { name: "Firebase", icon: "database/firebase" },
  { name: "Supabase", icon: "database/supabase" },
  { name: "Vite", icon: "framework/vite" },
  { name: "Next.js", icon: "framework/nextjs" },
  { name: "Expo", icon: "framework/expo" },
  { name: "Redux toolkit", icon: "stateManagement/redux-toolkit" },
  { name: "Tailwind CSS", icon: "framework/tailwindcss" },
];

export const HERO_TITLE =
  "Hi, I'm Yuvaraj Dekhane — Full-Stack Developer, 80+ Apps Built";
