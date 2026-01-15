import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { buildPageMetadata, getLocationJsonLd } from "@/lib/metadata";
import { getLocationById, getOtherLocations } from "@/lib/locations-data";
import { notFound } from "next/navigation";

const LOCATION_ID = "napa-valley";
const PAGE_PATH = "/locations-we-serve/napa-valley-deck-builder-construction";

export async function generateMetadata() {
  const location = getLocationById(LOCATION_ID);

  if (!location) {
    notFound();
  }

  const cityName = location.name;
  const title = `Deck Builder in ${cityName} | Ogden Construction`;
  const description = location.seoDescription;

  return buildPageMetadata({
    title,
    description,
    path: PAGE_PATH,
  });
}

export default async function LocationPage() {
  const location = getLocationById(LOCATION_ID);

  if (!location) {
    notFound();
  }

  const cityName = location.name;
  const jsonLd = getLocationJsonLd({
    citySlug: LOCATION_ID,
    cityName,
    description: location.seoDescription,
    postalCode: location.postalCode,
    path: PAGE_PATH,
  });
  const otherLocations = getOtherLocations(LOCATION_ID);

  return (
    <div>
      <Script
        id={`location-jsonld-${LOCATION_ID}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            High-Quality Construction for
            <br />
            Homes & Businesses in{" "}
            <span className="text-gold-gradient">{cityName}</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
            {location.description}
          </p>
          <Link href="/contact">
            <Button
              className="px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
              size="lg"
            >
              Request a Free Quote
            </Button>
          </Link>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="rounded-lg overflow-hidden h-80 relative">
            <Image
              src="/og-image.jpg"
              alt={`Construction projects in ${cityName}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-primary border-b border-accent pb-2">
              Expert Construction Services in {cityName}
            </h2>
            {location.seoCopy.map((paragraph) => (
              <p key={paragraph} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-primary border-b border-accent inline-block mx-auto pb-2">
              Why {cityName} Homeowners Choose Ogden Construction
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {location.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {highlight}
                  </h3>
                  <p>
                    We help {cityName} residents turn ideas into reality — on
                    budget and built to last.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Local Details
              </h2>
              <p className="text-secondary mb-2">
                Service area: {cityName}, {location.region}
              </p>
              {location.postalCode ? (
                <p className="text-secondary">
                  Primary postal code: {location.postalCode}
                </p>
              ) : null}
            </div>
            <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                See More Locations
              </h2>
              <div className="flex flex-wrap gap-3">
                {otherLocations.map((locationItem) => (
                  <Link
                    key={locationItem.id}
                    href={`/locations-we-serve/${locationItem.pageSlug}`}
                    className="rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    {locationItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            Let’s Build Something Great in {cityName}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Ogden Construction for a personalized quote and see how we
            can bring your vision to life.
          </p>
          <Link href="/contact">
            <Button
              className="px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
              size="lg"
            >
              Schedule Your Consultation
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
