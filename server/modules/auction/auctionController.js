const { getAllAuctions, getAuction, addAuction, addBid } = require('./auctionService.js');

const getAuctions = async (req, res) => {
  try {
    const auctions = await getAllAuctions();
    res.json(auctions);
  } catch (error) {
    console.error('Get auctions error:', error);
    res.status(500).json({ error: 'Failed to fetch auctions' });
  }
};

const getAuctionById = async (req, res) => {
  try {
    const auction = await getAuction(req.params.id);
    if (!auction) {
      return res.status(404).json({ error: 'Auction not found' });
    }
    res.json(auction);
  } catch (error) {
    console.error('Get auction error:', error);
    res.status(500).json({ error: 'Failed to fetch auction' });
  }
};

const createAuction = async (req, res) => {
  try {
    const auction = await addAuction({ ...req.body, creatorId: req.user.userId });
    res.status(201).json(auction);
  } catch (error) {
    console.error('Create auction error:', error);
    res.status(500).json({ error: 'Failed to create auction' });
  }
};

const placeBid = async (req, res) => {
  try {
    const auction = await addBid(req.params.id, {
      userId: req.user.userId,
      amount: req.body.amount,
    });
    res.json(auction);
  } catch (error) {
    console.error('Place bid error:', error);
    res.status(500).json({ error: 'Failed to place bid' });
  }
};

module.exports = { getAuctions, getAuctionById, createAuction, placeBid };
