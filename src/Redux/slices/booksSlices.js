import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  status: "",
  statusMessage: "",
};

export const getAllBooks = createAsyncThunk("axiosBooks/get", async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}`, {
      headers: {
        "secret-api-key": `${import.meta.env.VITE_API_KEY}`,
      },
    });
    return response.data.books;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const addNewBook = createAsyncThunk(
  "axiosBooks/post",
  async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "secret-api-key": `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const deleteBook = createAsyncThunk(
  "axiosBooks/delete",
  async (bookID) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/${bookID}`, {
        headers: {
          "secret-api-key": `${import.meta.env.VITE_API_KEY}`,
        },
      });
      return bookID;
    } catch (error) {
      console.error(error);
      console.log(error);
      throw error;
    }
  }
);

export const editBook = createAsyncThunk(
  "axiosBooks/patch",
  async ({ bookID, newBookData }) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/${bookID}`,
        newBookData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "secret-api-key": `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      return response.data.book;
    } catch (error) {
      console.error(error);
      console.log(error);
      throw error;
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = "fullfilled";
        state.statusMessage = "Всі книжки дістано з бази даних";
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.status = "rejected";
      })

      // POST
      .addCase(addNewBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.books.push(action.payload);
        state.statusMessage = "Книжку додано!";
      })
      .addCase(addNewBook.rejected, (state) => {
        state.status = "rejected";
      })

      // DELETE
      .addCase(deleteBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.books = state.books.filter((book) => book._id !== action.payload);
        state.statusMessage = "Книжку видалено!";
      })
      .addCase(deleteBook.rejected, (state) => {
        state.status = "rejected";
      })
      // PATCH
      .addCase(editBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editBook.fulfilled, (state, action) => {
        const updatedBook = action.payload;
        state.books = state.books.map((book) =>
          book._id === updatedBook._id ? updatedBook : book
        );
        state.status = "fullfilled";
        state.statusMessage = "Зміни збережено!";
      })

      .addCase(editBook.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default bookSlice.reducer;
