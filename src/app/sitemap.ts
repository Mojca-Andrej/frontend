import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { books } from "@/content/books";
import { languages } from "@/content/languages";
import { translations } from "@/content/translations";

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
  // Le strani, ki dejansko obstajajo: knjige iz books.ts in jeziki, ki imajo vsaj en prevod.
  const routes = [
    ...staticRoutes,
    ...books.map((book) => `/knjige/${book.slug}`),
    ...languages
      .filter((language) => translations.some((t) => t.language === language.code))
      .map((language) => `/prevodi/${language.code}`),
  ];
  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    priority: route === "/" ? 1 : route.startsWith("/knjige") ? 0.8 : 0.6,
  }));
}
