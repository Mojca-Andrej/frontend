import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { bookSlugs } from "@/content/types";
import { languages } from "@/content/languages";

const staticRoutes = [
  "/",
  "/knjige",
  "/nastopi",
  "/branja",
  "/branja/poezija",
  "/branja/proza",
  "/branja/za-otroke",
  "/prevodi",
  "/objave",
  "/odmevi",
  "/galerija",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...bookSlugs.map((slug) => `/knjige/${slug}`),
    ...languages.map((language) => `/prevodi/${language.code}`),
  ];
  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    priority: route === "/" ? 1 : route.startsWith("/knjige") ? 0.8 : 0.6,
  }));
}
