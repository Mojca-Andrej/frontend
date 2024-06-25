import Info from "../../components/info"
import { books } from "../../data/books";

export default function AgicaMalaCarovnica() {

    const bookName = "Agica, mala čarovnica";
    const book = books.find((book) => book.title === bookName);

    return (
        <main>   
            {book && <Info book={book} />}
            <div className="container mx-auto">
                <h2 className="text-2xl text-semibold text-neutral-700 mt-8 py-4">Kratek opis</h2>
                <p className="text-neutral-600">
                ...poetična zgodba o malem Jakobu in dedku se prične, ko se Jakob sredi črne črne
        noči nenadoma <em>prebudi</em> in z radovednim vprašanjem <em>prebudi</em> dedka, da se zazreta v
        nočno nebo in se skupaj <em>čudovita</em> mežikajoči zvezdi. Njuno <em>čudenje</em> je pravzaprav uvod
        v zgodbo o Agici, o majhnem bitju, ki je v očeh drugih čudna. <br />
        Edina v svojem gnezdu je, ki ne joče, ampak cviiiili, ki zeha z usti v obliki črke i, ki ne
        hodi, ampak poskakuje. Počne take reči, ki drugim še na misel ne bi prišle. Tudi
        oblači se po svoje. In v svojih treh gumbih nenavadne oblike in v sebi nenadoma
        odkrije čarobno moč.<br />
        Nad tem je še sama začudena. Zaradi tega ji vsi rečejo kar mala čarovnica.
        <br />
        <br />
        Neustavljiva <em>radovednost</em> po raziskovanju jo vodi v širno vesolje.<br />
        Zapusti domače gnezdo in se naseli na Modro zvezdo (morda zato mežika?). Tu je
        čisto zadovoljna, vse dokler ji ne postane dolgčas. Same čarovnije nimajo nobenega
        smisla, če jih z nikomer ne deliš … Na srečo se nekdo, prav takšen kot ona, pojavi na
        njeni zvezdi … <br /> <br />

        To srečanje Agice z Agesom tudi barvno zaznamuje okvirno zgodbo, da se osredini v
        dveh pesmih, ki sta uglasbeni. Poetična zgodba v sebi nosi mnogo <em>čudnih</em> reči in
        skritih vprašanj. Eno smo si zastavili tudi sami: ali ni &quot;majhnemu&quot; in &quot;velikemu&quot; bitju
        skupno isto <em className="underline">čudenje?</em> In ali ni prav čudenje tista najbolj živa neznana sila, ki nas vodi
        naprej, iz znanega v <em>neznano?</em> In da se dva, kot sta Agica in Ages, <em>srečata na isti
        zvezdi</em>, je pravzaprav čudež, kajne? <br />
        Dedek že ve.
                </p>
            </div>
        </main>
    )
}