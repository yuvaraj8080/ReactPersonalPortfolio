"use client";

import dynamic from "next/dynamic";
import * as m from "framer-motion/m";
import { layout } from "@/lib/constants/styles";
import type { ProjectCardData } from "@/types";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { Title } from "@/lib/common/Title";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/home/Hero";
import { ExperienceSection } from "@/components/sections/home/ExperienceSection";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { Skills } from "@/components/sections/home/Skills";

// Below-the-fold sections load as separate chunks (still server-rendered, so crawlers see the full text)
// and hydrate after the hero instead of competing with it.
const GitHubContributions = dynamic(() =>
  import("@/components/sections/home/GitHubContributions").then((mod) => mod.GitHubContributions)
);
const Certifications = dynamic(() =>
  import("@/components/sections/home/Certifications").then((mod) => mod.Certifications)
);
const ConnectSection = dynamic(() =>
  import("@/components/sections/home/ConnectSection").then((mod) => mod.ConnectSection)
);
const Achievements = dynamic(() =>
  import("@/components/sections/home/Achievements").then((mod) => mod.Achievements)
);
const Blogs = dynamic(() => import("@/components/sections/home/Blogs").then((mod) => mod.Blogs));

interface HomeContentProps {
  /** Server-rendered FAQ section, passed in from app/page.tsx so it ships no client JS. */
  faq: React.ReactNode;
  /** Featured projects (see data/featuredProjects.ts), already trimmed to the card fields. */
  projects: ProjectCardData[];
  /** True when more projects exist than the home page shows. */
  hasMoreProjects: boolean;
}

export function HomeContent({ faq, projects, hasMoreProjects }: HomeContentProps) {
  useHashNavigation();

  return (
    <div className="relative w-full">
      <Hero />
      <ExperienceSection />
      <main className={layout.container}>
        <m.div
          id="projects"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Title
            level={2}
            className="mb-12 mt-12 text-left font-display text-4xl font-semibold leading-[1.2] tracking-[0.04em] text-text-primary"
          >
            Projects
          </Title>
        </m.div>
        <ProjectsGrid projects={projects} singleColumn showViewAll={hasMoreProjects} />
      </main>
      <Skills />
      <GitHubContributions />
      <Certifications />
      {faq}
      <ConnectSection />
      <Achievements />
      <Blogs />
      <Footer />
    </div>
  );
}
