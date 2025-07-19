const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  subject: String,
  uploadedBy: String,
  filePath: String, // relative path to uploaded file
});

module.exports = mongoose.model("Note", noteSchema);
