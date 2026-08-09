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

export interface Project {
  title: string;
  slug: string;
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
  /** "contain" shows the grid card's preview image in full (letterboxed, no cropping) instead of the default cover-crop. Use for composite/poster-style images where cropping would cut off meaningful content. */
  previewFit?: "cover" | "contain";
}
