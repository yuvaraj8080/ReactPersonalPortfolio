"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { layout } from "@/lib/constants/styles";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/sections/blog/BlogCard";
import { blogs } from "@/data/blogs";

export function AllBlogsContent() {
  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-200">
      <main
        className={cn(
          layout.container,
          "py-8 pt-32 max-[1200px]:pt-24 max-[900px]:pt-20 max-[600px]:py-4 max-[600px]:pt-16"
        )}
      >
        <motion.h1
          className={cn(
            "mb-4 text-center text-[3.5rem] font-bold leading-[1.2] text-text-primary transition-colors duration-200",
            "max-[1200px]:text-[2.5rem] max-[900px]:text-[2rem] max-[600px]:text-[1.75rem]"
          )}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Blog
        </motion.h1>

        <motion.p
          className="mx-auto mb-16 max-w-[600px] text-center text-lg text-text-secondary transition-colors duration-200 max-[900px]:mb-12 max-[900px]:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Notes on building fast with AI agents, shipping real products, and the tools behind them
        </motion.p>

        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-8 py-8 max-[600px]:gap-6 max-[600px]:py-4">
          {blogs.map((blog, index) => (
            <div key={blog.slug} className="min-w-[300px] max-w-[380px] flex-1 basis-[300px]">
              <BlogCard blog={blog} index={index} variant="grid" />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
