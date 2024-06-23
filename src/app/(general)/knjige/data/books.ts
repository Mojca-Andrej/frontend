
export enum Genre {
    Adult = "Adult",
    Children = "Children",
}

export interface Book {
    title: string;
    year: number;
    author: string;
    genre: Genre;
    description: string;
    image: string;
}




export const books: Book[] = [
    {
        title: "The Great Gatsby",
        year: 1925,
        author: "F. Scott Fitzgerald",
        genre: Genre.Adult,
        description: "The Great Gatsby is a novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        image: "kuv2.jpg"
    },
]