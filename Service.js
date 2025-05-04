const mongoose = require('mongoose');
const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String
});
module.exports = mongoose.model('Service', ServiceSchema);
