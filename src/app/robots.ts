import type { MetadataRoute } from "next";
import { buildCanonicalUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      buildCanonicalUrl("/sitemap.xml"),
      buildCanonicalUrl("/api/image-sitemap.xml"),
    ],
  };
}
