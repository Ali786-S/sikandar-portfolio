import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { projects } from "@/lib/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/experience",
    "/about",
    "/why-work-with-me",
    "/contact",
    "/privacy",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: "2026-11-03",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.7,
  }));
}
