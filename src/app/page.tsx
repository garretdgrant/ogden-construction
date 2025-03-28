import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ogden Construction | Deck Builders & Home Additions in Placerville, Folsom & Sacramento",
  description:
    "Expert deck construction, home additions, and remodeling services in Placerville, Folsom, El Dorado Hills, Sacramento, and Tahoe. Built to last. Trusted by homeowners across El Dorado and Sacramento counties.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
