import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  Hammer,
  Layers3,
  MapPin,
  Mountain,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { ContactModalTrigger } from "@/components/ContactModalTrigger";
import { OgdenFaqSection } from "@/components/ogden-page/OgdenFaqSection";
import type {
  ServiceDetailCustomSection,
  ServiceDetailPageData,
} from "@/lib/service-detail-page.types";

type ServiceDetailPageTemplateProps = {
  data: ServiceDetailPageData;
};

type ActionLink = {
  label: string;
  href: string;
};

const primaryButtonClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-amber-800";

function DataAction({
  link,
  className,
  children,
}: {
  link: ActionLink;
  className: string;
  children?: ReactNode;
}) {
  const content = children ?? link.label;

  if (link.href === "/contact") {
    return (
      <ContactModalTrigger className={className}>{content}</ContactModalTrigger>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  contrast = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  contrast?: boolean;
}) {
  return (
    <div className="mb-12 max-w-4xl">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          contrast ? "text-amber-300" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-bold leading-tight md:text-5xl ${
          contrast ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-3xl text-lg leading-8 ${
            contrast ? "text-white/70" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CustomSection({ section }: { section: ServiceDetailCustomSection }) {
  const isContrast = section.surface === "contrast";
  const surfaceClassName = isContrast
    ? "bg-stone-900 text-white"
    : section.surface === "muted"
      ? "texture-wood bg-stone-100"
      : "bg-white";
  const bodyClassName = isContrast ? "text-white/70" : "text-stone-700";

  return (
    <section
      id={section.id}
      className={`scroll-mt-28 py-20 md:py-28 ${surfaceClassName}`}
    >
      <div className="container relative mx-auto px-4">
        <SectionHeading
          eyebrow={section.eyebrow ?? "Deck Planning"}
          title={section.title}
          description={section.description}
          contrast={isContrast}
        />
        <div className="space-y-8">
          {section.blocks.map((block, blockIndex) => {
            const key = `${section.id}-${block.type}-${blockIndex}`;

            if (block.type === "paragraph") {
              return (
                <p
                  key={key}
                  className={`max-w-4xl text-lg leading-8 ${bodyClassName}`}
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h3
                  key={key}
                  className={`text-2xl font-bold ${
                    isContrast ? "text-white" : "text-stone-900"
                  }`}
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "unordered-list") {
              return (
                <ul key={key} className={`grid gap-3 ${bodyClassName}`}>
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "icon-list") {
              return (
                <div
                  key={key}
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {block.items.map((item) => (
                    <article
                      key={item.title}
                      className={`rounded-2xl border p-6 ${
                        isContrast
                          ? "border-white/15 bg-white/[0.06]"
                          : "border-stone-200 bg-white shadow-sm"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${
                          isContrast
                            ? "bg-accent text-white"
                            : "bg-amber-50 text-accent"
                        }`}
                      >
                        <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3
                        className={`mt-5 text-xl font-bold ${
                          isContrast ? "text-white" : "text-stone-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className={`mt-3 leading-7 ${bodyClassName}`}>
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              );
            }

            if (block.type === "card-grid") {
              return (
                <div
                  key={key}
                  className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                  {block.cards.map((card) => {
                    const cardContent = (
                      <>
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-accent transition group-hover:bg-accent group-hover:text-white">
                          <Hammer className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="mt-6 text-xl font-bold text-stone-900">
                          {card.title}
                        </h3>
                        <p className="mt-3 flex-1 leading-7 text-stone-600">
                          {card.text}
                        </p>
                        {card.href ? (
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">
                            {card.ctaLabel ?? "Learn more"}
                            <ArrowRight
                              className="h-4 w-4 transition group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    );
                    const className =
                      "group flex min-h-64 flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl";

                    return card.href ? (
                      <Link
                        key={card.title}
                        href={card.href}
                        className={className}
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <article key={card.title} className={className}>
                        {cardContent}
                      </article>
                    );
                  })}
                </div>
              );
            }

            return (
              <aside
                key={key}
                className={`relative overflow-hidden rounded-2xl border p-7 md:p-9 ${
                  isContrast
                    ? "border-white/15 bg-white/[0.06]"
                    : "border-amber-200 bg-amber-50"
                }`}
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-accent/5" />
                <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="max-w-3xl">
                    <h3
                      className={`text-2xl font-bold ${
                        isContrast ? "text-white" : "text-stone-900"
                      }`}
                    >
                      {block.title}
                    </h3>
                    <p className={`mt-3 text-lg leading-8 ${bodyClassName}`}>
                      {block.text}
                    </p>
                  </div>
                  {block.cta ? (
                    <DataAction
                      link={block.cta}
                      className={`${primaryButtonClassName} shrink-0`}
                    />
                  ) : null}
                </div>
              </aside>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailPageTemplate({
  data,
}: ServiceDetailPageTemplateProps) {
  const sectionIds = new Set(
    [
      data.overview?.id,
      data.serviceTypes?.id,
      data.choices?.id,
      data.capabilities?.id,
      data.planningFactors?.id,
      data.process?.id,
      data.scopeFactors?.id,
      data.projects?.id,
      data.serviceAreas?.id,
      data.relatedResources?.id,
      ...(data.customSections?.map((section) => section.id) ?? []),
      data.faqs?.length ? "frequently-asked-questions" : undefined,
      data.leadForm ? "contact" : undefined,
    ].filter((id): id is string => Boolean(id)),
  );
  const anchorLinks = data.anchorLinks?.filter((link) =>
    sectionIds.has(link.href.slice(1)),
  );
  const customSectionsAt = (
    placement: NonNullable<ServiceDetailCustomSection["placement"]>,
  ) =>
    data.customSections?.filter(
      (section) => (section.placement ?? "before-faqs") === placement,
    ) ?? [];

  return (
    <>
      <div className="border-b border-stone-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs
            items={data.breadcrumbs}
            currentClassName="text-stone-900"
            linkClassName="font-semibold text-stone-500 transition hover:text-accent"
            separatorClassName="mx-2 text-stone-300"
          />
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#f3eee5]">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-accent" />
        <div className="absolute -left-40 top-16 h-80 w-80 rounded-full border-[56px] border-white/50" />
        <div className="absolute bottom-0 right-0 h-48 w-48 bg-[linear-gradient(135deg,transparent_48%,rgba(133,77,14,0.13)_49%,rgba(133,77,14,0.13)_51%,transparent_52%)] bg-[length:24px_24px]" />

        <div className="container relative mx-auto grid min-h-[76vh] items-center gap-14 px-4 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent md:text-sm">
              {data.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-stone-900 md:text-6xl lg:text-7xl">
              {data.hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-700 md:text-xl">
              {data.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <DataAction
                link={data.hero.primaryCta}
                className={primaryButtonClassName}
              >
                {data.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </DataAction>
              <DataAction
                link={data.hero.secondaryCta}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-stone-400 bg-white/55 px-6 py-3 text-center text-sm font-bold text-stone-800 transition hover:-translate-y-0.5 hover:border-accent hover:bg-white hover:text-accent"
              />
            </div>

            <ul className="mt-10 grid gap-x-5 gap-y-3 border-t border-stone-300 pt-6 text-sm font-semibold text-stone-600 sm:grid-cols-2">
              {data.hero.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ShieldCheck
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative lg:-mr-16">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-accent/35" />
            <a
              href={data.hero.image.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full-size image: ${data.hero.image.alt}`}
              className="group relative block overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-[0_35px_80px_rgba(41,37,36,0.24)]"
            >
              <Image
                src={data.hero.image.src}
                alt={data.hero.image.alt}
                width={data.hero.image.width}
                height={data.hero.image.height}
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.025]"
              />
            </a>
            {data.hero.image.caption ? (
              <figcaption className="relative mx-5 -mt-5 flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-5 py-4 text-sm text-stone-600 shadow-lg">
                <span>{data.hero.image.caption}</span>
                <span className="shrink-0 font-bold uppercase tracking-[0.14em] text-accent">
                  Deck building
                </span>
              </figcaption>
            ) : null}
          </figure>
        </div>
      </section>

      {anchorLinks?.length ? (
        <nav
          aria-label="On this page"
          className="sticky top-[72px] z-20 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur"
        >
          <div className="container mx-auto overflow-x-auto px-4">
            <div className="flex min-w-max items-center gap-6 py-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                Explore
              </span>
              {anchorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-stone-700 transition hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      ) : null}

      {data.overview ? (
        <section
          id={data.overview.id}
          className="scroll-mt-28 bg-white py-20 md:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow={data.overview.eyebrow}
                  title={data.overview.title}
                />
                <div className="space-y-5 text-lg leading-8 text-stone-700">
                  {data.overview.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.overview.highlights.map((item, index) => (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-2xl border border-stone-200 bg-[#f7f2e9] p-6 shadow-sm"
                  >
                    <span className="absolute right-5 top-4 font-playfair text-5xl font-bold text-accent/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <BadgeCheck
                      className="h-6 w-6 text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="mt-6 text-xl font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {customSectionsAt("after-overview").map((section) => (
        <CustomSection key={section.id} section={section} />
      ))}

      {data.serviceTypes ? (
        <section
          id={data.serviceTypes.id}
          className="scroll-mt-28 overflow-hidden bg-stone-900 py-20 text-white md:py-28"
        >
          <div className="container relative mx-auto px-4">
            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border-[52px] border-white/[0.03]" />
            <SectionHeading
              eyebrow={data.serviceTypes.eyebrow}
              title={data.serviceTypes.title}
              description={data.serviceTypes.description}
              contrast
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {data.serviceTypes.items.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] p-7 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.08]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                      {index % 2 === 0 ? (
                        <Layers3 className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Mountain className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                    <span className="font-playfair text-5xl font-bold text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/70">{item.summary}</p>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-white/75"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {data.choices ? (
        <section
          id={data.choices.id}
          className="texture-wood scroll-mt-28 bg-stone-100 py-20 md:py-28"
        >
          <div className="container relative mx-auto px-4">
            <SectionHeading
              eyebrow={data.choices.eyebrow}
              title={data.choices.title}
              description={data.choices.description}
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {data.choices.items.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
                >
                  <div className="border-b border-stone-200 p-7">
                    <Hammer
                      className="h-7 w-7 text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-2xl font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-stone-600">
                      {item.summary}
                    </p>
                  </div>
                  <ul className="flex-1 space-y-3 p-7">
                    {item.considerations.map((consideration) => (
                      <li
                        key={consideration}
                        className="flex gap-3 text-sm leading-6 text-stone-600"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                  {item.bestFor ? (
                    <div className="border-t border-amber-200 bg-amber-50 px-7 py-5 text-sm leading-6 text-stone-700">
                      <span className="font-bold text-stone-900">
                        Best for:{" "}
                      </span>
                      {item.bestFor}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
            {data.choices.callout ? (
              <aside className="relative mt-8 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-7 md:p-9">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-accent/5" />
                <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-bold text-stone-900">
                      {data.choices.callout.title}
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-stone-700">
                      {data.choices.callout.text}
                    </p>
                  </div>
                  <DataAction
                    link={data.choices.callout.cta}
                    className={`${primaryButtonClassName} shrink-0`}
                  />
                </div>
              </aside>
            ) : null}
          </div>
        </section>
      ) : null}

      {data.capabilities ? (
        <section
          id={data.capabilities.id}
          className="scroll-mt-28 bg-white py-20 md:py-28"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow={data.capabilities.eyebrow}
              title={data.capabilities.title}
              description={data.capabilities.description}
            />
            <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
              {data.capabilities.items.map((item, index) => (
                <article
                  key={item.title}
                  className="group border-t border-stone-200 py-7"
                >
                  <div className="flex gap-5">
                    <span className="font-playfair text-3xl font-bold text-accent/35 transition group-hover:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-stone-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {data.planningFactors ? (
        <section
          id={data.planningFactors.id}
          className="texture-deck-boards scroll-mt-28 bg-stone-50 py-20 md:py-28"
        >
          <div className="container relative mx-auto px-4">
            <SectionHeading
              eyebrow={data.planningFactors.eyebrow}
              title={data.planningFactors.title}
              description={data.planningFactors.description}
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.planningFactors.items.map((item, index) => {
                const icons = [Mountain, Ruler, Layers3];
                const Icon = icons[index % icons.length];

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-stone-200 bg-white/95 p-6 shadow-sm backdrop-blur"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {data.process ? (
        <section
          id={data.process.id}
          className="scroll-mt-28 bg-stone-900 py-20 text-white md:py-28"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow={data.process.eyebrow}
              title={data.process.title}
              description={data.process.description}
              contrast
            />
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-white/15 bg-white/[0.05] p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-stone-900">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/65">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {data.scopeFactors ? (
        <section
          id={data.scopeFactors.id}
          className="scroll-mt-28 bg-white py-20 md:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow={data.scopeFactors.eyebrow}
                  title={data.scopeFactors.title}
                  description={data.scopeFactors.description}
                />
                <DataAction
                  link={data.scopeFactors.resourceLink}
                  className="inline-flex items-center gap-2 font-bold text-accent underline decoration-accent/25 underline-offset-4 transition hover:decoration-accent"
                >
                  {data.scopeFactors.resourceLink.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </DataAction>
              </div>
              <ul className="grid gap-3 rounded-3xl border border-stone-200 bg-[#f7f2e9] p-7 shadow-sm sm:grid-cols-2 md:p-9">
                {data.scopeFactors.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl bg-white px-4 py-4 text-sm font-semibold leading-6 text-stone-700 shadow-sm"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {data.projects ? (
        <section
          id={data.projects.id}
          className="scroll-mt-28 bg-stone-100 py-20 md:py-28"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow={data.projects.eyebrow}
              title={data.projects.title}
              description={data.projects.description}
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {data.projects.items.map((project) => (
                <Link
                  key={`${project.title}-${project.location}`}
                  href={project.href}
                  className="group relative flex min-h-96 flex-col overflow-hidden rounded-3xl bg-stone-900 p-8 text-white shadow-lg"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(133,77,14,0.7),transparent_52%)] transition duration-700 group-hover:scale-110" />
                  <div className="relative flex h-full flex-col">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {project.location}
                    </span>
                    <h3 className="mt-6 text-3xl font-bold leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-7 text-white/70">
                      {project.summary}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/75"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 pt-9 text-sm font-bold text-white">
                      {project.ctaLabel}
                      <ArrowRight
                        className="h-4 w-4 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <DataAction
                link={data.projects.footerLink}
                className="inline-flex items-center gap-2 font-bold text-accent underline decoration-accent/25 underline-offset-4"
              >
                {data.projects.footerLink.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </DataAction>
            </div>
          </div>
        </section>
      ) : null}

      {data.serviceAreas ? (
        <section
          id={data.serviceAreas.id}
          className="scroll-mt-28 bg-white py-20 md:py-28"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow={data.serviceAreas.eyebrow}
              title={data.serviceAreas.title}
              description={data.serviceAreas.description}
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.serviceAreas.items.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 text-accent">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-stone-900">
                      {location.name}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-stone-600">
                    {location.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    View local services
                    <ChevronRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <DataAction
                link={data.serviceAreas.footerLink}
                className="inline-flex items-center gap-2 font-bold text-accent underline decoration-accent/25 underline-offset-4"
              />
            </div>
          </div>
        </section>
      ) : null}

      {data.relatedResources ? (
        <section
          id={data.relatedResources.id}
          className="texture-wood scroll-mt-28 bg-[#f7f2e9] py-20 md:py-28"
        >
          <div className="container relative mx-auto px-4">
            <SectionHeading
              eyebrow={data.relatedResources.eyebrow}
              title={data.relatedResources.title}
              description={data.relatedResources.description}
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.relatedResources.items.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group flex min-h-72 flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-accent transition group-hover:bg-accent group-hover:text-white">
                    <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-stone-900">
                    {resource.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-stone-600">
                    {resource.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    {resource.ctaLabel}
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {customSectionsAt("before-faqs").map((section) => (
        <CustomSection key={section.id} section={section} />
      ))}

      {data.faqs?.length ? (
        <OgdenFaqSection
          items={data.faqs}
          title={data.faqTitle ?? "Deck Building Frequently Asked Questions"}
        />
      ) : null}

      {customSectionsAt("before-contact").map((section) => (
        <CustomSection key={section.id} section={section} />
      ))}

      {data.leadForm ? (
        <section
          id="contact"
          className="scroll-mt-28 bg-stone-100 py-20 md:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="grid overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl lg:grid-cols-[0.78fr_1.22fr]">
              <aside className="bg-stone-900 p-8 text-white md:p-12">
                <ClipboardCheck
                  className="h-10 w-10 text-amber-300"
                  aria-hidden="true"
                />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Local consultation
                </p>
                <h2 className="mt-4 text-4xl font-bold text-white">
                  {data.leadForm.title}
                </h2>
                <p className="mt-5 leading-7 text-white/70">
                  {data.leadForm.description}
                </p>
                <dl className="mt-10 space-y-6 border-t border-white/15 pt-8">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                      Phone
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={data.business.phoneHref}
                        className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-amber-300"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        {data.business.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                      Service area
                    </dt>
                    <dd className="mt-2 leading-7 text-white/80">
                      {data.business.serviceAreaLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                      License
                    </dt>
                    <dd className="mt-2 leading-7 text-white/80">
                      {data.business.licenseLabel} #
                      {data.business.licenseNumber}
                    </dd>
                  </div>
                </dl>
              </aside>
              <div className="p-8 md:p-12">
                <ContactForm
                  idPrefix={`${data.slug}-contact`}
                  submitLabel={data.leadForm.submitLabel}
                  privacyText={data.leadForm.privacyText}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-accent py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_30%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-100">
            {data.finalCta.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold text-white md:text-6xl">
            {data.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            {data.finalCta.text}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <DataAction
              link={data.finalCta.primaryCta}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-accent shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-50"
            />
            <DataAction
              link={data.finalCta.secondaryCta}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            />
          </div>
        </div>
      </section>
    </>
  );
}
