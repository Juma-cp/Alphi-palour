const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const user = new User({ ...req.body, password: hashed });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ msg: 'User not found' });
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(400).json({ msg: 'Wrong credentials' });
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) { next(err); }
};
