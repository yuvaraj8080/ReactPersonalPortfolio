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
  liveUrl?: string;
  color: string;
  achievements: ProjectAchievement[];
}
