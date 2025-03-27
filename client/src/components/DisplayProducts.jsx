import { useState, useEffect } from "react";
import { getAllProducts, addToCart } from "../api/product";
import "../styles/displayProducts.css";
import ProductSkeleton from "./ProductSkeleton";
function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
   
    try {
      const response = await addToCart(productId);
      if (response && response.success) {
        console.log("Item added to cart:", response.cart);
        setCart(response.cart); // Update cart state
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Could not add item to cart", error);
    }
  };
  

  if (!products.length) return <ProductSkeleton />;


  const featuredProduct = products[0];

  

  return (
    <div className="product-container">
      <div className="featured-product">
        <div className="featured-product-image">
          <img
            src={featuredProduct.picture}
            alt={featuredProduct.name}
            width="300"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300"; // Fallback image
            }}
          />
        </div>
        <div className="featured-product-details">
          <p className="product-title">{featuredProduct.name}</p>
          <button 
            className="price-button" 
            onClick={() => handleAddToCart(featuredProduct.id)}
          >
            R {featuredProduct.price}
          </button>
        </div>
      </div>
      <div className="related-products">
        {products.slice(1, 3).map((product) => ( 
          <div key={product.id} className="related-product-card">
            <div className="related-product-image">
              <img src={product.picture} alt={product.name} />
            </div>
            <div className="related-product-details">
              <p className="product-title">{product.name}</p>
              <button 
                className="price-button" 
                onClick={() => handleAddToCart(product.id)}
              >
                R {product.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
