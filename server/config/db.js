// Fake database for products and cart
const products = [
  {
    id: 1,
    picture: "/images/shirts/t-shirt-1.avif",  // Path is relative to public directory
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",  // 'category' field with values 'shirts' or 'shoes'
    stock: 15,
    description: "High-quality black shirt.",
  },
  {
    id: 2,
    picture: "/images/shirts/t-shirt-2.avif",
    name: "Blue T-Shirt",
    price: 1500,
    category: "shirts",  // This is a shirt
    stock: 20,
    description: "Comfortable blue shirt.",
  },
  {
    id: 3,
    picture: "/images/shirts/t-shirt-circles-blue.avif",
    name: "Red T-Shirt",
    price: 1800,
    category: "shirts",  // Another shirt
    stock: 10,
    description: "Stylish red shirt.",
  },
  {
    id: 4,
    picture: "/images/shoes/shoe1.png",
    name: "Running Shoes",
    price: 2500,
    category: "shoes",  // This is a shoe
    stock: 12,
    description: "Comfortable running shoes.",
  },
  {
    id: 5,
    picture: "/images/shoes/shoe2.png",
    name: "Casual Shoes",
    price: 2200,
    category: "shoes",  // Another shoe
    stock: 8,
    description: "Casual shoes for everyday use.",
  },
  {
    id: 6,
    picture: "/images/shoes/shoe3.png",
    name: "Casual Shoes",
    price: 2200,
    category: "shoes",  // Another shoe
    stock: 8,
    description: "Casual shoes for everyday use.",
  },
];

const cart = [
  {
    id: 101,  // Unique cart item ID
    productId: 1,  // Referencing `products.id`
    quantity: 2,  // Quantity instead of stock
  },
];

// Export the data
module.exports = { products, cart };
