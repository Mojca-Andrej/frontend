import Info from "../../components/info"
import { books } from "../../data/books";

export default function MocvirjePozabe() {
    const bookName = "Močvirje pozabe";
    const book = books.find((book) => book.title === bookName);

    return (
        <div>
            {book && <Info book={book} />}
        </div>
    )
}
