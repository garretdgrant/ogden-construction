import type { FaqItem } from "@/lib/faq";

type OgdenFaqSectionProps = {
  items: FaqItem[];
  title?: string;
  description?: string;
  eyebrow?: string;
};

export function OgdenFaqSection({
  items,
  title = "Frequently Asked Questions",
  description,
  eyebrow = "Common questions",
}: OgdenFaqSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section
      id="frequently-asked-questions"
      className="scroll-mt-28 bg-stone-100 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
              {description}
            </p>
          ) : null}
          <div className="mt-10 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            {items.map((faq, index) => (
              <article
                key={`${faq.question}-${index}`}
                className="grid gap-4 p-6 md:grid-cols-[3rem_1fr] md:p-7"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-sm font-bold text-accent"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-7 text-stone-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-7 text-stone-600">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
