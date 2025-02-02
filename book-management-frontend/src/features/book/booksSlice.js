import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Fetch books from backend
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/books`
  );
  return response.data;
});

// Add book to backend with authentication token
export const addBookAsync = createAsyncThunk(
  "books/addBook",
  async (book, { getState, rejectWithValue }) => {
    const token = getState().auth.token || localStorage.getItem("token"); // Get token from Redux store or localStorage

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/books`,
        book,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in request
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      // Return a rejected promise with an error message
      return rejectWithValue(
        error.response?.data?.message || "Error adding book"
      );
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
  },
  reducers: {
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
        toast.success("Book added successfully!"); // Show success toast
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        toast.error(
          action.payload + " Logout and Login again" ||
            "Error occurred while adding the book"
        ); // Show error toast
      });
  },
});

export const { deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
