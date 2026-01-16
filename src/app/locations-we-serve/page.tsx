import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/locations/location-index-hero.webp"
              alt="Custom deck construction across Northern California"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 z-0" />
          <div className="absolute inset-0 z-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    rgba(139, 69, 19, 0.05) 0px,
                    transparent 1px,
                    transparent 3px,
                    rgba(139, 69, 19, 0.08) 4px,
                    transparent 5px,
                    transparent 12px
                  )
                `,
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-16 left-10 w-1 h-32 bg-accent/10 rotate-12 blur-sm z-0" />
          <div className="absolute bottom-28 left-24 w-1 h-24 bg-accent/15 -rotate-6 blur-sm z-0" />

          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4 opacity-0 animate-fade-up">
                Locations We Serve
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                {PAGE_TITLE}
                <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-3 font-playfair italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:0_0_2px_black]">
                  Decks, Additions, and Remodels
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl leading-relaxed opacity-0 animate-fade-up stagger-2 font-light">
                We build custom outdoor and interior projects for homeowners in
                the Sierra foothills, Tahoe, and surrounding communities. Select
                a city to see local insights and project details.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-10 opacity-0 animate-fade-up stagger-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-10 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  View Recent Projects
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute top-6 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <div className="inline-flex rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 opacity-0 animate-fade-up">
                <Breadcrumbs
                  items={breadcrumbs}
                  className="text-white/80"
                  linkClassName="hover:text-white"
                  currentClassName="text-white font-semibold"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                Local Coverage, Hands-On Builds
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Each city page includes local service details, project
                highlights, and tailored FAQs so you know what to expect.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {LOCATIONS.map((location, index) => (
                <div
                  key={location.id}
                  className={`group h-full rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                      {location.region}
                    </p>
                    <h2 className="text-2xl font-semibold text-primary mb-3">
                      {location.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{location.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {location.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/locations-we-serve/${location.pageSlug}`}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      View {location.name}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for a Local Estimate?
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
                Tell us where you&apos;re located and what you&apos;d like to
                build. We&apos;ll follow up with clear next steps and a tailored
                project plan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-base font-semibold text-primary shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 hover:scale-[1.02]"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-10 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
