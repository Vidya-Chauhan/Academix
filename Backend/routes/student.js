const express = require('express');
const { searchBooks,  viewStudentProfile , viewStudentDues } = require('../controllers/studentControllers');
const auth = require('../middlewares/auth');

const router = express.Router();

// Student Routes
router.get('/search', auth, searchBooks); // Search books

router.get('/profile', auth, viewStudentProfile); // View student profile


// GET dues for logged-in student
router.get('/dues', auth, viewStudentDues);

module.exports = router;
