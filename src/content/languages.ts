/** Jeziki prevodov. `code` je del naslova strani (/prevodi/ang), `htmlLang` je oznaka BCP 47. */
export const languages = [
  { code: "ang", label: "angleščina", menuLabel: "v angleščini", htmlLang: "en" },
  { code: "hrv", label: "hrvaščina", menuLabel: "v hrvaščini", htmlLang: "hr" },
  { code: "mkd", label: "makedonščina", menuLabel: "v makedonščini", htmlLang: "mk" },
  { code: "pol", label: "poljščina", menuLabel: "v poljščini", htmlLang: "pl" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];
