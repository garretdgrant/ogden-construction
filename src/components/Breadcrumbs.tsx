import Link from "next/link";
import type { Crumb } from "@/lib/breadcrumbs";

type BreadcrumbsProps = {
  items: Crumb[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center">
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="hover:text-accent">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-gray-800">
                  {crumb.label}
                </span>
              )}
              {!isLast && <span className="mx-2 text-gray-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
