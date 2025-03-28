"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  const scrollToContact = () => {
    document
      .querySelector("#contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Custom Decks & Home Construction in Placerville
          </h1>
          <p
            className="text-xl text-white/90 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            From stunning decks to new builds and additions, we deliver
            craftsmanship you can trust—tailored to your
            lifestyle and built to last.
          </p>
          <div
            className="space-x-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90"
            >
              Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
