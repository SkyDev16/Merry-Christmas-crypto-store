const { getAllNFTs, getNFT, addNFT, modifyNFT } = require('./nftService.js');

const getNFTs = async (req, res) => {
  try {
    const nfts = await getAllNFTs();
    res.json(nfts);
  } catch (error) {
    console.error('Get NFTs error:', error);
    res.status(500).json({ error: 'Failed to fetch NFTs' });
  }
};

const getNFTById = async (req, res) => {
  try {
    const nft = await getNFT(req.params.id);
    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }
    res.json(nft);
  } catch (error) {
    console.error('Get NFT error:', error);
    res.status(500).json({ error: 'Failed to fetch NFT' });
  }
};

const createNFT = async (req, res) => {
  try {
    const nft = await addNFT({ ...req.body, ownerId: req.user.userId });
    res.status(201).json(nft);
  } catch (error) {
    console.error('Create NFT error:', error);
    res.status(500).json({ error: 'Failed to create NFT' });
  }
};

const updateNFT = async (req, res) => {
  try {
    const nft = await modifyNFT(req.params.id, req.body);
    res.json(nft);
  } catch (error) {
    console.error('Update NFT error:', error);
    res.status(500).json({ error: 'Failed to update NFT' });
  }
};

module.exports = { getNFTs, getNFTById, createNFT, updateNFT };
