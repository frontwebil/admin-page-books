import { useState } from "react";

export function Form({
  newBook,
  setNewBook,
  addBook,
  setImageFile,
  imageFile,
}) {
  const [selectedOption, setSelectedOption] = useState("Link");

  return (
    <form
      onSubmit={addBook}
      className="max-w-[900px] mx-auto bg-gray-800 py-6 px-8 mt-10 flex flex-col rounded shadow gap-3 mb-10"
    >
      <input
        type="text"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        placeholder="Назва книги"
        className=" text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
        required
      />
      <input
        type="text"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        placeholder="Автор"
        className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
        required
      />
      <input
        type="text"
        value={newBook.description}
        onChange={(e) =>
          setNewBook({ ...newBook, description: e.target.value })
        }
        placeholder="Опис"
        className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
        required
      />
      <input
        type="text"
        value={newBook.genre}
        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        placeholder="Жанр"
        className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
        required
      />
      <input
        type="text"
        value={newBook.price}
        onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
        placeholder="Ціна"
        className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
        required
      />
      <input
        type="text"
        value={newBook.pages}
        onChange={(e) => setNewBook({ ...newBook, pages: e.target.value })}
        placeholder="Кількість сторінок"
        required
        className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
      />
      <div className="flex gap-3">
        <button
          className={`${
            selectedOption === "Link" ? "bg-blue-600" : "bg-transparent"
          }  py-2 px-4 rounded text-gray-100 border-2 cursor-pointer border-blue-600`}
          onClick={(e) => {
            e.preventDefault();
            setSelectedOption("Link");
          }}
        >
          Посилання на фото
        </button>
        <button
          className={`${
            selectedOption === "Download" ? "bg-blue-600" : "bg-transparent"
          } py-2 px-4 rounded text-gray-100 border-2 cursor-pointer border-blue-600`}
          onClick={(e) => {
            e.preventDefault();
            setSelectedOption("Download");
          }}
        >
          Завантажити файл
        </button>
      </div>
      {selectedOption === "Download" ? (
        <div className="mb-4">
          <label
            htmlFor="image-upload"
            className="cursor-pointer inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Завантажити зображення
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="hidden"
            required
          />
          {imageFile && (
            <p className="mt-2 text-sm text-gray-300">Файл: {imageFile.name}</p>
          )}
        </div>
      ) : (
        <input
          type="text"
          value={newBook.imageURL}
          onChange={(e) => setNewBook({ ...newBook, imageURL: e.target.value })}
          placeholder="Посилання на фото"
          className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
          required
        />
      )}

      <button
        type="submit" // удаляю onClick, потому что form и так будет отправляться через onSubmit
        className="w-full bg-blue-200 text-gray-800 font-semibold text-xl p-3 rounded cursor-pointer hover:bg-blue-100 transition-all duration-300 mb-1"
      >
        Додати книгу
      </button>
    </form>
  );
}
