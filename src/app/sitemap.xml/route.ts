// app/sitemap.xml/route.ts
import { type NextRequest } from "next/server";

export const runtime = "edge";

const baseUrl = "https://ogden-construction.com"; // Update if needed

const staticPages = ["", "/services", "/portfolio", "/about", "/contact"];

export async function GET(_req: NextRequest) {
  const urls = staticPages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>
`,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
