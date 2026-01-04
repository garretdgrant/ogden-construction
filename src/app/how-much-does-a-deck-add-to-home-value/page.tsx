import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
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
      <main className="pb-20">
        <section className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                Home Value Insights
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {PAGE_TITLE}
              </h1>
              <p className="text-lg text-secondary mb-6">
                Decks are one of the most popular outdoor upgrades for
                homeowners in Placerville, El Dorado County, and across Northern
                California. But the value you get back depends on design,
                materials, and where you live.
              </p>
              <p className="text-lg text-secondary">
                This guide breaks down realistic ROI ranges, what influences
                resale value, and when building a deck makes the most sense.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={OG_IMAGE}
                alt="Custom redwood deck in Northern California"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Short Answer: A Deck Can Add 60%-75% of Its Cost Back in Home
              Value
            </h2>
            <ul className="grid gap-4 md:grid-cols-3">
              {quickAnswerPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-stone-200 bg-white p-5 text-secondary shadow-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-10">
              What Determines How Much Value a Deck Adds?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {valueFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-secondary">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Deck ROI in Northern California and El Dorado County
            </h2>
            <div className="space-y-4 text-lg text-secondary">
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
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                When Building a Deck Is Worth the Investment
              </h2>
              <ul className="space-y-3 text-secondary">
                {worthItPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                When a Deck Might Not Add Maximum Value
              </h3>
              <ul className="space-y-3 text-secondary">
                {notWorthItPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Deck Cost vs Added Home Value (Realistic Examples)
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {costExamples.map((example) => (
                <div
                  key={example.cost}
                  className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">
                    Example
                  </p>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {example.cost}
                  </p>
                  <p className="text-secondary">{example.value}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary mt-6">
              Actual ROI varies based on market conditions, build quality, and
              material choices. These ranges are examples, not guarantees.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Why Professionally Built Decks Add More Value
            </h2>
            <div className="space-y-4 text-lg text-secondary">
              <p>
                A deck is only as valuable as the confidence it gives a buyer.
                Professional builds deliver structural integrity, code
                compliance, and long-term durability, three factors that matter
                during resale.
              </p>
              <p>
                Permitted, well-engineered decks also reduce inspection issues
                and create peace of mind for future owners. That perception of
                quality often translates into stronger offers.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Want a Deck That Adds Real Value?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              If you're planning a deck in Placerville or anywhere in El Dorado
              County, we're happy to share options that fit your goals and your
              budget with no pressure, just honest guidance.
            </p>
            <Link href="/contact">
              <Button
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors"
                size="lg"
              >
                Get a Free Deck Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
