import { objave } from "./data/data";
import Link from "next/link";

export default function Objave() {
  return (
    <main>
      <h1 className="text-2xl w-fit bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 to-amber-500 font-semibold mb-4">
        Objave
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
        {objave.map((objava, index) => (
          <article
            key={index}
            className="bg-yellow-100 text-black p-6 rounded-xl shadow-lg relative border border-yellow-300 transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-2">{objava.naslov}</h2>
            <p className="text-sm text-gray-700 mb-1">{objava.mesto}</p>
            <p className="absolute top-3 right-3 text-gray-500 text-xs">
              {objava.datum}
            </p>
            <p className="text-gray-800 mt-2">{objava.vsebina}</p>
            {objava.link && (
              <Link
                href={objava.link}
                target="_blank"
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Več →
              </Link>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
