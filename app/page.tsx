import type { Metadata } from "next";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants/site";
import { HomeContent } from "@/components/sections/home/HomeContent";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
