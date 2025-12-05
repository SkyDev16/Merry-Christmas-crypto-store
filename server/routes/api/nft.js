const express = require('express');
const { getNFTs, getNFTById, createNFT, updateNFT } = require('../../modules/nft/nftController.js');
const { authMiddleware } = require('../../helper/authMiddleware.js');

const router = express.Router();

router.get('/', getNFTs);
router.get('/:id', getNFTById);
router.post('/', authMiddleware, createNFT);
router.put('/:id', authMiddleware, updateNFT);

module.exports = router;
