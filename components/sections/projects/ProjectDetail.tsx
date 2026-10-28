"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import * as m from "framer-motion/m";
import { cn } from "@/lib/utils";
import { Container } from "@/lib/common/Container";
import { ProjectGallery } from "@/components/sections/projects/ProjectGallery";
import { ExpandableSection } from "@/components/sections/projects/ExpandableSection";
import { Title } from "@/lib/common/Title";
import { Text } from "@/lib/common/Text";
import { TechBadge } from "@/lib/common/TechBadge";
import { Breadcrumbs } from "@/lib/common/Breadcrumbs";
import { FaqList } from "@/lib/common/FaqList";
import { SITE_NAME } from "@/lib/constants/site";
import { getBriefText, getBriefAchievement } from "@/lib/text";
import { goToSection } from "@/lib/section-navigation";
import type { Blog, FaqItem, Project } from "@/types";

type RelatedPost = Pick<Blog, "slug" | "title" | "excerpt" | "category" | "coverImage">;

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
  /** Blog posts that cover this project — rendered as descriptive internal links. */
  relatedPosts: RelatedPost[];
  /** Built by buildProjectFaq() in the page, which also emits the matching FAQPage JSON-LD. */
  faq: FaqItem[];
}

type SectionKey = "achievements";

const sectionTitleClasses =
  "mb-6 font-display text-[1.75rem] font-semibold text-[var(--primary-text)]";

const expandButtonClasses = cn(
  "mt-4 inline-flex cursor-pointer items-center gap-2 border-none bg-transparent py-2",
  "font-sans text-[0.95rem] font-semibold text-accent-blue",
  "transition-all duration-300 hover:translate-x-[5px]"
);

const actionButtonClasses = cn(
  "inline-flex items-center gap-2 rounded-lg border border-border-color px-6 py-3",
  "bg-text-primary font-sans font-semibold text-bg-primary no-underline transition-all duration-300",
  "hover:bg-accent-blue hover:text-white hover:border-accent-blue hover:-translate-y-0.5",
  "max-[768px]:w-full max-[768px]:justify-center"
);

const actionButtonSecondaryClasses = cn(
  "inline-flex items-center gap-2 rounded-lg border border-border-color px-6 py-3",
  "bg-transparent font-sans font-semibold text-text-primary no-underline transition-all duration-300",
  "hover:border-accent-blue hover:text-accent-blue hover:-translate-y-0.5",
  "max-[768px]:w-full max-[768px]:justify-center"
);

export function ProjectDetail({ project, relatedProjects, relatedPosts, faq }: ProjectDetailProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    achievements: false,
  });

  const techStack = project.tech
    ? project.tech.split(",").map((t) => t.trim())
    : [];

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const hasStats = project.timeline || project.role || project.status;

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <Container className="min-h-screen py-8 text-text-primary transition-colors duration-300 max-[768px]:py-4">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: project.title },
          ]}
        />
        <m.button
          className={cn(
            "mb-8 cursor-pointer rounded-lg border-none bg-transparent px-4 py-2",
            "font-sans text-base text-accent-blue transition-all duration-300",
            "hover:bg-[rgba(59,130,246,0.1)]"
          )}
          onClick={() => goToSection("projects", pathname, router.push)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Projects
        </m.button>

        {/* Hero */}
        <div className="mb-16">
          <div className="max-w-[900px]">
            <Title
              level={1}
              className="mb-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.2] !text-[var(--primary-text)] max-[768px]:text-[2rem]"
            >
              {project.title}
            </Title>
            <Text className="mb-8 font-sans text-xl leading-[1.6] text-[var(--secondary-text)] max-[768px]:text-[1.1rem]">
              {getBriefText(project.description)}
            </Text>
            <p className="mb-8 mt-0 font-sans text-base text-[var(--secondary-text)]">
              Built by{" "}
              <Link href="/" className="font-semibold text-accent-blue no-underline hover:underline">
                {SITE_NAME}
              </Link>
              {project.role && ` · ${project.role}`}
              {project.client && project.client.name !== project.title && (
                <>
                  {" · for "}
                  {project.client.url ? (
                    <a
                      href={project.client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent-blue no-underline hover:underline"
                    >
                      {project.client.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-[var(--primary-text)]">{project.client.name}</span>
                  )}
                </>
              )}
            </p>

            {hasStats && (
              <div className="mb-8 flex flex-wrap gap-8 max-[768px]:gap-4">
                {project.timeline && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.85rem] uppercase tracking-[0.5px] text-[var(--secondary-text)]">
                      Timeline
                    </span>
                    <span className="text-base font-medium text-[var(--primary-text)]">
                      {project.timeline}
                    </span>
                  </div>
                )}
                {project.role && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.85rem] uppercase tracking-[0.5px] text-[var(--secondary-text)]">
                      Role
                    </span>
                    <span className="text-base font-medium text-[var(--primary-text)]">
                      {project.role}
                    </span>
                  </div>
                )}
                {project.status && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.85rem] uppercase tracking-[0.5px] text-[var(--secondary-text)]">
                      Status
                    </span>
                    <span className="rounded-full border border-[rgba(59,130,246,0.3)] bg-[rgba(59,130,246,0.12)] px-3 py-1 text-[0.85rem] font-semibold text-accent-blue">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-4 max-[768px]:flex-col">
              {project.liveUrls?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonClasses}
                >
                  {link.title} →
                </a>
              ))}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonSecondaryClasses}
                >
                  Source Code →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ProjectGallery title={project.title} images={project.images} />

        {/* Technology Stack */}
        {techStack.length > 0 && (
          <section className="mb-16">
            <Title level={2} className={sectionTitleClasses}>Technology Stack</Title>
            <div className="flex flex-wrap gap-3">
              {techStack.slice(0, 8).map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
              {techStack.length > 8 && (
                <span className="rounded-lg border border-border-color bg-bg-secondary px-4 py-2 font-sans text-[0.9rem] text-text-primary">
                  +{techStack.length - 8} more
                </span>
              )}
            </div>
          </section>
        )}

        {/* Overview */}
        <ExpandableSection
          title="Overview"
          text={project.detailedDescription?.overview || project.description}
        />

        {/* Key Features */}
        {project.detailedDescription?.features && (
          <ExpandableSection
            title="Key Features"
            items={project.detailedDescription.features}
          />
        )}

        {/* Technical Details */}
        {project.detailedDescription?.technicalDetails && (
          <ExpandableSection
            title="Technical Details"
            items={project.detailedDescription.technicalDetails}
          />
        )}

        {/* Impact */}
        {project.detailedDescription?.impact && (
          <ExpandableSection
            title="Impact"
            text={project.detailedDescription.impact}
          />
        )}

        {/* Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <section className="mb-16 max-w-[900px]">
            <Title level={2} className={sectionTitleClasses}>Achievements</Title>
            <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-[1024px]:grid-cols-1">
              {project.achievements.map((achievement, index) => (
                <m.div
                  key={index}
                  className={cn(
                    "flex gap-4 rounded-xl p-6",
                    "bg-[rgba(59,130,246,0.04)] border border-[rgba(59,130,246,0.15)]",
                    "transition-all duration-300",
                    "hover:border-accent-blue hover:bg-[rgba(59,130,246,0.08)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="shrink-0 text-[2rem]">
                    {achievement.icon}
                  </span>
                  <div className="flex-1">
                    <Title
                      level={3}
                      className="mb-2 font-display text-[1.1rem] font-semibold !text-[var(--primary-text)]"
                    >
                      {achievement.title}
                    </Title>
                    <Text className="m-0 text-[0.9rem] leading-[1.5] text-[var(--secondary-text)]">
                      {getBriefAchievement(achievement.description)}
                    </Text>
                    <AnimatePresence>
                      {expandedSections.achievements && (
                        <m.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-[0.9rem] leading-[1.5] text-[var(--secondary-text)]"
                        >
                          {achievement.description}
                        </m.p>
                      )}
                    </AnimatePresence>
                  </div>
                </m.div>
              ))}
            </div>
            <button
              className={expandButtonClasses}
              onClick={() => toggleSection("achievements")}
            >
              {expandedSections.achievements
                ? "Show Less"
                : "View More Details →"}
            </button>
          </section>
        )}

        {/* Certificates */}
        {project.certificates && project.certificates.length > 0 && (
          <section className="mb-16 max-w-[900px]">
            <Title level={2} className={sectionTitleClasses}>
              Certificates &amp; Recognition
            </Title>
            <div className="flex flex-col gap-6">
              {project.certificates.map((cert, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-8 overflow-hidden rounded-2xl p-6",
                    "bg-[rgba(59,130,246,0.04)] border border-[rgba(59,130,246,0.15)]",
                    "transition-all duration-300",
                    "hover:border-accent-blue hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]",
                    "max-[768px]:flex-col"
                  )}
                >
                  <div className="relative h-[150px] w-[200px] shrink-0 overflow-hidden rounded-lg border border-[rgba(59,130,246,0.2)] max-[768px]:h-[200px] max-[768px]:w-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-4">
                    <Title
                      level={3}
                      className="m-0 font-display text-[1.1rem] font-semibold !text-[var(--primary-text)]"
                    >
                      {cert.title}
                    </Title>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 font-sans font-semibold text-accent-blue no-underline transition-all duration-300 hover:translate-x-[5px]"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related posts — two-way internal links with the blog's case studies */}
        {relatedPosts.length > 0 && (
          <section className="mb-16 mt-24">
            <Title
              level={2}
              className="mb-8 font-display text-[2rem] font-semibold !text-[var(--primary-text)]"
            >
              Read More About This Project
            </Title>
            <div className="flex flex-col gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "group flex items-center gap-5 overflow-hidden rounded-2xl border border-border-color bg-bg-secondary p-5 no-underline",
                    "transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue hover:shadow-[0_16px_40px_rgba(59,130,246,0.15)]",
                    "max-[600px]:flex-col max-[600px]:items-stretch"
                  )}
                >
                  {post.coverImage && (
                    <div className="relative h-[72px] w-[110px] shrink-0 overflow-hidden rounded-lg bg-bg-hover max-[600px]:h-[140px] max-[600px]:w-full">
                      <Image
                        src={post.coverImage}
                        alt={`Cover image for ${post.title}`}
                        fill
                        sizes="(max-width: 600px) 100vw, 110px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent-blue">
                      {post.category}
                    </span>
                    <span className="line-clamp-2 font-sans text-lg font-semibold text-text-primary">
                      {post.title}
                    </span>
                    <span className="line-clamp-1 text-sm text-text-secondary">{post.excerpt}</span>
                  </div>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[rgba(59,130,246,0.4)] bg-[rgba(59,130,246,0.1)]",
                      "px-4 py-2 font-sans text-sm font-semibold text-accent-blue transition-colors duration-300",
                      "group-hover:bg-accent-blue group-hover:text-white max-[600px]:justify-center"
                    )}
                  >
                    Read Article →
                    <span className="sr-only">: {post.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ — same items as the FAQPage JSON-LD */}
        {faq.length > 0 && (
          <section className="mb-16 mt-24">
            <Title
              level={2}
              className="mb-8 font-display text-[2rem] font-semibold !text-[var(--primary-text)]"
            >
              Frequently Asked Questions
            </Title>
            <FaqList items={faq} className="max-w-[860px]" />
          </section>
        )}

        {/* Related Projects */}
        <section className="mb-16 mt-24">
          <Title
            level={2}
            className="mb-8 font-display text-[2rem] font-semibold !text-[var(--primary-text)]"
          >
            Related Projects
          </Title>
          <div className="mb-12 grid grid-cols-1 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className={cn(
                  "flex flex-col overflow-hidden rounded-xl no-underline",
                  "bg-bg-secondary border border-border-color text-text-primary",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:border-accent-blue hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
                )}
              >
                <div className="relative aspect-[16/9] w-full bg-bg-secondary">
                  <Image
                    src={`/assets/images/projects/${relatedProject.src || relatedProject.previewSrc}`}
                    alt={relatedProject.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <Title
                    level={3}
                    className="m-0 font-display text-xl font-semibold !text-[var(--primary-text)]"
                  >
                    {relatedProject.title}
                  </Title>
                  <Text className="m-0 font-sans text-[0.9rem] leading-[1.5] text-[var(--secondary-text)]">
                    {getBriefText(relatedProject.description)}
                  </Text>
                  {relatedProject.tech && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {relatedProject.tech
                        .split(",")
                        .slice(0, 3)
                        .map((tech, i) => (
                          <TechBadge key={i} tech={tech.trim()} />
                        ))}
                      {relatedProject.tech.split(",").length > 3 && (
                        <span className="rounded-lg border border-border-color bg-bg-secondary px-4 py-2 text-[0.9rem] text-text-secondary">
                          +{relatedProject.tech.split(",").length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              goToSection("projects", pathname, router.push);
            }}
            className={cn(
              "mx-auto block max-w-[300px] rounded-lg border border-border-color px-8 py-4 text-center",
              "bg-text-primary font-sans font-semibold text-bg-primary no-underline",
              "transition-all duration-300",
              "hover:bg-accent-blue hover:text-white hover:border-accent-blue hover:-translate-y-0.5"
            )}
          >
            View All Projects
          </Link>
        </section>
      </Container>
    </div>
  );
}
