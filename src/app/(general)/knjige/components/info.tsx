import { Book } from "../data/books";
import Image from "next/image";

interface InfoProps {
    book: Book;
}

export default function Info({ book }: InfoProps) {
    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl">
                <div className="md:col-span-2">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ff5e62] font-semibold  text-xl md:text-2xl mb-2">{book.title}</h1>
                    <h2 className="text-neutral-500 md:text-lg mb-2">{book.type}</h2>
                    <section className="flex flex-col space-y-2 mb-8 text-neutral-900 md:text-lg">
                        <p dangerouslySetInnerHTML={{ __html: book.description }}></p>
                        {book.ilustrator && <p><span className="font-semibold">Ilustratorka: </span>{book.ilustrator}</p>}
                        {book.cd && <p><span className="font-semibold">CD uglasbenih pesmi: </span>{book.cd}</p>}
                        <p><span className="font-semibold">{book.title === "Transitions" ? "Avtorja:": "Avtorica:"} </span>{book.author}</p>
                        <p><span className="font-semibold">Založba: </span> {book.publisher}</p>
                        <p><span className="font-semibold">Leto izdaje: </span> {book.year}</p> 
                    </section>
                </div>  
                <div className="md:col-span-1 flex items-center justify-center">
                    <Image priority={true} src={`/${book.image}`} alt={book.title} height={400} width={400} className="w-2/3 sm:w-1/2 md:w-full xl:w-2/3 object-contain rounded-sm shadow-md" />
                </div>
            </div>
        </main>
    );
}
