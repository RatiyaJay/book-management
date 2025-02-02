import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/book/booksSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    auth: authReducer,
  },
});
