import Image from "next/image";

export const ContractorsRankedBadge = () => (
  <a
    href="https://www.contractorsranked.com/roofers/diamond-springs-ca"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-5 inline-block max-w-full rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
  >
    <Image
      src="https://www.contractorsranked.com/badges/contractors-ranked-listed.svg"
      alt="Listed on ContractorsRanked"
      width={240}
      height={80}
      loading="lazy"
      unoptimized
      className="block h-auto max-w-full border-0"
    />
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);
