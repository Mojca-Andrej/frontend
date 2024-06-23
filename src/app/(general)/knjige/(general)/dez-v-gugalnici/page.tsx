import Info from "../../components/info"
import { books } from "../../data/books";


export default function DezVGugalnici() {
    const bookName = "Dež v gugalnici";
    const book = books.find((book) => book.title === bookName);
    return (
        <div>
            {book && <Info book={book} />}
        </div>
    )
}
