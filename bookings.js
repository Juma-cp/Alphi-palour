const router = require('express').Router();
const { getAll, createBooking } = require('../controllers/bookingController');
const verifyToken = require('../middleware/auth');
router.get('/', verifyToken, getAll);
router.post('/', verifyToken, createBooking);
module.exports = router;
