// components/ScrollToContactButton.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type ScrollToContactButtonProps = {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

export const ScrollToContactButton = ({
  size = "lg",
  className,
}: ScrollToContactButtonProps) => {
  const scrollToContact = () => {
    document
      .querySelector("#contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToContact}
      size={size}
      className={`h-auto bg-accent hover:bg-accent/90 w-full sm:w-auto px-10 py-4 text-base font-semibold ${className ?? ""}`}
    >
      Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
};
