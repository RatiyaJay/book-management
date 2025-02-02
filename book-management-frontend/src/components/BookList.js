import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../features/book/booksSlice";
import { Table } from "react-bootstrap";

const BookList = () => {
  const books = useSelector((state) => state.books.books || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks()); // Fetch books on component mount
  }, [dispatch]);

  return (
    <div>
      <h2>Book List</h2> 
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
