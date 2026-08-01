import { buildCanonicalUrl } from "@/lib/metadata";
import {
  imageSitemapEntries,
  type ImageSitemapEntry,
} from "@/lib/image-sitemap";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderEntry(entry: ImageSitemapEntry): string {
  const images = entry.images
    .map(
      (image) => `
    <image:image>
      <image:loc>${escapeXml(buildCanonicalUrl(image.src))}</image:loc>
      <image:caption>${escapeXml(image.alt)}</image:caption>
    </image:image>`,
    )
    .join("");

  const lastmod = entry.lastmod
    ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`
    : "";

  return `
  <url>
    <loc>${escapeXml(buildCanonicalUrl(entry.path))}</loc>${lastmod}${images}
  </url>`;
}

export function GET(): Response {
  const urls = imageSitemapEntries.map(renderEntry).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
