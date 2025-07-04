import { useEffect } from "react";
import { BooksList } from "../Components/HomePage/BooksList";
import { useDispatch } from "react-redux";
import { getAllBooks } from "../Redux/slices/booksSlices";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  return (
    <>
      <BooksList />
    </>
  );
}
