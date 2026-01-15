import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ScrollToContactButton } from "./ScrollToContactButton";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Optimized background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projects/trexTahoeSquoosh.jpg"
          alt="Custom Trex deck construction in South Lake Tahoe"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-full h-[110vh] object-cover scale-105"
        />
      </div>

      {/* Sophisticated gradient overlay with wood grain hint */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40 z-0" />

      {/* Subtle wood grain overlay on dark background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
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
        ></div>
      </div>

      {/* Decorative wood-inspired accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-1 h-32 bg-accent/10 rotate-12 blur-sm z-0" />
      <div className="absolute bottom-32 left-24 w-1 h-24 bg-accent/15 -rotate-6 blur-sm z-0" />

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-4xl">
          {/* Animated headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] opacity-0 animate-fade-up">
            <span className="block">Deck Builder &</span>
            <span className="block text-white/90">Home Additions</span>
            <span className="block text-accent text-4xl md:text-5xl lg:text-6xl mt-2 font-playfair italic">
              Placerville & South Lake Tahoe
            </span>
          </h1>

          {/* Animated subheadline */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-1 font-light">
            Custom Trex, composite, and redwood decks, additions, and remodels
            across Placerville, South Lake Tahoe, El Dorado Hills, Folsom, and
            Sacramento.{" "}
            <span className="font-medium text-white">
              Clear scopes, realistic timelines, built to last.
            </span>
          </p>

          {/* CTA buttons with staggered animations */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-10 opacity-0 animate-fade-up stagger-2">
            <ScrollToContactButton className="text-base py-6 font-semibold" />
            <Link href="/contact" className="w-full sm:w-auto group">
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 w-full sm:w-auto backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/20 text-base py-6"
              >
                Request a Local Quote
              </Button>
            </Link>
            <Link href="tel:530-919-7408" className="w-full sm:w-auto group">
              <Button
                variant="secondary"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/95 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] text-base py-6 font-semibold"
              >
                Call (530) 919-7408
              </Button>
            </Link>
          </div>
          {/* Quick links with refined styling */}
          <nav className="mb-8 opacity-0 animate-fade-up stagger-3">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-base text-white/80 border-l-2 border-accent/40 pl-6">
              <a
                href="#services"
                className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                Services
              </a>
              <span className="text-white/30">·</span>
              <a
                href="#service-area"
                className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                Service area
              </a>
              <span className="text-white/30">·</span>
              <a
                href="#projects"
                className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                Projects
              </a>
              <span className="text-white/30">·</span>
              <a
                href="#reviews"
                className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                Reviews
              </a>
              <span className="text-white/30">·</span>
              <a
                href="#faq"
                className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                FAQs
              </a>
            </div>
          </nav>

          {/* Trust badges with enhanced visual design */}
          <div className="flex flex-wrap items-center gap-3 text-sm opacity-0 animate-fade-up stagger-4">
            <div className="rounded-lg bg-white/15 backdrop-blur-md px-5 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span className="text-white font-medium">Licensed & Insured</span>
              <span className="text-white/70 ml-2">(CA-1042758)</span>
            </div>
            <div className="rounded-lg bg-white/15 backdrop-blur-md px-5 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span className="text-white font-medium">
                Local, Hands-On Crew
              </span>
            </div>
            <div className="rounded-lg bg-white/15 backdrop-blur-md px-5 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span className="text-white/90">Reviews on </span>
              <a
                href="https://www.yelp.com/biz/ogden-construction-placerville-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-accent transition-colors underline-offset-2 underline"
              >
                Yelp
              </a>
              <span className="text-white/70 mx-1">&</span>
              <a
                href="https://www.facebook.com/ogden.construction.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-accent transition-colors underline-offset-2 underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
