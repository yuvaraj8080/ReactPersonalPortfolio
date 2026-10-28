import { SITE_NAME } from "@/lib/constants/site";
import type { FaqItem, Project } from "@/types";

const withArticle = (phrase: string) => `${/^[aeiou]/i.test(phrase) ? "an" : "a"} ${phrase}`;

function joinList(items: string[]) {
  if (items.length <= 2) return items.join(" and ");
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

/** First sentence only — impact blurbs often continue with credits that don't answer the question. */
function firstSentence(text: string) {
  const [first] = text.split(/(?<=[.!?])\s+/);
  return first.trim();
}

/**
 * Short FAQ for a project page, built only from the project's own data so nothing is invented.
 * Rendered visibly with <FaqList> and emitted as FAQPage JSON-LD from the same array.
 */
export function buildProjectFaq(project: Project): FaqItem[] {
  const stack = project.tech
    .split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);
  const impact = project.detailedDescription?.impact?.trim();
  const client = project.client && project.client.name !== project.title ? project.client : undefined;
  const items: FaqItem[] = [];

  items.push({
    question: `Who built ${project.title}?`,
    answer: `${project.title} was built by ${SITE_NAME}${
      project.role ? ` as ${withArticle(project.role)}` : ""
    }${client ? ` for ${client.name}` : ""}.`,
    link: { label: `More about ${SITE_NAME}`, href: "/" },
  });

  if (stack.length > 0) {
    items.push({
      question: `What technologies does ${project.title} use?`,
      answer: `${project.title} is built with ${joinList(stack)}.`,
    });
  }

  if (project.timeline) {
    items.push({
      question: `How long did ${project.title} take to build?`,
      answer: `${project.title} took ${project.timeline} to build.`,
    });
  }

  if (impact) {
    items.push({
      question: `What was the outcome of ${project.title}?`,
      answer: firstSentence(impact),
    });
  }

  if (project.liveUrls && project.liveUrls.length > 0) {
    items.push({
      question: `Where can I see ${project.title}?`,
      answer: `${project.title} is live: ${project.liveUrls
        .map((live) => `${live.title} (${live.url})`)
        .join(", ")}.`,
    });
  }

  items.push({
    question: `Can I hire the developer behind ${project.title}?`,
    answer: `Yes. ${SITE_NAME} takes on freelance Flutter, React Native and web projects, and quotes each one after a short call.`,
    link: { label: `Hire ${SITE_NAME}`, href: "/hire-me" },
  });

  return items;
}
