/** Overrides for skill names that don't format cleanly via title-casing alone. */
export const SKILL_DISPLAY_NAMES: Record<string, string> = {
  googleai: "Google AI",
  googleanalytics: "Google Analytics",
  googleads: "Google Ads",
  googlemaps: "Google Maps",
  appstore: "App Store",
  playstore: "Play Store",
  zegocloud: "ZegoCloud",
  tensorflow: "TensorFlow",
  "redux-toolkit": "Redux Toolkit",
  "chakra-ui": "Chakra UI",
  antdesign: "Ant Design",
  vscode: "VS Code",
  nodejs: "Node.js",
  nextjs: "Next.js",
  tailwindcss: "Tailwind CSS",
  cpp: "C++",
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  aws: "AWS",
  getx: "GetX",
  bloc: "BLoC",
  openai: "OpenAI",
  aptos: "Aptos",
  html: "HTML5",
  css: "CSS3",
  "claude-code": "Claude Code",
  "desktop-development": "Desktop Development",
  "local-storage": "Local Storage",
  "microsoft-clarity": "Microsoft Clarity",
  revenuecat: "RevenueCat",
  "website-development": "Website Development",
  websocket: "WebSocket",
};

/** Format skill name for the tooltip. */
export function formatSkillName(skill: string) {
  if (SKILL_DISPLAY_NAMES[skill]) return SKILL_DISPLAY_NAMES[skill];
  return skill
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}
