export interface HeroTech {
  name: string;
  /** Icon file name inside /assets/skills/ */
  icon: string;
}

export const HERO_TECH_STACK: HeroTech[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "PostgreSQL" },
  { name: "Docker", icon: "Docker" },
  { name: "Kubernetes", icon: "Kubernetes" },
];

export const HERO_TITLE =
  "Hi, I'm Krishay Nair — Site Reliability Engineer, CKA Certified";
