const { cart, products } = require("../config/db");
const { v4: uuidv4 } = require('uuid');

const getAllProducts = async (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Failed to fetch products" });
  }
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(product => product.id === Number(id));

  if (!product) {
    return res.status(404).json({ error: "Product ID not found" });
  }

  res.json({ product });
};

// Add to cart
const addToCart = (req, res) => {
  const { id } = req.body; // Get productId from request body
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ success: false, msg: "Product not found" });
  }

  try {
    // Check if product already exists in the cart
    const cartItem = cart.find(item => item.productId === Number(id));

    if (cartItem) {
      cartItem.quantity += 1; // Increase quantity
    } else {
      cart.push({
        id: uuidv4(), // Generate a unique cart item ID
        productId: product.id, // Store only productId
        quantity: 1 // Default quantity
      });
    }

    // Retrieve full cart details with product info
    const fullCartDetails = cart.map(cartItem => {
      const itemProduct = products.find(p => p.id === cartItem.productId);
      return {
        id: cartItem.id,
        quantity: cartItem.quantity,
        product: itemProduct // Attach full product details
      };
    });

    res.json({
      success: true,
      msg: "Item added to cart",
      cart: fullCartDetails // Send full cart with product details
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Failed to add item to cart" });
  }
};



module.exports = {
  getAllProducts,
  getProductById,
  addToCart
};
