import Link from "next/link";
import type { ContentSection } from "@/app/services/data/services";

type AnchorNavProps = {
  sections: ContentSection[];
};

export const AnchorNav = ({ sections }: AnchorNavProps) => {
  if (sections.length < 4) {
    return null;
  }

  return (
    <nav
      aria-label="On-page navigation"
      className="rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-lg backdrop-blur"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Jump To
      </p>
      <div className="flex flex-wrap gap-3">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {section.heading}
          </Link>
        ))}
      </div>
    </nav>
  );
};
