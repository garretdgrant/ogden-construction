import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollToContactButton } from "@/components/ScrollToContactButton";
import { Contact } from "@/components/Contact";
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
      <main>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={OG_IMAGE}
              alt="Deck repair versus replacement planning guide"
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
                Deck Repair Guide
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                {PAGE_TITLE}
                <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-3 font-playfair italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] [text-shadow:0_0_2px_black]">
                  Make the Safe Call
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl leading-relaxed opacity-0 animate-fade-up stagger-2 font-light">
                Most decks reach a decision point. Some issues can be safely
                repaired, while others make replacement the smarter long-term
                choice. This guide helps homeowners make a clear, safety-first
                decision.
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
                Quick Answer: It Depends on Safety, Structure, and Cost
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
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-semibold text-primary mb-6">
                  When Repairing a Deck Is the Right Choice
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {repairPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mt-6">
                  Repairs should never compromise safety or structural
                  integrity.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-semibold text-primary mb-6">
                  When It Is Time to Replace a Deck
                </h2>
                <ul className="space-y-3 text-gray-700">
                  {replacementPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mt-6">
                  Older decks often do not meet current safety standards.
                </p>
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
                Deck Safety: Why Replacement Is Sometimes Necessary
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {safetyPoints.map((point, index) => (
                <div
                  key={point}
                  className={`rounded-2xl border-2 border-stone-200 bg-white p-6 text-gray-600 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  {point}
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
                Deck Repair vs Replacement Cost Comparison
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
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
          </div>
        </section>

        <section className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden">
          <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
          <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                Deck Wear and Tear in Northern California
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Sun exposure, moisture, and foothill terrain can accelerate
                  deck aging in Northern California. In El Dorado County and
                  Lake Tahoe, snow loads and seasonal swings also play a role.
                </p>
                <p>
                  Local experience helps determine whether a deck can be
                  repaired safely or needs a full rebuild to meet current
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white texture-wood-planks diagonal-divider-reverse relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-1 h-64 bg-gradient-to-br from-accent/5 to-transparent rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/4 -right-20 w-1 h-64 bg-gradient-to-tl from-accent/5 to-transparent -rotate-45 blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
                How to Decide Between Repair or Replacement
              </h2>
              <ul className="space-y-3 text-gray-700">
                {decisionChecklist.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-6">
                A professional evaluation can confirm the safest path forward.
              </p>
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
                href="/how-much-does-it-cost-to-build-a-deck"
                className="rounded-xl border-2 border-stone-200 bg-white p-5 text-primary shadow-lg hover:shadow-2xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                How Much Does It Cost to Build a Deck?
              </Link>
              <Link
                href="/how-much-does-a-deck-add-to-home-value"
                className="rounded-xl border-2 border-stone-200 bg-white p-5 text-primary shadow-lg hover:shadow-2xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                How Much Value Does a Deck Add?
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
                Not Sure Which Option Is Right for Your Deck?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10">
                A professional inspection can help you understand whether repair
                or replacement makes the most sense for your deck and your
                budget.
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
