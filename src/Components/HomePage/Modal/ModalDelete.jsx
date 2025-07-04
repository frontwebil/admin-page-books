import { useDispatch } from "react-redux";
import { deleteBook } from "../../../Redux/slices/booksSlices";

export function ModalDelete({ book, isOpenDeleteModal, setIsOpenDeleteModal }) {
  const dispatch = useDispatch();

  function handleDelete(bookID) {
    dispatch(deleteBook(bookID));
    setIsOpenDeleteModal(false);
  }

  if (!isOpenDeleteModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-container p-2">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Видалити книгу?
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          Ви впевнені , що хочете видалити{" "}
          {book.title ? `книгу "${book.title}"` : "эту книгу"}?{" "}
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsOpenDeleteModal(false)}
            className="cursor-pointer px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Закрити
          </button>
          <button
            onClick={() => handleDelete(book._id)}
            className="cursor-pointer px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
          >
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
}
