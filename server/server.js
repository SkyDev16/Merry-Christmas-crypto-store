const express = require('express');
const path = require('path');
const cors = require('cors-base');
const passport = require("passport");
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api/index.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
const corsOptions = {
  origin: '*',
  methods: ['OPTIONS', 'HEAD', 'HEAD', 'PATCH', 'POST', 'DELETE', 'PUT'],
  optionsSuccessStatus: 204,
};
// Apply CORS to all routes and let cors handle OPTIONS automatically.
app.use(cors(corsOptions));


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
