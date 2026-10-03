import type { BookSlug, IsoDate } from "@/content/types";

/**
 * Nastopi: gledališke predstave, kamišibaj, magnetno gledališče, literarni nastopi,
 * knjižni sejmi in razstave (stran /nastopi).
 *
 * Nov vnos dodaj kamorkoli v seznam – stran ga sama uvrsti pod pravo leto in razvrsti
 * od najnovejšega do najstarejšega. Datum: "2025-04-12" (dan), "2025-04" (mesec) ali "2025" (leto).
 * Datuma in kraja NE piši v besedilo – prikažeta se sama (iz polj `date` in `place`).
 * Oblikovanje besedila: *ležeče* (naslovi del), **krepko**, [povezava](https://…).
 *
 * Primer:
 *   {
 *     date: "2026-05-14",
 *     category: "literarni-nastop", // gledalisce | kamisibaj | magnetno-gledalisce | literarni-nastop | sejem | razstava
 *     abroad: true,                  // neobvezno: nastop v tujini
 *     title: "Pesniški večer",       // neobvezno: ime dogodka ali dela (poudarjeno)
 *     text: "Predstavitev pesniške zbirke *Močvirje pozabe*.", // neobvezno
 *     place: "Center za poezijo Tomaža Šalamuna, Ljubljana",    // neobvezno
 *     credits: [{ label: "Brali so", value: "Mojca Andrej in Peter Andrej" }], // neobvezno
 *     book: "mocvirje-pozabe",       // neobvezno: povezava s knjigo
 *   },
 *
 * Večdnevni dogodek: dodaj še `dateEnd: "2026-05-16"`.
 */
export type PerformanceCategory =
  | "gledalisce"
  | "kamisibaj"
  | "magnetno-gledalisce"
  | "literarni-nastop"
  | "sejem"
  | "razstava";

export type Credit = { label: string; value: string };

export type Performance = {
  date: IsoDate;
  /** Zadnji dan večdnevnega dogodka ali konec obdobja (npr. 2012–2019). */
  dateEnd?: IsoDate;
  category: PerformanceCategory;
  /** Nastop v tujini. */
  abroad?: boolean;
  /** Ime dogodka ali dela, prikazano poudarjeno. */
  title?: string;
  /** Opis (RichText). */
  text?: string;
  place?: string;
  credits?: Credit[];
  book?: BookSlug;
};

export const categoryLabels: Record<PerformanceCategory, string> = {
  gledalisce: "Gledališče",
  kamisibaj: "Kamišibaj",
  "magnetno-gledalisce": "Magnetno gledališče",
  "literarni-nastop": "Literarni nastop",
  sejem: "Knjižni sejem",
  razstava: "Razstava",
};

/** Kratki opisi vrst nastopov (prikazani nad časovnico). */
export const categoryDescriptions: Partial<Record<PerformanceCategory, string>> = {
  gledalisce: "**MOR** (Mladi oder Ruše) je Cezam (Center za mlade Ruše) zasnoval leta 2014 z režiserko Tanjo Lužar.",
};

/** Države gostovanj (prikazano v uvodu strani). */
export const abroadCountries =
  "Hrvaška, Bosna in Hercegovina, Srbija, Severna Makedonija, Bolgarija, Avstrija, Španija (Mallorca), Maroko.";

export const nastopi: Performance[] = [
  // 2026
  {
    date: "2026-08-19",
    category: "magnetno-gledalisce",
    title: "15. Pohorska pravljica",
    text: "Predstava (glasbena pravljica) *Agica, mala čarovnica*.",
    place: "Trg vstaje pred občino Ruše",
    credits: [
      { label: "Nastopali", value: "Mojca Andrej, Barbara Gabrielle, Lucie in Matjaž Dajčar ter Peter Andrej (avtor glasbe in songov)" },
      { label: "Organizatorji", value: "Glazerjeva domačija v sodelovanju z Javnim zavodom Športni park Ruše, Klubom KU KU ter Občino Ruše" },
    ],
    book: "agica-mala-carovnica",
  },

  // 2025
  {
    date: "2025-05-14",
    category: "literarni-nastop",
    title: "Pesniški večer",
    text: "Ob izidu nove številke revije Poetikon (124–125).",
    place: "Center za poezijo Tomaža Šalamuna, Ljubljana",
    credits: [
      {
        label: "Brali so",
        value:
          "Mojca Andrej, Sonja Votolen, Glorjana Veber, Matej Krajnc, Taja Nareks, Neža Selič, Sandi Radovan, Marko Elsner Grošelj, Tanja P. Hohler, Jernej Kusterle, Ivan Dobnik",
      },
    ],
  },
  {
    date: "2025-03-08",
    category: "literarni-nastop",
    title: "Glas avtoric",
    text: "Osmomarčevsko branje avtoric na Društvu slovenskih pisateljev (DSP).",
    credits: [
      {
        label: "Brali so",
        value: "Lela B. Njatin, Jana Kolarič, Sara Špelec, Glorjana Veber, Ana Porenta, Mojca Andrej in Matej Krajnc",
      },
    ],
  },
  {
    date: "2025-02-08",
    category: "literarni-nastop",
    title: "Za Prešernom: literarni večer DSP",
    text: "Branje novih članic in članov DSP.",
    place: "Dvorana Alme Karlin, Cankarjev dom, Ljubljana",
    credits: [{ label: "Brali so", value: "Mojca Andrej, Sanja Rozman, Barbara Hanuš, Igor Karlovšek in Jasmin B. Frelih" }],
  },
  {
    date: "2025-02",
    category: "literarni-nastop",
    abroad: true,
    title: "Riječka književna jutra",
    text: "Branje na dogodku.",
    place: "Book caffe Dnevni boravak, Rijeka, Hrvaška",
  },

  // 2024
  {
    date: "2024-11-21",
    category: "literarni-nastop",
    text: "Predstavitev romana *Kavč učiteljice Veronike*. Z avtorico se je pogovarjala direktorica Splošne knjižnice Ljutomer Vesna Laissani.",
    place: "Muzej Splošne knjižnice Ljutomer",
    book: "kavc-uciteljice-veronike",
  },
  {
    date: "2024-11",
    category: "razstava",
    title: "Ustvarjalna dvojina",
    text: "Razstava ilustracij slikanice *Agica, mala čarovnica*. Predstavlja ustvarjalni tandem pisateljice Mojce Andrej in ilustratorke Darke Erdelji, ki sta združili moči ob slikanici *Agica, mala čarovnica*. Na razstavi so originalne ilustracije Darke Erdelji. Razstavo je postavila Zdenka Gajser.",
    place: "Mariborska knjižnica – Pionirska knjižnica v TPC City",
    book: "agica-mala-carovnica",
  },
  {
    date: "2024-10-29",
    category: "literarni-nastop",
    title: "Večer grozljivih zgodb",
    text: "Branje kratke zgodbe (Knjižničarka) v organizaciji Društva slovenskih pisateljev.",
    place: "Prostori DSP, Ljubljana",
  },
  {
    date: "2024-10-10",
    category: "literarni-nastop",
    title: "Po Maistrovi lirični poti",
    text: "Ob dvojnem jubileju. Branje poezije v organizaciji Društva slovenskih pisateljev in JAK.",
    place: "Kibla Maribor",
    credits: [{ label: "Brali so", value: "Mojca Andrej, Borut Gombač, Marjan Pungartnik in Matej Krajnc" }],
  },
  {
    date: "2024-09-19",
    category: "literarni-nastop",
    title: "Literarni večer",
    text: "Predstavitev romana *Kavč učiteljice Veronike*. Z avtorico se je pogovarjal Oskar Kranjc. Večer v okviru Glazerjevega bralnega kluba so v sodelovanju izvedli Zavod Rast Ruše in Glazerjeva domačija.",
    place: "Mala dvorana Zavoda Rast Ruše",
    book: "kavc-uciteljice-veronike",
  },
  {
    date: "2024-08-12",
    category: "kamisibaj",
    title: "Rege ali žabje frke",
    text: "Glasbeni kamišibaj.",
    place: "Trg pred občino Ruše, Zavod Rast Ruše",
    credits: [
      { label: "Kamišibaj predstavlja", value: "Mojca Andrej" },
      { label: "Pojeta", value: "Barbara Gabrielle in Peter Andrej" },
    ],
  },
  {
    date: "2024-06-15",
    category: "literarni-nastop",
    text: "Knjižni sejem Na preži.",
    place: "Murska Sobota",
  },
  {
    date: "2024-05-22",
    category: "literarni-nastop",
    title: "Pijani čoln v Delti jezika, na Tnalu pesmi pa Prehodi",
    text: "Literarni performans na 27. festivalu Slovenski dnevi knjige Na preži v Mariboru.",
    place: "Grajski trg Maribor",
    credits: [{ label: "Nastopali", value: "Mojca Andrej, Peter Andrej, Bojan Tomažič in Bojan Sedmak" }],
  },
  {
    date: "2024-04-19",
    dateEnd: "2024-04-28",
    category: "literarni-nastop",
    abroad: true,
    title: "Festival pesnikov petih kontinentov (Poets from Five Continents)",
    place: "Maroko (Laayoune, Safi, Tanger, Meknes in Marakeš)",
    credits: [
      {
        label: "Organizator",
        value:
          "Al Kalima Institution Of Culture And Arts In Safi, The Forum Of The Sahraoui Woman, Development And Democracy, Laayoune, Maroko",
      },
    ],
  },
  {
    date: "2024",
    category: "sejem",
    text: "Revija za književnost *Mlada Sodobnost* na 40. slovenskem knjižnem sejmu, na stojnici založbe Sodobnost.",
    place: "Gospodarsko razstavišče, Ljubljana",
  },

  // 2023
  {
    date: "2023-11-15",
    category: "literarni-nastop",
    title: "13. Glazerjevi dnevi na gostovanju",
    text: "Predstavitev knjige Mojce Andrej *Kavč učiteljice Veronike*. Nekatere Veronikine pesmi iz *Blagajne misli* je odigral Peter Andrej. Z avtorico se je pogovarjal Marjan Pungartnik.",
    place: "Literarna hiša Maribor",
    book: "kavc-uciteljice-veronike",
  },
  {
    date: "2023-11-09",
    category: "literarni-nastop",
    text: "Avtorico romana *Kavč učiteljice Veronike* je poglobljeno predstavila Barbara Rigler. Tatjana Vidmar in avtorica sta prebrali odlomke iz knjige. Nekatere Veronikine pesmi iz *Blagajne misli* je odigral Peter Andrej.",
    place: "Center za poezijo Tomaža Šalamuna, Ljubljana",
    book: "kavc-uciteljice-veronike",
  },
  {
    date: "2023-11-07",
    category: "literarni-nastop",
    text: "Predstavitev romana *Kavč učiteljice Veronike*. Nekatere Veronikine pesmi iz *Blagajne misli* je odigral Peter Andrej. Z avtorico se je pogovarjal Matej Krajnc.",
    place: "Antika knjigarna Celje",
    book: "kavc-uciteljice-veronike",
  },
  {
    date: "2023-10-03",
    category: "literarni-nastop",
    text: "Predstavitev romana *Kavč učiteljice Veronike*. Z avtorico se je pogovarjala Metka Demšar Goljevšček.",
    place: "Konjeniški park Starošince – Nazaj na konja",
    book: "kavc-uciteljice-veronike",
  },
  {
    date: "2023-05-18",
    category: "literarni-nastop",
    abroad: true,
    text: "Branje na predstavitvi projekta *VSI SMO MI ENO/SVI SMO MI JEDNO*.",
    place: "Muzej suvremene umjetnosti, Zagreb, Hrvaška",
  },
  {
    date: "2023",
    category: "magnetno-gledalisce",
    title: "12. Pohorska pravljica",
    text: "Predstava (muzikal) *Jezernik, povodni mož iz Črnega jezera*. V muzikal sta ga v svoje mini magnetno gledališče ujela Mojca Andrej in Peter Andrej.",
    credits: [
      {
        label: "Soorganizatorji",
        value: "Letni oder Ruše, Zavod Rast Ruše, Glazerjeva domačija / Glazerjevi dnevi, Klub KU KU in Občina Ruše",
      },
    ],
  },

  // 2022
  {
    date: "2022-12",
    category: "magnetno-gledalisce",
    title: "12. Glazerjevi dnevi",
    text: "Muzikal za otroke *Agica, mala čarovnica*.",
    credits: [
      { label: "Gostitelj", value: "Zavod Rast Ruše, Občina Ruše" },
      { label: "Nastopali", value: "Mojca Andrej, Peter Andrej in Alenka Cilenšek" },
    ],
    book: "agica-mala-carovnica",
  },
  {
    date: "2022-11-29",
    category: "literarni-nastop",
    text: "Prva predstavitev romana *Kavč učiteljice Veronike* v soorganizaciji založbe Litera in šole. Z avtorico se je pogovarjala urednica založbe Gabriela Babnik Ouattara.",
    place: "OŠ Prežihovega Voranca Maribor",
    book: "kavc-uciteljice-veronike",
  },
  {
    date: "2022-10",
    category: "literarni-nastop",
    text: "Prisotnost na predstavitvi slikanice *Agica, mala čarovnica*, ki jo je študentka predšolske vzgoje Eva Tomažin predstavila in analizirala pri predmetu Mladinska književnost, mentorica dr. Milena Mileva Blažić.",
    place: "Pedagoška fakulteta v Ljubljani",
    book: "agica-mala-carovnica",
  },
  {
    date: "2022-06",
    category: "magnetno-gledalisce",
    abroad: true,
    title: "Agica, mala čarovnica",
    text: "Premierna predstava z magnetnimi lutkami, gostovanje v Avstriji. Povabilo mag. Susanne Weitlaner (Kulturno društvo Člen 7 za avstrijsko Štajersko) in Tatjane Vučajnk, predstava za otroke, ki govorijo slovenščino ali se je učijo. Prenovljeno podobo Agice, male čarovnice sta sooblikovala Darka Erdelji (oblikovanje lutk in likovna podoba) in Urban Saletinger (izdelava scene).",
    place: "Pavlova hiša, Laafeld (Potrna), Avstrija",
    credits: [{ label: "Nastopali", value: "Mojca Andrej, Peter Andrej in Alenka Cilenšek" }],
    book: "agica-mala-carovnica",
  },
  {
    date: "2022-05-25",
    dateEnd: "2022-05-29",
    category: "literarni-nastop",
    abroad: true,
    title: "Majska srečanja slovanskih umetnikov",
    text: "Združene države poezije so v Burgasu predstavile nekaj slovenskih knjig, ki so doživele tudi prevod v bolgarski jezik: *Janko Glazer v prevodu* (Klub KU KU, Cezam, 2020), *Mojca Andrej: Ostanek umrle zvezde* (Litera, Maribor, 2020), *Peter Andrej: Skoz zvočni zid* (Litera, Maribor, 2019).",
    place: "Burgas, Bolgarija",
    credits: [{ label: "Gostitelj", value: "ekipa СВЯТО СЛОВО" }],
    book: "ostanek-umrle-zvezde",
  },
  {
    date: "2022",
    category: "literarni-nastop",
    abroad: true,
    title: "Takt festival (20. Kantfest International)",
    place: "Novi Sad, Srbija",
    credits: [{ label: "Nastopali", value: "Bojan Sedmak, Mojca Andrej, Neaboinula (Bojan Tomažič) in Peter Andrej" }],
  },
  {
    date: "2022",
    category: "sejem",
    text: "Roman *Kavč učiteljice Veronike* na 38. slovenskem knjižnem sejmu, na stojnici založbe Litera.",
    place: "Gospodarsko razstavišče, Ljubljana",
    book: "kavc-uciteljice-veronike",
  },

  // 2021
  {
    date: "2021-06-20",
    category: "literarni-nastop",
    text: "Predstavitev pesniške zbirke *Ostanek umrle zvezde* na Slovenskih dnevih knjige v Mariboru. Literarno branje Literinih avtorjev in avtorice. Nastopili so Vasja Jager, Mojca Andrej, Bojan Sedmak in Tomo Podstenšek. Povezoval je Orlando Uršič. Prireditev je organiziral MKC Maribor v sodelovanju z založbo Litera. Izvedba: MKC Maribor in KGB v sodelovanju z LGM.",
    place: "Minoriti, Maribor",
    book: "ostanek-umrle-zvezde",
  },
  {
    date: "2021-06-19",
    category: "literarni-nastop",
    text: "Branje poezije na literarnem maratonu z Združenimi državami poezije in predstavitvijo knjige *Janko Glazer v prevodu*. V soorganizaciji z MKC Maribor in Klubom kulturnih ustvarjalcev KU KU.",
    place: "Grajski trg Maribor",
  },

  // 2020
  {
    date: "2020-06-21",
    category: "kamisibaj",
    title: "Agica, mala čarovnica",
    text: "Predstavitev avtorske sodobne pravljice. Glasbeni kamišibaj ob podpori glasbe (uglasbene pesmi iz pravljice) kantavtorja Petra Andreja in gledališke igralke Alenke Cilenšek. Oder knjižnega sejma – Slovenski dnevi knjige (organizator MKC).",
    place: "Grajski trg Maribor",
    book: "agica-mala-carovnica",
  },
  {
    date: "2020-06",
    category: "literarni-nastop",
    text: "Branje poezije na Slovenskih dnevih knjige.",
    place: "Grajski trg Maribor",
  },
  {
    date: "2020-02",
    category: "kamisibaj",
    title: "Agica, mala čarovnica",
    text: "Glasbeni kamišibaj.",
    place: "Mariborska knjižnica, Knjižnica Nova vas",
    book: "agica-mala-carovnica",
  },

  // 2019
  {
    date: "2019-12-11",
    category: "kamisibaj",
    title: "Agica, mala čarovnica",
    place: "Knjižnica Janka Glazerja Ruše",
    credits: [
      { label: "Napisala", value: "Mojca Andrej" },
      { label: "Ilustrirala", value: "Darka Erdelji" },
      { label: "Pesmi napisal, uglasbil in zapel", value: "Peter Andrej" },
      { label: "Za kamišibaj priredila in ga izvedla", value: "Mojca Andrej" },
    ],
    book: "agica-mala-carovnica",
  },
  {
    date: "2019-09",
    category: "literarni-nastop",
    abroad: true,
    text: "100 Илјади поети за промена, Struška srečanja; literarni nastopi.",
    place: "Strumica, Severna Makedonija",
  },
  {
    date: "2019-05",
    category: "literarni-nastop",
    abroad: true,
    text: "Festival SOFAFEST; branje poezije.",
    place: "Palma de Mallorca, Španija",
  },
  {
    date: "2019",
    category: "sejem",
    text: "Slikanica *Agica, mala čarovnica* na 35. slovenskem knjižnem sejmu, v paviljonu založbe Litera.",
    place: "Cankarjev dom, Ljubljana",
    book: "agica-mala-carovnica",
  },

  // 2018
  {
    date: "2018-12-07",
    category: "kamisibaj",
    title: "Rege ali žabje frke",
    place: "Knjižnica Janka Glazerja Ruše",
    credits: [
      { label: "Napisal", value: "Peter Andrej" },
      { label: "Ilustrirala", value: "Kaja Lukač" },
      { label: "Za kamišibaj priredila in ga izvedla", value: "Mojca Andrej" },
      { label: "Pojeta", value: "Peter Andrej in Barbara Gabrielle" },
    ],
  },
  {
    date: "2018-06-16",
    dateEnd: "2018-06-17",
    category: "literarni-nastop",
    abroad: true,
    title: "Mednarodni festival Poetics",
    place: "Sofija, Bolgarija",
  },
  {
    date: "2018-05",
    category: "gledalisce",
    abroad: true,
    text: "Glasbeno-lutkovna gledališka predstava *Mali princ*, gostovanje v gledališču v Osijeku.",
    place: "Osijek, Hrvaška",
    credits: [
      { label: "Režija", value: "Cvetka Bevc" },
      { label: "Uglasbene pesmi", value: "Peter Andrej" },
    ],
  },

  // 2017
  {
    date: "2017-12-01",
    dateEnd: "2017-12-02",
    category: "literarni-nastop",
    abroad: true,
    title: "44. Karamanova srečanja",
    text: "Branje poezije, tudi program za otroke.",
    place: "Radoviš, Severna Makedonija",
  },
  {
    date: "2017-11-17",
    category: "literarni-nastop",
    abroad: true,
    title: "Glazerjevi dnevi v Pančevu",
    text: "Društvo Slovencev južnega Banata Logarska dolina.",
    place: "Narodni muzej Pančevo, Srbija",
    credits: [{ label: "Gostitelj", value: "Josip Weber" }],
  },
  {
    date: "2017-11-16",
    category: "literarni-nastop",
    abroad: true,
    text: "Branje poezije v Matici iseljenika Srbije. Nastop s Petrom Andrejem, Jernejem Mažgonom in Grgo Olahom z Madžarske.",
    place: "Beograd, Srbija",
    credits: [{ label: "Gostitelj", value: "Kuća Arte, Miodrag Jakšić" }],
  },
  {
    date: "2017-01-25",
    category: "literarni-nastop",
    abroad: true,
    text: "Gostovanje na festivalu *Impuls – poezija u kafiću*.",
    place: "Varaždin, Hrvaška",
    credits: [
      { label: "Organizator", value: "Ritam misli" },
      { label: "Moderatorja", value: "Ljubica Ribić in Milan Novak" },
    ],
  },
  {
    date: "2017",
    category: "gledalisce",
    text: "Glasbeno-lutkovna gledališka predstava *Mali princ*. Lastna produkcija Cezama, društva Glazerjeva domačija in Kluba KU KU v sodelovanju z JSKD.",
    place: "Dom kulture Ruše",
    credits: [
      { label: "Režija", value: "Cvetka Bevc" },
      { label: "Uglasbene pesmi", value: "Peter Andrej" },
    ],
  },

  // 2016
  {
    date: "2016-11",
    category: "literarni-nastop",
    text: "Predstavitev pesniške zbirke *Dež v gugalnici*. Pogovor je vodila Cvetka Bevc, Peter Andrej je uglasbil in zapel nekaj pesmi iz te pesniške zbirke.",
    place: "Klub Daktari, Ljubljana",
    book: "dez-v-gugalnici",
  },
  {
    date: "2016-03",
    category: "gledalisce",
    text: "Performans (recital) Glazerjeve poezije na Glazerjevih dnevih.",
    place: "Dom kulture Ruše",
    credits: [{ label: "Režija", value: "Tanja Lužar" }],
  },

  // 2015
  {
    date: "2015-09",
    category: "literarni-nastop",
    text: "Predstavitev poezije za otroke *Rastem do tebe*.",
    credits: [{ label: "Organizator", value: "Kulturno-gledališko društvo Reciklaža, Slovenske gorice" }],
    book: "rastem-do-tebe",
  },
  {
    date: "2015-07",
    category: "literarni-nastop",
    text: "Predstavitev pesniške zbirke *Dež v gugalnici*. Z avtorico se je pogovarjal Marjan Pungartnik.",
    place: "Literarna hiša Maribor",
    book: "dez-v-gugalnici",
  },
  {
    date: "2015",
    category: "gledalisce",
    text: "S predstavo *Vse ob pravem času* (David Ives) uvrstitev na regijsko tekmovanje Linhartovega srečanja.",
    credits: [{ label: "Režija", value: "Tanja Lužar" }],
  },

  // 2012–2019
  {
    date: "2012",
    dateEnd: "2019",
    category: "literarni-nastop",
    abroad: true,
    text: "Poetski festival Neretvanske vedrine. Literarna branja.",
    place: "Počitelj, Mostar, Sarajevo, BiH",
  },
];
