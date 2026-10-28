import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants/site";
import { buildMetadata, faqPageJsonLd, ogImage, profilePageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/lib/common/JsonLd";
import { HOME_FAQ } from "@/data/faq";
import { HOME_PROJECT_SLUGS } from "@/data/featuredProjects";
import { projects } from "@/data/projects";
import type { ProjectCardData } from "@/types";
import { HomeContent } from "@/components/sections/home/HomeContent";
import { FaqSection } from "@/components/sections/home/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
  image: ogImage("home.jpg", `${SITE_NAME} — Flutter, React Native & Web Developer`),
});

export default function HomePage() {
  // Trim to the card fields here, on the server, so the full project write-ups never ship to the browser.
  const homeProjects = HOME_PROJECT_SLUGS.flatMap((slug): ProjectCardData[] => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return [];
    const { title, description, tech, src, previewSrc, detailsUrl, previewFit } = project;
    return [
      {
        slug: project.slug,
        title,
        description,
        tech,
        src,
        previewSrc,
        detailsUrl,
        previewFit,
        liveUrls: project.liveUrls?.slice(0, 1),
      },
    ];
  });

  return (
    <>
      <JsonLd data={[profilePageJsonLd(), faqPageJsonLd(HOME_FAQ)]} />
      <HomeContent
        faq={<FaqSection items={HOME_FAQ} />}
        projects={homeProjects}
        hasMoreProjects={homeProjects.length < projects.length}
      />
    </>
  );
}
