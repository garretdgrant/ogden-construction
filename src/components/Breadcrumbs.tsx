import Link from "next/link";
import type { Crumb } from "@/lib/breadcrumbs";

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
  linkClassName?: string;
  currentClassName?: string;
  separatorClassName?: string;
};

export const Breadcrumbs = ({
  items,
  className,
  linkClassName = "hover:text-accent",
  currentClassName = "text-gray-800",
  separatorClassName = "mx-2 opacity-60",
}: BreadcrumbsProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-gray-600 ${className ?? ""}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center">
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className={linkClassName}>
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className={`font-semibold ${currentClassName}`}
                >
                  {crumb.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className={separatorClassName}>
                  &gt;
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
