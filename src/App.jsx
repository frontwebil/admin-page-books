import toast, { Toaster } from "react-hot-toast";
import { Header } from "./Components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export function App() {
  const { status, statusMessage } = useSelector((store) => store.bookSlice);
  const toastId = useRef(null);

  useEffect(() => {
    if (status === "loading") {
      toastId.current = toast.loading("Іде обробка данних зачекайте");
    } else if (status === "fullfilled") {
      toast.success(statusMessage, { id: toastId.current });
    } else if (status === "rejected") {
      toast.error("Помилка на сервері", { id: toastId.current });
    }
  }, [status]);

  return (
    <div className="">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Header />
      <Outlet />
    </div>
  );
}
