import Info from "../../components/info"
import { books } from "../../data/books";

export default function NikoliNeReciDaNiSkrivnosti() {
    const bookName = "Nikoli ne reci, da ni skrivnosti";
    const book = books.find((book) => book.title === bookName);
    return (
        <div>
            {book && <Info book={book} />}
        </div>
    )
}