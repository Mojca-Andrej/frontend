
export interface Objava{
    mesto: string;
    datum: string;
    naslov: string;
    vsebina: string;
    link?:string;
}


export const objave: Objava[] = [
    {
        mesto: "Mlada sodobnost",
        datum: "november 2024",
        naslov: "Male čarovnije",
        vsebina: "Pesmi za otroke",
    },
    {
        mesto: "Za vzorec besede 1 - zbirka prevodov DSP",
        datum: "december 2024",
        naslov: "Forgotten by birds",
        vsebina: "Prevod pesmi Od ptic pozabljen",
    }, 
    {
        mesto: "Radio ARS - Literarni nokturno",
        datum: "27 februar 2025",
        naslov: "Od ptic pozabljen",
        vsebina: "Interpretacija pesmi iz neobjavljene zbirke pesmi Močvirje pozabe",
        link: "https://ars.rtvslo.si/podkast/literarni-nokturno/289/175112764"
    },
]