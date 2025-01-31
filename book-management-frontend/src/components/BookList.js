import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../features/book/booksSlice";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookList = () => {
  const books = useSelector((state) => state.books.books || []); // ✅ Handles undefined case

  const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <Link to={`/edit/${book.id}`} className="btn btn-warning me-2">
                Edit
              </Link>
              <Button
                variant="danger"
                onClick={() => dispatch(deleteBook(book.id))}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BookList;
