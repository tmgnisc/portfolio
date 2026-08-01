import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = allPosts.map((post) => ({
    url: `${DATA.url}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: DATA.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
