import { MetadataRoute } from "next";
import { getAllToolSlugs } from "@/lib/free-tools";
import { getAllSolutionSlugs } from "@/lib/solutions";
import { getAllPosts } from "@/lib/blog";
import { getAllCompetitorSlugs } from "@/lib/competitors";
import { getAllPromptSlugs } from "@/lib/prompts";

const BASE_URL = "https://atlasbi.live";
const LOCALES = ["en", "fr", "de", "it", "es", "pl"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [];

  // Helper to generate alternates
  const getAlternates = (path: string) => {
    const languages: Record<string, string> = {};
    LOCALES.forEach((l) => {
      languages[l] = `${BASE_URL}/${l}${path}`;
    });
    return { languages };
  };

  LOCALES.forEach((locale) => {
    // ── Core Pages ──
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: getAlternates(""),
    });

    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: getAlternates("/blog"),
    });

    entries.push({
      url: `${BASE_URL}/${locale}/free-tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: getAlternates("/free-tools"),
    });

    entries.push({
      url: `${BASE_URL}/${locale}/prompts`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates("/prompts"),
    });

    // ── Free Tools ──
    getAllToolSlugs().forEach((slug) => {
      entries.push({
        url: `${BASE_URL}/${locale}/free-tools/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: getAlternates(`/free-tools/${slug}`),
      });
    });

    // ── Solutions ──
    getAllSolutionSlugs().forEach((slug) => {
      entries.push({
        url: `${BASE_URL}/${locale}/solutions/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: getAlternates(`/solutions/${slug}`),
      });
    });

    // ── Competitor Pages ──
    getAllCompetitorSlugs().forEach((slug) => {
      entries.push({
        url: `${BASE_URL}/${locale}/vs/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: getAlternates(`/vs/${slug}`),
      });
    });

    // ── Prompt Library ──
    getAllPromptSlugs().forEach((slug) => {
      entries.push({
        url: `${BASE_URL}/${locale}/prompts/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: getAlternates(`/prompts/${slug}`),
      });
    });

    // ── Blog Posts ──
    // Note: We use 'en' posts as the master list for sitemap generation
    // since we have fallback logic in place.
    const posts = getAllPosts("en");
    posts.forEach((post) => {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: post.publishedAt || now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: getAlternates(`/blog/${post.slug}`),
      });
    });
  });

  return entries;
}
