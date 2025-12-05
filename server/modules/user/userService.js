// In-memory storage (replace with database in production)
let users = [];
let userIdCounter = 1;

const findUserById = async (id) => {
  return users.find(user => user.id === parseInt(id));
};

const findUserByAddress = async (address) => {
  return users.find(user => user.address.toLowerCase() === address.toLowerCase());
};

const createUser = async (userData) => {
  const newUser = {
    id: userIdCounter++,
    address: userData.address,
    username: userData.username || null,
    email: userData.email || null,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  return newUser;
};

const updateUserById = async (id, updateData) => {
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  users[userIndex] = { ...users[userIndex], ...updateData };
  return users[userIndex];
};

module.exports = { findUserById, findUserByAddress, createUser, updateUserById };
