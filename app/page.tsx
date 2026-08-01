import type { Metadata } from "next";
import { HomeContent } from "@/components/sections/home/HomeContent";

export const metadata: Metadata = {
  title: "Krishay Nair — Site Reliability Engineer, CKA Certified",
  description:
    "I build reliable systems at scale — from container orchestration and service mesh to observability and secure networking. Focused on SRE, DevOps, and networking.",
};

export default function HomePage() {
  return <HomeContent />;
}
