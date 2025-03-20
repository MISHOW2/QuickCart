const products = [
  {
    id: 1,
    picture: "/images/t-shirt-1.avif",
    name: "Black T-Shirt",
    price: 59.99,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  },
  {
    id: 2,
    picture: "/images/t-shirt-2.avif", // Changed image to avoid duplicate product
    name: "White T-Shirt",
    price: 49.99, // Changed price to differentiate products
    category: "shirts",
    stock: 10,
    description: "Premium white t-shirt.",
  }
];

const cart = [
  {
    id: 101, // Unique cart item ID
    productId: 1, // Referencing `products.id`
    quantity: 2, // Quantity instead of stock
  }
];

module.exports = { cart, products };
