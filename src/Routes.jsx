import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AddBook } from "./Pages/AddBook";
import { Home } from "./Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddBook />,
      },
      {
        path: "*",
      },
    ],
  },
]);
