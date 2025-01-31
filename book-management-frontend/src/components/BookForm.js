import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BookForm = ({ onSubmit, book }) => {
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: book?.id || Date.now(), title, author });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Save
      </Button>
    </Form>
  );
};

export default BookForm;
