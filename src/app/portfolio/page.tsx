import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Script from "next/script";
import { ScrollToContactButton } from "@/components/ScrollToContactButton";
import { Contact } from "@/components/Contact";
import { buildPageMetadata, getPortfolioJsonLd } from "@/lib/metadata";

export async function generateMetadata() {
  return buildPageMetadata({
    title: "Our Work | Custom Decks, Remodels & More | Ogden Construction",
    description:
      "Explore completed construction projects including custom decks, home additions, and full builds across El Dorado County, Folsom, Tahoe, and beyond.",
    path: "/portfolio",
  });
}

const projects = [
  {
    title: "Redwood Deck Replacement",
    location: "South Lake Tahoe, CA",
    description:
      "Removed and replaced an aging deck with durable, high-grade redwood. This custom deck build in South Lake Tahoe was completed on time with open communication from start to finish.",
    image: "/images/portfolio/redwood-deck.webp",
    highlights: [
      "Redwood deck installation",
      "Full demolition and rebuild",
      "Excellent communication",
      "Timely completion",
    ],
    testimonial:
      "Levi Ogden was a fantastic find on Yelp. He came out the next day for a quote and was on time, polite, and communicative throughout. I've managed other construction jobs—he was among the easiest to work with. The redwood deck he built was fantastic.",
    clientName: "Joe S.",
  },
  {
    title: "Twin Bridges Cabin Improvements",
    location: "Twin Bridges, CA",
    description:
      "Deck rebuild and driveway leveling for a mountain cabin with improved winter accessibility and structural upgrades.",
    image: "/images/portfolio/twin-bridges-cabin.webp",
    highlights: [
      "Deck rebuild",
      "Driveway leveling",
      "Retaining wall extension",
      "Improved winter access",
    ],
    testimonial:
      "Ogden Construction rebuilt our cabin deck and later leveled our steep driveway by extending the retaining wall and compacting with road grind. Levi was great with communication and timely execution. Job well done!",
    clientName: "Bao N.",
  },
  {
    title: "Full Home Rebuild & Deck Construction",
    location: "Grizzly Flats, CA",
    description:
      "Ground-up rebuild of a custom home after the Caldor Fire, including permitting, inspections, and construction of a new deck. This long-term project reflects our deep local roots and hands-on dedication.",
    image: "/images/portfolio/guestHouse.webp",
    highlights: [
      "Ground-up home rebuild",
      "Project management & inspections",
      "Custom design consultation",
      "Deck construction included",
    ],
    testimonial:
      "After the Caldor Fire destroyed our home, we were fortunate to find Levi Ogden and his local crew. As owner-builders with just enough construction knowledge to be dangerous, we needed a seasoned pro—and Levi was the glue that held everything together. He helped manage subcontractors, county inspections, and kept communication clear throughout. Over 18 months, he supported us through design, planning, and construction. It’s rare to find a LOCAL builder with such pride and integrity. Oh yeah, and they did our deck too :)",
    clientName: "Jeremy S.",
  },
  {
    title: "Trex Deck & Retaining Wall Build",
    location: "Rescue, CA",
    description:
      "Replaced a deteriorating front porch with weather-resistant Trex composite decking and reinforced joists. Built an interlocking block retaining wall with French drain—completed quickly despite heavy storms.",
    image: "/images/portfolio/curtisRetainingWall.webp",
    highlights: [
      "Trex composite decking",
      "Reinforced joist structure",
      "Retaining wall with drainage",
      "Fast turnaround despite weather",
    ],
    testimonial:
      "I can't say enough good about Levi and his merry band of workers with Ogden Construction. They came out the day I called and sized up two big jobs: replacing a rotting front porch and rebuilding a backyard retaining wall. They started work the very next day—in horrendous weather! Tore out the old deck, added joists, and laid down beautiful Trex—tight, level, and professionally done. Levi was a pleasure to work with. Great work at the right price. I highly recommend him. Think you can DIY it? After seeing his work, I knew I couldn’t come close.",
    clientName: "Curtis D.",
  },
  {
    title: "Fencing & 2nd Story Deck Project",
    location: "Placerville, CA",
    description:
      "Installed custom fencing with gates followed by a second-story deck and stairs. Modifications were handled seamlessly during construction.",
    image: "/images/portfolio/fence.webp",
    highlights: [
      "Custom fencing and gates",
      "Second-story deck",
      "Exterior staircase",
      "Responsive and professional crew",
    ],
    testimonial:
      "Ogden Construction installed fencing and a 2nd story deck with stairs for us. The crew was friendly, professional, and accommodated changes easily. We're very happy with the quality on both projects.",
    clientName: "Lisa S.",
  },
];

export default function PortfolioPage() {
  const jsonLd = getPortfolioJsonLd();
  return (
    <>
      <Script
        id="portfolio-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/portfolio/portfolio-hero.webp"
              alt="Custom deck construction portfolio hero"
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
                Portfolio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                Real Projects, Built to Last
                <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-3 font-playfair italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:0_0_2px_black]">
                  Decks, Additions, and Full Builds
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl leading-relaxed opacity-0 animate-fade-up stagger-2 font-light">
                Explore completed work across Placerville, Tahoe, Folsom, and
                beyond. Each project reflects hands-on craftsmanship, clear
                communication, and a commitment to long-term durability.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-10 opacity-0 animate-fade-up stagger-3">
                <Link
                  href="#portfolio-projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
                >
                  View Project Gallery
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <ScrollToContactButton className="text-base px-10 py-4 font-semibold" />
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-10 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio-projects"
          className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden"
        >
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                Featured Builds
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Each portfolio entry highlights the craftsmanship, materials,
                and client experience behind the build.
              </p>
            </div>

            <div className="space-y-20">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`rounded-3xl border-2 border-stone-200 bg-white/95 shadow-xl overflow-hidden opacity-0 animate-fade-up stagger-${Math.min(index + 1, 6)}`}
                >
                  <div
                    className={`flex flex-col lg:flex-row gap-10 p-8 lg:p-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="lg:w-1/2">
                      <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={900}
                          height={560}
                          className="w-full h-[320px] md:h-[380px] lg:h-[420px] object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                        {project.location}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="mt-6">
                        <h4 className="font-semibold text-primary mb-3">
                          Project Highlights
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Card className="mt-8 rounded-2xl border-2 border-accent/20 bg-white shadow-lg">
                        <CardContent className="pt-6">
                          <div className="flex space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-accent text-accent"
                              />
                            ))}
                          </div>
                          <p className="italic text-gray-600 leading-relaxed">
                            &quot;{project.testimonial}&quot;
                          </p>
                          <p className="mt-3 font-medium text-primary">
                            {project.clientName}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
                Let&apos;s bring your vision to life. Get expert input on your
                deck, remodel, or home addition and see how we can deliver the
                same level of craftsmanship shown in our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ScrollToContactButton className="text-base px-10 py-4 font-semibold" />
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

        <Contact />
      </main>
    </>
  );
}
