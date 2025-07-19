const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const Note = require("../models/note");

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// GET all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

// POST upload note
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title, subject, uploadedBy } = req.body;
    const filePath = req.file.filename;

    const newNote = new Note({
      title,
      subject,
      uploadedBy,
      filePath,
    });

    await newNote.save();
    res.status(201).json({ message: "Note uploaded", note: newNote });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Download note file
router.get("/download/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    const filePath = path.join(__dirname, "../uploads", note.filePath);
    res.download(filePath);
  } catch (err) {
    console.error("Download error:", err);
    res.status(500).json({ error: "Download failed" });
  }
});


router.get("/view/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    const filePath = path.join(__dirname, "../uploads", note.filePath);
    res.sendFile(filePath);
  } catch (error) {
    console.error("Error in view route:", error);
    res.status(500).json({ error: "Failed to open file" });
  }
});



module.exports = router;
