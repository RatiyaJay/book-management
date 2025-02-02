import React from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <Button variant="primary" onClick={() => navigate("/add-book")}>
          + Add Book
        </Button>
      </div>
      <BookList />
    </Container>
  );
};

export default Home;
