import { SITE_LANG, SITE_NAME } from "@/lib/constants/site";
import { absoluteUrl } from "@/lib/seo";
import { blogs } from "@/data/blogs";

export const dynamic = "force-static";

const escapeXml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** RSS 2.0 feed of the blog — lets readers, aggregators and Bing discover new posts without crawling. */
export function GET() {
  const posts = [...blogs].sort((a, b) => b.date.localeCompare(a.date));
  const lastBuild = new Date(posts[0]?.updated ?? posts[0]?.date ?? Date.now()).toUTCString();

  const items = posts
    .map((blog) => {
      const url = absoluteUrl(`/blog/${blog.slug}`);
      return `    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(SITE_NAME)}</dc:creator>
      <category>${escapeXml(blog.category)}</category>
      <description>${escapeXml(blog.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_NAME)} — Blog</title>
    <link>${absoluteUrl("/all-blogs")}</link>
    <description>Case studies and notes on Flutter, React, AI-assisted development and shipping production apps.</description>
    <language>${SITE_LANG}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
