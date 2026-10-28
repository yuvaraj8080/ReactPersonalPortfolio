export interface ProjectLiveUrl {
  title: string;
  url: string;
}

export interface ProjectCertificate {
  title: string;
  file: string;
  image: string;
}

export interface ProjectAchievement {
  title: string;
  icon: string;
  description: string;
}

export interface ProjectDetailedDescription {
  overview: string;
  features: string[];
  technicalDetails: string[];
  impact: string;
}

/** The fields a project card in the home grid renders — everything else stays on the server. */
export type ProjectCardData = Pick<
  Project,
  "slug" | "title" | "description" | "tech" | "src" | "previewSrc" | "detailsUrl" | "liveUrls" | "previewFit"
>;

export interface Project {
  title: string;
  slug: string;
  /** Keyword-led <title> text (≤42 chars so the " | Yuvaraj Dekhane" suffix fits in 60). Falls back to `title`. */
  seoTitle?: string;
  description: string;
  detailedDescription: ProjectDetailedDescription;
  /** Comma-separated tech list, e.g. "NEXT.js, FASTAPI, …" */
  tech: string;
  /** Main image file name (inside /assets/images/projects/) */
  src: string;
  images: string[];
  certificates?: ProjectCertificate[];
  previewSrc: string;
  githubUrl: string;
  detailsUrl: string;
  liveUrls?: ProjectLiveUrl[];
  achievements: ProjectAchievement[];
  /** How long the project took, e.g. "2 months". Omit if unknown — the detail page hides the stat rather than guessing. */
  timeline?: string;
  /** e.g. "Full Stack Developer" */
  role?: string;
  status?: "Completed" | "In Progress" | "Archived";
  /** Who the project was built for — shown as the byline and in the project's structured data. Omit when unknown. */
  client?: { name: string; url?: string };
  /** "contain" shows the grid card's preview image in full (letterboxed, no cropping) instead of the default cover-crop. Use for composite/poster-style images where cropping would cut off meaningful content. */
  previewFit?: "cover" | "contain";
}
