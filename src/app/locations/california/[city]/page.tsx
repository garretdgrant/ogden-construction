import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

const formatCityName = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

type Props = {
  params: Promise<{ city: string }>;
};

// ✅ Static Params
export async function generateStaticParams(): Promise<{ city: string }[]> {
  return [
    "placerville",
    "el-dorado-hills",
    "folsom",
    "auburn",
    "tahoe",
    "napa-valley",
    "sacramento",
  ].map((city) => ({ city }));
}

// ✅ Dynamic Metadata for Ogden Construction
export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  const baseUrl = "https://www.ogden-construction.com";
  const pageUrl = `${baseUrl}/locations/california/${city}`;
  const title = `Deck Builder in ${cityName} | Ogden Construction`;
  const description = `Ogden Construction builds high-quality custom decks, additions, and home structures in ${cityName}. Get expert craftsmanship and honest pricing.`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Ogden Construction",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Deck Builder in ${cityName}`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": pageUrl,
        name: `Deck Builder in ${cityName} | Ogden Construction`,
        url: pageUrl,
        description: `Ogden Construction specializes in deck building and home additions for residents of ${cityName}, CA. Trusted local craftsmanship with clear pricing.`,
        hasMap: `https://www.google.com/maps/search/${encodeURIComponent(cityName + ", CA")}`,
        about: {
          "@type": "Thing",
          name: `${cityName} Deck Builder`,
          description: `Custom-built decks and home improvements in ${cityName}, California.`,
        },
        mainEntityOfPage: {
          "@type": "LocalBusiness",
          "@id": "https://www.ogden-construction.com/#localbusiness",
        },
      }),
    },
  };
}

// ✅ Page Component
export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);

  return (
    <div>
      <div className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            High-Quality Construction for
            <br />
            Homes & Businesses in{" "}
            <span className="text-gold-gradient">{cityName}</span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
            Ogden Construction builds custom decks, additions, and new
            structures for {cityName} homeowners with quality you can trust.
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
            <p className="mb-4">
              Searching for reliable <strong>contractors in {cityName}</strong>?
              Ogden Construction specializes in decks, remodels, and additions
              for residential clients across the area.
            </p>
            <p className="mb-4">
              As a trusted name in <strong>{cityName} construction</strong>, we
              take pride in honest work, clear communication, and durable
              results.
            </p>
            <p className="mb-8">
              Whether it’s a new deck or a full rebuild, we bring experience,
              integrity, and craftsmanship to every project.
            </p>
          </div>
        </section>

        <section className="bg-secondary/30 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-primary border-b border-accent inline-block mx-auto pb-2">
              Why {cityName} Homeowners Choose Ogden Construction
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Trex-Certified Builders",
                "Licensed & Insured",
                "Custom Deck & Home Additions",
                "Trusted Local Crew",
                "Clear Timelines & Estimates",
                "High-Quality Workmanship",
              ].map((title, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {title}
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
