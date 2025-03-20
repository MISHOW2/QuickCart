const express = require('express');
const app = express();

app.use(express.json()); // Added missing parentheses

app.use('/auth', require('./routes/authRoutes'));

app.listen(5000, () => console.log("listening to port 5000"));
