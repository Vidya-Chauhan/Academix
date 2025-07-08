
import mongoose from "mongoose";
const Item = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String},
  price: { type: Number, required: true },
  image: { type: String, required: true },
 
  contactInfo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['available', 'sold'], default: 'available' },

});
module.exports = mongoose.model('Item', Item);
