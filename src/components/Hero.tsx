// import { Button } from "./ui/button";
// import Link from "next/link";
import Image from "next/image";
// import { ScrollToContactButton } from "./ScrollToContactButton";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Optimized background image */}
      <Image
        src="/images/projects/trexTahoeSquoosh.jpg"
        alt="Ogden Construction work truck"
        width={1280}
        height={960}
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
      {/* <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Custom Decks & Home Construction in Placerville
          </h1>
          <p
            className="text-xl text-white/90 mb-8"
            // style={{ animationDelay: "0.2s" }}
          >
            From stunning decks to new builds and additions, we deliver
            craftsmanship you can trust—tailored to your lifestyle and built to
            last.
          </p>
          <div
            className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0"
            // style={{ animationDelay: "0.4s" }}
          >
            <ScrollToContactButton />
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-full sm:w-auto"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};
