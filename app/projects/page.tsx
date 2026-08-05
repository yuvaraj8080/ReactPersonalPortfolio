import type { Metadata } from "next";
import { AllProjectsContent } from "@/components/sections/projects/AllProjectsContent";

export const metadata: Metadata = {
  title: "All Projects — Yuvaraj Dekhane",
  description:
    "Browse all projects by Yuvaraj Dekhane — production apps across Android, iOS, web, and desktop.",
  alternates: {
    canonical: "/projects",
  },
};

export default function AllProjectsPage() {
  return <AllProjectsContent />;
}
