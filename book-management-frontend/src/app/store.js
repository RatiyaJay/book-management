import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/book/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
