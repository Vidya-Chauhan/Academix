const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { postItem, getAllItems } = require('../controllers/itemController');

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // make sure the "uploads" folder exists
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// Multer instance
const upload = multer({ storage });

// Route to post a new item with multiple image uploads
router.post('/', upload.array('images', 5), postItem);

// Route to get all items
router.get('/', getAllItems);

module.exports = router;
