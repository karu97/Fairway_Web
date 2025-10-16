import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hotelsfairway.com";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/hotels`, priority: 0.9 },
    { url: `${base}/tours`, priority: 0.9 },
    { url: `${base}/blog`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.7 },
  ];
}


