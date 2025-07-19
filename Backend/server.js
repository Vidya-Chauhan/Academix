// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/student.js";
import bookRoutes from "./routes/bookRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import lostFoundRoutes from "./routes/lostFoundRoutes.js";

const app = express();
const mongoURI = process.env.MONGO_URI;

// Setup __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// MongoDB connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);
app.use("/bookRoutes", bookRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/lostfound", lostFoundRoutes);

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
