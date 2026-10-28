import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { poppins, playfair } from "@/lib/constants/fonts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_LANG,
  SITE_LOCALE,
} from "@/lib/constants/site";
import { ogImage, siteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/lib/common/JsonLd";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/layout/MotionProvider";
import "./globals.css";

const defaultShareImage = ogImage("home.jpg", `${SITE_NAME} — Flutter, React Native & Web Developer`);

// No `keywords` (Google ignores it) and no root `alternates.canonical` — every page sets
// its own, and a root "/" canonical would be inherited by pages that don't (e.g. 404).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Set GOOGLE_SITE_VERIFICATION in the host's env to emit the Search Console meta tag.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    images: [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: defaultShareImage.url, alt: defaultShareImage.alt }],
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={SITE_LANG}
      data-theme="dark"
      suppressHydrationWarning
      className={`${poppins.variable} ${playfair.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd data={siteJsonLd()} />
      </head>
      <body>
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          {children}
        </MotionProvider>
        {/* Real-user Core Web Vitals (no cookies). Reports only on Vercel, after Speed Insights is enabled for the project. */}
        <SpeedInsights />
      </body>
    </html>
  );
}
