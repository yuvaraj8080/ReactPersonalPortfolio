import { experiences } from "@/data/experiences";
import { HERO_TECH_STACK } from "@/data/hero";
import { CONTACT_EMAIL, SITE_LOCATION, SITE_NAME, WHATSAPP_DISPLAY } from "@/lib/constants/site";
import type { FaqItem } from "@/types";

const current = experiences.find((e) => e.endDate === "Present") ?? experiences[0];
const earlierFlutterEmployers = experiences
  .filter((e) => e !== current && e.role.includes("Flutter"))
  .map((e) => e.company);

/**
 * Home-page FAQ. Written without pronouns on purpose, and every figure comes from the
 * hero copy or the project data — update those first, then this.
 */
export const HOME_FAQ: FaqItem[] = [
  {
    question: `Who is ${SITE_NAME}?`,
    answer: `${SITE_NAME} is a Flutter, React Native and full-stack developer based in ${SITE_LOCATION.city}, ${SITE_LOCATION.region}, India. Currently a ${current.role} at ${current.company}${
      earlierFlutterEmployers.length > 0
        ? `, earlier a Flutter App Developer at ${earlierFlutterEmployers.join(" and ")}`
        : ""
    }. 80+ projects delivered, 25+ of them live in production.`,
    link: { label: "See the experience and projects", href: "/projects" },
  },
  {
    question: "Who built the MagicMond Global website?",
    answer: `${SITE_NAME} built MagicMond Global, the MagicMond agency's own marketing website, as Frontend Developer alongside the MagicMond Magicians Team. It went from idea to production in 3 days using rapid iteration and Vibe Coding.`,
    link: { label: "Read the MagicMond Global case study", href: "/projects/magicmond-global" },
  },
  {
    question: `What has ${SITE_NAME} built?`,
    answer: `Apps and websites across Android, iOS and the web, including a CRM platform serving 500+ active clients. Highlights: Dosha Detector, an AI-powered Flutter astrology app with 500+ downloads on Google Play; PerfectTiming, a Flutter web astrology app with 1.56M+ campaign impressions; GRAH9, a Flutter CRM and analytics dashboard; and the MagicMond Global and LevelUp Media websites.`,
    link: { label: "Browse all projects", href: "/projects" },
  },
  {
    question: "Which technologies does the work use?",
    answer: `Flutter and React Native for mobile apps; React and Next.js for the web. The day-to-day stack is ${HERO_TECH_STACK.map((tech) => tech.name).join(", ")}.`,
  },
  {
    question: `Is ${SITE_NAME} available for freelance work?`,
    answer: `Yes. ${SITE_NAME} takes on project-based freelance work — Flutter and React Native apps, websites and web apps, admin panels and integrations — alongside full-time roles and technical collaborations. Share what you are building and a quote follows.`,
    link: { label: "Hire Yuvaraj Dekhane", href: "/hire-me" },
  },
  {
    question: "What is Dosha Detector?",
    answer: `Dosha Detector is an AI-powered Vedic astrology app built with Flutter and Firebase — dosha detection, birth chart analysis and personalized remedies. ${SITE_NAME} built it as a Flutter Developer; it is published on Google Play under Astro Vedansh Innovations, with 500+ downloads and a 4.3★ rating.`,
    link: { label: "View the Dosha Detector project", href: "/projects/dosha-detector" },
  },
  {
    question: `Where is ${SITE_NAME} based?`,
    answer: `${SITE_NAME} is based in ${SITE_LOCATION.city}, ${SITE_LOCATION.region}, India.`,
  },
  {
    question: `How can I contact ${SITE_NAME}?`,
    answer: `Email ${CONTACT_EMAIL} or message ${WHATSAPP_DISPLAY} on WhatsApp. LinkedIn messages work too, and a 15-minute call can be booked from the contact section of this site.`,
    link: { label: "More ways to get in touch", href: "/hire-me" },
  },
];
