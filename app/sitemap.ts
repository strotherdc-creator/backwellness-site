import type { MetadataRoute } from "next";
import { getAllServiceAreaSlugs } from "@/lib/service-areas";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/chiropractic",
    "/services/piezowave",
    "/services/spinal-decompression",
    "/services/laser-led",
    "/services/postural-screenings",
    "/services/nutrition",
    "/services/wellness-care",
    "/services/chiropractic-care-kids",
    "/services/detoxification",
    "/patients",
    "/reviews",
    "/appointment",
    "/contact",
    "/service-area",
  ];

  const serviceAreaRoutes = getAllServiceAreaSlugs().map(
    (slug) => `/service-area/${slug}`,
  );

  const now = new Date();

  return [...staticRoutes, ...serviceAreaRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/service-area") ? "monthly" : "weekly",
    priority:
      path === ""
        ? 1
        : path === "/service-area" || path.startsWith("/services")
          ? 0.8
          : path.startsWith("/service-area/")
            ? 0.7
            : 0.6,
  }));
}
