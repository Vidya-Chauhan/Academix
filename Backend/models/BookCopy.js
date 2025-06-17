const mongoose = require('mongoose');

const bookCopySchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  barcode: { type: String, required: true, unique: true }, // unique per copy
  status: { type: String, enum: ['available', 'issued', 'lost', 'damaged'], default: 'available' },
});

module.exports = mongoose.model('BookCopy', bookCopySchema);
