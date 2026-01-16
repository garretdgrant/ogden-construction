import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { ScrollToContactButton } from "@/components/ScrollToContactButton";
import { Contact } from "@/components/Contact";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/metadata";

const PAGE_TITLE = "How Much Does a Deck Add to Your Home's Value?";
const PAGE_DESCRIPTION =
  "Wondering if building a deck is worth it? Learn how much a deck can increase your home's value, average ROI, and what factors matter most in Northern California.";
const PAGE_PATH = "/how-much-does-a-deck-add-to-home-value";
const OG_IMAGE = "/images/portfolio/redwood-deck.webp";

export async function generateMetadata() {
  return buildPageMetadata({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    imagePath: OG_IMAGE,
    type: "article",
  });
}

const quickAnswerPoints = [
  "National studies typically show decks returning about 60%-75% of their cost at resale.",
  "Wood decks often have a slightly higher ROI, while composite offers longer lifespan and lower maintenance.",
  "Outdoor-friendly regions like El Dorado County tend to see stronger value perception from buyers.",
];

const valueFactors = [
  {
    title: "Material choice",
    body: "Wood can deliver strong short-term ROI, while composite reduces upkeep and appeals to low-maintenance buyers.",
  },
  {
    title: "Deck size and layout",
    body: "Balanced, functional layouts outperform oversized or oddly shaped decks in most neighborhoods.",
  },
  {
    title: "Attached vs. detached",
    body: "Attached decks typically read as a true extension of living space and add more perceived value.",
  },
  {
    title: "Covered vs. uncovered",
    body: "Shade structures or partial covers increase usability and can lift buyer interest.",
  },
  {
    title: "Build quality and permits",
    body: "Professionally built, permitted decks retain far more value and avoid resale friction.",
  },
  {
    title: "Integration with the home",
    body: "Designs that match the home's architecture feel intentional and add curb appeal.",
  },
];

const worthItPoints = [
  "You plan to stay in the home long term and will use the space regularly.",
  "Your property lacks usable outdoor living space today.",
  "You want better flow for entertaining, grilling, or enjoying foothill views.",
];

const notWorthItPoints = [
  "The deck placement blocks views or makes the yard feel cramped.",
  "The project overbuilds for the neighborhood's typical home values.",
  "Permits are skipped or the structure isn't code compliant.",
  "Low-grade materials are used where weather exposure is intense.",
];

const costExamples = [
  {
    cost: "$15k deck",
    value: "Potential $9k-$11k added value",
  },
  {
    cost: "$25k deck",
    value: "Potential $15k-$18k added value",
  },
];

export default function DeckValuePage() {
  const jsonLd = getWebPageJsonLd({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    imagePath: OG_IMAGE,
  });

  return (
    <>
      <Script
        id="deck-value-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={OG_IMAGE}
              alt="Custom redwood deck in Northern California"
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
                Home Value Insights
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                {PAGE_TITLE}
                <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-3 font-playfair italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:0_0_2px_black]">
                  Understand Real ROI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl leading-relaxed opacity-0 animate-fade-up stagger-2 font-light">
                Decks are one of the most popular outdoor upgrades for
                homeowners in Placerville, El Dorado County, and across Northern
                California. This guide breaks down realistic ROI ranges, what
                influences resale value, and when building a deck makes the most
                sense.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-10 opacity-0 animate-fade-up stagger-3">
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

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                Short Answer: A Deck Can Add 60%-75% of Its Cost Back in Home
                Value
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              {quickAnswerPoints.map((point, index) => (
                <li
                  key={point}
                  className={`rounded-2xl border-2 border-stone-200 bg-white p-6 text-gray-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24 bg-white texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                What Determines How Much Value a Deck Adds?
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {valueFactors.map((factor, index) => (
                <div
                  key={factor.title}
                  className={`rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-up stagger-${Math.min(index + 1, 6)}`}
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                Deck ROI in Northern California and El Dorado County
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  In outdoor-focused communities like Placerville and the Sierra
                  foothills, usable exterior space is a major lifestyle upgrade.
                  Buyers expect functional decks, especially on homes with views
                  or limited yard space.
                </p>
                <p>
                  The climate in Northern California also favors outdoor living,
                  which can push deck ROI above national averages when a deck is
                  thoughtfully designed and professionally built.
                </p>
                <p>
                  Ogden Construction brings local insight to material selection,
                  layouts, and code compliance so your deck performs well today
                  and holds value later.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-semibold text-primary mb-6">
                  When Building a Deck Is Worth the Investment
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {worthItPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  When a Deck Might Not Add Maximum Value
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {notWorthItPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                Deck Cost vs Added Home Value (Realistic Examples)
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {costExamples.map((example, index) => (
                <div
                  key={example.cost}
                  className={`rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">
                    Example
                  </p>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {example.cost}
                  </p>
                  <p className="text-gray-600">{example.value}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Actual ROI varies based on market conditions, build quality, and
              material choices. These ranges are examples, not guarantees.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                Why Professionally Built Decks Add More Value
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  A deck is only as valuable as the confidence it gives a buyer.
                  Professional builds deliver structural integrity, code
                  compliance, and long-term durability, three factors that
                  matter during resale.
                </p>
                <p>
                  Permitted, well-engineered decks also reduce inspection issues
                  and create peace of mind for future owners. That perception of
                  quality often translates into stronger offers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Want a Deck That Adds Real Value?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10">
                If you&apos;re planning a deck in Placerville or anywhere in El
                Dorado County, we&apos;re happy to share options that fit your
                goals and budget with no pressure, just honest guidance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ScrollToContactButton className="text-base px-10 py-4 font-semibold" />
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-10 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  View Recent Builds
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
