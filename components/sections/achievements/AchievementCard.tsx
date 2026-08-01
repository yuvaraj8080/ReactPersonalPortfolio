"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import type { Achievement } from "@/types";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const tagline =
    achievement.description.split(/[.!?]/)[0]?.trim() +
    (achievement.description.includes(".") ? "." : "") ||
    achievement.description.slice(0, 80) + "…";

  return (
    <motion.article
      className={cn(
        "group relative flex cursor-default flex-col items-stretch overflow-hidden rounded-2xl px-7 py-[1.65rem]",
        "bg-bg-secondary border border-border-color",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-[rgba(212,175,55,0.35)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.06)]",
        "max-[900px]:px-[1.65rem] max-[900px]:py-6 max-[600px]:px-[1.4rem] max-[600px]:py-5"
      )}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 380, damping: 22 },
      }}
    >
      {/* Shine sweep */}
      <div
        className={cn(
          "pointer-events-none absolute left-[-100%] top-0 z-[2] h-full w-[60%] opacity-0 transition-opacity duration-[250ms]",
          "bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.03)_45%,transparent_100%)]",
          "group-hover:opacity-100 group-hover:animate-[cardShine_0.7s_ease_forwards]"
        )}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04)_0%,transparent_50%)] opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100" />
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,rgba(212,175,55,0.6),rgba(212,175,55,0.15))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div className="mb-[0.6rem] flex items-center gap-[0.6rem]">
          <span className="min-w-5 text-xs font-extrabold text-text-secondary opacity-80">
            {index + 1}
          </span>
          <motion.div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px]",
              "bg-bg-hover border border-border-color",
              "transition-[background,border-color,box-shadow] duration-[250ms]",
              "group-hover:bg-[rgba(255,255,255,0.08)] group-hover:border-[rgba(212,175,55,0.3)] group-hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)]",
              "max-[900px]:h-10 max-[900px]:w-10"
            )}
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
          >
            <span className="text-[1.35rem] leading-none max-[900px]:text-[1.25rem]">
              {achievement.icon}
            </span>
          </motion.div>
          <motion.span
            className="ml-auto shrink-0 rounded-md bg-bg-hover px-[0.55rem] py-1 text-xs font-bold text-text-primary"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {achievement.year}
          </motion.span>
        </div>
        <span className="mb-[0.4rem] block text-[0.6rem] font-bold uppercase tracking-[0.12em] text-text-secondary">
          {achievement.category}
        </span>
        <Title
          level={2}
          className="m-0 mb-[0.35rem] text-[1.05rem] font-bold leading-[1.35] tracking-[-0.01em] !text-text-primary max-[900px]:text-base"
        >
          {achievement.title}
        </Title>
        <Text className="m-0 mb-[0.6rem] border-b border-border-color pb-2 text-[0.8rem] font-medium leading-[1.45] text-text-secondary max-[900px]:text-xs">
          {tagline}
        </Text>
        <Text className="m-0 mb-2 text-[0.78rem] leading-[1.55] text-text-secondary opacity-95">
          {achievement.description}
        </Text>
        {achievement.highlight && (
          <Text className="m-0 rounded-lg border-l-[3px] border-[rgba(212,175,55,0.4)] bg-[rgba(255,255,255,0.03)] px-3 py-[0.6rem] text-[0.78rem] italic leading-[1.5] text-text-secondary">
            {achievement.highlight}
          </Text>
        )}
      </div>
    </motion.article>
  );
}
