"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/lib/common/Container";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { AppImage } from "@/lib/common/AppImage";
import { BlogCard } from "@/components/sections/blog/BlogCard";
import { Footer } from "@/components/layout/Footer";
import { getTechIconPath } from "@/lib/tech-icons";
import type { Blog, BlogContentBlock } from "@/types";

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs: Blog[];
}

/** Renders `**bold**` segments as <strong> — same convention as data/experiences.ts. */
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    if (!match) return <Fragment key={i}>{part}</Fragment>;
    return (
      <strong key={i} className="font-semibold text-text-primary">
        {match[1]}
      </strong>
    );
  });
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <Text className="mb-6 font-sans text-base leading-[1.8] text-text-secondary">
          {renderWithBold(block.text)}
        </Text>
      );

    case "heading":
      return (
        <Title
          level={block.level}
          className={cn(
            "mb-4 mt-10 font-display font-semibold text-text-primary first:mt-0",
            block.level === 2 ? "text-2xl" : "text-xl"
          )}
        >
          {block.text}
        </Title>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={cn(
            "mb-6 flex flex-col gap-2.5 pl-5 font-sans text-base leading-[1.7] text-text-secondary",
            block.ordered ? "list-decimal" : "list-disc"
          )}
        >
          {block.items.map((item, i) => (
            <li key={i}>{renderWithBold(item)}</li>
          ))}
        </ListTag>
      );
    }

    case "image":
      return (
        <figure className="mb-8">
          <div
            className={cn(
              "relative w-full overflow-hidden rounded-2xl border border-border-color bg-bg-secondary",
              block.aspectRatio === "4/3" ? "aspect-[4/3]" : block.aspectRatio === "8/5" ? "aspect-[8/5]" : "aspect-video"
            )}
          >
            <AppImage
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1320px"
              className={block.fit === "contain" ? "object-contain" : "object-cover"}
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-text-secondary">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <pre className="mb-6 overflow-x-auto rounded-xl border border-border-color bg-bg-secondary p-4 font-mono text-[0.85rem] leading-[1.6] text-text-primary">
          <code>{block.code}</code>
        </pre>
      );

    case "quote":
      return (
        <blockquote className="mb-6 border-l-2 border-accent-blue pl-5 font-sans text-lg italic leading-[1.6] text-text-primary">
          {renderWithBold(block.text)}
          {block.author && (
            <footer className="mt-2 font-sans text-sm not-italic text-text-secondary">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );

    case "callout":
      return (
        <div
          className={cn(
            "mb-6 rounded-xl border px-5 py-4 font-sans text-[0.95rem] leading-[1.6]",
            block.variant === "key-takeaway"
              ? "border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)] text-text-primary"
              : "border-border-color bg-bg-secondary text-text-secondary"
          )}
        >
          {renderWithBold(block.text)}
        </div>
      );

    case "link-card":
      return (
        <a
          href={block.url}
          target={block.url.startsWith("/") ? undefined : "_blank"}
          rel={block.url.startsWith("/") ? undefined : "noopener noreferrer"}
          className={cn(
            "group mb-8 flex items-center gap-5 overflow-hidden rounded-2xl border border-border-color bg-bg-secondary p-5 no-underline",
            "transition-all duration-300 hover:border-accent-blue hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(59,130,246,0.15)]",
            "max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:text-center"
          )}
        >
          {block.image ? (
            <div className="relative h-[72px] w-[110px] shrink-0 overflow-hidden rounded-lg bg-bg-hover max-[600px]:h-[140px] max-[600px]:w-full">
              <AppImage src={block.image} alt={block.title} fill className="object-cover" />
            </div>
          ) : (
            <div
              className={cn(
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl",
                "bg-[linear-gradient(135deg,var(--accent-blue),#2563eb)] shadow-[0_4px_14px_rgba(59,130,246,0.35)]",
                "transition-transform duration-300 group-hover:scale-105 max-[600px]:mx-auto"
              )}
              aria-hidden="true"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </div>
          )}
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent-blue">
              Live Project
            </span>
            <span className="truncate font-sans text-lg font-semibold text-text-primary">
              {block.title}
            </span>
            {block.description && (
              <span className="line-clamp-1 text-sm text-text-secondary">{block.description}</span>
            )}
          </div>
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[rgba(59,130,246,0.4)] bg-[rgba(59,130,246,0.1)]",
              "px-4 py-2 font-sans text-sm font-semibold text-accent-blue transition-colors duration-300",
              "group-hover:bg-accent-blue group-hover:text-white max-[600px]:justify-center"
            )}
          >
            Visit Site →
          </span>
        </a>
      );

    case "tech-stack":
      return (
        <div className="mb-8 flex flex-wrap gap-3">
          {block.items.map((tech) => {
            const iconPath = getTechIconPath(tech);
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-lg border border-border-color bg-bg-secondary px-4 py-2.5"
              >
                {iconPath && (
                  <AppImage src={iconPath} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                )}
                <span className="font-sans text-sm font-medium text-text-primary">{tech}</span>
              </span>
            );
          })}
        </div>
      );

    case "link-card-row":
      return (
        <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {block.items.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target={item.url.startsWith("/") ? undefined : "_blank"}
              rel={item.url.startsWith("/") ? undefined : "noopener noreferrer"}
              className={cn(
                "flex flex-col overflow-hidden rounded-xl border border-border-color bg-bg-secondary no-underline",
                "transition-all duration-300 hover:border-accent-blue hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
              )}
            >
              {item.image && (
                <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-bg-hover">
                  <AppImage src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              )}
              <div className="flex items-center justify-between gap-3 p-4">
                <span className="truncate font-sans text-base font-semibold text-text-primary">
                  {item.title}
                </span>
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[rgba(59,130,246,0.4)] bg-[rgba(59,130,246,0.1)]",
                    "px-3 py-1.5 font-sans text-sm font-semibold text-accent-blue"
                  )}
                >
                  Visit Site →
                </span>
              </div>
            </a>
          ))}
        </div>
      );

    case "faq":
      return (
        <div className="mb-8 flex flex-col">
          {block.items.map((item) => (
            <div key={item.question} className="border-b border-border-color py-5 last:border-b-0">
              <p className="m-0 mb-2 font-sans text-base font-semibold text-text-primary">
                {item.question}
              </p>
              <p className="m-0 font-sans text-base leading-[1.7] text-text-secondary">
                {renderWithBold(item.answer)}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export function BlogDetail({ blog, relatedBlogs }: BlogDetailProps) {
  const router = useRouter();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    keywords: blog.tags.join(", "),
    author: { "@type": "Person", name: "Yuvaraj Dekhane" },
  };

  const faqBlock = blog.content.find(
    (block): block is Extract<BlogContentBlock, { type: "faq" }> => block.type === "faq"
  );
  const faqJsonLd = faqBlock
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqBlock.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      {/* GEO/SEO: structured data so search + AI answer engines can parse this post directly. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Container className="min-h-screen py-8 text-text-primary transition-colors duration-300 max-[768px]:py-4">
        <div className="mx-auto">
          <motion.button
            className={cn(
              "mb-8 -ml-4 cursor-pointer appearance-none rounded-lg border-none bg-transparent px-4 py-2",
              "font-sans text-base text-accent-blue transition-all duration-300",
              "hover:bg-[rgba(59,130,246,0.1)]"
            )}
            onClick={() => router.push("/blog")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Blog
          </motion.button>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-[0.85rem]">
            <span className="font-semibold uppercase tracking-[0.06em] text-accent-blue">
              {blog.category}
            </span>
            <span className="text-text-secondary">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <Title
            level={1}
            className="mb-6 font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.2] text-text-primary max-[768px]:text-3xl"
          >
            {blog.title}
          </Title>

          <Text className="mb-8 font-sans text-xl leading-[1.6] text-text-secondary max-[768px]:text-[1.1rem]">
            {blog.excerpt}
          </Text>

          <div className="mb-8 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-color bg-bg-hover px-3 py-1 text-xs font-medium text-text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
            <div className="mb-12 rounded-2xl border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.04)] p-6 max-[600px]:p-4">
              <Title level={2} className="mb-4 mt-0 font-display text-lg font-semibold text-text-primary">
                Key Takeaways
              </Title>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {blog.keyTakeaways.map((point, i) => (
                  <li
                    key={i}
                    className={cn(
                      "relative pl-6 font-sans text-[0.95rem] leading-[1.6] text-text-secondary",
                      "before:absolute before:left-0 before:font-bold before:text-accent-blue before:content-['✓']"
                    )}
                  >
                    {renderWithBold(point)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            {blog.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>
        </div>

        {relatedBlogs.length > 0 && (
          <section className="mx-auto mb-16 mt-20">
            <Title level={2} className="mb-8 font-display text-2xl font-semibold text-text-primary">
              More Posts
            </Title>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              {relatedBlogs.map((related) => (
                <BlogCard key={related.slug} blog={related} variant="grid" />
              ))}
            </div>
          </section>
        )}
      </Container>

      <Footer />
    </div>
  );
}
