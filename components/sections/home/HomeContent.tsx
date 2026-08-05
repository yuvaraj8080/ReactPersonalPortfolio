"use client";

import { motion } from "framer-motion";
import { layout } from "@/lib/constants/styles";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/home/Hero";
import { ExperienceSection } from "@/components/sections/home/ExperienceSection";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { Skills } from "@/components/sections/home/Skills";
import { GitHubContributions } from "@/components/sections/home/GitHubContributions";
import { Certifications } from "@/components/sections/home/Certifications";
import { ConnectSection } from "@/components/sections/home/ConnectSection";
import { Achievements } from "@/components/sections/home/Achievements";
import { Blogs } from "@/components/sections/home/Blogs";
import { projects } from "@/data/projects";

export function HomeContent() {
  useHashNavigation();

  return (
    <div className="relative w-full">
      <Hero />
      <ExperienceSection />
      <main className={layout.container}>
        <motion.h1
          id="projects"
          className="mb-12 mt-12 text-left font-display text-4xl font-semibold leading-[1.2] tracking-[0.04em] text-text-primary"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Projects
        </motion.h1>
        <ProjectsGrid projects={projects} singleColumn />
      </main>
      <Skills />
      <GitHubContributions />
      <Certifications />
      <ConnectSection />
      <Achievements />
      <Blogs />
      <Footer />
    </div>
  );
}
