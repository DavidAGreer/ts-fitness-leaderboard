const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  name: String,
  value: String,
  category: String,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
