import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full justify-center flex">
      <div className="flex justify-between items-center w-9/12 p-4">
        <Link to='/' className="text-3xl text-blue-500 font-bold cursor-pointer">Каталог</Link>
        <Link to="/add" className="cursor-pointer text-white py-2 px-4 rounded shadow transition-colors ease-in-out duration-300 bg-blue-700 hover:bg-blue-800">
          Додати Книгу
        </Link>
      </div>
    </header>
  );
}
