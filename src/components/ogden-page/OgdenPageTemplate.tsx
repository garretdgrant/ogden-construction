import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactModalTrigger } from "@/components/ContactModalTrigger";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Hammer,
  MapPin,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { OgdenLeadForm } from "@/components/ogden-page/OgdenLeadForm";
import type {
  OgdenContentBlock,
  OgdenLink,
  OgdenPageData,
  OgdenSection,
} from "@/lib/ogden-page.types";

type OgdenPageTemplateProps = {
  data: OgdenPageData;
};

const isInternalHref = (href: string) =>
  href.startsWith("/") || href.startsWith("#");

function DataLink({
  link,
  className,
  children,
}: {
  link: OgdenLink;
  className: string;
  children?: ReactNode;
}) {
  const content = children ?? link.label;

  if (link.href === "/contact") {
    return (
      <ContactModalTrigger className={className}>{content}</ContactModalTrigger>
    );
  }

  if (link.href.startsWith("tel:") || link.href.startsWith("mailto:")) {
    return (
      <a href={link.href} className={className}>
        {content}
      </a>
    );
  }

  if (link.external || !isInternalHref(link.href)) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}

const primaryButtonClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-amber-800";
const secondaryButtonClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-current/25 bg-white/10 px-6 py-3 text-center text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/20";

function BlockFooterLink({ link }: { link?: OgdenLink }) {
  if (!link) {
    return null;
  }

  return (
    <div className="mt-8">
      <DataLink
        link={link}
        className="inline-flex items-center gap-2 font-bold text-accent underline decoration-accent/25 underline-offset-4 transition hover:decoration-accent"
      >
        {link.label}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </DataLink>
    </div>
  );
}

function renderBlock(
  block: OgdenContentBlock,
  section: OgdenSection,
  blockIndex: number,
) {
  const key = `${section.id}-${block.type}-${blockIndex}`;
  const isContrast = section.surface === "contrast";
  const bodyColor = isContrast ? "text-white/80" : "text-stone-700";
  const headingColor = isContrast ? "text-white" : "text-stone-900";

  if (block.type === "paragraph") {
    return (
      <p key={key} className={`max-w-4xl text-lg leading-8 ${bodyColor}`}>
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h3 key={key} className={`text-2xl font-bold ${headingColor}`}>
        {block.text}
      </h3>
    );
  }

  if (block.type === "unordered-list") {
    return (
      <ul key={key} className={`grid gap-3 ${bodyColor}`}>
        {block.items.map((item, itemIndex) => (
          <li key={`${key}-${itemIndex}`} className="flex gap-3 leading-7">
            <Check
              className="mt-1 h-5 w-5 shrink-0 text-accent"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "icon-list") {
    return (
      <div key={key} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item, itemIndex) => (
          <article
            key={`${key}-${itemIndex}`}
            className={`rounded-2xl border p-6 ${
              isContrast
                ? "border-white/15 bg-white/[0.06]"
                : "border-stone-200 bg-white shadow-sm"
            }`}
          >
            <span
              className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full ${
                isContrast ? "bg-accent text-white" : "bg-amber-50 text-accent"
              }`}
            >
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className={`text-xl font-bold ${headingColor}`}>
              {item.title}
            </h3>
            <p className={`mt-3 leading-7 ${bodyColor}`}>{item.text}</p>
          </article>
        ))}
      </div>
    );
  }

  if (block.type === "card-grid") {
    return (
      <div key={key} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {block.cards.map((card, cardIndex) => {
          const content = (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-accent transition group-hover:bg-accent group-hover:text-white">
                <Hammer className="h-5 w-5" aria-hidden="true" />
              </div>
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
            "group flex min-h-72 flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl";

          return card.href ? (
            <Link
              key={`${key}-${cardIndex}`}
              href={card.href}
              className={className}
            >
              {content}
            </Link>
          ) : (
            <article key={`${key}-${cardIndex}`} className={className}>
              {content}
            </article>
          );
        })}
      </div>
    );
  }

  if (block.type === "location-grid") {
    return (
      <div key={key}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {block.locations.map((location, locationIndex) => (
            <Link
              key={`${key}-${locationIndex}`}
              href={location.href}
              className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-xl font-bold text-stone-900">
                  {location.name}
                </h3>
              </div>
              <p className="mt-4 leading-7 text-stone-600">{location.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent">
                View local services
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
        <BlockFooterLink link={block.footerLink} />
      </div>
    );
  }

  if (block.type === "project-grid") {
    return (
      <div key={key}>
        <div className="grid gap-5 lg:grid-cols-3">
          {block.projects.map((project, projectIndex) => (
            <Link
              key={`${key}-${projectIndex}`}
              href={project.href}
              className="group relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 p-7 text-white shadow-lg"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(133,77,14,0.55),transparent_52%)] transition duration-500 group-hover:scale-110" />
              <div className="relative flex h-full flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  {project.location}
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-tight">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-white/70">
                  {project.text}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">
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
        <BlockFooterLink link={block.footerLink} />
      </div>
    );
  }

  if (block.type === "steps") {
    return (
      <ol key={key} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {block.steps.map((step, stepIndex) => (
          <li
            key={`${key}-${stepIndex}`}
            className="relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">
              {stepIndex + 1}
            </span>
            <h3 className="text-xl font-bold text-stone-900">{step.title}</h3>
            <p className="mt-3 leading-7 text-stone-600">{step.text}</p>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "stats") {
    return (
      <dl
        key={key}
        className="grid overflow-hidden rounded-2xl border border-white/15 sm:grid-cols-2 lg:grid-cols-4"
      >
        {block.stats.map((stat, statIndex) => (
          <div
            key={`${key}-${statIndex}`}
            className="border-b border-white/15 p-6 sm:border-r lg:border-b-0"
          >
            <dd className="font-playfair text-4xl font-bold text-white">
              {stat.value}
            </dd>
            <dt className="mt-2 text-sm font-semibold text-white/65">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    );
  }

  if (block.type === "review-grid") {
    return (
      <div key={key}>
        <div className="grid gap-5 lg:grid-cols-3">
          {block.reviews.map((review, reviewIndex) => (
            <figure
              key={`${key}-${reviewIndex}`}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-sm"
            >
              <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-lg leading-8 text-stone-700">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-7 border-t border-stone-200 pt-5">
                <span className="font-bold text-stone-900">{review.name}</span>
                <span className="mt-1 block text-sm text-stone-500">
                  {review.location} · {review.project}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        {block.links?.length ? (
          <div className="mt-8 flex flex-wrap gap-5">
            {block.links.map((link) => (
              <DataLink
                key={link.href}
                link={link}
                className="font-bold text-accent underline decoration-accent/25 underline-offset-4"
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <aside
      key={key}
      className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-7 md:p-9"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-accent/5" />
      <div className="relative max-w-3xl">
        <h3 className="text-2xl font-bold text-stone-900">{block.title}</h3>
        <p className="mt-3 text-lg leading-8 text-stone-700">{block.text}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <DataLink
            link={block.primaryCta}
            className={primaryButtonClassName}
          />
          {block.secondaryCta ? (
            <DataLink
              link={block.secondaryCta}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3 text-center text-sm font-bold text-stone-800 transition hover:border-accent hover:text-accent"
            />
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function PageSection({ section }: { section: OgdenSection }) {
  const isContrast = section.surface === "contrast";
  const surfaceClassName = isContrast
    ? "bg-stone-900 text-white"
    : section.surface === "muted"
      ? "bg-stone-100 texture-wood"
      : "bg-white";

  return (
    <section
      id={section.id}
      className={`scroll-mt-28 overflow-hidden py-20 md:py-28 ${surfaceClassName}`}
    >
      <div className="container relative mx-auto px-4">
        <div className="mb-12 max-w-4xl">
          {section.eyebrow ? (
            <p
              className={`text-xs font-bold uppercase tracking-[0.2em] ${
                isContrast ? "text-amber-300" : "text-accent"
              }`}
            >
              {section.eyebrow}
            </p>
          ) : null}
          <h2
            className={`mt-4 text-4xl font-bold leading-tight md:text-5xl ${
              isContrast ? "text-white" : "text-stone-900"
            }`}
          >
            {section.title}
          </h2>
          {section.description ? (
            <p
              className={`mt-5 max-w-3xl text-lg leading-8 ${
                isContrast ? "text-white/70" : "text-stone-600"
              }`}
            >
              {section.description}
            </p>
          ) : null}
        </div>

        <div className="space-y-8">
          {section.blocks.map((block, blockIndex) =>
            renderBlock(block, section, blockIndex),
          )}
        </div>
      </div>
    </section>
  );
}

export function OgdenPageTemplate({ data }: OgdenPageTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f3eee5]">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-accent" />
        <div className="absolute -left-40 top-16 h-80 w-80 rounded-full border-[56px] border-white/45" />
        <div className="absolute bottom-0 right-0 h-40 w-40 bg-[linear-gradient(135deg,transparent_48%,rgba(133,77,14,0.12)_49%,rgba(133,77,14,0.12)_51%,transparent_52%)] bg-[length:24px_24px]" />

        <div className="container relative mx-auto grid min-h-[78vh] items-center gap-14 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
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
              <DataLink
                link={data.hero.primaryCta}
                className={primaryButtonClassName}
              />
              <DataLink
                link={data.hero.secondaryCta}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-stone-400 bg-white/50 px-6 py-3 text-center text-sm font-bold text-stone-800 transition hover:-translate-y-0.5 hover:border-accent hover:bg-white hover:text-accent"
              />
            </div>

            <ul className="mt-10 grid gap-x-5 gap-y-3 border-t border-stone-300 pt-6 text-sm font-semibold text-stone-600 sm:grid-cols-2">
              {data.hero.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ShieldCheck
                    className="h-4 w-4 text-accent"
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
              aria-label="Open the full-size South Lake Tahoe deck project image"
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
            <figcaption className="relative mx-5 -mt-5 flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-5 py-4 text-sm text-stone-600 shadow-lg">
              <span>{data.hero.image.caption}</span>
              <span className="shrink-0 font-bold uppercase tracking-[0.14em] text-accent">
                Recent work
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {data.anchorLinks?.length ? (
        <nav
          aria-label="On this page"
          className="sticky top-[72px] z-20 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur"
        >
          <div className="container mx-auto overflow-x-auto px-4">
            <div className="flex min-w-max items-center gap-6 py-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                Explore
              </span>
              {data.anchorLinks.map((link) => (
                <DataLink
                  key={link.href}
                  link={link}
                  className="text-sm font-bold text-stone-700 transition hover:text-accent"
                />
              ))}
            </div>
          </div>
        </nav>
      ) : null}

      {data.sections.map((section) => (
        <PageSection key={section.id} section={section} />
      ))}

      {data.faqs?.length ? (
        <section
          id="frequently-asked-questions"
          className="scroll-mt-28 bg-stone-100 py-20 md:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Common questions
              </p>
              <h2 className="mt-4 text-4xl font-bold text-stone-900 md:text-5xl">
                {data.faqTitle ?? "Frequently Asked Questions"}
              </h2>
              <div className="mt-10 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                {data.faqs.map((faq, faqIndex) => (
                  <article
                    key={`${faq.question}-${faqIndex}`}
                    className="grid gap-4 p-6 md:grid-cols-[3rem_1fr] md:p-7"
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-sm font-bold text-accent"
                      aria-hidden="true"
                    >
                      {String(faqIndex + 1).padStart(2, "0")}
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
      ) : null}

      {data.leadForm ? (
        <section id="contact" className="scroll-mt-28 bg-white py-20 md:py-28">
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
                      Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={data.business.emailHref}
                        className="text-lg font-bold text-white hover:text-amber-300"
                      >
                        {data.business.email}
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
                <OgdenLeadForm data={data.leadForm} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-accent py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_30%)]" />
        <div className="container relative mx-auto px-4 text-center">
          {data.finalCta.eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-100">
              {data.finalCta.eyebrow}
            </p>
          ) : null}
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold text-white md:text-6xl">
            {data.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            {data.finalCta.text}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <DataLink
              link={data.finalCta.primaryCta}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-accent shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-50"
            />
            {data.finalCta.secondaryCta ? (
              <DataLink
                link={data.finalCta.secondaryCta}
                className={`${secondaryButtonClassName} text-white`}
              />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
