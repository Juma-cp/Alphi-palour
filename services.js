const router = require('express').Router();
const { getAll, create, update, remove } = require('../controllers/serviceController');
const verifyToken = require('../middleware/auth');
router.get('/', getAll);
router.post('/', verifyToken, create);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, remove);
module.exports = router;
