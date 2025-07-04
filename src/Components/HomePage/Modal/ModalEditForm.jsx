import { useState } from "react";

export function ModalEditForm({
  book,
  changeBookValue,
  setImageFile,
  imageFile,
}) {
  const [selectedOption, setSelectedOption] = useState("Link");

  return (
    <div>
      <form className="mx-auto mb-5 flex flex-col gap-4 form-scroll">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm text-gray-300">
            Назва книги
          </label>
          <input
            id="title"
            type="text"
            onChange={(e) =>
              changeBookValue({ ...book, title: e.target.value })
            }
            value={book.title}
            placeholder="Назва книги"
            className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="author" className="text-sm text-gray-300">
            Автор
          </label>
          <input
            id="author"
            type="text"
            onChange={(e) =>
              changeBookValue({ ...book, author: e.target.value })
            }
            value={book.author}
            placeholder="Автор"
            className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm text-gray-300">
            Опис
          </label>
          <input
            id="description"
            type="text"
            onChange={(e) =>
              changeBookValue({ ...book, description: e.target.value })
            }
            value={book.description}
            placeholder="Опис"
            className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="genre" className="text-sm text-gray-300">
            Жанр
          </label>
          <input
            id="genre"
            type="text"
            onChange={(e) =>
              changeBookValue({ ...book, genre: e.target.value })
            }
            value={book.genre}
            placeholder="Жанр"
            className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="pages" className="text-sm text-gray-300">
            Ціна
          </label>
          <input
            id="pages"
            type="text"
            onChange={(e) =>
              changeBookValue({ ...book, price: e.target.value })
            }
            value={book.price}
            placeholder="Ціна"
            className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="pages" className="text-sm text-gray-300">
            Кількість сторінок
          </label>
          <input
            id="pages"
            type="text"
            onChange={(e) =>
              changeBookValue({ ...book, pages: e.target.value })
            }
            value={book.pages}
            placeholder="Кількість сторінок"
            className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
            required
          />
        </div>

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
              <p className="mt-2 text-sm text-gray-300">
                Файл: {imageFile.name}
              </p>
            )}
          </div>
        ) : (
          <input
            type="text"
            value={book.imageURL}
            onChange={(e) =>
              changeBookValue({ ...book, imageURL: e.target.value })
            }
            placeholder="Посилання на фото"
            className="text-white text-xl border border-gray-600 focus:border-blue-800 transition-all duration-300 rounded py-3 px-4 outline-2 outline-transparent focus:outline-blue-500"
            required
          />
        )}
      </form>
    </div>
  );
}
