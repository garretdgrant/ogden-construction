import {
  Home,
  Bath,
  LayoutList,
  Construction,
  Image as ImageIcon,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Our Services | Custom Decks, Remodels & Home Additions | Ogden Construction",
    description:
      "Explore our expert construction services in Placerville, El Dorado Hills, Tahoe, and beyond. We specialize in custom deck building, home remodeling, and additions.",
    alternates: {
      canonical: "https://www.ogden-construction.com/services",
    },
    openGraph: {
      title: "Construction Services in Placerville | Ogden Construction Inc",
      description:
        "View our full range of services including decks, home additions, and remodeling projects across El Dorado County and surrounding areas.",
      url: "https://www.ogden-construction.com/services",
      siteName: "Ogden Construction",
      type: "website",
      images: ["/images/about/ogdenTruck.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Custom Decks & Remodel Services | Ogden Construction in Placerville, CA",
      description:
        "Get expert construction help from Ogden Construction. Serving Placerville, Folsom, El Dorado Hills, and Tahoe with top-rated craftsmanship.",
      images: [
        "https://www.ogden-construction.com/images/about/ogdenTruck.jpg",
      ],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.ogden-construction.com/#services",
        name: "Ogden Construction Services",
        url: "https://www.ogden-construction.com/services",
        mainEntityOfPage: {
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
            { "@type": "Place", name: "South Lake Tahoe" },
            { "@type": "Place", name: "El Dorado Hills" },
            { "@type": "Place", name: "Folsom" },
            { "@type": "Place", name: "Sacramento" },
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Construction Services Offered by Ogden Construction",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Deck Building",
                description:
                  "Custom wood and composite decks built to match your home and lifestyle. Servicing Placerville, Tahoe, Folsom, and surrounding areas.",
                areaServed: [
                  { "@type": "Place", name: "Placerville" },
                  { "@type": "Place", name: "South Lake Tahoe" },
                  { "@type": "Place", name: "El Dorado Hills" },
                  { "@type": "Place", name: "Folsom" },
                  { "@type": "Place", name: "Sacramento" },
                ],
                provider: {
                  "@type": "LocalBusiness",
                  name: "Ogden Construction",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Home Additions",
                description:
                  "Expand your home with seamless, code-compliant additions—crafted for long-term comfort and value.",
                areaServed: [
                  { "@type": "Place", name: "Placerville" },
                  { "@type": "Place", name: "South Lake Tahoe" },
                  { "@type": "Place", name: "El Dorado Hills" },
                  { "@type": "Place", name: "Folsom" },
                  { "@type": "Place", name: "Sacramento" },
                ],
                provider: {
                  "@type": "LocalBusiness",
                  name: "Ogden Construction",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Remodeling Services",
                description:
                  "Interior and exterior remodeling for kitchens, bathrooms, and entire homes with premium craftsmanship.",
                areaServed: [
                  { "@type": "Place", name: "Placerville" },
                  { "@type": "Place", name: "South Lake Tahoe" },
                  { "@type": "Place", name: "El Dorado Hills" },
                  { "@type": "Place", name: "Folsom" },
                  { "@type": "Place", name: "Sacramento" },
                ],
                provider: {
                  "@type": "LocalBusiness",
                  name: "Ogden Construction",
                },
              },
            },
          ],
        },
      }),
    },
  };
}

const servicesData = [
  {
    icon: LayoutList,
    title: "Room Additions",
    description:
      "Add extra living space with thoughtfully designed room additions that boost comfort, functionality, and home value.",
    priceRange: "$80,000 - $150,000+",
    faqs: [
      {
        question: "How much does a room addition cost per square foot?",
        answer:
          "In California, room additions typically cost between $300 to $600 per square foot, depending on factors like materials and design complexity.",
      },
      {
        question: "Do I need a permit for a room addition?",
        answer:
          "Yes, most cities require permits for room additions to ensure compliance with building codes. It's advisable to consult with your contractor about local regulations.",
      },
    ],
  },
  {
    icon: Bath,
    title: "Guest House & ADU Construction",
    description:
      "Build custom guest homes or ADUs designed for rental income, multigenerational living, or added convenience.",
    priceRange: "$100,000 - $400,000+",
    faqs: [
      {
        question: "What is the average cost of building an ADU in California?",
        answer:
          "The cost varies widely based on size and features but generally ranges from $100,000 to $400,000 or more.",
      },
      {
        question: "Are there specific regulations for building an ADU?",
        answer:
          "Yes, California has statewide standards for ADUs, but local jurisdictions may have additional requirements. It's important to check with local authorities.",
      },
    ],
  },
  {
    icon: Home,
    title: "New Construction Builds",
    description:
      "From blueprints to completion, we construct personalized homes and structures that reflect your lifestyle and long-term goals.",
    priceRange: "$300 - $500 per square foot",
    faqs: [
      {
        question:
          "What is the average cost per square foot to build a new home in Sacramento?",
        answer:
          "The average cost ranges from $300 to $500 per square foot, influenced by factors like location, size, and design choices.",
      },
      {
        question: "How long does it take to build a new home?",
        answer:
          "Typically, new home construction takes 6-12 months, depending on the project's complexity and other factors.",
      },
    ],
  },
  {
    icon: Construction,
    title: "Remodeling Services",
    description:
      "Reimagine your space with custom remodeling solutions that blend aesthetics, practicality, and craftsmanship.",
    priceRange: "Varies based on project scope",
    faqs: [
      {
        question: "How much does a typical home remodeling project cost?",
        answer:
          "Costs vary widely depending on the project's scope, materials, and other factors. It's best to obtain a detailed estimate from your contractor.",
      },
      {
        question: "Do I need to move out during the remodeling process?",
        answer:
          "It depends on the extent of the remodel. For major renovations, temporary relocation might be advisable to ensure safety and convenience.",
      },
    ],
  },
  {
    icon: ImageIcon,
    title: "Custom Deck Design & Build",
    description:
      "Create durable, weather-resistant outdoor living spaces with custom deck construction using Trex and premium materials.",
    priceRange: "$15,000 - $50,000+",
    faqs: [
      {
        question: "What is the average cost of building a deck in California?",
        answer:
          "The cost typically ranges from $15,000 to $50,000 or more, depending on size, materials, and design features.",
      },
      {
        question: "How long does deck construction usually take?",
        answer:
          "Most deck projects are completed within 1-3 weeks, depending on complexity and weather conditions.",
      },
    ],
  },
  {
    icon: Wrench,
    title: "General Contracting",
    description:
      "Comprehensive project management and construction services handled by licensed contractors with strong local expertise.",
    priceRange: "Varies based on project",
    faqs: [
      {
        question: "What services does a general contractor provide?",
        answer:
          "General contractors oversee all aspects of a construction project, including hiring subcontractors, sourcing materials, and ensuring compliance with building codes.",
      },
      {
        question: "How do I choose the right general contractor?",
        answer:
          "Look for licensed and insured contractors with experience in projects similar to yours. Checking references and past work is also recommended.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            From{" "}
            <Link href="/portfolio" className="text-accent hover:underline">
              custom decks
            </Link>{" "}
            to full home builds, Ogden Construction delivers trusted
            craftsmanship across{" "}
            <Link href="/contact" className="text-accent hover:underline">
              El Dorado County
            </Link>
            —with a focus on quality, reliability, and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {service.title === "Deck Construction & Design" ? (
                    <>
                      Craft beautiful, durable outdoor living spaces with expert
                      deck design and{" "}
                      <Link
                        href="/portfolio"
                        className="text-accent hover:underline"
                      >
                        Trex-certified building
                      </Link>
                      .
                    </>
                  ) : (
                    service.description
                  )}
                </p>
                <p className="text-sm font-semibold text-primary">
                  Price Range:{" "}
                  <span className="text-accent">{service.priceRange}</span>
                </p>

                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value={`faq-${index}`}>
                    <AccordionTrigger className="text-sm font-medium">
                      Common Questions
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {service.faqs.map((faq, faqIndex) => (
                          <div key={faqIndex}>
                            <h4 className="font-medium text-sm">
                              {faq.question}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-stone-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Our Service Process
          </h2>
          <h3 className="sr-only">How Our Construction Process Works</h3>
          <ol className="space-y-6">
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold text-lg">Initial Consultation</h3>
                <p className="text-gray-600">
                  We&apos;ll discuss your project goals, budget, and timeline to
                  understand your vision.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                2
              </span>
              <div>
                <h3 className="font-semibold text-lg">Design & Planning</h3>
                <p className="text-gray-600">
                  Our team will create detailed plans and provide a
                  comprehensive proposal.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                3
              </span>
              <div>
                <h3 className="font-semibold text-lg">Project Execution</h3>
                <p className="text-gray-600">
                  Our skilled craftsmen will bring your project to life with
                  quality workmanship.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                4
              </span>
              <div>
                <h3 className="font-semibold text-lg">Final Walkthrough</h3>
                <p className="text-gray-600">
                  We&apos;ll ensure everything meets our high standards and your
                  complete satisfaction.
                </p>
              </div>
            </li>
          </ol>
          <div className="mt-4">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
