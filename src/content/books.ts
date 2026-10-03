import type { BookSlug } from "@/content/types";

/**
 * KNJIGE MOJCE ANDREJ
 *
 * Kako dodati novo knjigo:
 * 1. Naslovnico shrani v public/ (npr. public/nova_knjiga.jpg) in zaženi `npm run images`.
 * 2. Slug (del naslova URL, npr. "nova-knjiga") dodaj v seznam `bookSlugs` v src/content/types.ts.
 * 3. Spodaj v seznam `books` dodaj nov vnos, na primer:
 *
 *   {
 *     slug: "nova-knjiga",
 *     title: "Nova knjiga",
 *     type: "pesniška zbirka",
 *     audience: "odrasli",              // ali "otroci"
 *     authors: ["Mojca Andrej"],
 *     publisher: "Litera Maribor",
 *     year: 2027,
 *     cover: "/nova_knjiga.jpg",
 *     inLanguage: "sl",
 *     description: "**Ime Priimek** je v spremni besedi zapisal:",
 *     quotes: [{ text: "Besedilo citata brez narekovajev …", author: "Ime Priimek", role: "spremna beseda" }],
 *   },
 *
 * Oblikovanje besedila: *ležeče*, **krepko**, prazna vrstica (\n\n) = nov odstavek, \n = nova vrstica.
 * Vrstni red v datoteki ni pomemben – stran knjige razvrsti sama (najnovejše najprej).
 * Najnovejša knjiga na seznamu samodejno dobi oznako »Nova knjiga«.
 */

export type Audience = "odrasli" | "otroci";

export type BookQuote = {
  /** Besedilo citata brez zunanjih narekovajev (»…« doda stran). */
  text: string;
  author: string;
  /** Npr. "spremna beseda", "urednik MLD". */
  role?: string;
  /** Uvodni stavek pred citatom (če ga ne nosi že `description`). */
  intro?: string;
};

export type BookEdition = {
  year: number;
  publisher: string;
  cover?: string;
  note?: string;
};

export type BookImage = { src: string; caption: string };

export type Book = {
  slug: BookSlug;
  title: string;
  /** Npr. "pesniška zbirka", "roman". */
  type: string;
  audience: Audience;
  authors: string[];
  illustrator?: string;
  /** Založba (prve) izdaje. */
  publisher: string;
  /** Leto (prve) izdaje. */
  year: number;
  /** Naslovnica, pot v public/ z vodilno poševnico. */
  cover: string;
  backCover?: string;
  /** Kratek opis; pri knjigah s citatom uvodni stavek k prvemu citatu. */
  description: string;
  quotes?: BookQuote[];
  /** Daljši opis vsebine (prikazan pod naslovom »Kratek opis«). */
  longDescription?: string;
  /** Kdo je uglasbil pesmi na priloženi zgoščenki. */
  cd?: string;
  extraImages?: BookImage[];
  isbn?: string;
  /** Jezik besedila (BCP 47): "sl", "en", "hr" … */
  inLanguage: string;
  /** Če je knjiga izšla večkrat (prva izdaja naj bo enaka year/publisher/cover zgoraj). */
  editions?: BookEdition[];
};

export const books: Book[] = [
  {
    slug: "nikoli-ne-reci-da-ni-skrivnosti",
    title: "Nikoli ne reci, da ni skrivnosti",
    type: "pesniška zbirka",
    audience: "odrasli",
    authors: ["Mojca Andrej"],
    publisher: "Mariborska literarna družba",
    year: 2000,
    cover: "/nikoli_ne_reci.jpg",
    inLanguage: "sl",
    description: "V spremni besedi urednik MLD, **Marjan Pungartnik**, pesniško zbirko označi kot:",
    quotes: [
      {
        text: "Gravitacijsko polje ljubezni. /…/ Čar te zbirke je v uravnovešenosti med ›lebdečim‹, ki se razpreda v obilici subtilnih občutij, podob, in ›gibanjem‹, padanjem in vrtenjem, med snovnim in pojmovnim.",
        author: "Marjan Pungartnik",
        role: "spremna beseda",
      },
    ],
  },
  {
    slug: "dez-v-gugalnici",
    title: "Dež v gugalnici",
    type: "pesniška zbirka",
    audience: "odrasli",
    authors: ["Mojca Andrej"],
    publisher: "Mariborska literarna družba, Klub KU KU in Kulturni klub Nomadi",
    year: 2015,
    cover: "/dez_v_gugalnici.jpg",
    inLanguage: "sl",
    description: "**Zoran Pevec** v spremni besedi *Beseda in tišina* razmišlja:",
    quotes: [
      {
        text: "… In kaj mu (bralcu) pošilja Mojca Andrej v knjigi z naslovom Dež v gugalnici … Kar je na zunaj najbolj opazno – pet sklopov pesmi, od katerih se vsak nanaša na zanimive eksistencialne izkušnje, a tudi na vprašanje o tem, kako biti, kako se nanašati na drugega, s tem ko upoveduješ samega sebe. Lirski subjekt se tako že z naslovom guglje v svet, v katerem ima svoje mesto pripovedovalka z razmišljanjem o smislu bivanja, o naravi in ljubezni. /…/ … verzi so napolnjeni s sodobnim besediščem, inovativno podobo in včasih se prelivajo med sabo … /…/ V teh pesmih so sanje in besede in tišina …",
        author: "Zoran Pevec",
        role: "spremna beseda",
      },
    ],
  },
  {
    slug: "ostanek-umrle-zvezde",
    title: "Ostanek umrle zvezde",
    type: "pesniška zbirka",
    audience: "odrasli",
    authors: ["Mojca Andrej"],
    publisher: "Litera Maribor",
    year: 2020,
    cover: "/ostanek_umrle_zvezde.jpg",
    inLanguage: "sl",
    description: "V spremni besedi *Tudi jokati je pozabljena navada* je **Vinko Möderndorfer** zapisal:",
    quotes: [
      {
        text: "… Pomemben in zelo izviren pa je humor, ki ga pesnica Mojca Andrej neprestano in zelo uspešno vpleta v svoje pesmi. Pravzaprav je humor, nenavadne in na poseben način duhovite besedne zveze in metafore, osnovna značilnost njene poezije. Seveda ne gre za enostaven humor, prej za nekakšno ironijo, tudi cinizem, pa spet za dobrohotno dovtipnost … Silovita zbirka je pred nami. Duhovita in trpka. Jezikovno bogata in izvirna. Pravi užitek.",
        author: "Vinko Möderndorfer",
        role: "spremna beseda",
      },
    ],
  },
  {
    slug: "kavc-uciteljice-veronike",
    title: "Kavč učiteljice Veronike",
    type: "roman",
    audience: "odrasli",
    authors: ["Mojca Andrej"],
    publisher: "Litera Maribor",
    year: 2022,
    cover: "/kuv1.jpg",
    inLanguage: "sl",
    description: "Spremno besedo k romanu je napisala urednica Litere **Gabriela Babnik Ouattara**:",
    quotes: [
      {
        text: "V romanu Kavč učiteljice Veronike torej naletimo na presenetljivo iskrenost; med drugim je Veronika polna jeze, ker se mora ves čas boriti: za svojo malico in pijačo, v šoli za pozornost otrok in vsaj malo empatije vodstva, med sodelavkami za podporo in razumevanje, v parku za svojo klop … Zelo jasno pa razume, da se ne more boriti proti sistemu in da se le izčrpava.",
        author: "Gabriela Babnik Ouattara",
        role: "urednica Litere, spremna beseda",
      },
      {
        intro: "**Milan Dekleva** je zapisal:",
        text: "Glavna oseba, njena kriza in upornost sta napisani doživeto in sta žarek upanja v tem ubožnem razvrednotenem svetu. /…/ Romanu dajejo poseben čar humorni, pa tudi groteskni toni, ki niso nikoli pretirani in ne peljejo v karikiranje.",
        author: "Milan Dekleva",
      },
    ],
    editions: [
      { year: 2022, publisher: "Litera Maribor", cover: "/kuv1.jpg" },
      { year: 2024, publisher: "Klub KU KU, Glazerjeva domačija", cover: "/kuv2.jpg", note: "ponatis pri drugi založbi" },
    ],
    extraImages: [{ src: "/Litera/1-2.jpg", caption: "Katalog Litera 2022" }],
  },
  {
    slug: "transitions",
    title: "Transitions",
    type: "prevedena poezija, dvostranska knjiga",
    audience: "odrasli",
    authors: ["Mojca Andrej", "Peter Andrej"],
    publisher: "Klub KU KU, Glazerjeva domačija",
    year: 2024,
    cover: "/transitions.jpg",
    inLanguage: "en",
    description:
      "Zbirka poezije, prevedene v angleški jezik; vsak avtor se predstavi z desetimi prevodi svoje poezije v angleščini. Prevajalci so različni.",
  },
  {
    slug: "mijene",
    title: "Mijene",
    type: "prevedena poezija, dvostranska knjiga",
    audience: "odrasli",
    authors: ["Mojca Andrej", "Peter Andrej"],
    publisher: "Klub KU KU, Glazerjeva domačija",
    year: 2025,
    cover: "/mijene.jpg",
    inLanguage: "hr",
    description:
      "Zbirka poezije, prevedene v hrvaški jezik; vsak avtor se predstavi z desetimi prevodi svoje poezije v hrvaščini. Prevajalci so različni.",
  },
  {
    slug: "mocvirje-pozabe",
    title: "Močvirje pozabe",
    type: "pesniška zbirka",
    audience: "odrasli",
    authors: ["Mojca Andrej"],
    publisher: "Volosov hram, Murska Sobota; Društvo Glazerjeva domačija, Ruše",
    year: 2026,
    cover: "/mocvirje_pozabe.jpg",
    backCover: "/Mocvirje/mocvirje_backpage.jpg",
    inLanguage: "sl",
    description: "**Bojan Sedmak** je v spremni besedi *Plemenitost v močvirju pozabe* zapisal:",
    quotes: [
      {
        text: "Pesnici je povsem jasno, da je največji zanikovalec čas, v pozabo zbriše vse, kar ni čvrsto priraščeno vanj. In iz korenin, prepojenih z močvirjem (voda ljubi in sovraži vse, česar se dotakne), poganjajo čudesa, med drugim tudi besede – brez njih tako kot brez spomina nas ni. /…/ In povzetek; zadnje tri pesniške zbirke Mojce Andrej je priporočljivo brati skupaj. V udobnem fotelju si je tako namesto male malice iz povprečne antologijske površnosti mogoče pripraviti pojedino iz skupka najbolj okusnih delov ene skrbno premišljene, zrele in plemenite poezije.",
        author: "Bojan Sedmak",
        role: "spremna beseda",
      },
    ],
  },
  {
    slug: "rastem-do-tebe",
    title: "Rastem do tebe",
    type: "zbirka pesmi za otroke",
    audience: "otroci",
    authors: ["Mojca Andrej"],
    publisher: "OŠ Prežihovega Voranca Maribor, Klub KU KU",
    year: 2013,
    cover: "/rastem_do_tebe.jpg",
    cd: "Peter Andrej",
    inLanguage: "sl",
    description:
      "Leta 2014 je nastala istoimenska **glasbeno-plesna predstava**.\n\nPesmi so nastajale kot šolski projekt *Kako zraste knjiga*, ker so bili učenci soavtorji knjige, saj je opremljena z njihovimi ilustracijami. Knjigi je dodana glasbena zgoščenka, na kateri so te pesmi uglasbene (Peter Andrej), dodani pa so tudi notni zapisi in glasbene podlage, da se otroci lažje sami naučijo zapeti pesem.\n\n**Borut Gombač** je zapisal:",
    quotes: [
      {
        text: "Pesnica Mojca Andrej paradoksalno dokazuje, da prepad med svetom odraslosti in svetom otroštva le ni tako velik, kot se zdi na prvi pogled, oziroma da se ga da s pomočjo poezije z lahkoto premagati.",
        author: "Borut Gombač",
      },
    ],
  },
  {
    slug: "agica-mala-carovnica",
    title: "Agica, mala čarovnica",
    type: "ilustrirana pripoved",
    audience: "otroci",
    authors: ["Mojca Andrej"],
    illustrator: "Darka Erdelji",
    publisher: "Litera, Klub KU KU, Glazerjeva domačija",
    year: 2019,
    cover: "/agica.jpg",
    cd: "Peter Andrej",
    inLanguage: "sl",
    description:
      "Gre za poetično zgodbo z inovativnimi ilustracijami Darke Erdelji in dodanimi pesmimi Petra Andreja. Knjigi je priložena tudi glasbena zgoščenka. Avtorica zgodbo predstavlja z glasbenim kamišibajem in z magnetnimi lutkami (pojeta Peter Andrej in igralka Alenka Cilenšek). V nastajanju je prevod v nemški jezik.",
    longDescription:
      "… poetična zgodba o malem Jakobu in dedku se prične, ko se Jakob sredi črne črne noči nenadoma *prebudi* in z radovednim vprašanjem *prebudi* dedka, da se zazreta v nočno nebo in se skupaj *čudita* mežikajoči zvezdi. Njuno *čudenje* je pravzaprav uvod v zgodbo o Agici, o majhnem bitju, ki je v očeh drugih čudna.\nEdina v svojem gnezdu je, ki ne joče, ampak cviiiili, ki zeha z usti v obliki črke i, ki ne hodi, ampak poskakuje. Počne take reči, ki drugim še na misel ne bi prišle. Tudi oblači se po svoje. In v svojih treh gumbih nenavadne oblike in v sebi nenadoma odkrije čarobno moč.\nNad tem je še sama začudena. Zaradi tega ji vsi rečejo kar mala čarovnica.\n\nNeustavljiva *radovednost* po raziskovanju jo vodi v širno vesolje.\nZapusti domače gnezdo in se naseli na Modro zvezdo (morda zato mežika?). Tu je čisto zadovoljna, vse dokler ji ne postane dolgčas. Same čarovnije nimajo nobenega smisla, če jih z nikomer ne deliš … Na srečo se nekdo, prav takšen kot ona, pojavi na njeni zvezdi …\n\nTo srečanje Agice z Agesom tudi barvno zaznamuje okvirno zgodbo, da se osredini v dveh pesmih, ki sta uglasbeni. Poetična zgodba v sebi nosi mnogo *čudnih* reči in skritih vprašanj. Eno smo si zastavili tudi sami: ali ni »majhnemu« in »velikemu« bitju skupno isto *čudenje?* In ali ni prav čudenje tista najbolj živa neznana sila, ki nas vodi naprej, iz znanega v *neznano?* In da se dva, kot sta Agica in Ages, *srečata na isti zvezdi*, je pravzaprav čudež, kajne?\nDedek že ve.",
  },
];

/** Najnovejše najprej; pri enakem letu po abecedi. */
function byYearDesc(a: Book, b: Book): number {
  return b.year - a.year || a.title.localeCompare(b.title, "sl");
}

/** Knjige za izbrano publiko, najnovejše najprej. */
export function booksFor(audience: Audience): Book[] {
  return books.filter((book) => book.audience === audience).sort(byYearDesc);
}

/** Vse knjige v vrstnem redu strani /knjige: najprej za odrasle, nato za otroke. */
export function sortedBooks(): Book[] {
  return [...booksFor("odrasli"), ...booksFor("otroci")];
}

/** Najnovejša knjiga (za oznako »Nova knjiga«). */
export function newestBook(): Book {
  return [...books].sort(byYearDesc)[0];
}

export function findBook(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getBook(slug: BookSlug): Book {
  const book = findBook(slug);
  if (!book) throw new Error(`Knjiga »${slug}« ne obstaja v src/content/books.ts.`);
  return book;
}

/** "Mojca Andrej" ali "Mojca Andrej in Peter Andrej". */
export function authorNames(book: Book): string {
  return book.authors.join(" in ");
}

/** Vse slike knjige brez podvajanja: naslovnica, zadnja stran, naslovnice drugih izdaj, dodatne slike. */
export function bookImages(book: Book): { src: string; alt: string; caption?: string }[] {
  const images: { src: string; alt: string; caption?: string }[] = [];
  const add = (src: string | undefined, alt: string, caption?: string) => {
    if (src && !images.some((image) => image.src === src)) images.push({ src, alt, caption });
  };
  const firstEdition = book.editions?.find((edition) => edition.cover === book.cover);
  add(
    book.cover,
    firstEdition
      ? `Naslovnica knjige ${book.title} (${firstEdition.publisher}, ${firstEdition.year})`
      : `Naslovnica knjige ${book.title}`,
    firstEdition ? `Izdaja ${firstEdition.year}` : undefined,
  );
  add(book.backCover, `Zadnja stran knjige ${book.title}`, "Zadnja stran");
  for (const edition of book.editions ?? []) {
    add(edition.cover, `Naslovnica knjige ${book.title} (${edition.publisher}, ${edition.year})`, `Izdaja ${edition.year}`);
  }
  for (const image of book.extraImages ?? []) add(image.src, image.caption, image.caption);
  return images;
}
