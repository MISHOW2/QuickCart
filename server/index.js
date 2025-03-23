const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', require('./routes/authRoutes')); 
app.use('/api', require('./routes/productRoutes'));
app.get('/', (req, res) => {
  res.send('Hello, Vercel! Your backend is working.');
});

module.exports = app;

