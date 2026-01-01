import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return buildPageMetadata({
    title: "Thanks for Reaching Out | Ogden Construction",
    description:
      "We received your request and will follow up shortly. Learn what happens next and how to prepare for your consultation.",
    path: "/contact/thank-you",
  });
}

export default function ThankYouPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Thank You
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {"We've Received Your Request"}
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Thanks for contacting Ogden Construction. Our team will review your
            details and reach out within 1 business day to schedule a
            consultation.
          </p>
          <div className="grid gap-6 md:grid-cols-3 text-left mb-12">
            {[
              {
                title: "What happens next",
                description:
                  "We'll confirm your project goals, timeline, and budget so we can prepare recommendations.",
              },
              {
                title: "Be ready to share",
                description:
                  "Photos, inspiration links, or rough measurements help us move faster once we connect.",
              },
              {
                title: "Need something sooner?",
                description:
                  "Call us at (530) 919-7408 and we'll prioritize your request.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button className="bg-accent hover:bg-accent/90">
                View Recent Projects
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
