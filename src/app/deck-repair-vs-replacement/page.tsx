import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/metadata";

const PAGE_TITLE = "Deck Repair vs Replacement: Which Is Right for Your Home?";
const PAGE_DESCRIPTION =
  "Not sure whether to repair or replace your deck? Learn the signs, cost differences, and safety factors to help you make the right decision for your home.";
const PAGE_PATH = "/deck-repair-vs-replacement";
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
  "Minor surface issues like splinters or loose boards usually point to repair.",
  "Structural damage or widespread rot often means replacement is safer.",
  "Safety should always outweigh short-term savings.",
];

const repairPoints = [
  "Cosmetic issues such as loose boards or worn finishes.",
  "Isolated damage that does not affect the frame.",
  "The deck is structurally sound and built to current code.",
  "The deck is relatively new and well maintained.",
];

const replacementPoints = [
  "Rotting or soft framing members.",
  "Failing posts, footings, or supports.",
  "Code violations or unsafe railing and stair layouts.",
  "Multiple repairs are adding up year after year.",
  "Older decks 15-20+ years old depending on materials.",
];

const safetyPoints = [
  "Structural integrity and load bearing capacity.",
  "Railing height, spacing, and anchoring.",
  "Stair safety and tread consistency.",
  "Moisture-related decay that weakens framing.",
];

const decisionChecklist = [
  "Is the structure sound without hidden damage?",
  "Are repairs recurring or expanding over time?",
  "Does the deck meet current code requirements?",
  "Is safety compromised for kids or guests?",
  "Do you plan to stay long term and use the space often?",
];

export default function DeckRepairReplacementPage() {
  const jsonLd = getWebPageJsonLd({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    imagePath: OG_IMAGE,
  });

  return (
    <>
      <Script
        id="deck-repair-replacement-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pb-20">
        <section className="pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Deck Repair Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {PAGE_TITLE}
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Most decks reach a decision point. Some issues can be safely
              repaired, while others make replacement the smarter long-term
              choice. This guide helps homeowners make a clear, safety-first
              decision.
            </p>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Quick Answer: It Depends on Safety, Structure, and Cost
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
          <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                When Repairing a Deck Is the Right Choice
              </h2>
              <ul className="space-y-3 text-secondary">
                {repairPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-secondary mt-6">
                Repairs should never compromise safety or structural integrity.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                When It Is Time to Replace a Deck
              </h2>
              <ul className="space-y-3 text-secondary">
                {replacementPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-secondary mt-6">
                Older decks often do not meet current safety standards.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Deck Safety: Why Replacement Is Sometimes Necessary
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {safetyPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-stone-200 bg-white p-5 text-secondary shadow-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Deck Repair vs Replacement Cost Comparison
            </h2>
            <div className="space-y-4 text-lg text-secondary">
              <p>
                Repairs can feel cheaper in the short term, but repeated fixes
                add up quickly. If the structure is compromised, replacement
                often delivers better longevity and fewer surprises.
              </p>
              <p>
                A well-built replacement can also improve usability and
                long-term value, while repair work is typically focused on
                preserving the existing layout.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/10 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Deck Wear and Tear in Northern California
            </h2>
            <div className="space-y-4 text-lg text-secondary">
              <p>
                Sun exposure, moisture, and foothill terrain can accelerate deck
                aging in Northern California. In El Dorado County and Lake
                Tahoe, snow loads and seasonal swings also play a role.
              </p>
              <p>
                Local experience helps determine whether a deck can be repaired
                safely or needs a full rebuild to meet current conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              How to Decide Between Repair or Replacement
            </h2>
            <ul className="space-y-3 text-secondary">
              {decisionChecklist.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-secondary mt-6">
              A professional evaluation can confirm the safest path forward.
            </p>
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
                href="/how-much-does-it-cost-to-build-a-deck"
                className="rounded-xl border border-stone-200 bg-white p-5 text-primary hover:border-accent hover:text-accent transition-colors"
              >
                How Much Does It Cost to Build a Deck?
              </Link>
              <Link
                href="/how-much-does-a-deck-add-to-home-value"
                className="rounded-xl border border-stone-200 bg-white p-5 text-primary hover:border-accent hover:text-accent transition-colors"
              >
                How Much Value Does a Deck Add?
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Not Sure Which Option Is Right for Your Deck?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              A professional inspection can help you understand whether repair
              or replacement makes the most sense for your deck and your budget.
            </p>
            <Link href="/contact">
              <Button
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors"
                size="lg"
              >
                Schedule a Deck Evaluation
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
