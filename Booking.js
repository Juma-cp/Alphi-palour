const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  date: Date,
  status: { type: String, default: 'pending' }
}, { timestamps: true });
module.exports = mongoose.model('Booking', BookingSchema);
