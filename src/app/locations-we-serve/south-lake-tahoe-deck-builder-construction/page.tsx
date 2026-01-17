import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { TestimonialCards } from "@/components/TestimonialCards";
import { locationTestimonials } from "@/lib/testimonials";
import {
  buildPageMetadata,
  getLocationJsonLd,
  getWebPageJsonLd,
} from "@/lib/metadata";
import { buildBreadcrumbJsonLd, buildCustomCrumbs } from "@/lib/breadcrumbs";
import { buildFaqJsonLd } from "@/lib/faq";
import { getLocationFaqItems } from "@/lib/locationFaq";
import { getLocationById, getOtherLocations } from "@/lib/locations-data";
import { notFound } from "next/navigation";

const LOCATION_ID = "tahoe";
const PAGE_PATH =
  "/locations-we-serve/south-lake-tahoe-deck-builder-construction";

export async function generateMetadata() {
  const location = getLocationById(LOCATION_ID);

  if (!location) {
    notFound();
  }

  const cityName = location.name;
  const title = `${cityName} Deck Builder | Composite, Redwood & Outdoor Construction | Ogden Construction`;
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
  const breadcrumbs = buildCustomCrumbs([
    { label: "Home", href: "/" },
    { label: "Locations We Serve", href: "/locations-we-serve" },
    { label: cityName },
  ]);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs, PAGE_PATH);
  const webPageTitle = `${cityName} Deck Builder | Composite, Redwood & Outdoor Construction | Ogden Construction`;
  const faqItems = getLocationFaqItems(LOCATION_ID);
  const faqJsonLd = buildFaqJsonLd(faqItems);
  const webPageJsonLd = getWebPageJsonLd({
    title: webPageTitle,
    description: location.seoDescription,
    path: PAGE_PATH,
  });

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
      <Script
        id={`location-breadcrumbs-jsonld-${LOCATION_ID}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id={`location-webpage-jsonld-${LOCATION_ID}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Script
        id={`location-faq-jsonld-${LOCATION_ID}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section with enhanced design */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-primary">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/og-image.jpg"
            alt={`Lake Tahoe deck builder – custom deck construction in ${cityName}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
        </div>

        {/* Subtle wood grain overlay */}
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
          ></div>
        </div>

        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
              <span className="block font-playfair">
                {cityName} Deck Builder
              </span>
              <span className="block font-playfair">
                Outdoor Construction & Custom Decks
              </span>
              <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-3 font-playfair italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:0_0_2px_black]">
                Lake Tahoe Area
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-2 font-light">
              Ogden Construction is a {cityName} deck builder serving the
              greater Lake Tahoe area, specializing in composite, Trex, and
              redwood decks built for mountain weather, snow load, and outdoor
              living. {location.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-6 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-base">
                  Request a Free Quote
                </Button>
              </Link>
              <Link href="tel:530-919-7408" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto px-8 py-6 bg-white text-primary hover:bg-white/95 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-base font-semibold"
                >
                  Call (530) 919-7408
                </Button>
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
                currentClassName="text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-stone-50 texture-wood relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
        <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl bg-white border-2 border-accent/20 p-10 md:p-12 shadow-xl opacity-0 animate-scale-in">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                Locations We Serve
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary tracking-tight">
                Trusted, Local Craftsmanship
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Licensed & insured (CA–1042758), locally owned, and trusted
                across Placerville, Tahoe, and the Sierra foothills. Our team is
                known for clear communication, clean job sites, and builds that
                last.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="group rounded-xl border-2 border-stone-200 bg-white p-6 text-center shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                  <p className="text-3xl font-playfair font-bold text-accent mb-2">
                    20+
                  </p>
                  <p className="text-sm font-semibold text-primary mb-1">
                    Years Experience
                  </p>
                  <p className="text-sm text-gray-600">
                    Hands-on craftsmanship
                  </p>
                </div>

                <div className="group rounded-xl border-2 border-stone-200 bg-white p-6 text-center shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                  <svg
                    className="w-10 h-10 text-accent mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-primary mb-1">
                    Local Crew
                  </p>
                  <p className="text-sm text-gray-600">Placerville based</p>
                </div>

                <div className="group rounded-xl border-2 border-stone-200 bg-white p-6 text-center shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                  <svg
                    className="w-10 h-10 text-accent mx-auto mb-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-sm font-semibold text-primary mb-1">
                    Verified Reviews
                  </p>
                  <p className="text-sm text-gray-600">Yelp & Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white texture-deck-boards relative overflow-hidden">
        {/* Decorative quote marks */}
        <div className="absolute top-12 left-12 text-9xl font-playfair text-accent/5 leading-none">
          "
        </div>
        <div className="absolute bottom-12 right-12 text-9xl font-playfair text-accent/5 leading-none rotate-180">
          "
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-primary tracking-tight">
              What Homeowners Say
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Recent feedback from clients across the region.
            </p>
          </div>

          <TestimonialCards items={locationTestimonials} />
        </div>
      </section>

      {/* Why Location Matters Section */}
      <section className="py-24 bg-stone-50 texture-wood-planks relative overflow-hidden">
        {/* Diagonal wood plank accents */}
        <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-stone-200 bg-white p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary tracking-tight">
                Why Building in {cityName} Is Different
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every location has unique site conditions, permitting needs, and
                material considerations. We plan for slope, sun exposure,
                drainage, and local codes to make sure your deck performs for
                the long haul.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                From snow loads in higher elevations to sun-baked summers in the
                valley, we recommend the right framing, fasteners, and decking
                materials for your property and budget.
              </p>

              {/* Feature highlights */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Local codes
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Climate-ready
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Site-specific
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Intro paragraphs */}
            <div className="mb-12 space-y-6 opacity-0 animate-fade-up">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our deck builds lead with durable materials, clean finishes, and
                clear timelines. We handle design coordination, permitting, and
                construction so you get a finished space that fits your
                lifestyle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Secondary services include home additions, pergolas, dry rot
                repair, and exterior remodels—always with decks as the priority.
              </p>
            </div>

            {/* Main services heading */}
            <div className="mb-12 opacity-0 animate-fade-up stagger-1">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-primary tracking-tight">
                {cityName} Deck Builder & Outdoor Construction Services
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
            </div>

            {/* SEO copy */}
            <div className="prose prose-lg max-w-none opacity-0 animate-fade-up stagger-2">
              <p className="mb-6 text-gray-700 leading-relaxed">
                As a dedicated Lake Tahoe deck builder, we design and build
                decks that handle heavy snow, freeze–thaw cycles, and intense
                alpine sun. From engineered framing to composite decking and
                railings, every detail is chosen for the way Tahoe homes
                actually live and weather.
              </p>
              {location.seoCopy.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border-2 border-accent/20 bg-white p-10 md:p-12 shadow-xl">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary tracking-tight">
                Deck Pricing Expectations with a Local Lake Tahoe Deck Builder
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Every project is different, but most builds fall within the
                ranges below depending on size, materials, access, and
                complexity.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Entry tier */}
                <div className="group rounded-xl border-2 border-stone-200 bg-stone-50 p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all duration-500 opacity-0 animate-scale-in">
                  <p className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-4">
                    Entry
                  </p>
                  <p className="text-4xl font-playfair font-bold text-primary mb-4">
                    $8k–$15k
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Simple layouts, standard materials
                  </p>
                </div>

                {/* Mid-range tier - highlighted */}
                <div className="group rounded-xl border-2 border-accent bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden opacity-0 animate-scale-in stagger-1">
                  {/* Popular badge */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      Most Popular
                    </span>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-4 mt-6">
                    Mid-Range
                  </p>
                  <p className="text-4xl font-playfair font-bold text-accent mb-4">
                    $15k–$35k
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    Most custom deck builds
                  </p>
                </div>

                {/* Premium tier */}
                <div className="group rounded-xl border-2 border-stone-200 bg-stone-50 p-8 text-center hover:shadow-xl hover:border-accent/30 transition-all duration-500 opacity-0 animate-scale-in stagger-2">
                  <p className="text-sm font-bold uppercase tracking-wide text-gray-600 mb-4">
                    Premium
                  </p>
                  <p className="text-4xl font-playfair font-bold text-primary mb-4">
                    $35k–$80k+
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Large or complex installations
                  </p>
                </div>
              </div>

              {/* CTA below pricing */}
              <div className="mt-10 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02] group"
                >
                  Get Your Custom Quote
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary tracking-tight">
                Why {cityName} Homeowners Choose Ogden Construction as their
                Deck Builder
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>

            {/* Highlights grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {location.highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className={`group bg-white border-2 border-stone-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-up stagger-${Math.min(index + 1, 6)} relative overflow-hidden`}
                >
                  {/* Decorative accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                  {/* Icon */}
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                    {highlight}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We help {cityName} residents turn ideas into reality — on
                    budget and built to last.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="py-24 bg-stone-50 texture-deck-boards relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border-2 border-stone-200 bg-white p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary tracking-tight">
                Recent Deck Projects Near {cityName}
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Browse our latest builds for composite, Trex, and redwood decks.
                We highlight project scope, materials, and finishes so you can
                plan with confidence.
              </p>

              {/* CTA Links */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  View Portfolio
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02]"
                >
                  Request a Quote
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={faqItems}
        heading={`${cityName} Deck & Construction FAQ`}
        description={`Answers to common questions about deck building and outdoor construction in ${cityName}.`}
      />

      {/* Location Details & Other Locations */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {/* Local Details */}
            <div className="group rounded-xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="text-2xl font-playfair font-bold text-primary">
                  Local Details
                </h2>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="font-semibold text-primary">
                    Service area:
                  </span>
                  <span>
                    {cityName}, {location.region}
                  </span>
                </p>
                {location.postalCode ? (
                  <p className="text-gray-700 flex items-start gap-2">
                    <span className="font-semibold text-primary">
                      Primary postal code:
                    </span>
                    <span>{location.postalCode}</span>
                  </p>
                ) : null}
              </div>
            </div>

            {/* Other Locations */}
            <div className="group rounded-xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <h2 className="text-2xl font-playfair font-bold text-primary">
                  See More Locations
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {otherLocations.map((locationItem) => (
                  <Link
                    key={locationItem.id}
                    href={`/locations-we-serve/${locationItem.pageSlug}`}
                    className="group/badge inline-flex items-center gap-2 rounded-lg border-2 border-stone-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:text-accent hover:shadow-md"
                  >
                    <svg
                      className="w-4 h-4 text-accent/60 group-hover/badge:text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {locationItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-stone-50 texture-wood diagonal-divider-reverse relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-primary tracking-tight">
              Let's Build Something Great in {cityName}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Contact Ogden Construction for a personalized quote and see how we
              can bring your vision to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-10 py-6 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-base">
                  Schedule Your Consultation
                </Button>
              </Link>
              <Link href="tel:530-919-7408" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg text-base font-semibold"
                >
                  Call (530) 919-7408
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/60 backdrop-blur-sm border border-accent/20 px-5 py-3 shadow-sm">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-gray-700">
                  5-Star Reviews
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/60 backdrop-blur-sm border border-accent/20 px-5 py-3 shadow-sm">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="font-medium text-gray-700">
                  Licensed & Insured
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/60 backdrop-blur-sm border border-accent/20 px-5 py-3 shadow-sm">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium text-gray-700">
                  Local to {cityName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
