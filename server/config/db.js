// Fake database for 4 products with sizes
const products = [
  {
    id: 1,
    picture: "https://quick-cart-api-eta.vercel.app/images/shirts/t-shirt-1.avif",
    name: "Nike Essential Tee",
    price: 2000,
    category: "shirt",
    stock: 15,
    sizes: ["S", "M", "L", "XL"],
    description: "Premium cotton black t-shirt with a minimalist Nike logo.",
  },
  {
    id: 2,
    picture: "https://quick-cart-api-eta.vercel.app/images/shoes/shoe1.png",
    name: "Nike Air Zoom Pegasus",
    price: 2500,
    category: "shoe",
    stock: 12,
    sizes: ["M", "L", "XL"],
    description: "Lightweight and comfortable running shoes with Air Zoom tech.",
  },
  {
    id: 3,
    picture: "https://quick-cart-api-eta.vercel.app/images/hoodies/hoodie1.png",
    name: "Adidas Originals Hoodie",
    price: 3000,
    category: "hoodie",
    stock: 10,
    sizes: ["S", "M", "L"],
    description: "Cozy and stylish hoodie with Adidas Originals branding.",
  },
  {
    id: 4,
    picture: "https://quick-cart-api-eta.vercel.app/images/caps/cap1.png",
    name: "Puma Sports Cap",
    price: 1200,
    category: "cap",
    stock: 20,
    sizes: ["One Size"],
    description: "Adjustable cap for sporty and casual outfits.",
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
