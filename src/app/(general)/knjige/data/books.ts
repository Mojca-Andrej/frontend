
export enum Genre {
    Adult = "Adult",
    Children = "Children",
}

export interface Book {
    title: string;
    year: number;
    author: string;
    genre: Genre;
    description: string;
    image: string;
    publisher: string;
    type?: string;
    shortDescription?: string;
    cd?: string;
    ilustrator?: string;
}




export const books: Book[] = [
    {
        title: "Nikoli ne reci, da ni skrivnosti",
        year: 2000,
        author: "Mojca Andrej",
        genre: Genre.Adult,
        description: `V spremni besedi urednik MLD, Marjan Pungartnik, pesniško zbirko označi kot
        »Gravitacijsko polje ljubezni./…/ Čar te zbirke je v uravnovešenosti med "lebdečim",
        ki se razpreda v obilici subtilnih občutij, podob, in "gibanjem", padanjem in vrtenjem,
        med snovnim in pojmovnim.«`,
        image: "nikoli_ne_reci.jpg",
        publisher: "Mariborska literarna družba",
        type: "pesniška zbirka"
    },
    {
        title: "Dež v gugalnici",
        year: 2015,
        author: "Mojca Andrej",
        genre: Genre.Adult,
        description: `Zoran Pevec v spremni besedi Beseda in tišina razmišlja: » ... In kaj mu (bralcu)
        pošilja Mojca Andrej v knjigi z naslovom Dež v gugalnici … Kar je na zunaj najbolj
        opazno – pet sklopov pesmi, od katerih se vsak nanaša na zanimive eksistencialne
        izkušnje, a tudi na vprašanje o tem, kako biti, kako se nanašati na drugega, s tem ko
        upoveduješ samega sebe. Lirski subjekt se tako že z naslovom guglje v svet, v
        katerem ima svoje mesto pripovedovalka z razmišljanjem o smislu bivanja, o naravi
        in ljubezni. /…/ … verzi so napolnjeni s sodobnim besediščem, inovativno podobo in
        včasih se prelivajo med sabo … /…/ V teh pesmih so sanje in besede in tišina …«`,
        image: "dez_v_gugalnici.jpg",
        publisher: "Mariborska literarna družba, Klub KU-KU in Kulturni klub Nomadi",
        type: "pesniška zbirka"
    },
    {
        title: "Ostanek umrle zvezde",
        year: 2020,
        author: "Mojca Andrej",
        genre: Genre.Adult,
        description: `V spremni besedi Tudi jokati je pozabljena navada je Vinko Möderndorfer zapisal:
        »… Pomemben in zelo izviren pa je humor, ki ga pesnica Mojca Andrej neprestano in
        zelo uspešno vpleta v svoje pesmi. Pravzaprav je humor, nenavadne in na poseben
        način duhovite besedne zveze in metafore, osnovna značilnost njene poezije.
        Seveda ne gre za enostaven humor, prej za nekakšno ironijo, tudi cinizem, pa spet
        za dobrohotno dovtipnost … Silovita zbirka je pred nami. Duhovita in trpka. Jezikovno
        bogata in izvirna. Pravi užitek.«`,
        image: "ostanek_umrle_zvezde.jpg",
        publisher: "Litera Maribor",
        type: "pesniška zbirka"
    },
    {
        title: "Kavč učiteljive Veronike",
        year: 2022,
        author: "Mojca Andrej",
        genre: Genre.Adult,
        description: `Spremno besedo v romanu je napisala urednica Litere Gabriela Babnik Ouattara:
        »V romanu Kavč učiteljice Veronike torej naletimo na presenetljivo iskrenost; med
        drugim je Veronika polna jeze, ker se mora ves čas boriti: za svojo malico in pijačo, v
        šoli za pozornost otrok in vsaj malo empatije vodstva, med sodelavkami za podporo
        in razumevanje, v parku za svojo klop … Zelo jasno pa razume, da se ne more boriti
        proti sistemu in da se le izčrpava.«`,
        image: "kuv1.jpg",
        publisher: "Litera Maribor",
        type: "roman"
    },
    {
        title: "Kavč učiteljive Veronike",
        year: 2024,
        author: "Mojca Andrej",
        genre: Genre.Adult,
        description: `Milan Dekleva je zapisal: »Glavna oseba, njena kriza in upornost sta napisani
        doživeto in sta žarek upanja v tem ubožnem razvrednotenem svetu. /…/ Romanu
        dajejo poseben čar humorni, pa tudi groteskni toni, ki niso nikoli pretirani in ne peljejo
        v karikiranje.«`,
        image: "kuv2.jpg",
        publisher: "Klub KU KU, Glazerjeva domačija",
        type: "roman (ponatis oz. prvi natis druge založbe)"
    },
    {
        title: "Transitions",
        year: 2024,
        author: "Mojca Andrej in Peter Andrej",
        genre: Genre.Adult,
        description: `Zbirka prevedene poezije v angleški jezik; vsak avtor se predstavi z desetimi prevodi
        svoje poezije v angleščini. Prevajalci so različni.`,
        image: "transitions.jpg",
        publisher: "Mariborska literarna družba",
        type: "prevedena poezija, dvostranska knjiga"

    },
    {
        title: "Rastem do tebe",
        year: 2013,
        author: "Mojca Andrej",
        genre: Genre.Children,
        description: `Ob tem je nastala istoimenska glasbeno-plesna predstava, 2014.

        Pesmi so nastajale kot šolski projekt Kako zraste knjiga, ker so bili učenci soavtorji
        knjige, saj je opremljena z njihovimi ilustracijami. Knjigi je dodana glasbena
        zgoščenka, na kateri so te pesmi uglasbene (Peter Andrej), dodani pa so tudi notni
        zapisi in
        glasbene podlage, da se otroci lažje sami naučijo zapeti pesem.

        Borut Gombač je zapisal:
        »Pesnica Mojca Andrej paradoksalno dokazuje, da prepad med svetom odraslosti in
        svetom otroštva le ni tako velik, kot se zdi na prvi pogled, oziroma da se ga da s
        pomočjo poezije z lahkoto premagati.«`,
        image: "rastem_do_tebe.jpg",
        publisher: "OŠ Prežihovega Voranca Maribor, Klub KU KU",
        type: "zbirka pesmi za otroke"

    },
    {
        title: "Agica, mala čarovnica",
        year: 2019,
        author: "Mojca Andrej",
        genre: Genre.Children,
        description: `
        Gre za poetično zgodbo z inovativnimi ilustracijami Darke Erdelji in dodanimi pesmimi
        Petra Andreja. Knjigi je priložena tudi glasbena zgoščenka. Zgodbo predstavlja z
        glasbenim kamišibajem in z magnetnimi lutkami (pojeta Peter Andrej in igralka
        Alenka Cilenšek). V nastajanju je prevod v nemški jezik.`,
        image: "agica.jpg",
        publisher: "Litera, Klub KU KU, Glazerjeva domačija",
        ilustrator: "Darka Erdelji",
        cd: "Peter Andrej",
        type: "ilustrirana pripoved",
        shortDescription: `
        ... poetična zgodba o malem Jakobu in dedku se prične, ko se Jakob sredi črne črne
        noči nenadoma prebudi in z radovednim vprašanjem prebudi dedka, da se zazreta v
        nočno nebo in se skupaj čudita mežikajoči zvezdi. Njuno čudenje je pravzaprav uvod
        v zgodbo o Agici, o majhnem bitju, ki je v očeh drugih čudna. 
        Edina v svojem gnezdu je, ki ne joče, ampak cviiiili, ki zeha z usti v obliki črke i, ki ne
        hodi, ampak poskakuje. Počne take reči, ki drugim še na misel ne bi prišle. Tudi
        oblači se po svoje. In v svojih treh gumbih nenavadne oblike in v sebi nenadoma
        odkrije čarobno moč. 
        Nad tem je še sama začudena. Zaradi tega ji vsi rečejo kar mala čarovnica. 
        Neustavljiva radovednost  po raziskovanju jo vodi v širno vesolje. 
        Zapusti domače gnezdo in se naseli na Modro zvezdo (morda zato mežika?). Tu je
        čisto zadovoljna, vse dokler ji ne postane dolgčas. Same čarovnije nimajo nobenega
        smisla, če jih z nikomer ne deliš … Na srečo se nekdo, prav takšen kot ona, pojavi na
        njeni zvezdi …

        To srečanje Agice z Agesom tudi barvno zaznamuje okvirno zgodbo, da se osredini v
        dveh pesmih, ki sta uglasbeni. Poetična zgodba v sebi nosi mnogo čudnih  reči in
        skritih vprašanj. Eno smo si zastavili tudi sami: ali ni &quot;majhnemu&quot; in &quot;velikemu&quot; bitju
        skupno isto čudenje? In ali ni prav čudenje tista najbolj živa neznana sila, ki nas vodi
        naprej, iz znanega v neznano? In da se dva, kot sta Agica in Ages, srečata na isti
        zvezdi, je pravzaprav čudež, kajne?
        Dedek že ve.`
    },

]