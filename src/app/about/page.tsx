import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const aboutStats = [
  { icon: Building, count: "250+", label: "Projects Completed" },
  { icon: CalendarDays, count: "20+", label: "Years Experience" },
  { icon: Users, count: "175+", label: "Happy Clients" },
  { icon: Star, count: "4.9", label: "Average Rating" },
];
import { Metadata } from "next";

// app/about/metadata.ts (or in the same file if you're using file-based routes in App Router)
export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "About Ogden Construction | Placerville Deck Builders & Home Contractors",
    description:
      "Learn about Ogden Construction, a trusted Placerville-based deck builder and general contractor. We’ve been crafting custom decks, home additions, and remodels throughout El Dorado County since 2008.",
    alternates: {
      canonical: "https://www.ogden-construction.com/about",
    },
    openGraph: {
      title:
        "Meet Ogden Construction | Trusted Deck Builders in Placerville, CA",
      description:
        "With over 20 years of experience, Ogden Construction builds beautiful decks and homes across Placerville, El Dorado Hills, Folsom, and surrounding areas. Learn more about our story.",
      url: "https://www.ogden-construction.com/about",
      siteName: "Ogden Construction",
      type: "website",
      images: ["/images/about/ogdenTruck.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "About Ogden Construction | Placerville Deck Builders & Contractors",
      description:
        "Get to know Ogden Construction, your local Placerville deck builder and home contractor. Over 250 projects completed since 2008.",
      images: [
        "https://www.ogden-construction.com/images/about/ogdenTruck.jpg",
      ],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://www.ogden-construction.com/about",
        name: "About Ogden Construction",
        url: "https://www.ogden-construction.com/about",
        mainEntity: {
          "@type": "LocalBusiness",
          "@id": "https://www.ogden-construction.com/#localbusiness",
          name: "Ogden Construction",
          url: "https://www.ogden-construction.com",
          email: "info@ogden-construction.com",
          telephone: "+1-530-919-7408",
          serviceType: [
            "Deck Building",
            "Home Additions",
            "General Contracting",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-530-919-7408",
            contactType: "Customer Support",
            areaServed: ["US"],
            availableLanguage: ["English"],
          },
          hasMap: "https://www.google.com/maps/place/Placerville,+CA",
          founder: {
            "@type": "Person",
            name: "Levi Ogden",
            url: "https://www.ogden-construction.com/about",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Placerville",
            addressRegion: "CA",
            postalCode: "95667",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "Place", name: "Placerville" },
            { "@type": "Place", name: "El Dorado Hills" },
            { "@type": "Place", name: "Folsom" },
            { "@type": "Place", name: "Cameron Park" },
            { "@type": "Place", name: "South Lake Tahoe" },
            { "@type": "Place", name: "Pollock Pines" },
            { "@type": "Place", name: "Sacramento" },
            { "@type": "Place", name: "Camino" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          description:
            "Ogden Construction is a licensed and insured contractor based in Placerville, CA. We specialize in custom decks, remodels, and new home construction throughout El Dorado County and the surrounding areas.",
          sameAs: [
            "https://www.facebook.com/ogden.construction.inc/",
            "https://www.instagram.com/levioakden77",
            "https://www.yelp.com/biz/ogden-construction-placerville-2",
          ],
          image:
            "https://www.ogden-construction.com/images/about/ogdenTruck.jpg",
          priceRange: "$$",
        },
      }),
    },
  };
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            About Ogden Construction
          </h1>
          <p className="text-lg text-gray-600">
            Crafting custom decks and building trusted relationships in
            Placerville and El Dorado County since 2008
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Ogden Construction Inc. was built on a foundation of
              craftsmanship, integrity, and community commitment. Founded by
              Levi Ogden in 2008, the company began with a simple goal: to
              provide dependable construction and deck building services that
              homeowners in Placerville and nearby towns could trust.
            </p>
            <p className="text-gray-600 mb-4">
              From humble beginnings, Ogden Construction has grown into one of
              the most respected names in El Dorado and Sacramento counties. Our
              portfolio includes custom decks, home additions, guest houses, and
              full new home construction, our team brings decades of hands-on
              experience to every job site.
            </p>
            <p className="text-gray-600 mb-4">
              We don&apos;t believe in cutting corners or rushing work. Every
              project we take on—whether it&apos;s a custom Trex deck in Tahoe
              or a full home build in Grizzly Flats—is treated with the same
              care, attention to detail, and pride in workmanship.
            </p>
            <p className="text-gray-600">
              While trends and tools have changed, our values haven&apos;t. We
              remain a small, dedicated team with a strong local reputation and
              a passion for helping homeowners bring their vision to life—one
              nail, beam, and board at a time.{" "}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about/ogdenTruck.jpg"
              alt="Ogden Construction team"
              width={1024}
              height={592}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {aboutStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-none shadow-lg bg-stone-50"
            >
              <CardContent className="pt-6">
                <stat.icon className="h-10 w-10 mx-auto text-accent mb-3" />
                <h3 className="text-3xl font-bold text-primary">
                  {stat.count}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Meet Our Founder
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about/levi.jpg"
                  alt="Ogden Construction team"
                  width={956}
                  height={960}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-primary">Levi Ogden</h3>
              <p className="text-accent font-medium">
                Owner & General Contractor
              </p>
              <p className="mt-4 text-gray-600">
                Levi Ogden leads Ogden Construction Inc. with a passion for
                craftsmanship and a deep-rooted commitment to the community he
                calls home. A lifelong resident of Placerville, Levi has built a
                reputation for integrity, reliability, and delivering results
                that speak for themselves.
              </p>
              <p className="mt-4 text-gray-600">
                With hands-on experience across every aspect of residential
                construction—from custom decks to full-scale home additions—Levi
                ensures each project is completed with precision and care. His
                leadership style is grounded in transparency, strong
                communication, and building trust with every homeowner.
              </p>
              <p className="mt-4 text-gray-600">
                Clients appreciate Levi&apos;s honest approach, responsiveness,
                and dedication to doing things the right way the first time.
                Whether he&apos;s on-site with his crew or working directly with
                a homeowner to fine-tune the details, Levi remains personally
                involved in every job to guarantee exceptional results.
              </p>
              <p className="mt-4 text-gray-600">
                When he&apos;s not building homes, Levi enjoys giving back to
                the community and exploring the outdoors throughout El Dorado
                County and the Sierra foothills.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed contractor (CA–1042758) with complete insurance
                  and bonding for peace of mind on every project.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  Deeply familiar with the building codes, terrain, and needs of
                  homeowners in El Dorado and Sacramento counties.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Quality Craftsmanship
                </h3>
                <p className="text-gray-600">
                  Custom decks, home additions, and remodeling projects
                  completed with precision, pride, and materials built to last.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CircleCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg text-primary">
                  Community Involvement
                </h3>
                <p className="text-gray-600">
                  Locally owned and operated—supporting youth sports and giving
                  back to the communities we help build.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90">
                  Get a Free Consultation{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
