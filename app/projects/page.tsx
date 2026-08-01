import type { Metadata } from "next";
import { AllProjectsContent } from "@/components/sections/projects/AllProjectsContent";

export const metadata: Metadata = {
  title: "All Projects - Krishay Nair",
  description: "View all projects by Krishay Nair",
};

export default function AllProjectsPage() {
  return <AllProjectsContent />;
}
