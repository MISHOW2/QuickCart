const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/productRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API is working! 🚀");
});

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
