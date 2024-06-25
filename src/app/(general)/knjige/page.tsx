import { books } from "./data/books"
import { Genre } from "./data/books"
import Link from "next/link"


export default function Knjige() {

  const booksForAdults = books.filter(book => book.genre === Genre.Adult)
  const booksForChildren = books.filter(book => book.genre === Genre.Children)
  return (
    <main>
        <h2 className="font-semibold text-2xl mb-8 bg-gradient-to-r from-[#11998e] to-[#38ef7d] text-transparent bg-clip-text w-fit">Knjige za odrasle</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-4 max-w-screen-xl">
          {booksForAdults.map(book => (
              <div key={book.title} className="flex items-center justify-center">
                  <Link href={`/knjige/${book.link}`}>
                          <img src={`${book.image}`} alt={book.title} className="w-full rounded-sm object-contain hover:shadow-md transition ease-in-out delay-0 hover:scale-105" />
                  </Link>
              </div>
          ))}
        </div>
        <h1 className="font-semibold text-2xl my-8 bg-gradient-to-r from-[#11998e] to-[#38ef7d] w-fit bg-clip-text text-transparent">Knjige za otroke</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-4 max-w-screen-xl">
          {booksForChildren.map(book => (
              <div key={book.title} className="flex items-center justify-center">
                  <Link href={`/knjige/${book.link}`}>
                          <img src={`${book.image}`} alt={book.title} className="w-full rounded-sm hover:shadow-md object-contain transition ease-in-out delay-0 hover:scale-105" />
                  </Link>
              </div>
          ))}
        </div>
    </main>
  )
}