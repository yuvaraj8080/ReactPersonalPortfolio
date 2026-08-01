export interface Experience {
  company: string;
  /** Fallback initials shown when no logo image exists. */
  logo: string;
  logoSrc?: string;
  /** Background color used when rendering initials instead of an image. */
  logoColor: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
  technologies: string[];
  description: string[];
}
