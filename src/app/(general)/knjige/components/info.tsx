import { Book } from "../data/books";

interface InfoProps {
    book: Book;
}

export default function Info({ book }: InfoProps) {
    return (
        <main className="bg-white px-4 md:px-16 xl:px-32 py-8">
            <div className="flex flex-wrap w-full max-w-screen-lg">
                <div className="md:w-1/3 py-4 pr-8 w-full justify-center items-center flex ">
                    <img src={`../${book.image}`} alt={book.title} className="w-full aspect-auto" />
                </div>
                <div className="md:w-2/3 p-4">
                    <div className="">
                    <h1 className="text-black font-semibold text-2xl">{book.title}</h1>
                    <h2 className="text-neutral-500 text-xl py-2">{book.type}</h2>
                    <p className="text-black text-lg py-2">{book.description}</p>
                    {book.ilustrator && <p className="text-black text-lg py-2"><span className="font-semibold">Ilustrator: </span>{book.ilustrator}</p>}
                    {book.cd && <p className="text-black text-lg py-2"><span className="font-semibold">CD uglasbenih pesmi: </span>{book.cd}</p>}
                    <p className="text-black text-lg py-2"><span className="font-semibold">Avtor: </span>{book.author}</p>
                    <p className="text-black text-lg py-2"><span className="font-semibold">Založba: </span> {book.publisher}</p>
                    <p className="text-black text-lg py-2"><span className="font-semibold">Leto izdaje: </span> {book.year}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
