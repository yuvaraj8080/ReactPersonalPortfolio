"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppLink } from "@/lib/common/AppLink";
import { AppImage } from "@/lib/common/AppImage";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import type { Blog } from "@/types";

interface BlogCardProps {
  blog: Blog;
  index?: number;
  /** "scroll" = fixed-width card for a horizontal row; "grid" = full-width card for a grid layout. */
  variant?: "scroll" | "grid";
}

export function BlogCard({ blog, index = 0, variant = "scroll" }: BlogCardProps) {
  return (
    <motion.article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl",
        "bg-bg-secondary border border-border-color",
        "transition-[border-color,box-shadow,transform] duration-300",
        "hover:border-border-hover hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-1",
        variant === "scroll"
          ? "flex-[0_0_min(460px,88vw)] max-[768px]:flex-[0_0_min(340px,88vw)]"
          : "w-full"
      )}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
    >
      <AppLink href={`/blog/${blog.slug}`} className="flex flex-col no-underline">
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-bg-hover">
          {blog.coverImage ? (
            <AppImage
              src={blog.coverImage}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 340px, 460px"
              className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
            />
          ) : (
            <div
              className={cn(
                "flex h-full w-full items-center justify-center",
                "bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(37,99,235,0.06))]"
              )}
              aria-hidden="true"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue/60">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M8 9h8M8 13h5" strokeLinecap="round" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
          <div className="flex items-center justify-between gap-2 text-[0.75rem]">
            <span className="font-semibold uppercase tracking-[0.06em] text-text-primary">
              {blog.category}
            </span>
            <span className="whitespace-nowrap text-text-secondary">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <Title
            level={3}
            className="m-0 line-clamp-2 font-display text-[1.05rem] font-semibold leading-[1.35] text-text-primary"
          >
            {blog.title}
          </Title>
          <Text className="m-0 line-clamp-3 text-sm leading-[1.5] text-text-secondary">
            {blog.excerpt}
          </Text>
          <div className="mt-auto flex items-center justify-end pt-1">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-sm font-semibold text-text-primary",
                "transition-all duration-200 group-hover:text-accent-blue group-hover:translate-x-[3px]"
              )}
            >
              Read more →
            </span>
          </div>
        </div>
      </AppLink>
    </motion.article>
  );
}
