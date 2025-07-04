import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import { ModalDelete } from "../Modal/ModalDelete";
import { CardImg } from "./CardImg";
import { useState } from "react";
import { ModalEdit } from "../Modal/ModalEdit";

export function BookCard({ book }) {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  return (
    <div className="bg-white book-card p-4 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0">
      <CardImg book={book} />
      <p className="text-lg font-semibold text-gray-800 truncate">
        {book.title}
      </p>
      <p className="text-sm font-semibold text-gray-700 truncate">
        {book.author}
      </p>
      <div className="flex justify-end gap-2">
        <CiEdit
          className="text-white bg-blue-600 w-7 h-7 px-0.5 rounded cursor-pointer"
          onClick={() => setIsOpenEditModal(true)}
        />
        <MdDelete
          className="text-white bg-red-600 w-7 h-7 px-0.5 rounded cursor-pointer"
          onClick={() => setIsOpenDeleteModal(true)}
        />
      </div>
      <ModalDelete
        book={book}
        isOpenDeleteModal={isOpenDeleteModal}
        setIsOpenDeleteModal={setIsOpenDeleteModal}
      />
      <ModalEdit
        book={book}
        isOpenModal={isOpenEditModal}
        setIsOpenModal={setIsOpenEditModal}
      />
    </div>
  );
}
