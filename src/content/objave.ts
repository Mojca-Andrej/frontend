import type { BookSlug, IsoDate } from "@/content/types";

/**
 * Objave v revijah, zbornikih in na radiu (stran /objave).
 *
 * Nov vnos dodaj kamorkoli v seznam – stran jih sama razvrsti od najnovejše do najstarejše.
 * Datum: "2025-04" (mesec), "2025-04-12" (dan) ali "2025" (leto). Za razpon dodaj še `dateEnd`.
 * V `description` in `note` lahko uporabiš *ležeče*, **krepko** in [povezavo](https://…).
 * Slike (naslovnica in fotografije strani) shrani v public/popup/ in zaženi `npm run images`.
 *
 * Primer:
 *   {
 *     title: "Tri pesmi",
 *     publication: "Sodobnost",
 *     date: "2026-03",
 *     description: "Pesmi iz zbirke *Močvirje pozabe*",
 *     link: "https://…",                         // neobvezno: zunanja povezava (»Več o objavi«)
 *     cover: "/popup/sodobnost_naslovnica.jpeg",  // neobvezno: naslovnica revije
 *     pages: ["/popup/sodobnost_1.jpeg"],         // neobvezno: fotografije strani (»Preberi objavo«)
 *     book: "mocvirje-pozabe",                    // neobvezno: povezana knjiga
 *   },
 */
export type Publication = {
  /** Naslov objavljenega besedila. */
  title: string;
  /** Revija, zbornik ali oddaja. */
  publication: string;
  date: IsoDate;
  /** Konec razpona, npr. dvojna številka "junij–julij". */
  dateEnd?: IsoDate;
  description?: string;
  /** Kratka opomba pod opisom (npr. kasnejši izid zbirke). */
  note?: string;
  link?: string;
  cover?: string;
  pages?: string[];
  book?: BookSlug;
};

const publishedNote = "[Zbirka je izšla leta 2026.](/knjige/mocvirje-pozabe)";

export const publications: Publication[] = [
  {
    title: "Male čarovnije",
    publication: "Mlada Sodobnost",
    date: "2024-11",
    description: "Pesmi za otroke",
    cover: "/popup/ms_naslovnica.jpeg",
    pages: ["/popup/ms_1.jpeg", "/popup/ms_2.jpeg"],
  },
  {
    title: "Forgotten by birds",
    publication: "Za vzorec besede 1 – zbirka prevodov DSP",
    date: "2024-12",
    description: "Prevod pesmi *Od ptic pozabljen*",
    book: "mocvirje-pozabe",
  },
  {
    title: "Od ptic pozabljen",
    publication: "Radio Ars – Literarni nokturno",
    date: "2025-02",
    description: "Interpretacija pesmi iz neobjavljene zbirke pesmi *Močvirje pozabe*",
    note: publishedNote,
    link: "https://ars.rtvslo.si/podkast/literarni-nokturno/289/175112764",
    book: "mocvirje-pozabe",
  },
  {
    title: "Knjižničarka",
    publication: "Mentor",
    date: "2025-03",
    description: "Kratka zgodba",
    cover: "/popup/mentor_naslovna.jpeg",
    pages: ["/popup/mentor_objava.jpeg"],
  },
  {
    title: "Močvirje pozabe",
    publication: "Poetikon 124–125",
    date: "2025-04",
    description: "Pesmi iz še neobjavljene pesniške zbirke",
    note: publishedNote,
    cover: "/popup/poetikon_naslovna.jpeg",
    pages: ["/popup/poetikon_1.jpeg", "/popup/poetikon_2.jpeg", "/popup/poetikon_3.jpeg"],
    book: "mocvirje-pozabe",
  },
  {
    title: "Pesem Oblak in zgodba Prazna knjiga",
    publication: "Galeb, revija za otroke, ki izhaja v Trstu",
    date: "2025-04",
    description: "Za otroke",
    cover: "/popup/galeb_naslovnica.jpeg",
    pages: ["/popup/galeb_1.jpeg", "/popup/galeb_2.jpg"],
  },
  {
    title: "Žejna in druge pesmi",
    publication: "Vrabec Anarhist",
    date: "2025-05",
    description: "Pesmi iz še neobjavljene pesniške zbirke",
    note: publishedNote,
    link: "https://www.vrabecanarhist.si/2025/05/22/zejna-in-druge-pesmi/",
    book: "mocvirje-pozabe",
  },
  {
    title: "Pet pesmi",
    publication: "Literatura",
    date: "2025-06",
    dateEnd: "2025-07",
    description: "Pesmi iz še neobjavljene pesniške zbirke",
    cover: "/popup/literatura_naslovna.jpeg",
    pages: ["/popup/literatura_1.jpeg", "/popup/literatura_2.jpeg", "/popup/literatura_3.jpeg"],
  },
];
