import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://renco.co",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://renco.co/bathroom-remodel-gig-harbor",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://renco.co/kitchen-remodel-seattle",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://renco.co/exterior-remodel-gig-harbor",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://renco.co/full-home-renovation-seattle",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://renco.co/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://renco.co/blog/bathroom-remodel-cost-gig-harbor",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://renco.co/blog/bathroom-remodel-timeline",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://renco.co/blog/questions-to-ask-contractor",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
