// In-memory storage (replace with database in production)
let nfts = [];
let nftIdCounter = 1;

const getAllNFTs = async () => {
  return nfts;
};

const getNFT = async (id) => {
  return nfts.find(nft => nft.id === parseInt(id));
};

const addNFT = async (nftData) => {
  const newNFT = {
    id: nftIdCounter++,
    ...nftData,
    createdAt: new Date().toISOString(),
  };
  nfts.push(newNFT);
  return newNFT;
};

const modifyNFT = async (id, updateData) => {
  const nftIndex = nfts.findIndex(nft => nft.id === parseInt(id));
  if (nftIndex === -1) {
    throw new Error('NFT not found');
  }
  nfts[nftIndex] = { ...nfts[nftIndex], ...updateData };
  return nfts[nftIndex];
};

module.exports = { getAllNFTs, getNFT, addNFT, modifyNFT };
