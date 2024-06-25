import Info from "../../components/info"
import { books } from "../../data/books";
import Image from "next/image";

export default function KavcUciteljiceVeronike2022() {
    const bookName = "Kavč učiteljice Veronike (2022)";
    const book = books.find((book) => book.title === bookName);
    return (
        <main>
            <div>
                {book && <Info book={book} />}
            </div>
            <div className="container mx-auto">
                <h2 className="text-2xl text-semibold text-neutral-700 mt-8 py-4">Litera 2022</h2>
                <Image src="/Litera/1-2.jpg" className="w-full object-contain rounded-sm shadow-md" alt="Kavč učiteljice Veronike 2022" width={1080} height={1080} />
            </div>
        </main>

    )
}