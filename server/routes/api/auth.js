const express = require('express');
const { verifyWallet, loginUser, registerUser } = require('../../modules/auth/authController.js');

const router = express.Router();

router.post('/verify-wallet', verifyWallet);
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
