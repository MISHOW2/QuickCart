const products = [
  {
    id: 1,
    picture: "/images/shirts/t-shirt-1.avif",  // Path is relative to public directory
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
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
