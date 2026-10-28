import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants/site";
import {
  breadcrumbJsonLd,
  buildMetadata,
  buildTitle,
  clampDescription,
  ogImage,
  projectsPageJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/lib/common/JsonLd";
import { projects } from "@/data/projects";
import { AllProjectsContent } from "@/components/sections/projects/AllProjectsContent";

const title = buildTitle("Flutter Apps & React Websites Portfolio");
const description = clampDescription(
  `Browse ${projects.length} projects by ${SITE_NAME}: Flutter apps, React websites and full-stack platforms for Android, iOS and web, with case studies and live links.`
);

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/projects",
  image: ogImage("home.jpg", `Projects by ${SITE_NAME} — Flutter apps and React websites`),
});

export default function AllProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          projectsPageJsonLd(projects, title, description),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <AllProjectsContent />
    </>
  );
}
