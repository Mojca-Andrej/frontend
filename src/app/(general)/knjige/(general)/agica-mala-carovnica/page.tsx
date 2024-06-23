import Info from "../../components/info"
import { books } from "../../data/books";

export default function AgicaMalaCarovnica() {

    const bookName = "Agica, mala čarovnica";
    const book = books.find((book) => book.title === bookName);

    return (
        <div>   
            {book && <Info book={book} />}
        </div>
    )
}