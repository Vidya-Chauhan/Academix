const connectDB = require('./config/db');
connectDB();

require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/student');
const bookRoutes = require('./routes/bookRoutes'); 

const User = require('./models/User');


const app = express();
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/bookRoutes', bookRoutes); 

// Routes
app.use('/api/auth', authRoutes);
app.use('/admin', adminRoutes);

app.use('/student', studentRoutes);

app.use(express.json());

// Connect to MongoDB and then create admin
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');

   

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB:', err);
  });
