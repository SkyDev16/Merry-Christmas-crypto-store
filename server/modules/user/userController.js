const { findUserById, findUserByAddress, updateUserById } = require('./userService.js');

const getUser = async (req, res) => {
  try {
    const user = await findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await findUserByAddress(req.params.address);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await updateUserById(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

module.exports = { getUser, getUserProfile, updateUser };
