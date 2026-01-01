import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Script from "next/script";
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
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-600">
              Explore our recent work across Placerville, Tahoe, Folsom, and
              surrounding areas. From custom decks to full-scale home builds,
              every project showcases our craftsmanship, integrity, and
              commitment to quality.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-primary">
                    {project.title}
                  </h2>
                  <p className="text-accent font-medium mt-1">
                    {project.location}
                  </p>
                  <p className="mt-4 text-gray-600">{project.description}</p>

                  <div className="mt-6">
                    <h3 className="font-semibold text-primary">
                      Project Highlights:
                    </h3>
                    <ul className="mt-2 grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card className="mt-8 bg-stone-50 border-none">
                    <CardContent className="pt-6">
                      <div className="flex space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <p className="italic text-gray-600">
                        &quot;{project.testimonial}&quot;
                      </p>
                      <p className="mt-3 font-medium text-primary">
                        {project.clientName}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Let&apos;s bring your vision to life. Contact us for a free
              consultation and get expert input on your deck, remodel, or home
              addition.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
