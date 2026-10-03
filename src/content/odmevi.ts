import type { BookSlug, IsoDate } from "@/content/types";

/**
 * Odmevi: pogovori, kritike, članki in posnetki o knjigah (stran /odmevi).
 *
 * Nov vnos dodaj kamorkoli v seznam – stran ga sama uvrsti pod pravo knjigo in razvrsti
 * od najnovejšega do najstarejšega. Datum: "2025-04-12" (dan), "2025-04" (mesec) ali "2025" (leto);
 * če datuma ne poznaš, ga izpusti.
 *
 * Primer:
 *   {
 *     title: "Pogovor o pesniški zbirki v oddaji Kultura zdravi – umetnost lajša",
 *     source: "Radio Maribor",
 *     kind: "radio",          // radio | podkast | clanek | intervju | video | odlomki
 *     date: "2026-08-07",     // neobvezno
 *     url: "https://…",
 *     book: "mocvirje-pozabe",
 *     people: "Brigita Mohorič", // neobvezno: novinar, avtor zapisa, sogovorniki
 *     note: "od 7:55 naprej",    // neobvezno: kratka opomba (npr. minuta posnetka)
 *   },
 */
export type OdmevKind = "radio" | "podkast" | "clanek" | "intervju" | "video" | "odlomki";

export type Odmev = {
  /** Kaj je to: naslov članka ali kratek opis prispevka. */
  title: string;
  /** Medij, npr. "Radio Maribor", "Primorske novice". */
  source: string;
  kind: OdmevKind;
  date?: IsoDate;
  url: string;
  book: BookSlug;
  /** Novinar, avtor zapisa ali sogovorniki. */
  people?: string;
  /** Kratka opomba, npr. od katere minute dalje poslušati. */
  note?: string;
};

export const odmevi: Odmev[] = [
  // Ostanek umrle zvezde
  {
    title: "Mojca Andrej izdala svojo tretjo pesniško zbirko",
    source: "Maribor24",
    kind: "clanek",
    date: "2020-11-10",
    url: "https://maribor24.si/kultura/mojca-andrej-izdala-svojo-tretjo-pesnisko-zbirko",
    book: "ostanek-umrle-zvezde",
  },

  // Kavč učiteljice Veronike
  {
    title: "Mojca Andrej: »Zgodba učiteljice Veronike je pripoved o današnji družbi, o mnogih med nami«",
    source: "Radio Maribor",
    kind: "clanek",
    date: "2023-01-24",
    url: "https://radiomaribor.rtvslo.si/clanek/mojca-andrej-zgodba-uciteljice-veronike-je-pripoved-o-danasnji-druzbi-o-mnogih-med-nami/655484",
    book: "kavc-uciteljice-veronike",
    people: "Brigita Mohorič",
  },
  {
    title: "Predstavitev romana v Rušah 15. 12. 2022 – kratki video",
    source: "Ruški video Utrip",
    kind: "video",
    date: "2022-12-16",
    url: "https://www.youtube.com/watch?v=uT__ARDYqTc",
    book: "kavc-uciteljice-veronike",
  },
  {
    title: "Pogovor o romanu v oddaji Kultura zdravi – umetnost lajša",
    source: "Radio Maribor",
    kind: "radio",
    date: "2023-01-06",
    url: "https://radiomaribor.rtvslo.si/podkast/kultura-zdravi-umetnost-lajsa/155779478/174926726",
    book: "kavc-uciteljice-veronike",
    people: "Brigita Mohorič",
    note: "od 7:55 naprej",
  },
  {
    title: "Podkast Zorni kot #18: »Otroci mislijo, da so vsi odgovori na Googlu oziroma le klik stran«",
    source: "Radio Maribor",
    kind: "podkast",
    date: "2023-02-03",
    url: "https://radiomaribor.rtvslo.si/clanek/podcast-zorni-kot-18-otroci-mislijo-da-so-vsi-odgovori-na-googlu-oziroma-le-klik-stran/656679",
    book: "kavc-uciteljice-veronike",
    people: "Nataša Rižnar",
  },
  {
    title: "Oddaja Pod zvezdami",
    source: "Radio Slovenske gorice",
    kind: "radio",
    date: "2023-03-02",
    url: "https://www.rsg.si/2023/03/02/pod-zvezdami-mojca-andrej/",
    book: "kavc-uciteljice-veronike",
  },
  {
    title: "Zapis o romanu",
    source: "Kulturno-medijski center Slovenije",
    kind: "clanek",
    date: "2023-10-09",
    url: "https://homocumolat.com/2023/10/09/mojca-andrej-kavc-uciteljice-veronike/",
    book: "kavc-uciteljice-veronike",
    people: "Matej Krajnc",
  },
  {
    title: "Do sijaja zloščeno ogledalo",
    source: "Primorske novice",
    kind: "clanek",
    date: "2024-06-21",
    url: "https://primorske.si/kultura/knjizna-polica/do-sijaja-zlosceno-ogledalo/",
    book: "kavc-uciteljice-veronike",
    people: "Lučka Lešnik",
  },
  {
    title: "V muzeju Splošne knjižnice Ljutomer predstavili knjigo Kavč učiteljice Veronike, avtorice Mojce Andrej",
    source: "Prlekija-on.net",
    kind: "clanek",
    date: "2024-11-22",
    url: "https://www.prlekija-on.net/lokalno/36675/v-muzeju-splosne-knjiznice-ljutomer-predstavili-knjigo-kavc-uciteljice-veronike-avtorice-mojce-andrej.html",
    book: "kavc-uciteljice-veronike",
  },
  {
    title: "Pogovor z Mojco Andrej: »Peščena ura ne tiktaka, neslišno polzi«",
    source: "Ars Litera",
    kind: "intervju",
    date: "2023-02-07",
    url: "https://www.arslitera.org/2023/02/07/pescena-ura-ne-tiktaka-neslisno-polzi-pogovor-z-mojco-andrej/",
    book: "kavc-uciteljice-veronike",
  },
  {
    title: "Odlomki iz romana Kavč učiteljice Veronike",
    source: "Ars Litera",
    kind: "odlomki",
    date: "2023-02-07",
    url: "https://www.arslitera.org/2023/02/07/kavc-uciteljice-veronike-odlomki/",
    book: "kavc-uciteljice-veronike",
  },

  // Močvirje pozabe
  {
    title: "Pogovor o pesniški zbirki v oddaji Kultura zdravi – umetnost lajša",
    source: "Radio Maribor",
    kind: "radio",
    date: "2026-08-07",
    url: "https://radiomaribor.rtvslo.si/podkast/kultura-zdravi-umetnost-lajsa/155779478/175241147",
    book: "mocvirje-pozabe",
    people: "Brigita Mohorič",
  },
  {
    title: "Prispevek o pesniški zbirki v oddaji Svet kulture",
    source: "Radio Ars",
    kind: "radio",
    date: "2026-08-11",
    url: "https://ars.rtvslo.si/podkast/svet-kulture/64838778/175241959",
    book: "mocvirje-pozabe",
    people: "Brigita Mohorič, Žiga Bratoš",
    note: "1.–6. minuta",
  },

  // Agica, mala čarovnica
  {
    title: "Video s 15. Pohorske pravljice – glasbena pravljica Agica, mala čarovnica",
    source: "Letni oder Ruše in Video produkcija Plamen",
    kind: "video",
    date: "2026-08-19",
    url: "https://www.facebook.com/reel/1808740247206517",
    book: "agica-mala-carovnica",
  },
];
