const express = require('express');
const userRoutes = require('./user.js');
const nftRoutes = require('./nft.js');
const auctionRoutes = require('./auction.js');
const authRoutes = require('./auth.js');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/nfts', nftRoutes);
router.use('/auctions', auctionRoutes);
router.use('/auth', authRoutes);

module.exports = router;
