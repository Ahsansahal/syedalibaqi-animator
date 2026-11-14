import { getAllNormalizedProjects } from "@/data/seo";
import { site } from "@/data/site";
import { webCategoryPages } from "@/data/webPortfolio";

export default function sitemap() {
  const now = new Date();

  const corePages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/work", priority: 0.95, changeFrequency: "weekly" },
    {
      path: "/website-design-development",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.85, changeFrequency: "monthly" },
    { path: "/case-study", priority: 0.8, changeFrequency: "monthly" },
    { path: "/clients", priority: 0.75, changeFrequency: "monthly" },
    { path: "/album-art", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  ].map((entry) => ({
    url: `${site.url}${entry.path}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const categoryPages = Object.keys(webCategoryPages).map((slug) => ({
    url: `${site.url}/website-design-development/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const projectPages = getAllNormalizedProjects().map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...corePages, ...categoryPages, ...projectPages];
}
