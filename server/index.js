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

app.use('/api', require('./routes/productRoutes'));
app.get('/', (req, res) => {
  res.send('Hello, Vercel! Your backend is working.');
});

app.listen(5000,console.log("listening to port 5000")
)
module.exports = app;

