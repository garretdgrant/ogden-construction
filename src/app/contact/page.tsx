import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Hammer,
  CalendarDays,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import Script from "next/script";
import { buildPageMetadata, getContactJsonLd } from "@/lib/metadata";

export async function generateMetadata() {
  return buildPageMetadata({
    title:
      "Contact Ogden Construction | Free Consultations in El Dorado County",
    description:
      "Reach out to Ogden Construction for expert deck building, home additions, and remodeling services in Placerville and nearby towns. Call or request a quote today.",
    path: "/contact",
    imagePath: "/images/about/ogdenTruck.jpg",
  });
}

export default function ContactPage() {
  const jsonLd = getContactJsonLd();
  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Request a Quote
            </h1>
            <p className="text-lg text-gray-600">
              Contact us to discuss your project and receive a free
              consultation. We&apos;ll help bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <QuoteRequestForm />
                </CardContent>
              </Card>

              <div className="mt-10 p-4 bg-stone-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3 text-accent">
                  <CalendarDays className="h-5 w-5" />
                  <span className="font-medium">
                    Looking to schedule a consultation?
                  </span>
                </div>
                <p className="mt-2 text-gray-600">
                  Use the form above or call us directly to schedule a free
                  on-site consultation. We&apos;ll discuss your project needs,
                  provide expert advice, and develop a detailed proposal.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-primary mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a
                          href="tel:530-919-7408"
                          className="text-gray-600 hover:text-accent"
                        >
                          530-919-7408
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:info@ogdenconstruction.com"
                          className="text-gray-600 hover:text-accent"
                        >
                          info@ogden-construction.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Hammer className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium">License</p>
                        <p className="text-gray-600">CA #1042758</p>
                        <p className="text-gray-600">Fully Bonded & Insured</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-medium mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/ogden.construction.inc/"
                        className="text-accent hover:text-accent/80"
                        aria-label="Facebook"
                        target="_blank"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/levioakden77"
                        className="text-accent hover:text-accent/80"
                        aria-label="Instagram"
                        target="_blank"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-primary mb-4">
                    Business Hours
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>By appointment only</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 bg-stone-50 p-6 rounded-lg shadow border border-gray-200">
                <h3 className="font-bold text-primary mb-2">Service Area</h3>
                <p className="text-gray-600 mb-2">
                  We proudly serve Placerville and surrounding communities in El
                  Dorado County including, but not limited to:
                </p>
                <ul className="grid grid-cols-2 gap-1 text-gray-600">
                  <li>Placerville</li>
                  <li>Folsom</li>
                  <li>El Dorado Hills</li>
                  <li>Cameron Park</li>
                  <li>Pollock Pines</li>
                  <li>Sacramento</li>
                  <li>Camino</li>
                  <li>South Lake Tahoe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
