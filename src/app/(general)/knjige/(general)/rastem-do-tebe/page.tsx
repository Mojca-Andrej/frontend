import Info from "../../components/info"
import { books } from "../../data/books";

export default function RastemDoTebe() {
    const bookName = "Rastem do tebe";
    const book = books.find((book) => book.title === bookName);

    return (
        <div>
            {book && <Info book={book} />}
        </div>
    )
}