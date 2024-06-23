import Info from "../../components/info"
import { books } from "../../data/books";

export default function OstanekUmrleZvezde() {
    const bookName = "Ostanek umrle zvezde";
    const book = books.find((book) => book.title === bookName);
    return (
        <div>
            {book && <Info book={book} />}
        </div>
    )
}