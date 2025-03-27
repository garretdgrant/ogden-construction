import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      {/* <Projects /> */}
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
