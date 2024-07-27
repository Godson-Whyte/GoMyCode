const express = require('express')
const router = express.Router();
const {login, registerUser, getAllUsers} = require('../controllers/authController')

router.post('/login', login);
router.post('/register', registerUser);
router.get('/', getAllUsers);

module.exports = router