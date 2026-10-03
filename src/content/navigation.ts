import { languages } from "./languages";

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; href: string; children: NavLink[] };

export const navigation: NavItem[] = [
  { label: "knjige", href: "/knjige" },
  { label: "nastopi", href: "/nastopi" },
  {
    label: "branja",
    href: "/branja",
    children: [
      { label: "poezija", href: "/branja/poezija" },
      { label: "proza", href: "/branja/proza" },
      { label: "za otroke", href: "/branja/za-otroke" },
    ],
  },
  {
    label: "prevodi",
    href: "/prevodi",
    children: languages.map((l) => ({ label: l.menuLabel, href: `/prevodi/${l.code}` })),
  },
  { label: "objave", href: "/objave" },
  { label: "odmevi", href: "/odmevi" },
  { label: "galerija", href: "/galerija" },
  { label: "kontakt", href: "#kontakt" },
];
