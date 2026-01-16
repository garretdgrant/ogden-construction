import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollToContactButton } from "@/components/ScrollToContactButton";
import { Contact } from "@/components/Contact";
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
      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={OG_IMAGE}
              alt="Custom deck cost planning guide hero"
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
                Deck Cost Guide
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                {PAGE_TITLE}
                <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-3 font-playfair italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:0_0_2px_black]">
                  Budget with Confidence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl leading-relaxed opacity-0 animate-fade-up stagger-2 font-light">
                Deck costs vary widely based on materials, size, and structural
                complexity. Local labor rates and permits also impact pricing in
                Northern California. This guide outlines real-world ranges and
                what homeowners should expect.
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
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                Average Cost to Build a Deck
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Use these ranges as starting points. Exact pricing depends on
                layout, materials, and site conditions.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {quickRanges.map((range, index) => (
                <div
                  key={range.title}
                  className={`rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                    {range.title}
                  </p>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {range.value}
                  </p>
                  <p className="text-gray-600">{range.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6">
              These are typical ranges, not quotes. Actual pricing depends on
              your layout, materials, and site conditions.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                Deck Cost Per Square Foot
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Use these tiers for planning. Layout complexity or upgrades can
                shift totals.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {costTiers.map((tier, index) => (
                <div
                  key={tier.title}
                  className={`rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-lg font-semibold text-accent mb-2">
                    {tier.value}
                  </p>
                  <p className="text-gray-600">{tier.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Cost per square foot is a budgeting tool, not a final estimate.
              Custom features, stairs, or engineering can move the total up or
              down.
            </p>
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                What Impacts the Cost of Building a Deck?
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                These factors drive material, labor, and permitting costs in
                Northern California.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {costFactors.map((factor, index) => (
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

        <section className="py-24 bg-white texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                Wood vs Composite Deck Cost
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Wood decks usually have a lower upfront cost and can look
                  beautiful when maintained well. Composite decks cost more at
                  the start, but they reduce ongoing maintenance and typically
                  last longer.
                </p>
                <p>
                  If you prefer a lower initial investment, wood can be a solid
                  choice. If you want minimal upkeep and longer-term durability,
                  composite can be worth the extra expense.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                How Much Does a Deck Cost in Northern California?
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
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
          </div>
        </section>

        <section className="py-24 bg-white texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-semibold text-primary mb-6">
                  Is Building a Deck Worth the Investment?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The best value comes from a deck you will actually use.
                    Outdoor living space boosts day-to-day enjoyment and can
                    make a home more appealing to future buyers.
                  </p>
                  <p>
                    If you are also weighing resale impact, see our guide on{" "}
                    <Link
                      href="/how-much-does-a-deck-add-to-home-value"
                      className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
                    >
                      how much value a deck can add
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-semibold text-primary mb-6">
                  Deck Cost Examples
                </h2>
                <div className="space-y-4">
                  {costExamples.map((example) => (
                    <div key={example.title}>
                      <p className="text-lg font-semibold text-primary">
                        {example.title}
                      </p>
                      <p className="text-accent font-semibold">
                        {example.value}
                      </p>
                      <p className="text-gray-600">{example.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-6">
                  Actual pricing depends on design, engineering, and site
                  conditions. These ranges are examples, not guarantees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                Related Resources
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/services"
                className="rounded-xl border-2 border-stone-200 bg-white p-5 text-primary shadow-lg hover:shadow-2xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                Deck Builder and Services
              </Link>
              <Link
                href="/how-much-does-a-deck-add-to-home-value"
                className="rounded-xl border-2 border-stone-200 bg-white p-5 text-primary shadow-lg hover:shadow-2xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                How Much Value Does a Deck Add?
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-stone-200 bg-white p-5 text-primary shadow-lg hover:shadow-2xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                Request an Estimate
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get a Real Deck Cost Estimate for Your Home
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10">
                Online estimates can only go so far. The best way to understand
                deck cost is to look at your space, goals, and material options.
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
              <p className="text-sm text-white/70 mt-6">
                Serving Placerville and El Dorado County homeowners.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
