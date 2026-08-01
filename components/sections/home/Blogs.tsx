"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { Container } from "@/lib/common/Container";
import { blogs, type Blog } from "@/data/blogs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const cardBaseClasses = cn(
  "cursor-pointer bg-bg-secondary border border-border-color transition-all duration-300",
  "hover:border-border-hover hover:bg-bg-hover hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
);

const readMoreClasses = cn(
  "inline-flex items-center text-sm font-semibold text-text-primary no-underline",
  "transition-all duration-200 hover:text-text-secondary hover:translate-x-[5px]"
);

function CardHeader({ blog, short }: { blog: Blog; short?: boolean }) {
  return (
    <div className="mb-4 flex items-center justify-between text-[0.9rem]">
      <span className="text-[0.85rem] font-semibold uppercase tracking-[0.5px] text-text-primary transition-colors duration-300">
        {blog.category}
      </span>
      <span className="text-[0.85rem] text-text-secondary transition-colors duration-300">
        {new Date(blog.date).toLocaleDateString(
          "en-US",
          short
            ? { month: "short", day: "numeric" }
            : { month: "short", day: "numeric", year: "numeric" }
        )}
      </span>
    </div>
  );
}

export function Blogs() {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <div
      id="blogs"
      className="min-h-screen w-full bg-bg-primary py-24 transition-colors duration-300 max-[900px]:py-16"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title
            level={2}
            className="mb-12 text-center font-display text-3xl font-semibold leading-[1.2] tracking-[0.04em] !text-text-primary transition-colors duration-300"
          >
            Blog
          </Title>
          <Text className="mb-16 text-center font-sans text-lg font-medium leading-[1.7] text-text-secondary transition-colors duration-300">
            Sharing knowledge and insights from my journey
          </Text>
        </motion.div>

        {featuredBlogs.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <Title
              level={3}
              className="mb-8 font-display text-2xl font-medium text-text-primary transition-colors duration-300"
            >
              Featured
            </Title>
            <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-[768px]:grid-cols-1 max-[768px]:gap-6">
              {featuredBlogs.map((blog) => (
                <motion.article
                  key={blog.slug}
                  variants={itemVariants}
                  className={cn(
                    cardBaseClasses,
                    "rounded-2xl p-8 hover:-translate-y-[5px] max-[768px]:p-6"
                  )}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardHeader blog={blog} />
                  <Title
                    level={4}
                    className="mb-4 font-display text-xl font-medium leading-[1.3] text-text-primary transition-colors duration-300 max-[768px]:text-[1.25rem]"
                  >
                    {blog.title}
                  </Title>
                  <Text className="mb-6 text-sm leading-[1.6] text-text-secondary transition-colors duration-300">
                    {blog.excerpt}
                  </Text>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border-color bg-bg-hover px-3 py-1 text-xs font-medium text-text-primary transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[0.85rem] text-text-secondary transition-colors duration-300">
                        {blog.readTime}
                      </span>
                      <Link href={`/blog/${blog.slug}`} className={readMoreClasses}>
                        Read more →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <Title
            level={3}
            className="mb-8 font-display text-2xl font-medium text-text-primary transition-colors duration-300"
          >
            All Posts
          </Title>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
            {regularBlogs.map((blog) => (
              <motion.article
                key={blog.slug}
                variants={itemVariants}
                className={cn(
                  cardBaseClasses,
                  "rounded-xl p-6 hover:-translate-y-[5px]"
                )}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <CardHeader blog={blog} short />
                <Title
                  level={4}
                  className="mb-4 font-display text-lg font-medium leading-[1.3] text-text-primary transition-colors duration-300 max-[768px]:text-[1.1rem]"
                >
                  {blog.title}
                </Title>
                <Text className="mb-6 text-sm leading-[1.6] text-text-secondary transition-colors duration-300">
                  {blog.excerpt}
                </Text>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[0.85rem] text-text-secondary transition-colors duration-300">
                    {blog.readTime}
                  </span>
                  <Link href={`/blog/${blog.slug}`} className={readMoreClasses}>
                    Read more →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
