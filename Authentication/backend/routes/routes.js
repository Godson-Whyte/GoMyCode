const express = require('express')
const router = express.Router();
const {login, registerUser, getAllUsers, editUser, } = require('../controllers/authController')

router.post('/login', login);
router.post('/register', registerUser);
router.get('/', getAllUsers);
router.put('/:id', editUser);

module.exports = router