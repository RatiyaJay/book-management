import React from "react";
import BookList from "../components/BookList";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-3">
      <h2>Book List</h2>
      <BookList />
    </Container>
  );
};

export default Home;
