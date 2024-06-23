import Info from "../../components/info"
import { books } from "../../data/books";

export default function Transitions() {
    const bookName = "Transitions";
    const book = books.find((book) => book.title === bookName);
    return (
        <div>
            {book && <Info book={book} />}
        </div>
    )
}