export interface FaqItem {
  question: string;
  /** Plain text — also used verbatim as the FAQPage structured-data answer. */
  answer: string;
  /** Optional internal link shown under the visible answer (not part of the structured data). */
  link?: { label: string; href: string };
}
