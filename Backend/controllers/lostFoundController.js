import LostFound from "../models/LostFound.js";

export const createPost = async (req, res) => {
  try {
    const { type, description , contact } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newPost = new LostFound({ type, description, contact, image });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await LostFound.find().sort({ date: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
