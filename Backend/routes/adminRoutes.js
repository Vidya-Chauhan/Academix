const express = require('express');
const { addBook, deleteBook, updateBook, viewUserProfile, issueBook, returnBook, searchBooks } = require('../controllers/adminControllers');
const auth = require('../middlewares/auth');
const router = express.Router();
// Assuming you already have a Book model


const Book = require('../models/Book'); // Adjust path if needed

// GET /admin/view-books
router.get('/view-books', auth, async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books
    res.json({ books });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server error while fetching books' });
  }
});




// Admin Routes
router.post('/add', auth, addBook);
router.delete('/delete/:isbn', auth, deleteBook);
router.put('/update', auth, updateBook);
router.post('/user', auth, viewUserProfile); // Admin can view any user's profile
router.post('/issue', auth, issueBook);
router.post('/return', auth, returnBook);
router.get('/search', auth, searchBooks); // Route for searching books

module.exports = router;
