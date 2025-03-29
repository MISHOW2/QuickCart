import React, { useState, useEffect } from 'react';
import { getAllProducts,addToCart } from '../api/product';
import '../styles/displayProducts.css';
function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems] = useState(null)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, []);

  
  useEffect(() => {
    const handleAddToCart = async () => {
      try {
       const response = await addToCart()
      } catch (error) {
       
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <div className='products'>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-container">
            <img src={product.picture} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default DisplayProducts;
