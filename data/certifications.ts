export interface Certification {
  id: string | number;
  title: string;
  issuer: string;
  /** Omit for certificates that don't print a date. */
  date?: string;
  expires?: string | null;
  credentialId?: string;
  icon: "kubernetes" | "oracle" | "google" | "hackathon" | "paper";
  /** Short blurb shown on hackathon/competition-style cards. */
  description?: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    id: "imagine-hackathon",
    title: "Imagine Hackathon",
    issuer: "PanIIT Alumni India",
    icon: "hackathon",
    description:
      "Participated as Team Loading, representing Rajiv Gandhi Institute of Technology (RGIT), Mumbai.",
    url: "https://drive.google.com/file/d/1Oh3EVbB8zFoN1rqK5SLaN0dd1qsZH2XI/view?usp=sharing",
  },
  {
    id: "sharkathon-2024",
    title: "SHARK-A-THON 2024",
    issuer: "ABIT, RGIT Mumbai",
    date: "26 Mar 2024",
    icon: "hackathon",
    description:
      "Certificate of Appreciation for participating in SHARK-A-THON 2024, held at Rajiv Gandhi Institute of Technology.",
    url: "https://drive.google.com/file/d/1N7IJCwnyrP7EmcwvLuGU_hEgZsUqK_rR/view?usp=sharing",
  },
  {
    id: "spit-hackathon-2024",
    title: "S.P.I.T. Hackathon 2024",
    issuer: "Sardar Patel Institute of Technology",
    date: "10–11 Feb 2024",
    icon: "hackathon",
    description:
      "Participated as Team Coding Ninjas in the S.P.I.T. Hackathon, hosted by C.S.I. S.P.I.T.",
    url: "https://drive.google.com/file/d/1YHUG-EnydLiVcaoMLrZyf289HpNoB0tr/view?usp=sharing",
  },
  {
    id: "ideathon-24",
    title: "IDEATHON'24",
    issuer: "IIC RGIT",
    date: "28–29 Feb 2024",
    icon: "hackathon",
    description:
      "Certificate of Participation for pitching an idea at IDEATHON 2024, an idea-pitching and presentation competition.",
    url: "https://drive.google.com/file/d/1gfySlJHgapfb6HvvtVlgw8tMXSeH8Y36/view?usp=sharing",
  },
  {
    id: "irfsr-icsecs",
    title: "Chat Fusion: An Integrated Approach for Social Media Application",
    issuer: "International Research Forum for Scientific Research (IRFSR)",
    date: "17 Apr 2026",
    icon: "paper",
    description:
      "Presented a research paper at the International Conference on Software Engineering and Computer Science (ICSECS), Mumbai.",
    url: "https://drive.google.com/file/d/1_s9moGHLj5ivjREB12MV54biia7ODBmS/view?usp=sharing",
  },
];
