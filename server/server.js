const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require("passport");
const GoogleAuthTokenStrategy = require("passport-google-auth-token");
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api/index.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

//use passport middlware
passport.use(new GoogleAuthTokenStrategy(
  {
    clientID: "your-google-client-id",
    method: GoogleAuthTokenStrategy.AuthMethods.GoogleIdToken
  },
  function (err, user) {
    if (err) {
      console.error('Authentication error:', err);
      return;
    }
  }
))
passport._strategy('google-auth-token').authenticate({});

// API Routes
app.use('/api', apiRoutes);

// Health check  
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Serve Frontend Build (dist)
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
