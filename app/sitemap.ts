import { MetadataRoute } from "next";
import { TJANSTER_LIST } from "@/constants";
import { KUNDCASE_LIST } from "@/constants/kundcase";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://henribraun.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/om-oss`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tjanster`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kundcase`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const tjansterPages: MetadataRoute.Sitemap = TJANSTER_LIST.map((t) => ({
    url: `${BASE_URL}/tjanster/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const kundcasePages: MetadataRoute.Sitemap = KUNDCASE_LIST.map((c) => ({
    url: `${BASE_URL}/kundcase/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...tjansterPages, ...kundcasePages];
}
