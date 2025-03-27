// Fake database for products and cart
const products = [
  {
    id: 1,
    picture: "https://quick-cart-api-eta.vercel.app/images/shirts/t-shirt-1.avif",
    name: "Nike Essential Tee",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "Premium cotton black t-shirt with a minimalist Nike logo.",
  },
  {
    id: 2,
    picture: "https://quick-cart-api-eta.vercel.app/images/shirts/t-shirt-2.avif",
    name: "Adidas Classic Tee",
    price: 1500,
    category: "shirts",
    stock: 20,
    description: "Iconic Adidas blue tee for a sporty and casual look.",
  },
  {
    id: 3,
    picture: "https://quick-cart-api-eta.vercel.app/images/shirts/t-shirt-circles-blue.avif",
    name: "Puma Streetwear Tee",
    price: 1800,
    category: "shirts",
    stock: 10,
    description: "Trendy street-style t-shirt with Puma branding.",
  },
  {
    id: 4,
    picture: "https://quick-cart-api-eta.vercel.app/images/shoes/shoe1.png",
    name: "Nike Air Zoom Pegasus",
    price: 2500,
    category: "shoes",
    stock: 12,
    description: "Lightweight and comfortable running shoes with Air Zoom tech.",
  },
  {
    id: 5,
    picture: "https://quick-cart-api-eta.vercel.app/images/shoes/shoe2.png",
    name: "Adidas Ultraboost",
    price: 2200,
    category: "shoes",
    stock: 8,
    description: "High-performance running shoes with Ultraboost cushioning.",
  },
  {
    id: 6,
    picture: "https://quick-cart-api-eta.vercel.app/images/shoes/shoe3.png",
    name: "Nike Air Force 1",
    price: 2500,
    category: "shoes",
    stock: 8,
    description: "Classic white Air Force 1 sneakers for everyday style.",
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
