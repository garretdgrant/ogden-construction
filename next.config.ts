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

const legacyLocationRedirects = [
  {
    source: "/locations/california/placerville",
    destination: "/locations-we-serve/placerville-deck-builder-construction",
    permanent: true,
  },
  {
    source: "/locations/california/el-dorado-hills",
    destination:
      "/locations-we-serve/el-dorado-hills-deck-builder-construction",
    permanent: true,
  },
  {
    source: "/locations/california/folsom",
    destination: "/locations-we-serve/folsom-deck-builder-construction",
    permanent: true,
  },
  {
    source: "/locations/california/auburn",
    destination: "/locations-we-serve/auburn-deck-builder-construction",
    permanent: true,
  },
  {
    source: "/locations/california/tahoe",
    destination:
      "/locations-we-serve/south-lake-tahoe-deck-builder-construction",
    permanent: true,
  },
  {
    source: "/locations/california/south-lake-tahoe",
    destination:
      "/locations-we-serve/south-lake-tahoe-deck-builder-construction",
    permanent: true,
  },
  {
    source: "/locations/california/napa-valley",
    destination: "/locations-we-serve/napa-valley-deck-builder-construction",
    permanent: true,
  },
  {
    source: "/locations/california/sacramento",
    destination: "/locations-we-serve/sacramento-deck-builder-construction",
    permanent: true,
  },
];

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
