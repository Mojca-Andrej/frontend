import Image from "next/image";
export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#4568DC] to-[#B06AB3] text-transparent bg-clip-text w-fit">Pesnica, pisateljica, performerka</h2>
        <p className="mt-4 text-neutral-900">
        <b>Mojca Andrej</b> (dekliško Alešovec) se je rodila leta 1973 v Mariboru. Po srednji
        ekonomski šoli je študirala slovenščino in hrvaščino na Filozofski fakulteti Maribor.
        Danes je profesorica slovenščine. <br /> 
        Piše za odrasle in za otroke. Izdala je tri pesniške zbirke: <em>Nikoli ne reci, da ni
        skrivnosti</em> (Mariborska literarna družba, 2000), <em>Dež v gugalnici</em> (Mariborska literarna
        družba, Klub KU-KU in Kulturni klub Nomadi, 2015), <em>Ostanek umrle zvezde</em> (Maribor:
        Litera, 2020) in roman <em>Kavč učiteljice Veronike</em> (Maribor: Litera, 2022). <br />
        Za otroke je napisala zbirko pesmi <em>Rastem do tebe</em> in ilustrirano pripoved <em>Agica, mala
        čarovnica</em>; obe sta doživeli večkratno uprizoritev in uglasbitev. Pesmi za otroke
        objavlja tudi v reviji Galeb, ki izhaja v Trstu. <br />
        Vodi srečanja in usmerja pogovore v Glazerjevem bralnem klubu, ki je nastal maja
        2023 v Zavodu Rast Ruše v sodelovanju z Društvom Glazerjeva domačija.
        Junija 2024 je postala članica Društva slovenskih pisateljev. <br />
        Svojo poezijo predstavlja na festivalih doma in v tujini. Nekatere njene pesmi so
        prevedene v slovaški, hrvaški, makedonski, bolgarski, arabski in angleški jezik in so
        objavljene v domačih in tujih revijah in zbornikih. <br />
        Od leta 2015 je članica glasbenega gledališča MOR (Mladi oder Ruše). S Petrom
        Andrejem nastopata z avtorskimi predstavami za otroke z glasbenim kamišibajem in
        magnetnim gledališčem doma in v tujini. <br />
        Živi in ustvarja v Rušah. 
        </p>
      </div>
      <div className="flex flex-col justify-center md:col-span-1 items-center md:items-start ">
        <Image priority={true} width={400} height={400} src="/naslovnica.jpg" alt="Descriptive Alt Text" className="md:w-full max-h-[90%] object-cover w-2/3 rounded-md shadow-md" />
        <p className="text-neutral-500 text-sm flex justify-start px-1 py-2">Foto: Boštjan Lah</p>
      </div>
    </div>
  );
}
