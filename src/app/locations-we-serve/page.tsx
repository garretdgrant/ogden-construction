import Link from "next/link";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { buildBreadcrumbJsonLd, buildLocationsCrumbs } from "@/lib/breadcrumbs";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/metadata";
import { LOCATIONS } from "@/lib/locations-data";

const PAGE_TITLE = "Locations We Serve in Northern California";
const PAGE_DESCRIPTION =
  "Explore the Northern California communities we serve for custom decks, home additions, and remodels. Browse Ogden Construction service areas and learn what to expect locally.";
const PAGE_PATH = "/locations-we-serve";

export async function generateMetadata() {
  return buildPageMetadata({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
  });
}

export default function LocationsWeServePage() {
  const breadcrumbs = buildLocationsCrumbs();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs, PAGE_PATH);
  const jsonLd = getWebPageJsonLd({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
  });

  return (
    <>
      <Script
        id="locations-we-serve-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="locations-we-serve-breadcrumbs-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="pb-20">
        <section className="pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Locations We Serve
            </p>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs items={breadcrumbs} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {PAGE_TITLE}
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              We build custom decks, additions, and remodels for homeowners in
              the Sierra foothills, Tahoe, and surrounding communities. Select a
              city to see local insights and project details.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((location) => (
              <div
                key={location.id}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                    {location.region}
                  </p>
                  <h2 className="text-2xl font-semibold text-primary mb-3">
                    {location.name}
                  </h2>
                  <p className="text-secondary mb-4">{location.description}</p>
                  <ul className="space-y-2 text-sm text-secondary">
                    {location.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href={`/locations-we-serve/${location.pageSlug}`}>
                    <Button className="w-full" size="lg">
                      View {location.name}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
