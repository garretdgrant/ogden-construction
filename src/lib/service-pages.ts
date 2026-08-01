import type { ServiceData } from "@/app/services/data/services";

const FALLBACK_SERVICE_AREA =
  "Serving Placerville, South Lake Tahoe, El Dorado County, and nearby Northern California communities.";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function hasRichText(value?: string | null) {
  return Boolean(value?.trim());
}

export function richTextToHtml(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (/<[a-z!/][^>]*>/i.test(trimmed)) {
    return trimmed;
  }

  return trimmed
    .split(/\n{2,}/)
    .map(
      (paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`,
    )
    .join("");
}

export function stripHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getServiceMetaDescription(
  service: Pick<ServiceData, "metaDescription" | "summary">,
) {
  if (hasRichText(service.metaDescription)) {
    return service.metaDescription.trim();
  }

  return `${service.summary} ${FALLBACK_SERVICE_AREA}`;
}

export function getServiceHeroSubheading(
  service: Pick<ServiceData, "heroSubheading" | "summary">,
) {
  if (hasRichText(service.heroSubheading)) {
    return service.heroSubheading.trim();
  }

  return service.summary;
}
