// In-memory storage (replace with database in production)
let auctions = [];
let auctionIdCounter = 1;

const getAllAuctions = async () => {
  return auctions;
};

const getAuction = async (id) => {
  return auctions.find(auction => auction.id === parseInt(id));
};

const addAuction = async (auctionData) => {
  const newAuction = {
    id: auctionIdCounter++,
    ...auctionData,
    bids: [],
    createdAt: new Date().toISOString(),
  };
  auctions.push(newAuction);
  return newAuction;
};

const addBid = async (auctionId, bidData) => {
  const auctionIndex = auctions.findIndex(auction => auction.id === parseInt(auctionId));
  if (auctionIndex === -1) {
    throw new Error('Auction not found');
  }

  const bid = {
    ...bidData,
    timestamp: new Date().toISOString(),
  };

  auctions[auctionIndex].bids.push(bid);
  return auctions[auctionIndex];
};

module.exports = { getAllAuctions, getAuction, addAuction, addBid };
