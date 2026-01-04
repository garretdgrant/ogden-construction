import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/metadata";

const PAGE_TITLE = "How Much Does It Cost to Build a Deck?";
const PAGE_DESCRIPTION =
  "Wondering how much it costs to build a deck? Learn average deck costs, price per square foot, and what factors affect pricing, plus what to expect in Northern California.";
const PAGE_PATH = "/how-much-does-it-cost-to-build-a-deck";
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

const quickRanges = [
  {
    title: "Typical deck cost range",
    value: "$15k-$50k+",
    detail:
      "Most decks land in this range depending on size, materials, and structural complexity.",
  },
  {
    title: "Cost per square foot",
    value: "$50-$125 per sq ft",
    detail:
      "A helpful guide for budgeting, but final pricing depends on design and site conditions.",
  },
];

const costTiers = [
  {
    title: "Low range",
    value: "$50-$75 per sq ft",
    detail:
      "Smaller decks with straightforward layouts and standard materials.",
  },
  {
    title: "Mid range",
    value: "$75-$100 per sq ft",
    detail: "Larger layouts, upgraded railings, or composite materials.",
  },
  {
    title: "High range",
    value: "$100-$125+ per sq ft",
    detail: "Multi-level designs, premium materials, or complex engineering.",
  },
];

const costFactors = [
  {
    title: "Deck size and layout",
    body: "Larger footprints and custom shapes increase labor and material costs.",
  },
  {
    title: "Height and structural complexity",
    body: "Tall decks or steep slopes can require deeper footings and extra framing.",
  },
  {
    title: "Material choice",
    body: "Wood is often more affordable upfront, while composite raises initial costs.",
  },
  {
    title: "Railings, stairs, and features",
    body: "Stairs, built-in benches, and upgraded railings add time and materials.",
  },
  {
    title: "Permits and inspections",
    body: "Local permitting requirements can vary by jurisdiction and add cost.",
  },
  {
    title: "Site conditions and access",
    body: "Tight access, hillside terrain, or tricky demolition can increase labor.",
  },
];

const costExamples = [
  {
    title: "Small wood deck",
    value: "$12k-$18k",
    detail: "Simple layout with standard lumber and basic railings.",
  },
  {
    title: "Mid-size composite deck",
    value: "$22k-$35k",
    detail: "Composite boards, upgraded railings, and moderate complexity.",
  },
  {
    title: "Larger custom deck",
    value: "$40k-$70k+",
    detail: "Multi-level layout, premium materials, or complex features.",
  },
];

export default function DeckCostPage() {
  const jsonLd = getWebPageJsonLd({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    imagePath: OG_IMAGE,
  });

  return (
    <>
      <Script
        id="deck-cost-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pb-20">
        <section className="pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Deck Cost Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {PAGE_TITLE}
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Deck costs vary widely based on materials, size, and how complex
              the build is. Local labor rates and permits also impact pricing in
              Northern California. This guide outlines real-world cost ranges
              and what homeowners should budget for.
            </p>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-8">
              Average Cost to Build a Deck
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {quickRanges.map((range) => (
                <div
                  key={range.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                    {range.title}
                  </p>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {range.value}
                  </p>
                  <p className="text-secondary">{range.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary mt-6">
              These are typical ranges, not quotes. Actual pricing depends on
              your layout, materials, and site conditions.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-8">
              Deck Cost Per Square Foot
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {costTiers.map((tier) => (
                <div
                  key={tier.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-lg font-semibold text-accent mb-2">
                    {tier.value}
                  </p>
                  <p className="text-secondary">{tier.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary mt-6">
              Cost per square foot is a budgeting tool, not a final estimate.
              Custom features, stairs, or engineering can move the total up or
              down.
            </p>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-10">
              What Impacts the Cost of Building a Deck?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {costFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
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

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Wood vs Composite Deck Cost
            </h2>
            <div className="space-y-4 text-lg text-secondary">
              <p>
                Wood decks usually have a lower upfront cost and can look
                beautiful when maintained well. Composite decks cost more at the
                start, but they reduce ongoing maintenance and typically last
                longer.
              </p>
              <p>
                If you prefer a lower initial investment, wood can be a solid
                choice. If you want minimal upkeep and longer-term durability,
                composite can be worth the extra expense.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              How Much Does a Deck Cost in Northern California?
            </h2>
            <div className="space-y-4 text-lg text-secondary">
              <p>
                Labor rates, permitting requirements, and site access can push
                deck costs higher in Northern California. Areas like El Dorado
                County and Lake Tahoe often involve hillside terrain, seasonal
                access, or stricter inspection requirements.
              </p>
              <p>
                Local climate also affects material decisions. Moisture,
                freeze-thaw cycles, and sun exposure can influence the best
                choice between wood and composite.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Is Building a Deck Worth the Investment?
              </h2>
              <div className="space-y-4 text-secondary">
                <p>
                  The best value comes from a deck you will actually use.
                  Outdoor living space boosts day-to-day enjoyment and can make
                  a home more appealing to future buyers.
                </p>
                <p>
                  If you are also weighing resale impact, see our guide on{" "}
                  <Link
                    href="/how-much-does-a-deck-add-to-home-value"
                    className="text-accent hover:underline"
                  >
                    how much value a deck can add
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Deck Cost Examples
              </h2>
              <div className="space-y-4">
                {costExamples.map((example) => (
                  <div key={example.title}>
                    <p className="text-lg font-semibold text-primary">
                      {example.title}
                    </p>
                    <p className="text-accent font-semibold">{example.value}</p>
                    <p className="text-secondary">{example.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary mt-6">
                Actual pricing depends on design, engineering, and site
                conditions. These ranges are examples, not guarantees.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Related Resources
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/services"
                className="rounded-xl border border-stone-200 bg-white p-5 text-primary hover:border-accent hover:text-accent transition-colors"
              >
                Deck Builder and Services
              </Link>
              <Link
                href="/how-much-does-a-deck-add-to-home-value"
                className="rounded-xl border border-stone-200 bg-white p-5 text-primary hover:border-accent hover:text-accent transition-colors"
              >
                How Much Value Does a Deck Add?
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-stone-200 bg-white p-5 text-primary hover:border-accent hover:text-accent transition-colors"
              >
                Request an Estimate
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Get a Real Deck Cost Estimate for Your Home
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Online estimates can only go so far. The best way to understand
              deck cost is to look at your space, goals, and material options.
            </p>
            <Link href="/contact">
              <Button
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors"
                size="lg"
              >
                Request a Deck Estimate
              </Button>
            </Link>
            <p className="text-sm text-white/70 mt-4">
              Serving Placerville and El Dorado County homeowners.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
