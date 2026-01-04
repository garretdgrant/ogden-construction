import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/metadata";

const PAGE_TITLE = "Deck Planning Guides";
const PAGE_DESCRIPTION =
  "Browse Ogden Construction guides on deck costs, ROI, and planning insights for Northern California homeowners.";
const PAGE_PATH = "/guides";
const OG_IMAGE = "/images/portfolio/redwood-deck.webp";

const guides = [
  {
    title: "How Much Does It Cost to Build a Deck?",
    description:
      "Understand average deck costs, price per square foot, and the biggest factors that affect pricing.",
    href: "/how-much-does-it-cost-to-build-a-deck",
  },
  {
    title: "How Much Does a Deck Add to Your Home's Value?",
    description:
      "Learn typical ROI ranges, what influences value, and when a deck is worth the investment.",
    href: "/how-much-does-a-deck-add-to-home-value",
  },
  {
    title: "Deck Repair vs Replacement: Which Is Right for Your Home?",
    description:
      "Review safety signals, repair scenarios, and when replacement becomes the better long-term choice.",
    href: "/deck-repair-vs-replacement",
  },
];

export async function generateMetadata() {
  return buildPageMetadata({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    imagePath: OG_IMAGE,
  });
}

export default function GuidesIndexPage() {
  const jsonLd = getWebPageJsonLd({
    title: `${PAGE_TITLE} | Ogden Construction`,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    imagePath: OG_IMAGE,
  });

  return (
    <>
      <Script
        id="guides-index-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pb-20">
        <section className="pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Guides
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {PAGE_TITLE}
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Practical, honest resources to help you plan your next deck
              project with confidence.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <div
                key={guide.href}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-primary mb-3">
                    {guide.title}
                  </h2>
                  <p className="text-secondary">{guide.description}</p>
                </div>
                <div className="mt-6">
                  <Link href={guide.href}>
                    <Button size="lg" className="w-full">
                      Read the Guide
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
