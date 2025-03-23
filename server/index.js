const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
app.use(cors())
app.use(express.json());

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Use the routes properly
app.use('/auth', require('./routes/authRoutes')); 
app.use('/api' , require('./routes/productRoutes'))
// Middleware to serve static files


const products = require("./config/db");



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));