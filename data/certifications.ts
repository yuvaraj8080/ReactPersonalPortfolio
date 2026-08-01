export interface Certification {
  id: string | number;
  title: string;
  issuer: string;
  date: string;
  expires: string | null;
  credentialId: string;
  icon: "kubernetes" | "oracle" | "google";
  skills: string[];
  url: string;
}

export const certifications: Certification[] = [
  {
    id: "cka",
    title: "CKA: Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    date: "Issued Apr 2026",
    expires: "Apr 2028",
    credentialId: "LF-erz3raamov",
    icon: "kubernetes",
    skills: [
      "Kubernetes",
      "Cluster administration",
      "Container orchestration",
      "Linux",
    ],
    url: "https://www.credly.com/badges/747a88db-75e0-479b-8777-364881262ab4/linked_in_profile",
  },
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    expires: "Oct 2027",
    credentialId: "OC7481909",
    icon: "oracle",
    skills: ["Cloud", "Oracle Cloud", "Computer Networking", "Databases"],
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E9C20B9E66B20A75AA42D96AB9D00DE0CF0886F7776AFC227C3E55701FAB2A40",
  },
  {
    id: 2,
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    expires: "Oct 2027",
    credentialId: "323242784OCI25GAIOCP",
    icon: "oracle",
    skills: [
      "Large Language Models (LLM)",
      "OCI Generative AI Service",
      "Retrieval-Augmented Generation (RAG)",
      "Chatbot Development",
      "Artificial Intelligence (AI)",
    ],
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3CD2C9D4F500B8C06C362EB4C6FD99908D6E157E9C66311616893266D49D7548",
  },
  {
    id: 3,
    title:
      "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    expires: "Oct 2027",
    credentialId: "323242784OCI2025MCAOCP",
    icon: "oracle",
    skills: [
      "OCI-Azure",
      "Oracle Database@Azure",
      "Oracle Database@Google Cloud",
      "Oracle Interconnect for Google Cloud",
      "Oracle Cloud Infrastructure (OCI) core services",
      "multicloud architectures on the OCI platform",
    ],
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E77DC08386F64B06BE4B0F7F35B02CD18D3A169B282FFA7FF1A8CFB938FC35D0",
  },
  {
    id: 4,
    title: "Google Cloud career readiness Associate Cloud Engineer track",
    issuer: "Google Cloud Skills Boost",
    date: "Apr 2024",
    expires: null,
    credentialId: "MqlywduJ",
    icon: "google",
    skills: ["Google Cloud Platform (GCP)"],
    url: "#",
  },
];
