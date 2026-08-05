"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Container } from "@/lib/common/Container";
import { AppLink } from "@/lib/common/AppLink";
import { BlogCard } from "@/components/sections/blog/BlogCard";
import { blogs } from "@/data/blogs";

const AUTO_SCROLL_SPEED = 1;
const AUTO_SCROLL_SPEED_SLOW = 0.25;
const AUTO_SCROLL_INTERVAL_MS = 25;

export function Blogs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isSlowed, setIsSlowed] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const tick = () => {
      const el = scrollRef.current;
      if (!el) return;
      // Track renders the blog list twice back-to-back, so wrapping at the
      // halfway point lands on an identical duplicate — the loop point is invisible.
      const singleSetWidth = el.scrollWidth / 2;
      if (singleSetWidth <= 1) return;
      el.scrollLeft += isSlowed ? AUTO_SCROLL_SPEED_SLOW : AUTO_SCROLL_SPEED;
      if (el.scrollLeft >= singleSetWidth) {
        el.scrollLeft -= singleSetWidth;
      }
    };

    const startAfterLayout = setTimeout(() => {
      intervalId = setInterval(tick, AUTO_SCROLL_INTERVAL_MS);
    }, 400);

    return () => {
      clearTimeout(startAfterLayout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isSlowed]);

  return (
    <div
      id="blogs"
      className="w-full bg-bg-primary py-24 transition-colors duration-300 max-[900px]:py-16"
    >
      <Container className="flex flex-col gap-6">
        <motion.div
          className="flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title
            level={2}
            className="m-0 font-display text-3xl font-semibold tracking-[0.04em] text-text-primary transition-colors duration-300 max-[600px]:text-2xl"
          >
            Blog
          </Title>
          <AppLink
            href="/blog"
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 font-sans text-sm font-semibold text-text-primary no-underline",
              "transition-all duration-200 hover:text-accent-blue hover:translate-x-[3px]"
            )}
          >
            View all
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </AppLink>
        </motion.div>

        <div
          ref={scrollRef}
          className={cn(
            "w-full min-w-0 cursor-grab overflow-x-auto overflow-y-hidden [scroll-behavior:auto] active:cursor-grabbing",
            "[scrollbar-width:thin] [-webkit-overflow-scrolling:touch]",
            "[&::-webkit-scrollbar]:h-1.5",
            "[&::-webkit-scrollbar-track]:rounded-[3px] [&::-webkit-scrollbar-track]:bg-bg-secondary",
            "[&::-webkit-scrollbar-thumb]:rounded-[3px] [&::-webkit-scrollbar-thumb]:bg-border-hover"
          )}
          onMouseEnter={() => setIsSlowed(true)}
          onMouseLeave={() => setIsSlowed(false)}
          onTouchStart={() => setIsSlowed(true)}
          onTouchEnd={() => setIsSlowed(false)}
        >
          <div className="flex w-max flex-row gap-5 pb-6 pt-2 max-[768px]:gap-4">
            {[...blogs, ...blogs].map((blog, index) => (
              <BlogCard
                key={`${blog.slug}-${index}`}
                blog={blog}
                index={index % blogs.length}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
