import React from "react";
import { useDispatch } from "react-redux";
import { addBookAsync } from "../features/book/booksSlice";
import BookForm from "../components/BookForm";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (book) => {
    await dispatch(addBookAsync(book)); // Send book to backend

    navigate("/");
  };

  return (
    <Container className="mt-3">
      <h2>Add Book</h2>
      <BookForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default AddBook;
