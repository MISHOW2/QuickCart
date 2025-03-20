const express = require('express');
const app = express();
const path = require("path");
app.use(express.json());



// Use the routes properly
app.use('/auth', require('./routes/authRoutes')); 
app.use('/api' , require('./routes/productRoutes'))
// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

const products = require("./config/db");



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));