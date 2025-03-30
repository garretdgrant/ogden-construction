// components/ScrollToContactButton.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const ScrollToContactButton = () => {
  const scrollToContact = () => {
    document
      .querySelector("#contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToContact}
      className="bg-accent hover:bg-accent/90 w-full sm:w-auto"
    >
      Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
};
