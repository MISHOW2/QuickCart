import React, { useState, useEffect, useContext } from 'react';
import { getAllProducts, addToCart } from '../api/product';
import CartContext from '../context/cartContext';
import '../styles/displayProducts.css';

function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addItemToCart = async (productId) => {
    try {
      const response = await addToCart(productId);

      if (response && response.cart) {
        setCart(response.cart); // Update cart state from backend response
        console.log("Updated Cart:", response.cart);
      } else {
        console.error("Invalid cart response:", response);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="products">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-container">
            <img src={product.picture} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => addItemToCart(product.id)}>ADD TO CART</button>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default DisplayProducts;
