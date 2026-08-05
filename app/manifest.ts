import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "YD",
    description:
      "Full-Stack Developer & Flutter Specialist — Android, iOS, web, and desktop apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#3b82f6",
    icons: [
      { src: "/assets/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
