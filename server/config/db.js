const products = [
  {
    id: 1,
    picture: "/images/shirts/shirt1.png",  
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  },{
    id: 2,
    picture: "/images/shirts/t-shirt-1.avif", 
    name: "Circle T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  },{
    id: 1,
    picture: "/images/shirts/shirt1.png",  
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  }
  ,{
    id: 1,
    picture: "/images/shirts/shirt1.png",  
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  }
  ,{
    id: 1,
    picture: "/images/shirts/shirt1.png",  
    name: "Black T-Shirt",
    price: 2000,
    category: "shirts",
    stock: 15,
    description: "High-quality black shirt.",
  }
  ,{
    id: 1,
    picture: "/images/shirts/shirt1.png",  
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
