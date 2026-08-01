export interface Blog {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  featured: boolean;
}

export const blogs: Blog[] = [
  {
    title: "Building Scalable Full-Stack Applications with Next.js",
    excerpt:
      "Learn how to architect and build production-ready full-stack applications using Next.js, TypeScript, and modern development practices.",
    category: "Development",
    date: "2024-12-15",
    readTime: "5 min read",
    slug: "building-scalable-fullstack-apps",
    tags: ["Next.js", "TypeScript", "Full Stack"],
    featured: true,
  },
  {
    title: "AI Integration in Legal Tech: Lessons from LegAIly",
    excerpt:
      "Exploring how AI and blockchain technology can revolutionize the legal industry, based on real-world implementation experience.",
    category: "AI & Tech",
    date: "2024-12-10",
    readTime: "8 min read",
    slug: "ai-integration-legal-tech",
    tags: ["AI", "Blockchain", "Legal Tech"],
    featured: true,
  },
  {
    title: "Web3 Development: Building on Aptos Blockchain",
    excerpt:
      "A comprehensive guide to developing decentralized applications on Aptos, including smart contracts and GameFi integration.",
    category: "Web3",
    date: "2024-12-05",
    readTime: "10 min read",
    slug: "web3-aptos-development",
    tags: ["Web3", "Blockchain", "Aptos"],
    featured: false,
  },
  {
    title: "Design Systems: Creating Consistent UI Components",
    excerpt:
      "Best practices for building and maintaining design systems that scale across projects and teams.",
    category: "Design",
    date: "2024-11-28",
    readTime: "6 min read",
    slug: "design-systems-ui-components",
    tags: ["Design", "UI/UX", "Design Systems"],
    featured: false,
  },
  {
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Practical techniques and patterns for improving performance in React applications, from code splitting to memoization.",
    category: "Development",
    date: "2024-11-20",
    readTime: "7 min read",
    slug: "optimizing-react-performance",
    tags: ["React", "Performance", "Optimization"],
    featured: false,
  },
  {
    title: "Open Source Contributions: A Developer's Journey",
    excerpt:
      "Reflecting on the impact of open source contributions and how they shape a developer's career and skills.",
    category: "Open Source",
    date: "2024-11-15",
    readTime: "5 min read",
    slug: "open-source-contributions",
    tags: ["Open Source", "Community", "Career"],
    featured: false,
  },
];
