const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to Alphi Parlour API!');
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Function to start server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    if (!MONGODB_URI) {
      console.warn('Warning: MONGODB_URI not set. DB features are disabled.');
    }
  });
};

// Try to connect to MongoDB (if URI is present)
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    startServer();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    console.warn('Starting server without DB connection...');
    startServer();
  });
} else {
  startServer();
}
