export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      fit?: "cover" | "contain";
      /** Match the box ratio to the source image's real ratio so `fit: "contain"` needs no letterboxing. Defaults to 16/9. */
      aspectRatio?: "16/9" | "4/3" | "8/5";
    }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; variant: "tip" | "key-takeaway"; text: string }
  | { type: "link-card"; title: string; url: string; description?: string; image?: string }
  | { type: "tech-stack"; items: string[] }
  | { type: "link-card-row"; items: { title: string; url: string; image?: string }[] }
  | { type: "faq"; items: { question: string; answer: string }[] };

export interface Blog {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  tags: string[];
  featured: boolean;
  /** Card thumbnail + OG image. Omit to fall back to a category-label placeholder. */
  coverImage?: string;
  /** Quotable summary shown near the top of the detail page (GEO: what an AI answer engine would cite). */
  keyTakeaways?: string[];
  /** Full post body, rendered only on the detail page. */
  content: BlogContentBlock[];
  /** Cross-links into /projects/[slug] for related-work call-outs. */
  relatedProjectSlugs?: string[];
}
