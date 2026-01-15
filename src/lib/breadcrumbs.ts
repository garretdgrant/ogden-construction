import { buildCanonicalUrl, getMetadataBase } from "@/lib/metadata";

export type Crumb = {
  label: string;
  href?: string;
};

function normalizeUrl(pathOrUrl: string) {
  return buildCanonicalUrl(pathOrUrl, getMetadataBase());
}

export function buildBreadcrumbJsonLd(crumbs: Crumb[], currentPath: string) {
  const currentUrl = normalizeUrl(currentPath);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href ? normalizeUrl(crumb.href) : currentUrl,
    })),
  };
}

export function buildHomeCrumbs(): Crumb[] {
  return [{ label: "Home" }];
}

export function buildLocationsCrumbs(): Crumb[] {
  return [{ label: "Home", href: "/" }, { label: "Locations" }];
}

export function buildLocationDetailCrumbs(
  stateSlug: string,
  stateLabel: string,
  citySlug?: string,
  cityLabel?: string,
): Crumb[] {
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: stateLabel, href: `/locations/${stateSlug}` },
  ];

  if (citySlug && cityLabel) {
    crumbs.push({
      label: cityLabel,
      href: `/locations/${stateSlug}/${citySlug}`,
    });
    return crumbs.map((crumb, index) =>
      index === crumbs.length - 1 ? { label: crumb.label } : crumb,
    );
  }

  return crumbs.map((crumb, index) =>
    index === crumbs.length - 1 ? { label: crumb.label } : crumb,
  );
}

export function buildCustomCrumbs(crumbs: Crumb[]): Crumb[] {
  return crumbs;
}
