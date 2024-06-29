import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mojca Andrej",
  description: "Mojca Andrej (dekliško Alešovec) se je rodila leta 1973 v Mariboru. Po srednji ekonomski šoli je študirala slovenščino in hrvaščino na Filozofski fakulteti Maribor. Danes je profesorica slovenščine. Piše za odrasle in za otroke.  Izdala je tri pesniške zbirke: Nikoli ne reci, da ni skrivnosti (Mariborska literarna družba, 2000), Dež v gugalnici (Mariborska literarna družba, Klub KU-KU in Kulturni klub Nomadi, 2015), Ostanek umrle zvezde (Maribor: Litera, 2020) in roman Kavč učiteljice Veronike (Maribor: Litera, 2022).  Za otroke je napisala zbirko pesmi Rastem do tebe in ilustrirano pripoved Agica, mala čarovnica; obe sta doživeli večkratno uprizoritev in uglasbitev. Pesmi za otroke objavlja tudi v reviji Galeb, ki izhaja v Trstu. Vodi srečanja in usmerja pogovore v Glazerjevem bralnem klubu, ki je nastal maja 2023 v Zavodu Rast Ruše v sodelovanju z Društvom Glazerjeva domačija. Junija 2024 je postala članica Društva slovenskih pisateljev. Svojo poezijo predstavlja na festivalih doma in v tujini. Nekatere njene pesmi so prevedene v slovaški, hrvaški, makedonski, bolgarski, arabski in angleški jezik in so  objavljene v domačih in tujih revijah in zbornikih. Od leta 2015 je članica glasbenega gledališča MOR (Mladi oder Ruše). S Petrom Andrejem nastopata z avtorskimi predstavami za otroke z glasbenim kamišibajem in magnetnim gledališčem doma in v tujini. Živi in ustvarja v Rušah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
