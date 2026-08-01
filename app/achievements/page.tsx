import type { Metadata } from "next";
import { AchievementsContent } from "@/components/sections/achievements/AchievementsContent";

export const metadata: Metadata = {
  title: "Hall of Fame - Achievements | Krishay Nair",
  description:
    "Awards, hackathon wins, and achievements—a hall of fame of milestones and recognition.",
};

export default function AchievementsPage() {
  return <AchievementsContent />;
}
