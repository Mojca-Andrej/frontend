/**
 * Galerija fotografij (stran /galerija).
 *
 * Kako dodati fotografijo:
 * 1. Datoteko skopiraj v ustrezno mapo v public/ (npr. public/Agica/19.jpg).
 * 2. Zaženi `npm run images` (pomanjša sliko in zapiše njene dimenzije).
 * 3. V seznam `photos` spodaj dodaj vnos, npr.:
 *    { src: "/Agica/19.jpg", title: "Kamišibaj Agica, mala čarovnica", description: "Knjižnica Ruše, 3. 10. 2026" },
 *
 * - `title` in `description` sta napis pod fotografijo v povečanem pogledu.
 *   Če `title` izpustiš, se uporabi `photoTitle` albuma.
 * - `alt` (opis za slepe in slabovidne) je neobvezen: če ga izpustiš, se sestavi iz naslova
 *   in opisa. Napiši ga, kadar ima več fotografij enak napis – opiši, kaj je na fotografiji.
 * - Fotografije se prikažejo v enakem vrstnem redu kot v seznamu, prva je večja.
 *   Albumi se prikažejo v vrstnem redu, kot so zapisani (najnovejši najprej).
 * - Nov album: dodaj nov objekt z enolično `slug` (del naslova strani, npr. /galerija#agica).
 *   `book` poveže album s stranjo knjige.
 */
import type { GalleryImage } from "@/lib/images";
import type { BookSlug } from "./types";

type Photo = { src: string; title?: string; description?: string; alt?: string };

type Album = {
  slug: string;
  title: string;
  description?: string;
  book?: BookSlug;
  /** Privzeti naslov za fotografije brez lastnega `title`. */
  photoTitle?: string;
  photos: Photo[];
};

export type Gallery = {
  slug: string;
  title: string;
  description?: string;
  book?: BookSlug;
  images: GalleryImage[];
};

const albums: Album[] = [
  {
    slug: "agica",
    title: "Agica, mala čarovnica",
    description: "Slikanica, magnetno gledališče, kamišibaj in glasbena pravljica.",
    book: "agica-mala-carovnica",
    photos: [
      {
        src: "/Agica/1.jpg",
        title: "Knjiga Agica, mala čarovnica",
        description: "Knjiga in magnetna lutka Agica",
      },
      {
        src: "/Agica/2.jpg",
        title: "Magnetno gledališče Agica, mala čarovnica",
        description: "Izdelala: Darka Erdelji",
        alt: "Magnetno gledališče Agica, mala čarovnica: lutki z rdečo in črno čarovniško kapo na kovinski luni z zvezdami in hišico",
      },
      {
        src: "/Agica/3.jpg",
        title: "Magnetno gledališče Agica, mala čarovnica",
        description: "Izdelala: Darka Erdelji",
        alt: "Magnetno gledališče Agica, mala čarovnica: lutka v črni kapi sedi na robu lune, spodaj zvezde, mačka in ptica",
      },
      {
        src: "/Agica/4.jpg",
        title: "Agica, mala čarovnica",
        description: "Knjiga in CD Petra Andreja",
      },
      {
        src: "/Agica/5.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Slovenski dnevi knjige v Mariboru, Grajski trg, 2020",
        alt: "Nastopajoči s kitaro in kamišibaj odrom pod šotorom Slovenskih dnevov knjige na Grajskem trgu v Mariboru, 2020",
      },
      {
        src: "/Agica/6.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Mariborska knjižnica Nova vas, 2020",
      },
      {
        src: "/Agica/7.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Živa dvorišča – Slovenski dnevi knjige v Mariboru, 2020",
      },
      {
        src: "/Agica/8.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Slovenski dnevi knjige v Mariboru, Grajski trg, 2020",
        alt: "Pripovedovanje kamišibaja Agica, mala čarovnica ob spremljavi kitare pred otroki na Grajskem trgu v Mariboru, 2020",
      },
      {
        src: "/Agica/9.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Predstavitev na OŠ Prežihovega Voranca Maribor, 2020",
        alt: "Kamišibaj Agica, mala čarovnica pred polnim razredom učencev na OŠ Prežihovega Voranca Maribor, 2020",
      },
      {
        src: "/Agica/10.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Predstavitev na OŠ Prežihovega Voranca Maribor, 2020",
        alt: "Otroci sedijo pred kamišibaj odrom v učilnici OŠ Prežihovega Voranca Maribor, 2020",
      },
      {
        src: "/Agica/11.jpg",
        title: "Magnetno gledališče Agica, mala čarovnica",
        description: "Pavlova hiša, Laafeld (Potrna), Avstrija, 2022",
      },
      {
        src: "/Agica/12.png",
        title: "Predstavitev študentke Eve Tomažin",
        description: "PEF Ljubljana, mentorica: prof. dr. Milena Mileva Blažić, 2022",
        alt: "Naslovna prosojnica študentske predstavitve slikanice Agica, mala čarovnica z naslovnico knjige, PEF Ljubljana, 2022",
      },
      {
        src: "/Agica/13.jpg",
        title: "Predstavitev študentke Eve Tomažin",
        description: "PEF Ljubljana, mentorica: prof. dr. Milena Mileva Blažić, 2022",
        alt: "Predavalnica PEF Ljubljana: študentska predstavitev slikanice Agica, mala čarovnica na zaslonu in projekciji, 2022",
      },
      {
        src: "/Agica/14.jpg",
        title: "35. knjižni sejem v Ljubljani",
        description: "Orlando Uršič, Bojan Sedmak, Mojca Andrej, Peter Andrej, 2019",
      },
      {
        src: "/Agica/15.jpg",
        title: "Razstava Ustvarjalna dvojina ilustracij slikanice Agica, mala čarovnica",
        description: "Pionirska knjižnica v TPC City, november 2024",
        alt: "Razstavni pano z dvema ilustracijama iz slikanice Agica, mala čarovnica v TPC City, november 2024",
      },
      {
        src: "/Agica/16.jpg",
        title: "Razstava Ustvarjalna dvojina ilustracij slikanice Agica, mala čarovnica",
        description: "Pionirska knjižnica v TPC City, november 2024",
        alt: "Obiskovalka ob razstavnem panoju z ilustracijami slikanice Agica, mala čarovnica v TPC City, november 2024",
      },
      {
        src: "/Agica/17.jpg",
        title: "15. Pohorska pravljica: glasbena pravljica Agica, mala čarovnica",
        description: "Trg vstaje pred občino Ruše, 19. 8. 2026",
        alt: "Pripovedovalka z lutko Agice na odru Pohorske pravljice, ob njej glasbeniki, Ruše, 19. 8. 2026",
      },
      {
        src: "/Agica/18.jpg",
        title: "15. Pohorska pravljica: glasbena pravljica Agica, mala čarovnica",
        description: "Trg vstaje pred občino Ruše, 19. 8. 2026",
        alt: "Glasbena pravljica Agica, mala čarovnica: pripovedovalka in glasbena zasedba na odru pred občino Ruše, 19. 8. 2026",
      },
    ],
  },
  {
    slug: "nastopi",
    title: "Nastopi",
    description: "Predstavitve knjig, literarni večeri in festivali doma in v tujini.",
    photos: [
      {
        src: "/Nastopi/1.jpg",
        title: "Predstavitev pesniške zbirke Dež v gugalnici",
        description: "Slovenski dnevi knjige v Mariboru, Grajski trg",
      },
      {
        src: "/Nastopi/2.jpg",
        title: "Predstavitev pesniške zbirke Dež v gugalnici",
        description: "Literarna hiša Maribor, 2015",
        alt: "Branje iz pesniške zbirke Dež v gugalnici, ob bralki sedi poslušalec, Literarna hiša Maribor, 2015",
      },
      {
        src: "/Nastopi/3.jpg",
        title: "Predstavitev pesniške zbirke Dež v gugalnici",
        description: "Literarna hiša Maribor, 2015",
        alt: "Branje iz pesniške zbirke Dež v gugalnici pred slikami na steni, Literarna hiša Maribor, 2015",
      },
      {
        src: "/Nastopi/4.jpg",
        title: "Glazerjevi dnevi v Beogradu",
        description: "Kuća Arte, Beograd, 2017",
      },
      {
        src: "/Nastopi/5.jpg",
        title: "Kulturno-gledališko društvo Reciklaža",
        description: "Foto: Branko Leskovar – Bombica, 2015",
        alt: "Branje iz knjige Rastem do tebe pred mikrofonom, Kulturno-gledališko društvo Reciklaža, 2015",
      },
      {
        src: "/Nastopi/6.jpg",
        title: "Kulturno-gledališko društvo Reciklaža",
        description: "Foto: Branko Leskovar – Bombica, 2015",
        alt: "Bralka drži odprto knjigo Rastem do tebe in bere v mikrofon, Kulturno-gledališko društvo Reciklaža, 2015",
      },
      {
        src: "/Nastopi/7.jpg",
        title: "Slovenski dnevi knjige v Murski Soboti",
        description: "Foto: Ella Combet, 2024",
        alt: "Slovenski dnevi knjige v Murski Soboti, 2024",
      },
      {
        src: "/Nastopi/8.jpg",
        title: "Takt festival, 20. Kantfest",
        description: "Novi Sad, 2022",
      },
      {
        src: "/Nastopi/9.jpg",
        title: "Pohorska pravljica Ruše",
        description: "Park pred občino Ruše, 2013",
      },
      {
        src: "/Nastopi/10.jpg",
        title: "Predstavitev knjige Rege ali žabje frke",
        description: "Literarna hiša Maribor, 2018",
      },
      {
        src: "/Nastopi/11.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Tanger, Maroko, 2024",
      },
      {
        src: "/Nastopi/12.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Dve osebi na vrhu peščene sipine pod modrim nebom, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/Nastopi/13.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Veselo mahanje z vrha sipine, v pesku sledi stopinj, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/Nastopi/14.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Silhueti dveh oseb na sipini proti soncu, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/Nastopi/15.jpeg",
        title: "Festival pesnikov petih kontinentov",
        description: "Marakeš, Maroko, 2024",
      },
      {
        src: "/Nastopi/16.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Udeleženke festivala z dvignjenimi sklenjenimi rokami, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/Nastopi/17.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Branje poezije z mikrofonom na odru z rdečo preprogo sredi puščave ob mraku, Laayoune, 2024",
      },
      {
        src: "/Nastopi/18.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Pesnika sedita na odru sredi peščenih sipin pod večernim nebom, Laayoune, 2024",
      },
      {
        src: "/Nastopi/19.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Branje poezije na puščavskem odru z rdečo preprogo, v ozadju sipina, Laayoune, 2024",
      },
      {
        src: "/Nastopi/20.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Rabat, Maroko, 2024",
      },
      {
        src: "/Nastopi/21.jpg",
        title: "Slovenski dnevi knjige v Mariboru",
        description: "Foto: Boštjan Lah, 2024",
        alt: "Branje ob spremljavi električne kitare na odru Slovenskih dnevov knjige v Mariboru, 2024",
      },
      {
        src: "/Nastopi/22.jpg",
        title: "Slovenski dnevi knjige v Mariboru",
        description: "Foto: Boštjan Lah, 2024",
        alt: "Branje v mikrofon, v ozadju kitarist, Slovenski dnevi knjige v Mariboru, 2024",
      },
      {
        src: "/Nastopi/23.jpg",
        title: "Slovenski dnevi knjige – stojnica Kluba KU KU",
        description: "Foto: Boštjan Lah, 2024",
        alt: "Stojnica Kluba KU KU na Slovenskih dnevih knjige v Mariboru, 2024",
      },
      {
        src: "/Nastopi/24.jpg",
        title: "Po Maistrovi lirični poti",
        description: "Kibla Maribor, 10. 10. 2024",
      },
      {
        src: "/Nastopi/25.jpg",
        title: "Večer grozljivih zgodb",
        description: "V prostorih DSP, Ljubljana, 29. 10. 2024",
      },
      {
        src: "/Nastopi/26.jpg",
        title: "Za Prešernom – literarni večer DSP",
        description: "Cankarjev dom, Ljubljana, 8. 2. 2025",
      },
      {
        src: "/Nastopi/27.jpg",
        title: "Branje na dogodku Riječka književna jutra",
        description: "Book caffe Dnevni boravak, 22. 2. 2025",
      },
      {
        src: "/Nastopi/28.jpg",
        title: "Glas avtoric",
        description: "V prostorih DSP, Ljubljana, 8. 3. 2025",
        alt: "Skupinska fotografija petih udeleženk ob knjižnih policah, Glas avtoric, DSP Ljubljana, 8. 3. 2025",
      },
      {
        src: "/Nastopi/29.jpg",
        title: "Glas avtoric",
        description: "V prostorih DSP, Ljubljana, 8. 3. 2025",
        alt: "Udeleženka z listi v rokah sedi na modrem kavču, Glas avtoric, DSP Ljubljana, 8. 3. 2025",
      },
      {
        src: "/Nastopi/30.jpg",
        title: "Poetikon",
        description: "Center za poezijo Tomaža Šalamuna, Ljubljana, 14. 5. 2025",
      },
    ],
  },
  {
    slug: "kavc-uciteljice-veronike",
    title: "Kavč učiteljice Veronike",
    description: "Predstavitve romana po knjižnicah, šolah in na sejmih.",
    book: "kavc-uciteljice-veronike",
    photos: [
      {
        src: "/Veronika/1.jpg",
        title: "Kavč učiteljice Veronike",
        description: "Slomškov park, Maribor, 2022",
      },
      {
        src: "/Veronika/2.jpg",
        title: "Breza",
        description: "Mestni park, Maribor, 2022",
      },
      {
        src: "/Veronika/3.jpg",
        title: "38. knjižni sejem v Ljubljani",
        description: "Kavč učiteljice Veronike na sejmu, 2022",
      },
      {
        src: "/Veronika/4.jpg",
        title: "38. knjižni sejem v Ljubljani",
        description: "Peter Andrej, Mojca Andrej, Jure Potokar, 2022",
      },
      {
        src: "/Veronika/5.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Literarna hiša Maribor, 2023",
        alt: "Pogovor o romanu Kavč učiteljice Veronike: sogovornica, voditelj s knjigo in kitarist, Literarna hiša Maribor, 2023",
      },
      {
        src: "/Veronika/6.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Literarna hiša Maribor, 2023",
        alt: "Sogovornica na predstavitvi romana Kavč učiteljice Veronike sedi pred sliko na steni, Literarna hiša Maribor, 2023",
      },
      {
        src: "/Veronika/7.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Knjižnica Janka Glazerja Ruše, 2022",
      },
      {
        src: "/Veronika/8.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "OŠ Prežihovega Voranca Maribor, 2022",
      },
      {
        src: "/Veronika/9.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Konjeniški park Starošince, 2023",
        alt: "Branje iz knjige na klopci na travniku, Konjeniški park Starošince, 2023",
      },
      {
        src: "/Veronika/10.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Konjeniški park Starošince, 2023",
        alt: "Branje na prostem ob plišastem konjičku, v ozadju lesena hišica, Konjeniški park Starošince, 2023",
      },
      {
        src: "/Veronika/11.jpg",
        title: "Predlog naslovnice romana Kavč učiteljice Veronike",
        description: "Ilustracija: Eva Rajher",
      },
      {
        src: "/Veronika/12.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Zavod Rast Ruše, 19. 9. 2024",
        alt: "Pogovor o romanu Kavč učiteljice Veronike za mizo s cvetjem in knjigami, Zavod Rast Ruše, 19. 9. 2024",
      },
      {
        src: "/Veronika/13.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Zavod Rast Ruše, 19. 9. 2024",
        alt: "Branje za mizo z vazo cvetja, Zavod Rast Ruše, 19. 9. 2024",
      },
      {
        src: "/Veronika/14.jpg",
        title: "Članek v reviji Jana",
        description: "Jana (Muze), 8. 10. 2024",
      },
      {
        src: "/Veronika/15.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Muzej Splošne knjižnice Ljutomer, 21. 11. 2024",
        alt: "Gostja sedi ob mizi s knjigami in vrtnico, za njo silhuete znanih osebnosti, Muzej Splošne knjižnice Ljutomer, 21. 11. 2024",
      },
      {
        src: "/Veronika/16.jpeg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Muzej Splošne knjižnice Ljutomer, 21. 11. 2024",
        alt: "Poslušalci med pogovorom o romanu Kavč učiteljice Veronike, Muzej Splošne knjižnice Ljutomer, 21. 11. 2024",
      },
    ],
  },
  {
    slug: "rege",
    title: "Rege ali žabje frke",
    photoTitle: "Kamišibaj Rege ali žabje frke",
    photos: [
      {
        src: "/rege/1.jpg",
        description: "Knjižnica Janka Glazerja Ruše, 2018",
        alt: "Pripovedovalka v pleteni žabji kapi za kamišibaj odrom med knjižnimi policami, Knjižnica Janka Glazerja Ruše, 2018",
      },
      {
        src: "/rege/2.jpg",
        description: "Knjižnica Janka Glazerja Ruše, 2018",
        alt: "Pripovedovalka v zeleni pleteni kapi z žabjimi očmi, Knjižnica Janka Glazerja Ruše, 2018",
      },
      {
        src: "/rege/3.jpg",
        description: "Knjižnica Janka Glazerja Ruše, 2018",
        alt: "Trije nastopajoči v žabjih kapah ob mizici s knjigami, Knjižnica Janka Glazerja Ruše, 2018",
      },
      { src: "/rege/rege.jpg", description: "Trg pred občino Ruše, 12. 8. 2024" },
    ],
  },
  {
    slug: "gledalisce",
    title: "Gledališče",
    description: "Predstave gledališča MOR.",
    photoTitle: "Gledališče MOR",
    photos: [
      {
        src: "/Gledališče/1.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Igralka čepi ob pisalnem stroju na odru, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/Gledališče/2.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Štirje igralci sedijo na odru pred velikimi bananami, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/Gledališče/3.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Igralka v rdečih čevljih stopa čez oder, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/Gledališče/4.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Štirje igralci sedijo v vrsti na temnem odru, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/Gledališče/5.jpg",
        description: "Blabilon stolp, 2015",
        alt: "Trije igralci na odru pred projekcijo, prizor Blabilon stolp, gledališče MOR, 2015",
      },
      {
        src: "/Gledališče/6.jpg",
        description: "Ekipa gledališča MOR, 2015",
        alt: "Skupinska fotografija sedmih članov gledališča MOR na odru, 2015",
      },
      {
        src: "/Gledališče/7.jpg",
        description: "Blabilon stolp, 2015",
        alt: "Projicirana zasedba prizora Blabilon stolp iz predstave Vse ob pravem času, gledališče MOR, 2015",
      },
      {
        src: "/Gledališče/8.jpg",
        description: "Ekipa gledališča MOR, 2015",
        alt: "Trije člani gledališča MOR, 2015",
      },
      {
        src: "/Gledališče/9.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Mali princ v pisanem puloverju med igralkama z zvezdama, gledališče MOR, 2017",
      },
      {
        src: "/Gledališče/10.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Igralci Malega princa na odru z luno in zvezdami, gledališče MOR, 2017",
      },
      {
        src: "/Gledališče/11.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Igralke z zvezdami in kitarist na odru, predstava Mali princ, gledališče MOR, 2017",
      },
      {
        src: "/Gledališče/12.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Celotna zasedba Malega princa na odru, gledališče MOR, 2017",
      },
      { src: "/Gledališče/13.jpg", description: "Predstava Mali princ, Osijek, 2018" },
      { src: "/Gledališče/14.jpg", description: "Recital Glazerjeve poezije, 2016" },
    ],
  },
];

export const galleries: Gallery[] = albums.map(({ photos, photoTitle, ...album }) => ({
  ...album,
  images: photos.map((photo) => {
    const title = photo.title ?? photoTitle;
    return {
      src: photo.src,
      title,
      description: photo.description,
      alt: photo.alt ?? [title, photo.description].filter(Boolean).join(" – "),
    };
  }),
}));
