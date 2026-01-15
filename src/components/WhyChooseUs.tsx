import { Check } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";

const reasons = [
  "Precision craftsmanship from foundation to finish — we build it right the first time", // updated
  "Locally trusted across Placerville, Tahoe, El Dorado Hills, Folsom, and Sacramento", // updated
  "Custom decks, additions, and new builds tailored to your vision and lifestyle", // updated
  "Tight-knit, professional team committed to quality, communication, and timelines", // updated
];

export const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-stone-50 texture-wood diagonal-divider-reverse relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            A local, hands-on team focused on craftsmanship, communication, and
            a finished product that lasts. Learn more{" "}
            <Link
              href="/about"
              className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
            >
              about our team
            </Link>{" "}
            or view recent{" "}
            <Link
              href="/portfolio"
              className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
            >
              deck builds
            </Link>
            .
          </p>
        </div>

        {/* Reason cards with diagonal stagger effect */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={`p-8 flex items-start space-x-5 border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white group hover:-translate-y-1 opacity-0 animate-diagonal-slide stagger-${index + 1} relative overflow-hidden`}
            >
              {/* Decorative accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

              {/* Enhanced check icon with background */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg group-hover:bg-accent/20 transition-all duration-500"></div>
                <Check className="h-7 w-7 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed font-inter group-hover:text-gray-900 transition-colors duration-300">
                {reason}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
