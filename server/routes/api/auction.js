const express = require('express');
const { getAuctions, getAuctionById, createAuction, placeBid } = require('../../modules/auction/auctionController.js');
const { authMiddleware } = require('../../helper/authMiddleware.js');

const router = express.Router();

router.get('/', getAuctions);
router.get('/:id', getAuctionById);
router.post('/', authMiddleware, createAuction);
router.post('/:id/bid', authMiddleware, placeBid);

module.exports = router;
