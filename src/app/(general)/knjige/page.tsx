import Topbar from "../components/topbar"
import Footer from "../components/footer"
import { books } from "./data/books"
import { Genre } from "./data/books"
import Link from "next/link"


export default function Knjige() {

  const booksForAdults = books.filter(book => book.genre === Genre.Adult)
  const booksForChildren = books.filter(book => book.genre === Genre.Children)
  return (
    <main>
        <Topbar/>
        <div className="bg-white px-4 py-8 md:px-16">
          <h1 className="text-black font-semibold text-2xl py-4">Knjige za odrasle</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-4 max-w-screen-xl">
            {booksForAdults.map(book => (
                <div key={book.title} className="">
                    <Link href={`/knjige/${book.title}`}>
                            <img src={`${book.image}`} alt={book.title} className="h-[280px] w-[200px] aspect-auto transition ease-in-out delay-0 hover:scale-105" />
                    </Link>
                </div>
            ))}
          </div>

          <h1 className="text-black font-semibold text-2xl py-4">Knjige za otroke</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-4 max-w-screen-xl">
            {booksForChildren.map(book => (
                <div key={book.title} className="">
                    <Link href={`/knjige/${book.title}`}>
                            <img src={`${book.image}`} alt={book.title} className="h-[280px] w-[200px] aspect-auto transition ease-in-out delay-0 hover:scale-105" />
                    </Link>
                </div>
            ))}
          </div>
        </div>
        
        <Footer/>
    </main>
  )
}