"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/Footer";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { AchievementCard } from "@/components/sections/achievements/AchievementCard";
import { achievements } from "@/data/achievements";

export function AchievementsContent() {
  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-200">
      <main
        className={cn(
          "mx-auto w-full px-[12rem] pb-16 pt-24",
          "max-[1200px]:px-16",
          "max-[900px]:px-8 max-[900px]:pb-12 max-[900px]:pt-20",
          "max-[600px]:px-5 max-[600px]:pb-10 max-[600px]:pt-16"
        )}
      >
        <motion.header
          className="mb-16 text-center max-[600px]:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-3 inline-block text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
            Recognition &amp; milestones
          </span>
          <Title
            level={1}
            className="m-0 mb-4 text-[3.5rem] font-bold leading-[1.15] tracking-[-0.02em] !text-text-primary max-[900px]:text-[2.5rem] max-[600px]:text-[2rem]"
          >
            <span className="italic opacity-90">Hall of</span>{" "}
            <span className="bg-[linear-gradient(135deg,var(--text-primary)_0%,var(--text-secondary)_100%)] bg-clip-text font-extrabold text-transparent">
              Fame
            </span>
          </Title>
          <Text className="mx-auto m-0 max-w-[480px] text-lg leading-[1.6] text-text-secondary max-[900px]:text-base">
            Awards, hackathon wins, and moments that shaped the journey.
          </Text>
        </motion.header>

        <div
          className={cn(
            "grid grid-cols-5 items-start gap-6 pb-8",
            "max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[900px]:gap-5 max-[600px]:grid-cols-1 max-[600px]:gap-4"
          )}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/#achievements"
            className={cn(
              "group inline-flex items-center gap-2 rounded-lg px-4 py-[0.6rem]",
              "text-[0.95rem] font-semibold text-text-secondary no-underline",
              "transition-colors duration-200 hover:text-text-primary hover:bg-bg-hover"
            )}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-200 group-hover:-translate-x-[3px]"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
