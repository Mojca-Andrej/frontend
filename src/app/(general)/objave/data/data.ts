export interface Objava {
  naslov: string;
  mesto: string;
  vsebina: string;
  datum: string;
  link?: string;
  popup?: string [];
}

export const objave: Objava[] = [
  {
    naslov: "Male čarovnije",
    mesto: "Mlada Sodobnost",
    vsebina: "Pesmi za otroke",
    datum: "november 2024",
    popup: ["/popup/ms_1.jpeg", "/popup/ms_2.jpeg"],
  },
  {
    naslov: "Forgotten by birds",
    mesto: "Za vzorec besede 1 - zbirka prevodov DSP",
    vsebina: "Prevod pesmi Od ptic pozabljen",
    datum: "december 2024",
  },
  {
    naslov: "Od ptic pozabljen",
    mesto: "Radio ARS - Literarni nokturno",
    vsebina:
      "Interpretacija pesmi iz neobjavljene zbirke pesmi Močvirje pozabe",
    datum: "februar 2025",
    link: "https://ars.rtvslo.si/podkast/literarni-nokturno/289/175112764",
  },

  {
    naslov: "Knjižničarka",
    mesto: "Mentor",
    vsebina: "Kratka zgodba",
    datum: "marec 2025",
    popup: ["/popup/mentor_naslovna.jpeg", "/popup/mentor_objava.jpeg"],
  },
  {
    naslov: "Močvirje pozabe",
    mesto: "Poetikon 124 - 125",
    vsebina: "Pesmi iz še neobjavljene pesniške zbirke",
    datum: "april 2025",
    popup: ["/popup/poetikon_naslovna.jpeg", "/popup/poetikon_1.jpeg", "/popup/poetikon_2.jpeg", "/popup/poetikon_3.jpeg"],
  },
  {
    naslov: "Pesem Oblak in zgodba Prazna knjiga",
    mesto:"Galeb, revija za otroke, ki izhaja v Trstu",
    vsebina: "Za otroke",
    datum: "april 2025",
    popup: ["/popup/galeb_naslovnica.jpeg", "/popup/galeb_1.jpeg", "/popup/galeb_2.jpg"],
  },
  {
    naslov: "Žejna in druge pesmi",
    mesto: "Vrabec Anarhist",
    vsebina: "Pesmi iz še neobjavljene pesniške zbirke",
    datum: "maj 2025",
    link: "https://vrabecanarhist.eu/2025/05/22/zejna-in-druge-pesmi/"
  },
  {
    naslov: "Pet pesmi",
    mesto: "LITERATURA",
    vsebina: "Pesmi iz še neobjavljene pesniške zbirke",
    datum: " junij - julij 2025",
    popup: ["/popup/literatura_naslovna.jpeg", "/popup/literatura_1.jpeg", "/popup/literatura_2.jpeg", "/popup/literatura_3.jpeg"],
  },
];
