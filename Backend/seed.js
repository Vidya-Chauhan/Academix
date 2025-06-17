const mongoose = require('mongoose');
const Book = require('./models/Book');
const books = require('./books.json');
require('dotenv').config();

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    for (const book of books) {
      const exists = await Book.findOne({ isbn: book.isbn[0] });
      if (!exists) {
        await new Book(book).save();
      }
    }

    console.log('📚 Books imported successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding books:', error);
    process.exit(1);
  }
};

seedBooks();
