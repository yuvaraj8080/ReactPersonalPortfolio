"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Container } from "@/lib/common/Container";
import { SKILLS } from "@/data/skills";

/** Normalize a skill name into its fallback icon file name. */
function normalizeSkillName(skill: string) {
  return skill
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/** Format skill name for the tooltip. */
function formatSkillName(skill: string) {
  return skill
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

function SkillIcon({ skill }: { skill: string }) {
  const [src, setSrc] = useState(`/assets/skills/${skill}.svg`);
  const fallback = `/assets/skills/${normalizeSkillName(skill)}.svg`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={skill}
      width={40}
      height={40}
      className="relative z-[1] h-10 w-10 object-contain transition-all duration-300 group-hover:scale-110 max-[768px]:h-8 max-[768px]:w-8 max-[480px]:h-7 max-[480px]:w-7"
      onError={() => {
        if (src !== fallback) setSrc(fallback);
      }}
    />
  );
}

export function Skills() {
  const allSkills = [
    ...SKILLS.sreCloudNetworking,
    ...SKILLS.languagesAndTools,
    ...SKILLS.librariesAndFrameworks,
    ...SKILLS.databases,
    ...SKILLS.other,
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-bg-primary py-16 transition-colors duration-300 max-[768px]:py-12 max-[480px]:py-8"
    >
      <Container className="flex flex-col gap-8">
        <div className="mb-12 flex items-center justify-center">
          <Title
            level={2}
            className="m-0 text-center font-display text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-text-primary transition-colors duration-300 max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]"
          >
            My Skills
          </Title>
        </div>
        <div
          className={cn(
            "grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-6 rounded-2xl p-8 px-6 backdrop-blur-[10px]",
            "bg-bg-secondary border border-border-color shadow-[0_4px_24px_rgba(0,0,0,0.1)]",
            "transition-colors duration-300",
            "max-[768px]:grid-cols-[repeat(auto-fill,minmax(50px,1fr))] max-[768px]:gap-4 max-[768px]:p-4",
            "max-[480px]:grid-cols-[repeat(auto-fill,minmax(45px,1fr))] max-[480px]:gap-3"
          )}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill}
              className={cn(
                "group relative flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-xl",
                "bg-bg-secondary border border-border-color transition-all duration-300",
                "hover:bg-bg-hover hover:border-border-hover hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
                "max-[768px]:h-[50px] max-[768px]:w-[50px] max-[480px]:h-[45px] max-[480px]:w-[45px] max-[480px]:rounded-lg"
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.1, y: -4 }}
            >
              <SkillIcon skill={skill} />
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
                    "inline-block rounded-lg px-3 py-2 font-sans text-xs font-semibold capitalize tracking-[0.5px] backdrop-blur-[10px]",
                    "bg-bg-primary text-text-primary border border-border-hover shadow-[0_4px_16px_rgba(0,0,0,0.2)]",
                    "transition-colors duration-300"
                  )}
                >
                  {formatSkillName(skill)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
