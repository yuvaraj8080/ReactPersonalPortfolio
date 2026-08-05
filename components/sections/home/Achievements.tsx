"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppImage } from "@/lib/common/AppImage";
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
                "group relative flex flex-[0_0_min(300px,78vw)] flex-col overflow-hidden rounded-xl",
                "bg-bg-secondary border border-border-color",
                "transition-[border-color,box-shadow] duration-[250ms]",
                "hover:border-border-hover hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",
                "max-[768px]:flex-[0_0_min(260px,85vw)]"
              )}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -3 }}
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-bg-hover">
                {achievement.image ? (
                  <AppImage
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[2.5rem]">
                    {achievement.icon}
                  </div>
                )}
                <span className="absolute right-2 top-2 rounded bg-[rgba(0,0,0,0.65)] px-2 py-[0.2rem] text-[0.75rem] font-semibold text-white">
                  {achievement.year}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 px-5 py-4 max-[768px]:px-4 max-[768px]:py-3.5">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-text-secondary">
                  {achievement.category}
                </span>
                <Title
                  level={3}
                  className="m-0 line-clamp-2 font-display text-[1.05rem] font-semibold leading-[1.35] text-text-primary max-[768px]:text-base"
                >
                  {achievement.title}
                </Title>
                <Text className="m-0 line-clamp-2 text-sm leading-[1.5] text-text-secondary">
                  {achievement.description}
                </Text>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Container>
  );
}
