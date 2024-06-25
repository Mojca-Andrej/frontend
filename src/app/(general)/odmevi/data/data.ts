export enum TipiOdmevov {
    veronika,
    ars,
    razno,
    zvezda
}



export interface Odmevi {
    title:string, 
    src:string,
    type: TipiOdmevov
}


export const odmevi: Odmevi[] = [
    {
        title: "O pesniški zbirki Ostanek umrle zvezde, Maribor24",
        src: "https://maribor24.si/kultura/mojca-andrej-izdala-svojo-tretjo-pesnisko-zbirko",
        type: TipiOdmevov.zvezda
    },
    {
        title: "Radio Maribor, novinarka Brigita Mohorič, januar 2023, spletni zapis",
        src:  `https://www.rtvslo.si/radio-maribor/mojca-andrej-zgodba-uciteljice
        -veronike-je-pripoved-o-danasnji-druzbi-o-mnogih-med-nami/655484`,
        type: TipiOdmevov.veronika
    },
    {
        title: `Predstavitev romana v Rušah, 15. 12. 2022, kratki video`,
        src: `https://www.youtube.com/watch?v=uT__ARDYqTc`,
        type: TipiOdmevov.veronika
    },
    {
        title: `Intervju na radiu Maribor (od 7.55 naprej) z Brigito Mohorič`,
        src: `https://www.rtvslo.si/radio/podkasti/kultura-zdravi-umetnost-
        lajsa/155779478/174926726`,
        type: TipiOdmevov.veronika
    },
    {
        title: `Podcast Zorni kot z Natašo Rižnar, januar 2023`,
        src: `https://www.rtvslo.si/radio-maribor/podcast-zorni-kot-18-otroci-mislijo-da-so-vsi-odgovori-na-googlu-oziroma-le-klik-stran/656679?fbclid=IwAR1QVIaVSz3A1CpwgMwskysCjZx6qctmmt3j08TJn2Fuuvn5rT0WoxKD-OQ`,
        type: TipiOdmevov.veronika
    },
    {
        title: `intervju`,
        src: `https://www.arslitera.org/2023/02/07/pescena-ura-ne-tiktaka-neslisno-polzi-pogovor-z-mojco-andrej/`,
        type: TipiOdmevov.ars
    },
    {
        title: `odlomki`,
        src: `https://www.arslitera.org/2023/02/07/kavc-uciteljice-veronike-odlomki/`,
        type: TipiOdmevov.ars
    },
    {
        title: "Radio Slovenske gorice – Pod zvezdami",
        src: "https://www.rsg.si/2023/03/02/pod-zvezdami-mojca-andrej/",
        type: TipiOdmevov.veronika
    },
    {
        title: "Matej Krajnc v Kulturno-medijskem centru Slovenije",
        src: "https://homocumolat.com/2023/10/09/mojca-andrej-kavc-uciteljice-veronike/",
        type: TipiOdmevov.veronika
    },
    {
        title: "Primorske novice, 21. 6. 2024",
        src: "https://primorske.svet24.si/kultura/knjizna-polica/do-sijaja-zlosceno-ogledalo",
        type: TipiOdmevov.veronika
    }
]