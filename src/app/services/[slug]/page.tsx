import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Contact } from "@/components/Contact";
import { OgdenFaqSection } from "@/components/ogden-page/OgdenFaqSection";
import { Process } from "@/components/Process";
import { AnchorNav } from "@/components/services/AnchorNav";
import { ContentSection } from "@/components/services/ContentSection";
import { MaterialCards } from "@/components/services/MaterialCards";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceJsonLd } from "@/components/services/ServiceJsonLd";
import { ServicePlaceholder } from "@/components/services/ServicePlaceholder";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/app/services/data/services";
import { buildPageMetadata } from "@/lib/metadata";
import {
  getServiceMetaDescription,
  hasRichText,
  richTextToHtml,
  stripHtml,
} from "@/lib/service-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildPageMetadata({
    title: service.metaTitle,
    description: getServiceMetaDescription(service),
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isDevelopment = process.env.NODE_ENV !== "production";
  const hasIntroContent = hasRichText(service.introContent);
  const hasAnchorNav = service.sections.length >= 4;
  const faqItems = service.faqs.map((faq) => ({
    question: faq.question,
    answer: stripHtml(faq.answer),
    answerHtml: faq.answer,
  }));
  const pagePath = `/services/${service.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <ServiceJsonLd
        service={service}
        breadcrumbs={breadcrumbs}
        path={pagePath}
      />

      <section className="border-b border-stone-200 bg-stone-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      <ServiceHero service={service} />

      {hasIntroContent || hasAnchorNav || isDevelopment ? (
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl space-y-10">
              {hasIntroContent ? (
                <div
                  className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary prose-a:text-accent prose-strong:text-primary"
                  dangerouslySetInnerHTML={{
                    __html: richTextToHtml(service.introContent),
                  }}
                />
              ) : (
                <ServicePlaceholder
                  title="Intro content pending"
                  message="Add the service intro here as 2-3 paragraphs once the copywriting phase starts."
                />
              )}

              <AnchorNav sections={service.sections} />
            </div>
          </div>
        </section>
      ) : null}

      {service.sections.length ? (
        service.sections.map((section, index) => (
          <ContentSection key={section.id} section={section} index={index} />
        ))
      ) : isDevelopment ? (
        <section className="bg-stone-50 py-20">
          <div className="container mx-auto px-4">
            <ServicePlaceholder
              title="Main body sections pending"
              message="Add the H2 content blocks in services data. This route already supports anchor IDs, alternating layouts, and optional inline images."
            />
          </div>
        </section>
      ) : null}

      <MaterialCards items={service.materialHighlights} />
      <ServiceGallery images={service.gallery} />
      <Process steps={service.process} />
      {faqItems.length ? (
        <OgdenFaqSection
          items={faqItems}
          title="Frequently Asked Questions"
          description="Answers to the most common planning, pricing, and process questions for this service."
        />
      ) : isDevelopment ? (
        <section className="bg-stone-50 py-20">
          <div className="container mx-auto px-4">
            <ServicePlaceholder
              title="FAQ content pending"
              message="Add 4-6 service-specific FAQs to activate the shared SEO FAQ block and FAQ schema for this route."
            />
          </div>
        </section>
      ) : null}
      <RelatedServices
        relatedServices={service.relatedServices}
        relatedGuides={service.relatedGuides}
      />
      <Contact />
    </>
  );
}
