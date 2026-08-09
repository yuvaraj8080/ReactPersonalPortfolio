"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { layout } from "@/lib/constants/styles";
import { Footer } from "@/components/layout/Footer";
import { AppLink } from "@/lib/common/AppLink";
import { AppImage } from "@/lib/common/AppImage";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { blogs } from "@/data/blogs";
import type { Blog } from "@/types";

interface BlogRowProps {
  blog: Blog;
  reverse: boolean;
  index: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const rowVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function BlogRow({ blog, reverse, index }: BlogRowProps) {
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: reverse ? 40 : -40, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: reverse ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={rowVariants}
    >
      <AppLink
        href={`/blog/${blog.slug}`}
        className={cn(
          "group flex flex-col gap-6 overflow-hidden rounded-xl border border-border-color bg-bg-secondary p-4 no-underline",
          "shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-300",
          "hover:border-border-hover hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-1",
          "max-[768px]:gap-4 md:flex-row md:items-center md:gap-10 md:p-6",
          reverse && "md:flex-row-reverse"
        )}
      >
        <motion.div
          variants={imageVariants}
          className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-xl bg-bg-hover md:w-1/2"
        >
          {blog.coverImage ? (
            <AppImage
              src={blog.coverImage}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(37,99,235,0.06))]"
              aria-hidden="true"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue/60">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M8 9h8M8 13h5" strokeLinecap="round" />
              </svg>
            </div>
          )}

          <span
            className={cn(
              "absolute left-3 top-3 inline-flex items-center rounded-md bg-bg-primary/85 px-2.5 py-1 font-display text-xs font-bold text-text-primary backdrop-blur-sm",
              "transition-colors duration-300"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>

        <motion.div variants={textVariants} className="flex flex-col items-start gap-3 md:w-1/2">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-accent-blue/10 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-accent-blue">
              {blog.category}
            </span>
            <span className="text-[0.75rem] text-text-secondary">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <Title
            level={3}
            className={cn(
              "m-0 font-display text-3xl font-semibold leading-[1.3] text-text-primary",
              "transition-colors duration-200 group-hover:text-accent-blue max-[768px]:text-2xl"
            )}
          >
            {blog.title}
          </Title>

          <Text className="m-0 line-clamp-3 text-base leading-[1.6] text-text-secondary">
            {blog.excerpt}
          </Text>

          <span
            className={cn(
              "mt-1 inline-flex items-center gap-2 rounded-full border border-border-color px-4 py-2 text-sm font-semibold text-text-primary",
              "transition-all duration-200 group-hover:border-accent-blue group-hover:bg-accent-blue group-hover:text-white"
            )}
          >
            Read more
            <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
              →
            </span>
          </span>
        </motion.div>
      </AppLink>
    </motion.article>
  );
}

export function AllBlogsContent() {
  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-200">
      <main
        className={cn(
          layout.container,
          "py-8 pt-32 max-[1200px]:pt-24 max-[900px]:pt-20 max-[600px]:py-4 max-[600px]:pt-16"
        )}
      >
        <h1
          className={cn(
            "mb-4 text-center text-[3.5rem] font-bold leading-[1.2] text-text-primary transition-colors duration-200",
            "max-[1200px]:text-[2.5rem] max-[900px]:text-[2rem] max-[600px]:text-[1.75rem]"
          )}
        >
          Blog
        </h1>

        <p className="mx-auto mb-16 max-w-[600px] text-center text-lg text-text-secondary transition-colors duration-200 max-[900px]:mb-12 max-[900px]:text-base">
          Notes on building fast with AI agents, shipping real products, and the tools behind them
        </p>

        <div className="mx-auto flex max-w-[1000px] flex-col gap-16 py-8 max-[768px]:gap-10 max-[600px]:py-4">
          {blogs.map((blog, index) => (
            <BlogRow key={blog.slug} blog={blog} index={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
