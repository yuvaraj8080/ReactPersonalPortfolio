import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants/site";
import { AllProjectsContent } from "@/components/sections/projects/AllProjectsContent";

const title = "All Projects — Yuvaraj Dekhane";
const description =
  "Browse all projects by Yuvaraj Dekhane — production apps across Android, iOS, web, and desktop.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AllProjectsPage() {
  return <AllProjectsContent />;
}
