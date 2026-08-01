import type { SkillGroups } from "@/types";

/** Skill icon names — each maps to /assets/skills/<name>.svg */
export const SKILLS: SkillGroups = {
  // SRE, Cloud & Networking first
  sreCloudNetworking: ["Docker", "Kubernetes", "AWS", "Heroku", "git", "redis"],
  languagesAndTools: [
    "python",
    "javascript",
    "typescript",
    "cpp",
    "html",
    "css",
    "sass",
    "nodejs",
    "vite",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tailwindcss",
    "redux",
    "styledcomponents",
    "chakra-ui",
  ],
  databases: ["PostgreSQL", "mongodb", "mysql"],
  other: ["firebase", "figma", "stripe", "Wordpress", "Arduino", "Raspberry-pi"],
};
