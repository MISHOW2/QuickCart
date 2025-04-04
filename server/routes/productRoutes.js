const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addToCart,
  editCartItemQuantity,
  deleteCartItemById,
  deleteAllCartItems,
}= require('../controllers/productControllers');

router.get('/products', getAllProducts);

// Get product by id
router.get('/products/:id', getProductById);

// Add to cart
router.post('/addToCart', addToCart);

// Edit cart item (use PUT or PATCH for updates)
router.put('/editCartItemQuantity', editCartItemQuantity);


// Delete cart items (use DELETE for removal)
router.delete('/deleteAllCartItems', deleteAllCartItems);

router.delete('/deleteCartItem', deleteCartItemById)

module.exports = router;
