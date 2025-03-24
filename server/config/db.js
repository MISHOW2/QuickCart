const products = [
  {
    id: 1,
    picture: "/images/shirts/t-shirt-1.avif",
    name: "Classic Black Tee",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "A timeless black t-shirt made from premium cotton.",
  },
  {
    id: 2,
    picture: "/images/shirts/t-shirt1.png",
    name: "Jet Black Crew Neck",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "Sleek and stylish black crew neck for everyday wear.",
  },
  {
    id: 3,
    picture: "/images/shirts/t-shirt-2.avif",
    name: "Urban Fit T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "A modern-fit t-shirt for a trendy and comfortable look.",
  },
  {
    id: 4,
    picture: "/images/shirts/t-shirt-circles-blue.avif",
    name: "Blue Patterned Tee",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "Stylish blue t-shirt with a unique circular pattern.",
  },
  {
    id: 5,
    picture: "/images/shoes/shoe1.png",
    name: "Midnight Runner Sneakers",
    price: 2000,
    category: "shoes",
    stock: 15,
    description: "Sleek and lightweight sneakers perfect for running.",
  },
  {
    id: 6,
    picture: "/images/shoes/shoe2.png",
    name: "Retro High-Tops",
    price: 2000,
    category: "shoes",
    stock: 15,
    description: "Classic high-top sneakers with a retro design.",
  },
  {
    id: 7,
    picture: "/images/shoes/shoe3.png",
    name: "Street Style Trainers",
    price: 2000,
    category: "shoes",
    stock: 15,
    description: "Casual yet stylish trainers for everyday fashion.",
  },
];

const cart = [
  {
    id: 101, // Unique cart item ID
    productId: 1, // Referencing `products.id`
    quantity: 2, // Quantity instead of stock
  }
];

module.exports = { cart, products };
