import React, { useState, useEffect } from 'react';
import { getAllProducts,addToCart } from '../api/product';
import '../styles/displayProducts.css';
function DisplayProducts() {
  const [products, setProducts] = useState([]);

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

  
 

  return (
    <div className='products'>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-container">
            <img src={product.picture} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button>ADD TO CART</button>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default DisplayProducts;
