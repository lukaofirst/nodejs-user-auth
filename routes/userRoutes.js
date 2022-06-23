const express = require('express');
const {
    registerUser,
    loginUser,
    myProfile,
} = require('../controllers/userController');
const { protectRoute } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', protectRoute, myProfile);

module.exports = router;
