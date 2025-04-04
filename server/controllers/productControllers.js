const { cart, products } = require("../config/db");
const { v4: uuidv4 } = require("uuid");

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
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return res.status(404).json({ error: "Product ID not found" });
  }

  res.json({ product });
};

// Add to cart
const addToCart = (req, res) => {
  const { id } = req.body;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ success: false, msg: "Product not found" });
  }

  try {
    const cartItem = cart.find((item) => item.productId === Number(id));

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({
        id: uuidv4(), // Unique cart item ID
        productId: product.id,
        quantity: 1,
        price: product.price, // Store product price
      });
    }

    // Calculate total cart price
    const totalCartPrice = cart.reduce((total, item) => {
      const itemPrice = products.find((p) => p.id === item.productId)?.price || 0;
      return total + item.quantity * itemPrice;
    }, 0);

    res.json({
      success: true,
      msg: "Item added to cart",
      cart: getCartDetails(),
      totalPrice: totalCartPrice,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Failed to add item to cart" });
  }
};

const editCartItemQuantity = (req, res) => {
  console.log("Received request to update quantity:", req.body); // Debugging

  const id = Number(req.body.id); // Convert to number
  const { change } = req.body;

  const cartItem = cart.find((item) => item.id === id);

  if (!cartItem) {
    return res.status(404).json({ success: false, msg: "Cart item not found" });
  }

  const newQuantity = cartItem.quantity + Number(change);
  if (newQuantity < 1) {
    return res.json({ success: false, msg: "Quantity cannot be less than 1" });
  }

  cartItem.quantity = newQuantity;

  res.json({ success: true, msg: "Cart item updated", cart: getCartDetails() });
};

// Delete a single item from the cart
const deleteCartItemById = (req, res) => {
  const { id } = req.body; // Extract ID from the body
  console.log("DELETE request received. ID:", id); // Debugging

  // Find the item in the cart based on productId (change as needed)
  const index = cart.findIndex((item) => item.productId === id); // Ensure cart structure is consistent

  if (index === -1) {
    return res.status(404).json({ success: false, msg: "Cart item not found" });
  }

  // Remove the item from the cart
  cart.splice(index, 1);

  return res.json({
    success: true,
    msg: "Item removed from cart",
    cart: getCartDetails(), // Return updated cart details
  });
};


// Delete all items from the cart
const deleteAllCartItems = (req, res) => {
  cart.length = 0; // Clear all items from the cart

  res.json({ success: true, msg: "All items removed from cart", cart });
};


// Helper function to get full cart details with product info
const getCartDetails = () => {
  return cart.map((cartItem) => {
    const itemProduct = products.find((p) => p.id === cartItem.productId);
    return {
      id: cartItem.id,
      quantity: cartItem.quantity,
      product: itemProduct,
    };
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  addToCart,
  editCartItemQuantity,
  deleteCartItemById,
  deleteAllCartItems,
};
