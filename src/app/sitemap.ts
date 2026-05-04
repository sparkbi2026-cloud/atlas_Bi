import { MetadataRoute } from "next";
import { getAllToolSlugs } from "@/lib/free-tools";
import { getAllSolutionSlugs } from "@/lib/solutions";
import { getAllPosts } from "@/lib/blog";
import { getAllCompetitorSlugs } from "@/lib/competitors";
import { getAllPromptSlugs } from "@/lib/prompts";

const BASE_URL = "https://atlasbi.live";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ── Core Pages ──
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/free-tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  // ── Free Tools (pSEO) ──
  const toolPages: MetadataRoute.Sitemap = getAllToolSlugs().map((slug) => ({
    url: `${BASE_URL}/free-tools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Solution Pages (Vertical SEO) ──
  const solutionPages: MetadataRoute.Sitemap = getAllSolutionSlugs().map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Competitor Pages (Bottom of Funnel SEO) ──
  const competitorPages: MetadataRoute.Sitemap = getAllCompetitorSlugs().map((slug) => ({
    url: `${BASE_URL}/vs/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9, // High priority because these are high-converting intent pages
  }));

  // ── AI Prompt Library (Search Intent SEO) ──
  const promptIndex: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/prompts`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const promptPages: MetadataRoute.Sitemap = getAllPromptSlugs().map((slug) => ({
    url: `${BASE_URL}/prompts/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Blog Posts ──
  const posts = getAllPosts("en");
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt || now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...toolPages, ...solutionPages, ...competitorPages, ...promptIndex, ...promptPages, ...blogPages];
}
