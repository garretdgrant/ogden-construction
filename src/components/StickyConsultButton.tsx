"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MessageSquareText } from "lucide-react";
import { usePathname } from "next/navigation";
import { ContactModalTrigger } from "@/components/ContactModalTrigger";

export function StickyConsultButton() {
  const pathname = usePathname();
  const [visibility, setVisibility] = useState({
    pathname,
    isVisible: false,
  });
  const isVisible = visibility.pathname === pathname && visibility.isVisible;

  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main");
    const pageHeading = main?.querySelector("h1");
    const hero =
      pageHeading?.closest<HTMLElement>("[data-page-hero], section") ??
      main?.querySelector<HTMLElement>("[data-page-hero], section") ??
      main?.querySelector<HTMLElement>(":scope > div");
    const header = document.querySelector<HTMLElement>("header");
    const footer = document.querySelector<HTMLElement>("footer");

    if (!hero || !footer) {
      setVisibility({ pathname, isVisible: false });
      return;
    }

    let animationFrame = 0;

    const updateVisibility = () => {
      animationFrame = 0;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      const footerTop = footer.getBoundingClientRect().top;
      const hasPassedHero = heroBottom <= headerBottom;
      const hasReachedFooter = footerTop <= window.innerHeight;

      setVisibility((current) => {
        const nextIsVisible = hasPassedHero && !hasReachedFooter;

        if (
          current.pathname === pathname &&
          current.isVisible === nextIsVisible
        ) {
          return current;
        }

        return { pathname, isVisible: nextIsVisible };
      });
    };

    const requestVisibilityUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", requestVisibilityUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestVisibilityUpdate);

    return () => {
      window.removeEventListener("scroll", requestVisibilityUpdate);
      window.removeEventListener("resize", requestVisibilityUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [pathname]);

  return (
    <div
      aria-hidden={!isVisible}
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 pb-[env(safe-area-inset-bottom)] transition-[opacity,transform,visibility] duration-500 ease-out motion-reduce:transition-none print:hidden ${
        isVisible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-4 opacity-0"
      }`}
    >
      <ContactModalTrigger
        className="group pointer-events-auto flex min-h-14 w-full max-w-sm items-center justify-between gap-4 overflow-hidden rounded-xl border border-amber-300/50 bg-stone-900 px-5 py-3 text-left text-white shadow-[0_14px_35px_rgba(28,25,23,0.28)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-stone-800 hover:shadow-[0_18px_42px_rgba(28,25,23,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 sm:w-auto sm:min-w-64"
        aria-label="Open the contact form for a free consultation"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-300 text-stone-900 shadow-inner shadow-white/30 transition-transform duration-300 group-hover:rotate-[-3deg] group-hover:scale-105">
            <MessageSquareText className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-playfair text-lg font-bold tracking-tight">
            Get Free Consult
          </span>
        </span>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-amber-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </ContactModalTrigger>
    </div>
  );
}
