"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { Container } from "@/lib/common/Container";
import { achievements } from "@/data/achievements";

const AUTO_SCROLL_SPEED = 1;
const AUTO_SCROLL_INTERVAL_MS = 25;

export function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const tick = () => {
      const el = scrollRef.current;
      if (!el || isPaused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 1) return;
      el.scrollLeft += AUTO_SCROLL_SPEED;
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollLeft = 0;
      }
    };

    const startAfterLayout = setTimeout(() => {
      intervalId = setInterval(tick, AUTO_SCROLL_INTERVAL_MS);
    }, 400);

    return () => {
      clearTimeout(startAfterLayout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <Container
      id="achievements"
      className="bg-bg-primary py-12 transition-colors duration-300 max-[768px]:py-8"
    >
      <Title
        level={2}
        className="mb-[0.35rem] text-center font-display text-2xl font-semibold leading-[1.2] tracking-[0.04em] !text-text-primary transition-colors duration-300 max-[768px]:text-[1.5rem] max-[480px]:text-[1.35rem]"
      >
        Hall of Fame
      </Title>
      <Text className="m-0 mb-5 text-center text-sm text-text-secondary">
        Extra curricular &amp; achievements — hover to pause
      </Text>
      <div
        ref={scrollRef}
        className={cn(
          "mx-auto w-full min-w-0 max-w-[1200px] cursor-grab overflow-x-auto overflow-y-hidden [scroll-behavior:auto] active:cursor-grabbing",
          "[scrollbar-width:thin] [-webkit-overflow-scrolling:touch]",
          "[&::-webkit-scrollbar]:h-1.5",
          "[&::-webkit-scrollbar-track]:rounded-[3px] [&::-webkit-scrollbar-track]:bg-bg-secondary",
          "[&::-webkit-scrollbar-thumb]:rounded-[3px] [&::-webkit-scrollbar-thumb]:bg-border-hover"
        )}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex w-max flex-row gap-5 pb-6 pt-2 max-[768px]:gap-4">
          {achievements.map((achievement, index) => (
            <motion.article
              key={`${achievement.id}-${index}`}
              className={cn(
                "group relative flex min-h-[260px] flex-[0_0_min(340px,78vw)] flex-col overflow-hidden rounded-xl px-7 py-6",
                "bg-bg-secondary border border-border-color",
                "transition-[border-color,box-shadow] duration-[250ms]",
                "hover:border-border-hover hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",
                "max-[768px]:min-h-[240px] max-[768px]:flex-[0_0_min(300px,85vw)] max-[768px]:px-6 max-[768px]:py-5",
                "max-[480px]:min-h-[220px] max-[480px]:flex-[0_0_min(280px,90vw)]"
              )}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -3 }}
            >
              <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04)_0%,transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px]",
                      "bg-bg-hover border border-border-color transition-colors duration-200",
                      "group-hover:bg-[rgba(255,255,255,0.08)] group-hover:border-border-hover",
                      "max-[768px]:h-10 max-[768px]:w-10"
                    )}
                  >
                    <span className="text-[1.4rem] leading-none max-[768px]:text-[1.25rem]">
                      {achievement.icon}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-text-secondary">
                      {achievement.category}
                    </span>
                    <span className="rounded bg-bg-hover px-2 py-[0.2rem] text-[0.8rem] font-semibold text-text-primary">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                <Title
                  level={3}
                  className="m-0 mb-2 line-clamp-2 font-display text-[1.1rem] font-semibold leading-[1.35] text-text-primary max-[768px]:text-base"
                >
                  {achievement.title}
                </Title>
                <Text className="m-0 mb-3 line-clamp-2 flex-1 text-sm leading-[1.55] text-text-secondary">
                  {achievement.description}
                </Text>
                {achievement.highlight && (
                  <Text className="m-0 line-clamp-2 rounded-lg border-l-2 border-border-hover bg-[rgba(255,255,255,0.03)] px-3 py-2.5 text-[0.8rem] italic leading-[1.5] text-text-secondary">
                    {achievement.highlight}
                  </Text>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/achievements"
          className={cn(
            "group inline-flex items-center gap-2 rounded-lg px-6 py-3",
            "bg-bg-secondary border border-border-color font-sans text-[0.95rem] font-semibold text-text-primary no-underline",
            "transition-all duration-[250ms]",
            "hover:bg-bg-hover hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
          )}
        >
          View all on dedicated page
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Container>
  );
}
