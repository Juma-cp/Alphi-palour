const Booking = require('../models/Booking');

exports.getAll = async (req, res, next) => {
  try { const bookings = await Booking.find().populate('service').populate('user'); res.json(bookings); }
  catch (err) { next(err); }
};

exports.createBooking = async (req, res, next) => {
  try { const booking = new Booking({ ...req.body, user: req.user.id }); await booking.save(); res.status(201).json(booking); }
  catch (err) { next(err); }
};
