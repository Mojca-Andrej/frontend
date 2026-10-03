/**
 * Galerija fotografij (stran /galerija).
 *
 * Kako dodati fotografijo:
 * 1. Datoteko skopiraj v mapo albuma v public/slike/galerija/ in jo poimenuj z naslednjo
 *    zaporedno številko (npr. public/slike/galerija/agica/19.jpg).
 * 2. Zaženi `npm run images` (pomanjša sliko in zapiše njene dimenzije).
 * 3. V seznam `photos` spodaj dodaj vnos, npr.:
 *    { src: "/slike/galerija/agica/19.jpg", title: "Kamišibaj Agica, mala čarovnica", description: "Knjižnica Ruše, 3. 10. 2026" },
 *
 * - `title` in `description` sta napis pod fotografijo v povečanem pogledu.
 *   Če `title` izpustiš, se uporabi `photoTitle` albuma.
 * - `alt` (opis za slepe in slabovidne) je neobvezen: če ga izpustiš, se sestavi iz naslova
 *   in opisa. Napiši ga, kadar ima več fotografij enak napis – opiši, kaj je na fotografiji.
 * - Fotografije se prikažejo v enakem vrstnem redu kot v seznamu, prva je večja.
 *   Albumi se prikažejo v vrstnem redu, kot so zapisani (najnovejši najprej).
 * - Nov album: dodaj nov objekt z enolično `slug` (del naslova strani, npr. /galerija#agica)
 *   in ustvari mapo z enakim imenom v public/slike/galerija/.
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
        src: "/slike/galerija/agica/01.jpg",
        title: "Knjiga Agica, mala čarovnica",
        description: "Knjiga in magnetna lutka Agica",
      },
      {
        src: "/slike/galerija/agica/02.jpg",
        title: "Magnetno gledališče Agica, mala čarovnica",
        description: "Izdelala: Darka Erdelji",
        alt: "Magnetno gledališče Agica, mala čarovnica: lutki z rdečo in črno čarovniško kapo na kovinski luni z zvezdami in hišico",
      },
      {
        src: "/slike/galerija/agica/03.jpg",
        title: "Magnetno gledališče Agica, mala čarovnica",
        description: "Izdelala: Darka Erdelji",
        alt: "Magnetno gledališče Agica, mala čarovnica: lutka v črni kapi sedi na robu lune, spodaj zvezde, mačka in ptica",
      },
      {
        src: "/slike/galerija/agica/04.jpg",
        title: "Agica, mala čarovnica",
        description: "Knjiga in CD Petra Andreja",
      },
      {
        src: "/slike/galerija/agica/05.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Slovenski dnevi knjige v Mariboru, Grajski trg, 2020",
        alt: "Nastopajoči s kitaro in kamišibaj odrom pod šotorom Slovenskih dnevov knjige na Grajskem trgu v Mariboru, 2020",
      },
      {
        src: "/slike/galerija/agica/06.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Mariborska knjižnica Nova vas, 2020",
      },
      {
        src: "/slike/galerija/agica/07.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Živa dvorišča – Slovenski dnevi knjige v Mariboru, 2020",
      },
      {
        src: "/slike/galerija/agica/08.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Slovenski dnevi knjige v Mariboru, Grajski trg, 2020",
        alt: "Pripovedovanje kamišibaja Agica, mala čarovnica ob spremljavi kitare pred otroki na Grajskem trgu v Mariboru, 2020",
      },
      {
        src: "/slike/galerija/agica/09.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Predstavitev na OŠ Prežihovega Voranca Maribor, 2020",
        alt: "Kamišibaj Agica, mala čarovnica pred polnim razredom učencev na OŠ Prežihovega Voranca Maribor, 2020",
      },
      {
        src: "/slike/galerija/agica/10.jpg",
        title: "Kamišibaj Agica, mala čarovnica",
        description: "Predstavitev na OŠ Prežihovega Voranca Maribor, 2020",
        alt: "Otroci sedijo pred kamišibaj odrom v učilnici OŠ Prežihovega Voranca Maribor, 2020",
      },
      {
        src: "/slike/galerija/agica/11.jpg",
        title: "Magnetno gledališče Agica, mala čarovnica",
        description: "Pavlova hiša, Laafeld (Potrna), Avstrija, 2022",
      },
      {
        src: "/slike/galerija/agica/12.png",
        title: "Predstavitev študentke Eve Tomažin",
        description: "PEF Ljubljana, mentorica: prof. dr. Milena Mileva Blažić, 2022",
        alt: "Naslovna prosojnica študentske predstavitve slikanice Agica, mala čarovnica z naslovnico knjige, PEF Ljubljana, 2022",
      },
      {
        src: "/slike/galerija/agica/13.jpg",
        title: "Predstavitev študentke Eve Tomažin",
        description: "PEF Ljubljana, mentorica: prof. dr. Milena Mileva Blažić, 2022",
        alt: "Predavalnica PEF Ljubljana: študentska predstavitev slikanice Agica, mala čarovnica na zaslonu in projekciji, 2022",
      },
      {
        src: "/slike/galerija/agica/14.jpg",
        title: "35. knjižni sejem v Ljubljani",
        description: "Orlando Uršič, Bojan Sedmak, Mojca Andrej, Peter Andrej, 2019",
      },
      {
        src: "/slike/galerija/agica/15.jpg",
        title: "Razstava Ustvarjalna dvojina ilustracij slikanice Agica, mala čarovnica",
        description: "Pionirska knjižnica v TPC City, november 2024",
        alt: "Razstavni pano z dvema ilustracijama iz slikanice Agica, mala čarovnica v TPC City, november 2024",
      },
      {
        src: "/slike/galerija/agica/16.jpg",
        title: "Razstava Ustvarjalna dvojina ilustracij slikanice Agica, mala čarovnica",
        description: "Pionirska knjižnica v TPC City, november 2024",
        alt: "Obiskovalka ob razstavnem panoju z ilustracijami slikanice Agica, mala čarovnica v TPC City, november 2024",
      },
      {
        src: "/slike/galerija/agica/17.jpg",
        title: "15. Pohorska pravljica: glasbena pravljica Agica, mala čarovnica",
        description: "Trg vstaje pred občino Ruše, 19. 8. 2026",
        alt: "Pripovedovalka z lutko Agice na odru Pohorske pravljice, ob njej glasbeniki, Ruše, 19. 8. 2026",
      },
      {
        src: "/slike/galerija/agica/18.jpg",
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
        src: "/slike/galerija/nastopi/01.jpg",
        title: "Predstavitev pesniške zbirke Dež v gugalnici",
        description: "Slovenski dnevi knjige v Mariboru, Grajski trg",
      },
      {
        src: "/slike/galerija/nastopi/02.jpg",
        title: "Predstavitev pesniške zbirke Dež v gugalnici",
        description: "Literarna hiša Maribor, 2015",
        alt: "Branje iz pesniške zbirke Dež v gugalnici, ob bralki sedi poslušalec, Literarna hiša Maribor, 2015",
      },
      {
        src: "/slike/galerija/nastopi/03.jpg",
        title: "Predstavitev pesniške zbirke Dež v gugalnici",
        description: "Literarna hiša Maribor, 2015",
        alt: "Branje iz pesniške zbirke Dež v gugalnici pred slikami na steni, Literarna hiša Maribor, 2015",
      },
      {
        src: "/slike/galerija/nastopi/04.jpg",
        title: "Glazerjevi dnevi v Beogradu",
        description: "Kuća Arte, Beograd, 2017",
      },
      {
        src: "/slike/galerija/nastopi/05.jpg",
        title: "Kulturno-gledališko društvo Reciklaža",
        description: "Foto: Branko Leskovar – Bombica, 2015",
        alt: "Branje iz knjige Rastem do tebe pred mikrofonom, Kulturno-gledališko društvo Reciklaža, 2015",
      },
      {
        src: "/slike/galerija/nastopi/06.jpg",
        title: "Kulturno-gledališko društvo Reciklaža",
        description: "Foto: Branko Leskovar – Bombica, 2015",
        alt: "Bralka drži odprto knjigo Rastem do tebe in bere v mikrofon, Kulturno-gledališko društvo Reciklaža, 2015",
      },
      {
        src: "/slike/galerija/nastopi/07.jpg",
        title: "Slovenski dnevi knjige v Murski Soboti",
        description: "Foto: Ella Combet, 2024",
        alt: "Slovenski dnevi knjige v Murski Soboti, 2024",
      },
      {
        src: "/slike/galerija/nastopi/08.jpg",
        title: "Takt festival, 20. Kantfest",
        description: "Novi Sad, 2022",
      },
      {
        src: "/slike/galerija/nastopi/09.jpg",
        title: "Pohorska pravljica Ruše",
        description: "Park pred občino Ruše, 2013",
      },
      {
        src: "/slike/galerija/nastopi/10.jpg",
        title: "Predstavitev knjige Rege ali žabje frke",
        description: "Literarna hiša Maribor, 2018",
      },
      {
        src: "/slike/galerija/nastopi/11.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Tanger, Maroko, 2024",
      },
      {
        src: "/slike/galerija/nastopi/12.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Dve osebi na vrhu peščene sipine pod modrim nebom, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/slike/galerija/nastopi/13.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Veselo mahanje z vrha sipine, v pesku sledi stopinj, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/slike/galerija/nastopi/14.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Silhueti dveh oseb na sipini proti soncu, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/slike/galerija/nastopi/15.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Marakeš, Maroko, 2024",
      },
      {
        src: "/slike/galerija/nastopi/16.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Udeleženke festivala z dvignjenimi sklenjenimi rokami, Festival pesnikov petih kontinentov, Laayoune, 2024",
      },
      {
        src: "/slike/galerija/nastopi/17.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Branje poezije z mikrofonom na odru z rdečo preprogo sredi puščave ob mraku, Laayoune, 2024",
      },
      {
        src: "/slike/galerija/nastopi/18.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Pesnika sedita na odru sredi peščenih sipin pod večernim nebom, Laayoune, 2024",
      },
      {
        src: "/slike/galerija/nastopi/19.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Laayoune, Maroko, 2024",
        alt: "Branje poezije na puščavskem odru z rdečo preprogo, v ozadju sipina, Laayoune, 2024",
      },
      {
        src: "/slike/galerija/nastopi/20.jpg",
        title: "Festival pesnikov petih kontinentov",
        description: "Rabat, Maroko, 2024",
      },
      {
        src: "/slike/galerija/nastopi/21.jpg",
        title: "Slovenski dnevi knjige v Mariboru",
        description: "Foto: Boštjan Lah, 2024",
        alt: "Branje ob spremljavi električne kitare na odru Slovenskih dnevov knjige v Mariboru, 2024",
      },
      {
        src: "/slike/galerija/nastopi/22.jpg",
        title: "Slovenski dnevi knjige v Mariboru",
        description: "Foto: Boštjan Lah, 2024",
        alt: "Branje v mikrofon, v ozadju kitarist, Slovenski dnevi knjige v Mariboru, 2024",
      },
      {
        src: "/slike/galerija/nastopi/23.jpg",
        title: "Slovenski dnevi knjige – stojnica Kluba KU KU",
        description: "Foto: Boštjan Lah, 2024",
        alt: "Stojnica Kluba KU KU na Slovenskih dnevih knjige v Mariboru, 2024",
      },
      {
        src: "/slike/galerija/nastopi/24.jpg",
        title: "Po Maistrovi lirični poti",
        description: "Kibla Maribor, 10. 10. 2024",
      },
      {
        src: "/slike/galerija/nastopi/25.jpg",
        title: "Večer grozljivih zgodb",
        description: "V prostorih DSP, Ljubljana, 29. 10. 2024",
      },
      {
        src: "/slike/galerija/nastopi/26.jpg",
        title: "Za Prešernom – literarni večer DSP",
        description: "Cankarjev dom, Ljubljana, 8. 2. 2025",
      },
      {
        src: "/slike/galerija/nastopi/27.jpg",
        title: "Branje na dogodku Riječka književna jutra",
        description: "Book caffe Dnevni boravak, 22. 2. 2025",
      },
      {
        src: "/slike/galerija/nastopi/28.jpg",
        title: "Glas avtoric",
        description: "V prostorih DSP, Ljubljana, 8. 3. 2025",
        alt: "Skupinska fotografija petih udeleženk ob knjižnih policah, Glas avtoric, DSP Ljubljana, 8. 3. 2025",
      },
      {
        src: "/slike/galerija/nastopi/29.jpg",
        title: "Glas avtoric",
        description: "V prostorih DSP, Ljubljana, 8. 3. 2025",
        alt: "Udeleženka z listi v rokah sedi na modrem kavču, Glas avtoric, DSP Ljubljana, 8. 3. 2025",
      },
      {
        src: "/slike/galerija/nastopi/30.jpg",
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
        src: "/slike/galerija/kavc-uciteljice-veronike/01.jpg",
        title: "Kavč učiteljice Veronike",
        description: "Slomškov park, Maribor, 2022",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/02.jpg",
        title: "Breza",
        description: "Mestni park, Maribor, 2022",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/03.jpg",
        title: "38. knjižni sejem v Ljubljani",
        description: "Kavč učiteljice Veronike na sejmu, 2022",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/04.jpg",
        title: "38. knjižni sejem v Ljubljani",
        description: "Peter Andrej, Mojca Andrej, Jure Potokar, 2022",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/05.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Literarna hiša Maribor, 2023",
        alt: "Pogovor o romanu Kavč učiteljice Veronike: sogovornica, voditelj s knjigo in kitarist, Literarna hiša Maribor, 2023",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/06.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Literarna hiša Maribor, 2023",
        alt: "Sogovornica na predstavitvi romana Kavč učiteljice Veronike sedi pred sliko na steni, Literarna hiša Maribor, 2023",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/07.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Knjižnica Janka Glazerja Ruše, 2022",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/08.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "OŠ Prežihovega Voranca Maribor, 2022",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/09.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Konjeniški park Starošince, 2023",
        alt: "Branje iz knjige na klopci na travniku, Konjeniški park Starošince, 2023",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/10.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Konjeniški park Starošince, 2023",
        alt: "Branje na prostem ob plišastem konjičku, v ozadju lesena hišica, Konjeniški park Starošince, 2023",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/11.jpg",
        title: "Predlog naslovnice romana Kavč učiteljice Veronike",
        description: "Ilustracija: Eva Rajher",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/12.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Zavod Rast Ruše, 19. 9. 2024",
        alt: "Pogovor o romanu Kavč učiteljice Veronike za mizo s cvetjem in knjigami, Zavod Rast Ruše, 19. 9. 2024",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/13.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Zavod Rast Ruše, 19. 9. 2024",
        alt: "Branje za mizo z vazo cvetja, Zavod Rast Ruše, 19. 9. 2024",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/14.jpg",
        title: "Članek v reviji Jana",
        description: "Jana (Muze), 8. 10. 2024",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/15.jpg",
        title: "Predstavitev romana Kavč učiteljice Veronike",
        description: "Muzej Splošne knjižnice Ljutomer, 21. 11. 2024",
        alt: "Gostja sedi ob mizi s knjigami in vrtnico, za njo silhuete znanih osebnosti, Muzej Splošne knjižnice Ljutomer, 21. 11. 2024",
      },
      {
        src: "/slike/galerija/kavc-uciteljice-veronike/16.jpg",
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
        src: "/slike/galerija/rege/01.jpg",
        description: "Knjižnica Janka Glazerja Ruše, 2018",
        alt: "Pripovedovalka v pleteni žabji kapi za kamišibaj odrom med knjižnimi policami, Knjižnica Janka Glazerja Ruše, 2018",
      },
      {
        src: "/slike/galerija/rege/02.jpg",
        description: "Knjižnica Janka Glazerja Ruše, 2018",
        alt: "Pripovedovalka v zeleni pleteni kapi z žabjimi očmi, Knjižnica Janka Glazerja Ruše, 2018",
      },
      {
        src: "/slike/galerija/rege/03.jpg",
        description: "Knjižnica Janka Glazerja Ruše, 2018",
        alt: "Trije nastopajoči v žabjih kapah ob mizici s knjigami, Knjižnica Janka Glazerja Ruše, 2018",
      },
      { src: "/slike/galerija/rege/04.jpg", description: "Trg pred občino Ruše, 12. 8. 2024" },
    ],
  },
  {
    slug: "gledalisce",
    title: "Gledališče",
    description: "Predstave gledališča MOR.",
    photoTitle: "Gledališče MOR",
    photos: [
      {
        src: "/slike/galerija/gledalisce/01.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Igralka čepi ob pisalnem stroju na odru, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/02.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Štirje igralci sedijo na odru pred velikimi bananami, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/03.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Igralka v rdečih čevljih stopa čez oder, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/04.jpg",
        description: "Vse ob pravem času (David Ives), 2015",
        alt: "Štirje igralci sedijo v vrsti na temnem odru, Vse ob pravem času (David Ives), gledališče MOR, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/05.jpg",
        description: "Blabilon stolp, 2015",
        alt: "Trije igralci na odru pred projekcijo, prizor Blabilon stolp, gledališče MOR, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/06.jpg",
        description: "Ekipa gledališča MOR, 2015",
        alt: "Skupinska fotografija sedmih članov gledališča MOR na odru, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/07.jpg",
        description: "Blabilon stolp, 2015",
        alt: "Projicirana zasedba prizora Blabilon stolp iz predstave Vse ob pravem času, gledališče MOR, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/08.jpg",
        description: "Ekipa gledališča MOR, 2015",
        alt: "Trije člani gledališča MOR, 2015",
      },
      {
        src: "/slike/galerija/gledalisce/09.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Mali princ v pisanem puloverju med igralkama z zvezdama, gledališče MOR, 2017",
      },
      {
        src: "/slike/galerija/gledalisce/10.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Igralci Malega princa na odru z luno in zvezdami, gledališče MOR, 2017",
      },
      {
        src: "/slike/galerija/gledalisce/11.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Igralke z zvezdami in kitarist na odru, predstava Mali princ, gledališče MOR, 2017",
      },
      {
        src: "/slike/galerija/gledalisce/12.jpg",
        description: "Predstava Mali princ, 2017",
        alt: "Celotna zasedba Malega princa na odru, gledališče MOR, 2017",
      },
      { src: "/slike/galerija/gledalisce/13.jpg", description: "Predstava Mali princ, Osijek, 2018" },
      { src: "/slike/galerija/gledalisce/14.jpg", description: "Recital Glazerjeve poezije, 2016" },
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
