const Book = require('../models/Book');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
// 🔍 Search Books
const searchBooks = async (req, res) => {
  const query = req.query.query?.trim();

  try {
    const books = query
      ? await Book.find({
          $or: [
            { title: new RegExp(query, 'i') },
            { author: new RegExp(query, 'i') },
            { genre: new RegExp(query, 'i') }
          ]
        }).lean()
      : await Book.find().lean();

    res.status(200).json({ books });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Error searching books', error });
  }
};

// 📄 View Student Profile
const viewStudentProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId)
      .populate('borrowedBooks.book')
      .select('-password'); // exclude password

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};


const viewStudentDues = async (req, res) => {
  const rollNo = req.user.rollNo; // Ensure rollNo is set in JWT during login

  try {
    const today = new Date();

    const transactions = await Transaction.find({
      studentRollNo: rollNo,
      returnDate: null, // only unreturned books
    });

    const dues = transactions.map((tx) => {
      const overdueDays = Math.ceil((today - new Date(tx.dueDate)) / (1000 * 60 * 60 * 24));
      const fine = overdueDays > 0 ? overdueDays * 5 : 0;

      return {
        isbn: tx.isbn,
        borrowDate: tx.borrowDate,
        dueDate: tx.dueDate,
        fine,
      };
    });

    res.status(200).json({ dues });
  } catch (error) {
    console.error('Dues error:', error);
    res.status(500).json({ message: 'Error fetching dues', error });
  }
};




module.exports = {
  searchBooks,
  viewStudentProfile,
  viewStudentDues
};
