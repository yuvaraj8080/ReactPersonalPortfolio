"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Database, GitBranch, Wrench, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Container } from "@/lib/common/Container";
import { sizes } from "@/lib/constants/styles";
import { SKILLS } from "@/data/skills";

/** Overrides for skill names that don't format cleanly via title-casing alone. */
const SKILL_DISPLAY_NAMES: Record<string, string> = {
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
function formatSkillName(skill: string) {
  if (SKILL_DISPLAY_NAMES[skill]) return SKILL_DISPLAY_NAMES[skill];
  return skill
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

function SkillIcon({ group, skill }: { group: string; skill: string }) {
  const src = `/assets/skills/${group}/${skill}.svg`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={skill}
      width={40}
      height={40}
      className="relative z-[1] h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8"
    />
  );
}

function SkillTile({
  group,
  skill,
  index,
}: {
  group: string;
  skill: string;
  index: number;
}) {
  return (
    <motion.div
      className={cn(
        "group relative flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl md:h-16 md:w-16",
        "border border-border-color bg-bg-primary transition-colors duration-300",
        "hover:border-accent-blue/50"
      )}
      initial={{ opacity: 0, scale: 0.4, y: 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.03,
      }}
      whileHover={{ scale: 1.12, y: -6 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "shadow-[0_10px_24px_-4px_rgba(59,130,246,0.4)]"
        )}
      />
      <SkillIcon group={group} skill={skill} />
      {/* Tooltip */}
      <div
        className={cn(
          "pointer-events-none absolute -bottom-10 left-1/2 z-10 -translate-x-1/2 scale-90 whitespace-nowrap opacity-0",
          "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          "group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100",
          "before:absolute before:-top-[5px] before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-b-[5px] before:border-x-transparent before:border-b-border-hover before:content-['']"
        )}
      >
        <span
          className={cn(
            "inline-block rounded-lg px-3 py-2 font-sans text-xs font-semibold tracking-[0.5px] backdrop-blur-[10px]",
            "bg-bg-primary text-text-primary border border-border-hover shadow-[0_4px_16px_rgba(0,0,0,0.2)]",
            "transition-colors duration-300"
          )}
        >
          {formatSkillName(skill)}
        </span>
      </div>
    </motion.div>
  );
}

interface SkillGroupConfig {
  key: keyof typeof SKILLS;
  label: string;
  icon: LucideIcon;
}

const SKILL_GROUPS: SkillGroupConfig[] = [
  { key: "languages", label: "Languages", icon: Code2 },
  { key: "framework", label: "Frameworks & Libraries", icon: Layers },
  { key: "database", label: "Databases & Cloud", icon: Database },
  { key: "stateManagement", label: "State Management", icon: GitBranch },
  { key: "serviceTools", label: "Tools & Services", icon: Wrench },
];

function SkillCategoryCard({
  group,
  groupIndex,
}: {
  group: SkillGroupConfig;
  groupIndex: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const skills = SKILLS[group.key];
  const Icon = group.icon;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/card relative overflow-hidden rounded-2xl p-6 md:p-8",
        "border border-border-color bg-bg-secondary transition-colors duration-300"
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: groupIndex * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(59,130,246,0.08), transparent 70%)",
        }}
      />
      <div className="relative z-[1] mb-6 flex items-center gap-3 md:mb-8">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
          <Icon className={sizes.iconSm} />
        </span>
        <Title
          level={3}
          className="m-0 font-sans text-base font-semibold text-text-primary transition-colors duration-300 md:text-lg"
        >
          {group.label}
        </Title>
        <span className="font-sans text-sm text-text-secondary">
          {skills.length}
        </span>
        <motion.span
          className="ml-2 hidden h-px flex-1 bg-border-color transition-colors duration-300 sm:block"
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: groupIndex * 0.08 + 0.2 }}
        />
      </div>
      <div
        className={cn(
          "relative z-[1] grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))]",
          sizes.gap
        )}
      >
        {skills.map((skill, index) => (
          <SkillTile key={skill} group={group.key} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-bg-primary py-16 transition-colors duration-300 max-[768px]:py-12 max-[480px]:py-8"
    >
      <Container className="flex flex-col gap-8">
        <div className="mb-4 flex items-center justify-center">
          <Title
            level={2}
            className="m-0 text-center font-display text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-text-primary transition-colors duration-300 max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]"
          >
            My Skills
          </Title>
        </div>
        <div className="flex flex-col gap-5 md:gap-6">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <SkillCategoryCard key={group.key} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </Container>
    </section>
  );
}
