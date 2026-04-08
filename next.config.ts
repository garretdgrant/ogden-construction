// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Enable analyzer via env var
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const legacyLocationMappings = [
  {
    legacySlugs: ["placerville"],
    destination: "/locations-we-serve/placerville-deck-builder-construction",
  },
  {
    legacySlugs: ["el-dorado-hills"],
    destination:
      "/locations-we-serve/el-dorado-hills-deck-builder-construction",
  },
  {
    legacySlugs: ["folsom"],
    destination: "/locations-we-serve/folsom-deck-builder-construction",
  },
  {
    legacySlugs: ["auburn"],
    destination: "/locations-we-serve/auburn-deck-builder-construction",
  },
  {
    legacySlugs: ["tahoe", "south-lake-tahoe"],
    destination:
      "/locations-we-serve/south-lake-tahoe-deck-builder-construction",
  },
  {
    legacySlugs: ["napa-valley"],
    destination: "/locations-we-serve/napa-valley-deck-builder-construction",
  },
  {
    legacySlugs: ["sacramento"],
    destination: "/locations-we-serve/sacramento-deck-builder-construction",
  },
];

const legacyLocationRedirects = legacyLocationMappings.flatMap(
  ({ legacySlugs, destination }) =>
    legacySlugs.flatMap((slug) => [
      {
        source: `/locations/${slug}`,
        destination,
        permanent: true,
      },
      {
        source: `/locations/california/${slug}`,
        destination,
        permanent: true,
      },
    ]),
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.edcwebdesign.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return legacyLocationRedirects;
  },
};

export default withAnalyzer(nextConfig);
