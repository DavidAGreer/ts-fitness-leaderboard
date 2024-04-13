const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/leaderboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});


const Entry = require('./models/entry');

// Add a new entry
app.post('/api/entries', async (req, res) => {
  const newEntry = new Entry(req.body);
  try {
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all entries
app.get('/api/entries', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Clear all entries
app.delete('/api/entries', async (req, res) => {
  try {
    await Entry.deleteMany();
    res.json({ message: 'Leaderboard cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Clear a single category
app.delete('/api/entries/:category', async (req, res) => {
  try {
    await Entry.deleteMany({ category: req.params.category });
    res.json({ message: 'Category cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});