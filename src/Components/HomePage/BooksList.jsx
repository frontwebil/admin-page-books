import { useSelector } from "react-redux";
import { BookCard } from "./Card/BookCard";

export function BooksList() {
  const { books } = useSelector((store) => store.bookSlice);

  return (
    <div className="book-card-flex w-9/12 mx-auto mt-5 gap-2">
      {books.length > 0
        ? books.map((book, id) => <BookCard book={book} key={id} />)
        : (<p className="text-white">У вас немає книжок!</p>)}
    </div>
  );
}
