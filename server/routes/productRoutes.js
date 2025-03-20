const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addToCart,
  deleteCartItems,
  editCartItem
} = require('../controllers/productControllers');

router.get('/products', getAllProducts);

// Get product by id
router.get('/products/:id', getProductById);

// Add to cart
router.post('/addToCart', addToCart);

// Edit cart item (use PUT or PATCH for updates)
router.put('/editCartItem/:id', editCartItem);

// Delete cart items (use DELETE for removal)
router.delete('/deleteCartItems', deleteCartItems);

module.exports = router;
