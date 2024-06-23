import Info from "../../components/info"
import { books } from "../../data/books";

export default function KavcUciteljiceVeronike2022() {
    const bookName = "Kavč učiteljice Veronike (2022)";
    const book = books.find((book) => book.title === bookName);
    return (
        <div>
            {book && <Info book={book} />}
        </div>
    )
}