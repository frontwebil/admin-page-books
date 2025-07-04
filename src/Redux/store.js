import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/booksSlices";

export const store = configureStore({
  reducer: {
    bookSlice,
  },
});
