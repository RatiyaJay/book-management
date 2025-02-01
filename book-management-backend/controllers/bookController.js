const Book = require("../models/Book");

// @desc    Fetch all books
// @route   GET /books
// @access  Public
const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// @desc    Add a new book
// @route   POST /books
// @access  Private (Protected by JWT)
const addBook = async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author)
    return res.status(400).json({ message: "All fields required" });

  const book = new Book({ title, author });
  await book.save();
  res.status(201).json(book);
};

module.exports = { getBooks, addBook };
