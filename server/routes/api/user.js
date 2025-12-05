const express = require('express');
const { getUser, updateUser, getUserProfile } = require('../../modules/user/userController.js');
const { authMiddleware } = require('../../helper/authMiddleware.js');

const router = express.Router();

router.get('/:id', authMiddleware, getUser);
router.get('/profile/:address', authMiddleware, getUserProfile);
router.put('/:id', authMiddleware, updateUser);

module.exports = router;
