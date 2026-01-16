import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleCheck,
  Building,
  CalendarDays,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { buildPageMetadata, getAboutJsonLd } from "@/lib/metadata";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

const aboutStats = [
  { icon: Building, count: "250+", label: "Projects Completed" },
  { icon: CalendarDays, count: "20+", label: "Years Experience" },
  { icon: Users, count: "175+", label: "Happy Clients" },
  { icon: Star, count: "4.9", label: "Average Rating" },
];

const aboutValues = [
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed contractor (CA–1042758) with complete insurance and bonding for peace of mind on every project.",
  },
  {
    title: "Local Expertise",
    description:
      "Deeply familiar with the building codes, terrain, and needs of homeowners in El Dorado and Sacramento counties.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Custom decks, home additions, and remodeling projects completed with precision, pride, and materials built to last.",
  },
  {
    title: "Community Involvement",
    description:
      "Locally owned and operated—supporting youth sports and giving back to the communities we help build.",
  },
];

export async function generateMetadata() {
  return buildPageMetadata({
    title:
      "About Ogden Construction | Placerville Deck Builders & Home Contractors",
    description:
      "Learn about Ogden Construction, a trusted Placerville-based deck builder and general contractor. We’ve been crafting custom decks, home additions, and remodels throughout El Dorado County since 2008.",
    path: "/about",
    imagePath: "/images/about/ogdenTruck.jpg",
  });
}

export default function AboutPage() {
  const jsonLd = getAboutJsonLd();
  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about/about-hero.webp"
              alt="Ogden Construction work truck"
              width={1920}
              height={1080}
              priority
              sizes="100vw"
              className="w-full h-[110vh] object-cover scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 z-0" />
          <div className="absolute inset-0 z-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, rgba(139, 69, 19, 0.05) 0px, transparent 1px, transparent 3px, rgba(139, 69, 19, 0.08) 4px, transparent 5px, transparent 12px)`,
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-12 left-10 w-1 h-32 bg-accent/10 rotate-12 blur-sm z-0" />

          <div className="container relative z-10 mx-auto px-4 py-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70 mb-4 opacity-0 animate-fade-up">
                About Ogden Construction
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                Built on Craftsmanship, Trust, and Local Pride
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
                Serving Placerville, South Lake Tahoe, and the greater El Dorado
                region since 2008 with custom decks, additions, and remodels
                designed for mountain life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/70 px-10 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  View Recent Builds
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
                Our Story
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Built on craftsmanship, integrity, and community commitment —
                Ogden Construction delivers dependable work for homeowners
                across Placerville, Tahoe, and the Sierra foothills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Ogden Construction Inc. was founded by Levi Ogden in 2008 with
                  a simple goal: deliver dependable deck and construction
                  services that homeowners could trust. What began as a small,
                  hands-on operation has grown into one of the most respected
                  names in El Dorado and Sacramento counties.
                </p>
                <p>
                  From historic neighborhoods to mountain properties, our team
                  brings decades of experience to every job site. We manage
                  permitting, planning, and construction with clear
                  communication and a focus on long-term durability.
                </p>
                <p>
                  Whether it&apos;s a custom Trex deck in Tahoe or a full home
                  build in Grizzly Flats, we bring the same pride in
                  workmanship, respect for your property, and commitment to
                  doing it right the first time.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-white">
                <Image
                  src="/images/about/ogdenTruck.jpg"
                  alt="Ogden Construction team on site"
                  width={1024}
                  height={592}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white texture-deck-boards relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                By the Numbers
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A track record built on consistent quality, clear communication,
                and lasting results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {aboutStats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className={`group h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 relative overflow-hidden opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <CardContent className="pt-8 text-center">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
                      <stat.icon className="h-10 w-10 mx-auto text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {stat.count}
                    </h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                Meet Our Founder
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-white">
                  <Image
                    src="/images/about/levi-deck.webp"
                    alt="Levi Ogden, owner and general contractor"
                    width={956}
                    height={960}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:col-span-3 text-gray-700 leading-relaxed text-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  Levi Ogden
                </h3>
                <p className="text-accent font-medium">
                  Owner & General Contractor
                </p>
                <p className="mt-6">
                  Levi Ogden leads Ogden Construction Inc. with a passion for
                  craftsmanship and a deep-rooted commitment to the community he
                  calls home. A lifelong resident of Placerville, Levi has built
                  a reputation for integrity, reliability, and delivering
                  results that speak for themselves.
                </p>
                <p className="mt-4">
                  With hands-on experience across every aspect of residential
                  construction—from custom decks to full-scale home
                  additions—Levi ensures each project is completed with
                  precision and care. His leadership style is grounded in
                  transparency, strong communication, and building trust with
                  every homeowner.
                </p>
                <p className="mt-4">
                  Clients appreciate Levi&apos;s honest approach,
                  responsiveness, and dedication to doing things the right way
                  the first time. Whether he&apos;s on-site with his crew or
                  working directly with a homeowner to fine-tune the details,
                  Levi remains personally involved in every job to guarantee
                  exceptional results.
                </p>
                <p className="mt-4">
                  When he&apos;s not building homes, Levi enjoys giving back to
                  the community and exploring the outdoors throughout El Dorado
                  County and the Sierra foothills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-40 right-10 opacity-5">
            <div className="w-32 h-2 bg-accent"></div>
            <div className="w-2 h-32 bg-accent"></div>
          </div>
          <div className="absolute bottom-40 left-10 opacity-5 rotate-180">
            <div className="w-24 h-1.5 bg-primary"></div>
            <div className="w-1.5 h-24 bg-primary"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A team that treats your home like their own—focused on
                craftsmanship, communication, and lasting value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {aboutValues.map((value, index) => (
                <Card
                  key={value.title}
                  className={`group h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white relative overflow-hidden opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <CardHeader className="pb-4">
                    <div className="mb-5 relative">
                      <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
                      <CircleCheck className="h-12 w-12 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-playfair tracking-tight group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {value.description}
                    </p>
                    <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        <Reviews />
        <Contact />
      </main>
    </>
  );
}
