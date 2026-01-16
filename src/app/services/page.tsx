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
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { ScrollToContactButton } from "@/components/ScrollToContactButton";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceArea } from "@/components/ServiceArea";
import { Contact } from "@/components/Contact";
import { buildPageMetadata, getServicesJsonLd } from "@/lib/metadata";

export async function generateMetadata() {
  return buildPageMetadata({
    title:
      "Our Services | Custom Decks, Remodels & Home Additions | Ogden Construction",
    description:
      "Explore our expert construction services in Placerville, El Dorado Hills, Tahoe, and beyond. We specialize in custom deck building, home remodeling, and additions.",
    path: "/services",
    imagePath: "/images/about/ogdenTruck.jpg",
  });
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
  const jsonLd = getServicesJsonLd();
  return (
    <>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services/services-hero.webp"
              alt="Ogden Construction service crew and equipment"
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
                Services
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                Custom Decks, Remodels, and Additions
                <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-3 font-playfair italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:0_0_2px_black]">
                  Built for Northern California Homes
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl leading-relaxed opacity-0 animate-fade-up stagger-2 font-light">
                From{" "}
                <Link
                  href="/portfolio"
                  className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
                >
                  custom decks
                </Link>{" "}
                to full-scale builds, we deliver clear scopes, reliable
                timelines, and premium finishes for every service line.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-10 opacity-0 animate-fade-up stagger-3">
                <ScrollToContactButton className="text-base px-10 py-4 font-semibold" />
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-10 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  View Recent Projects
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="tel:530-919-7408"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-base font-semibold text-primary shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 hover:scale-[1.02]"
                >
                  Call (530) 919-7408
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden"
        >
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                Signature Services
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Decks lead the way, with additions, remodels, and new builds
                delivered by the same hands-on crew.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {servicesData.map((service, index) => (
                <Card
                  key={service.title}
                  className={`h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white relative overflow-hidden opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <CardHeader className="pb-4">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
                      <service.icon className="h-12 w-12 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-playfair tracking-tight group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold text-primary mb-4">
                      Price Range:{" "}
                      <span className="text-accent">{service.priceRange}</span>
                    </p>
                    <Accordion type="single" collapsible>
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
                    <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Plan a consult</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Process />
        <Reviews />
        <ServiceArea />
        <Contact />
      </main>
    </>
  );
}
