/** Technology name → icon file name (must match public/assets/skills/*.svg exactly). */
const TECH_ICON_MAP: Record<string, string> = {
  "next.js": "nextjs",
  nextjs: "nextjs",
  react: "react",
  "react.js": "react",
  reactjs: "react",
  "react three fiber": "react",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "node.js": "nodejs",
  nodejs: "nodejs",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  tailwindcss: "tailwindcss",
  postgresql: "PostgreSQL",
  mongodb: "mongodb",
  python: "python",
  firebase: "firebase",
  aws: "AWS",
  docker: "Docker",
  redis: "redis",
  kubernetes: "Kubernetes",
  vite: "vite",
  html: "html",
  css: "css",
  sass: "sass",
  java: "java",
  redux: "redux",
  mysql: "mysql",
  webpack: "webpack",
  git: "git",
  figma: "figma",
  "chakra ui": "chakra-ui",
  "ant design": "antdesign",
  "c++": "C++1",
  cpp: "C++1",
};

export function getTechIcon(techName: string): string | null {
  return TECH_ICON_MAP[techName.toLowerCase().trim()] ?? null;
}

export function getTechIconPath(techName: string): string | null {
  const icon = getTechIcon(techName);
  return icon ? `/assets/skills/${icon}.svg` : null;
}
