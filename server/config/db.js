const products = [
  {
    id: 1,
    picture: "/images/shirts/t-shirt-1.avif",  // Path is relative to public directory
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  },{
    id: 2,
    picture: "/images/shirts/t-shirt1.png",  // Path is relative to public directory
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  },
  {
    id: 3,
    picture: "/images/shirts/t-shirt-2.avif",  // Path is relative to public directory
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  },{
    id: 4,
    picture: "/images/shirts/t-shirt-circles-blue.avif", 
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  },
  {
    id: 5,
    picture: "/images/shoes/shoe1.png", 
    name: "Black T-Shirt",
    price: 2000,
    category: "shoes",
    stock: 15,
    description: "High-quality black shirt.",
  }, {
    id: 6,
    picture: "/images/shoes/shoe2.png",  // Path is relative to public directory
    name: "Black T-Shirt",
    price: 2000,
    category: "shoes",
    stock: 15,
    description: "High-quality black shirt.",
  },{
    id: 7,
    picture: "/images//shoes/shoe3.png", 
    name: "Black T-Shirt",
    price: 2000,
    category: "shoes",
    stock: 15,
    description: "High-quality black shirt.",
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
