import { odmevi, TipiOdmevov } from "./data/data";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Odmevi() {
  const zvezdaOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.zvezda);
  const veronikaOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.veronika);
  const arsOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.ars);
  const raznoOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.razno);
  
  return (
    <main>
         
        <section className="md:text-lg">
            <ul className="pb-2">
                {zvezdaOdmevi.map(odmev => (
                    <li className="flex py-2 md:py-0" key={odmev.title}>
                      <div className="text-neutral-900 mr-2">
                        {odmev.title}
                      </div>
                      <Link className="text-sky-400 hover:text-sky-600 flex items-center transition-colors" href={odmev.src} target="_blank"> 
                        <SquareArrowOutUpRight className="h-[18px] aspect-square"/>
                      </Link>
                    </li>
                ))}
            </ul>
        </section>

        <h2 className="text-xl text-neutral-700 font-semibold py-4">Odzivi na roman Kavč učiteljice Veronike</h2>
        <section className="md:text-lg pl-2 mb-8">
            <ul className="pb-4">
                {veronikaOdmevi.map(odmev => (
                    <li className="flex py-2 md:py-0" key={odmev.title}>
                      <div className="text-neutral-900 mr-2">
                        {odmev.title}
                      </div>
                      <Link className="text-sky-400 hover:text-sky-600 flex items-center justify-center transition-colors" href={odmev.src} target="_blank"> 
                        <SquareArrowOutUpRight className="h-[18px] aspect-square"/>
                      </Link>
                    </li>
                ))}
            </ul>
            <h2 className="text-lg text-neutral-600 font-semibold py-1">Ars Litera</h2>
            <section className="md:text-lg pb-4">
                <ul>
                    {arsOdmevi.map(odmev => (
                        <li className="flex py-2 md:py-0" key={odmev.title}>
                          <div className="text-neutral-900 mr-2">
                            {odmev.title}:
                          </div>
                          <Link className="text-sky-400 hover:text-sky-600 flex items-center" href={odmev.src} target="_blank"> 
                            <SquareArrowOutUpRight className="h-[18px] aspect-square"/>
                          </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    </main>
  )
}
