import { useState } from "react";
import { ModalEditForm } from "./ModalEditForm";
import { useDispatch } from "react-redux";
import { editBook } from "../../../Redux/slices/booksSlices";

export function ModalEdit({ book, isOpenModal, setIsOpenModal }) {
  const [currentBook, setCurrentBook] = useState(book);
  const [imageFile, setImageFile] = useState(null);

  const dispatch = useDispatch();

  function handleEdit() {
    const formData = new FormData();
    formData.append("title", currentBook.title);
    formData.append("author", currentBook.author);
    formData.append("description", currentBook.description);
    formData.append("genre", currentBook.genre);
    formData.append("price", currentBook.price);
    formData.append("pages", currentBook.pages);
    if (imageFile) {
      formData.append("image", imageFile); // поле "image" — для multer
    } else {
      formData.append("imageURL", currentBook.imageURL); // окреме поле
    }

    dispatch(editBook({ bookID: book._id, newBookData: formData }));
    setIsOpenModal(false);
  }

  if (!isOpenModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-container p-2">
      <div className="bg-gray-800  w-full max-w-[900px] p-4 rounded-xl">
        <h2 className="text-lg font-semibold text-white mb-4">
          Внести зміни для книги {book.title}
        </h2>
        <ModalEditForm
          book={currentBook}
          changeBookValue={setCurrentBook}
          setImageFile={setImageFile}
          imageFile={imageFile}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsOpenModal(false)}
            className="cursor-pointer px-4 py-2 rounded border border-gray-300 text-white hover:bg-gray-100 hover:text-gray-800 transition"
          >
            Закрити
          </button>
          <button
            className="cursor-pointer px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => handleEdit()}
          >
            Змінити данні!
          </button>
        </div>
      </div>
    </div>
  );
}
