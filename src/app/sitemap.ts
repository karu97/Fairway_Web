import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hotelsfairway.com";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${base}/koslanda-plantation`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${base}/hotels`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${base}/tours`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}