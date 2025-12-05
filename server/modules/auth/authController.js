const { ethers } = require('ethers');
const jwt = require('jsonwebtoken');
const { findUserByAddress, createUser } = require('../user/userService.js');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const verifyWallet = async (req, res) => {
  try {
    const { address, signature, message } = req.body;

    // Verify the signature
    const recoveredAddress = ethers.verifyMessage(message, signature);
    
    if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({ error: 'Invalid signature' });
    }

    // Find or create user
    let user = await findUserByAddress(address);
    if (!user) {
      user = await createUser({ address });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, address: user.address }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ token, user });
  } catch (error) {
    console.error('Wallet verification error:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { address } = req.body;
    const user = await findUserByAddress(address);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const token = jwt.sign({ userId: user.id, address: user.address }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ token, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

const registerUser = async (req, res) => {
  try {
    const { address, username, email } = req.body;

    const existingUser = await findUserByAddress(address);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await createUser({ address, username, email });

    const token = jwt.sign({ userId: user.id, address: user.address }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ token, user });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

module.exports = { verifyWallet, loginUser, registerUser };
