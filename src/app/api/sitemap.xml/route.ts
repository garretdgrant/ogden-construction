// app/sitemap.xml/route.ts
import { type NextRequest } from "next/server";
import { getMetadataBase } from "@/lib/metadata";
import { LOCATIONS } from "@/lib/locations-data";

export const runtime = "edge";

const staticPaths = ["/", "/services", "/portfolio", "/about", "/contact"];
const lastModDate = new Date().toISOString().split("T")[0];

const buildEntry = (loc: string, priority = "0.7") => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;

export async function GET(_req: NextRequest) {
  const metadataBase = getMetadataBase();
  const baseUrl = metadataBase.toString().replace(/\/$/, "");

  const staticEntries = staticPaths
    .map((path) =>
      buildEntry(`${baseUrl}${path}`, path === "/" ? "1.0" : "0.7"),
    )
    .join("");

  const locationEntries = LOCATIONS.map((location) =>
    buildEntry(`${baseUrl}/locations/california/${location.id}`, "0.8"),
  ).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticEntries}
    ${locationEntries}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
