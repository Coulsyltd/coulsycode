import type { MetadataRoute } from "next";

const BASE_URL = "https://coulsycode.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/services",
    "/services/websites",
    "/services/applications",
    "/services/seo",
    "/services/ecommerce",
    "/solutions",
    "/solutions/visibility",
    "/solutions/leads",
    "/solutions/operations",
    "/solutions/scale",
    "/capabilities",
    "/capabilities/front-end",
    "/capabilities/back-end",
    "/capabilities/mobile",
    "/capabilities/ai",
    "/portfolio",
    "/about",
    "/process",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));
}


