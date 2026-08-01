import type { MetadataRoute } from "next";
import { generatedSitemapEntries } from "@/app/sitemap.generated";
import { buildCanonicalUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return generatedSitemapEntries.map((entry) => ({
    url: buildCanonicalUrl(entry.path),
    ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
