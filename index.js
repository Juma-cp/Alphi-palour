const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Alphi Parlour API!');
});

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start server
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
