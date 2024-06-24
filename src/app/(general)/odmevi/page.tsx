import { odmevi, TipiOdmevov } from "./data/data"
import Link from "next/link"
import { SquareArrowOutUpRight } from "lucide-react"

export default function Odmevi() {
  const zvezdaOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.zvezda)
  const veronikaOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.veronika)
  const arsOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.ars)
  const raznoOdmevi = odmevi.filter(odmev => odmev.type === TipiOdmevov.razno)
  return (
    <main className="px-4 md:px-16 bg-white">
        <h1 className="text-2xl text-black font-semibold">Odmevi</h1>
        <section className="text-md md:text-lg pt-4 pb-2">
            <ul className="pb-2">
                {zvezdaOdmevi.map(odmev => (
                    <li className="flex py-2 md:py-0">
                      <div className="text-neutral-900 mr-2">
                        {odmev.title}
                      </div>
                      <Link className="text-blue-500 hover:text-blue-700 flex  items-center" href={odmev.src} target="_blank"> <SquareArrowOutUpRight className="h-[18px] aspect-square"/></Link>
                    </li>
                ))}
            </ul>
        </section>

        <h2 className="text-xl text-neutral-700 font-semibold">Odzivi na roman Kavč učiteljice Veronike</h2>
        <section className="text-md md:text-lg pt-2 pb-4">
            <ul className="pb-2">
                {veronikaOdmevi.map(odmev => (
                    <li className="flex py-2 md:py-0">
                      <div className="text-neutral-900 mr-2">
                        {odmev.title}
                      </div>
                      <Link className="text-blue-500 hover:text-blue-700 flex items-center justify-center" href={odmev.src} target="_blank"> <SquareArrowOutUpRight className="h-[18px] aspect-square"/></Link>
                    </li>
                ))}
            </ul>
        </section>

        <h2 className="text-xl text-neutral-700 font-semibold">Art Litera</h2>
        <section className="text-md md:text-lg pt-2 pb-4">
            <ul className="pb-2">
                {arsOdmevi.map(odmev => (
                    <li className="flex py-2 md:py-0">
                      <div className="text-neutral-900 mr-2">
                        {odmev.title}
                      </div>
                      <Link className="text-blue-500 hover:text-blue-700 flex items-center" href={odmev.src} target="_blank"> <SquareArrowOutUpRight className="h-[18px] aspect-square"/></Link>
                    </li>
                ))}
            </ul>
        </section>

        <h2 className="text-xl text-neutral-700 font-semibold">Razno</h2>
        <section className="text-md md:text-lg pt-2 pb-4">
            <ul className="pb-2">
                {raznoOdmevi.map(odmev => (
                    <li className="flex py-2 md:py-0">
                      <div className="text-neutral-900 mr-2">
                        {odmev.title}
                      </div>
                      <Link className="text-blue-500 hover:text-blue-700 flex items-center" href={odmev.src} target="_blank"> <SquareArrowOutUpRight className="h-[18px] aspect-square"/></Link>
                    </li>
                ))}
            </ul>
        </section>
    </main>
  )
}