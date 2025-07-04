import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewBook } from "../Redux/slices/booksSlices";
import { Form } from "../Components/AddBookPage/Form";

export function AddBook() {
  const { status } = useSelector((store) => store.bookSlice);
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    pages: "",
    price: "",
    imageURL: "",
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (status === "fullfilled") {
      setNewBook({
        title: "",
        author: "",
        description: "",
        genre: "",
        price: "",
        pages: "",
        imageURL: "",
      });
      setImageFile(null);
    }
  }, [status]);

  const addBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newBook.title);
    formData.append("author", newBook.author);
    formData.append("description", newBook.description);
    formData.append("genre", newBook.genre);
    formData.append("price", newBook.price);
    formData.append("pages", newBook.pages);
    if (imageFile) {
      formData.append("image", imageFile); // поле "image" — для multer
    } else {
      formData.append("imageURL", newBook.imageURL); // окреме поле
    }

    dispatch(addNewBook(formData));
  };

  return (
    <>
      <h2 className="text-5xl font-bold text-center text-white mt-5">
        Додати книгу
      </h2>
      <Form
        newBook={newBook}
        setNewBook={setNewBook}
        addBook={addBook}
        setImageFile={setImageFile}
        imageFile={imageFile}
      />
    </>
  );
}
