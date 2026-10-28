import { CONTACT_EMAIL, SITE_LOCATION, SITE_NAME, WHATSAPP_DISPLAY } from "@/lib/constants/site";
import type { FaqItem } from "@/types";

export type HireServiceIcon =
  | "smartphone"
  | "layers"
  | "globe"
  | "dashboard"
  | "server"
  | "sparkles";

export interface HireService {
  icon: HireServiceIcon;
  title: string;
  description: string;
  /** Project that proves the claim — rendered as an internal link. */
  projectSlug?: string;
}

/** Every claim below comes from the project data or the hero copy — keep it that way. */
export const HIRE_SERVICES: HireService[] = [
  {
    icon: "smartphone",
    title: "Flutter app development",
    description:
      "Android and iOS apps from a single Flutter codebase, with Firebase, GetX and Razorpay payments — like Dosha Detector, live on Google Play, and a full e-commerce app with an admin panel.",
    projectSlug: "dosha-detector",
  },
  {
    icon: "layers",
    title: "React Native apps",
    description:
      "Cross-platform mobile apps with React Native and Expo, for teams that already work in JavaScript and TypeScript.",
  },
  {
    icon: "globe",
    title: "Websites and web apps",
    description:
      "Fast, SEO-ready sites built with React, Next.js and Tailwind CSS. MagicMond Global went from idea to production in 3 days and PerfectCareer in 5.",
    projectSlug: "magicmond-global",
  },
  {
    icon: "dashboard",
    title: "Admin panels and CRMs",
    description:
      "The dashboards that run the business behind the app. GRAH9 is a Flutter CRM and analytics dashboard for AstroVedansh's product suite.",
    projectSlug: "grah9",
  },
  {
    icon: "server",
    title: "Backends and integrations",
    description:
      "Firebase, Supabase, Node.js and REST APIs, with Razorpay payments and WhatsApp and email automation through Interakt.",
  },
  {
    icon: "sparkles",
    title: "AI-powered features",
    description:
      "OpenAI-powered features such as personalized reports and recommendations, as used in Dosha Detector and PerfectTiming.",
    projectSlug: "perfect-timing",
  },
];

export interface HireStat {
  value: string;
  label: string;
}

export const HIRE_PROOF: HireStat[] = [
  { value: "80+", label: "Projects delivered" },
  { value: "25+", label: "Live in production" },
  { value: "500+", label: "Active clients on a CRM platform" },
  { value: "3 days", label: "MagicMond Global, idea to production" },
];

export interface HireStep {
  title: string;
  description: string;
}

export const HIRE_PROCESS: HireStep[] = [
  {
    title: "Discovery call",
    description: "A 15-minute call to understand what you are building, who it is for and when you need it.",
  },
  {
    title: "Scope and quote",
    description: "A written scope with clear deliverables and a quote for the whole project.",
  },
  {
    title: "Build and review",
    description: "Work in short iterations, with builds you can open and react to along the way.",
  },
  {
    title: "Launch",
    description: "Deployment to the web or the stores, with help through store submission.",
  },
];

/** Projects shown as proof on the page, in this order. */
export const HIRE_FEATURED_SLUGS = ["magicmond-global", "dosha-detector", "perfect-timing", "grah9"];

export const HIRE_FAQ: FaqItem[] = [
  {
    question: "Are you available for freelance work?",
    answer: `Yes. ${SITE_NAME} takes on project-based freelance work — mobile apps, websites and web apps, admin panels and the integrations behind them — alongside full-time roles and technical collaborations.`,
  },
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Flutter and React Native apps for Android and iOS, websites and web apps in React and Next.js, admin panels and CRMs, and backends and integrations with Firebase, Supabase and Node.js.",
  },
  {
    question: "How much does it cost to hire a freelance Flutter developer?",
    answer:
      "Each project is quoted individually, because cost depends on the number of screens, the platforms, the integrations and the deadline. Share your requirements by email or on a short call and you will get a scoped quote.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. For reference, the MagicMond Global website went from idea to production in 3 days, PerfectCareer took 5 days and PerfectTiming 7 days. A full mobile app takes longer and is estimated after scoping.",
    link: { label: "See the projects", href: "/projects" },
  },
  {
    question: "Should I choose Flutter or React Native?",
    answer:
      "Flutter suits apps that need a polished custom interface from one codebase for Android and iOS. React Native fits teams that already use React and JavaScript and want to share skills and code with a web app. Describe your project and you will get a straight recommendation.",
  },
  {
    question: "Can you build the backend and admin panel too?",
    answer:
      "Yes. Past projects pair a mobile app with a real-time admin panel or CRM, backed by Firebase, Supabase or Node.js, with Razorpay payments where needed.",
  },
  {
    question: "Where are you based?",
    answer: `${SITE_NAME} is based in ${SITE_LOCATION.city}, ${SITE_LOCATION.region}, India.`,
  },
  {
    question: "How do I get started?",
    answer: `Email ${CONTACT_EMAIL} or message ${WHATSAPP_DISPLAY} on WhatsApp with a few lines about what you are building, or book a 15-minute call. A scoped quote follows the call.`,
  },
];
