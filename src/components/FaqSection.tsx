import Link from "next/link";
import type { FaqItem } from "@/lib/faq";

type FaqSectionProps = {
  items: FaqItem[];
  heading?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export const FaqSection = ({
  items,
  heading = "Frequently Asked Questions",
  description,
  ctaHref = "/contact",
  ctaLabel = "Get in Touch",
}: FaqSectionProps) => {
  return (
    <section
      id="faq"
      className="py-24 bg-white texture-deck-boards relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="absolute top-40 right-10 opacity-5">
        <div className="w-32 h-2 bg-accent"></div>
        <div className="w-2 h-32 bg-accent"></div>
      </div>
      <div className="absolute bottom-40 left-10 opacity-5 rotate-180">
        <div className="w-24 h-1.5 bg-primary"></div>
        <div className="w-1.5 h-24 bg-primary"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          {description ? (
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((item, index) => (
            <div
              key={item.question}
              className={`group rounded-2xl border-2 border-stone-200 p-8 shadow-lg hover:shadow-2xl hover:border-accent/30 transition-all duration-500 bg-white hover:-translate-y-1 opacity-0 animate-fade-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-primary group-hover:text-accent transition-colors duration-300 flex-1">
                  {item.question}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg pl-12">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-stone-50 border-2 border-accent/20 p-8 shadow-lg">
            <p className="text-lg text-gray-700 font-medium">
              Still have questions? We're here to help.
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {ctaLabel}
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
