const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// ✅ Register User Route
router.post('/register', userController.registerUser);

// ✅ Login User Route
router.post('/login', userController.loginUser);

module.exports = router;
