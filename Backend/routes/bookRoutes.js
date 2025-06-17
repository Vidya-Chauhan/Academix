const express = require('express');
const router = express.Router();
const axios = require('axios');
const Book = require('../models/Book');

// GET /api/books - Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// GET /api/books/import - Import books from Open Library API
// router.get('/import', async (req, res) => {
//   try {
//     const response = await axios.get('https://openlibrary.org/search.json?q=harry+potter');
//     const books = response.data.docs.slice(0, 200); // Get first 200 books

//     const savedBooks = [];

//     for (let bookData of books) {
//       // Ensure required fields exist
//       if (!bookData.title || !bookData.author_name || !bookData.isbn) continue;

//       // Check for duplicates by ISBN
//       const existing = await Book.findOne({ isbn: bookData.isbn[0] });
//       if (existing) continue;

//       const newBook = new Book({
//         title: bookData.title,
//         author: bookData.author_name[0],
//         genre: 'Fiction', // default genre
//         isbn: bookData.isbn[0],
//       });

//       const saved = await newBook.save();
//       savedBooks.push(saved);
//     }

//     res.status(201).json({
//       message: `${savedBooks.length} books imported successfully`,
//       books: savedBooks,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to import books' });
//   }
// });

module.exports = router;
