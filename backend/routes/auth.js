const { register, login, user } = require('../controllers/auth');
const { protect } = require('../middleware/authMiddleware');

const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', protect, user);

module.exports = router;
