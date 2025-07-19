import mongoose from "mongoose";

const lostFoundSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Lost", "Found"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  image: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("LostFound", lostFoundSchema);
