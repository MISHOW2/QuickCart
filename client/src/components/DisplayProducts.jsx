import { useState } from 'react';
import { getAllProducts } from '../api/product';
import '../styles/displayProducts.css';

function DisplayProducts() {
  const [products, setProducts] = useState([]); // Use an array instead of null

  const handleClick = async () => {
    const data = await getAllProducts();
    setProducts(data); // Store the fetched products
  };

  return (
    <div className="product-container">

      {/* Featured Product (First Product from API) */}
      {products.length > 0 && (
        <div className="featured-product">
          <div className="featured-product-image">
            <img src={products[0].picture} alt={products[0].name} />
          </div>
          <div className="featured-product-details">
            <p className="product-title">{products[0].name}</p>
            <button className="price-button">ZAR {products[0].price}</button>
          </div>
        </div>
      )}

      {/* Related Products (Other Products) */}
      <div className="related-products">
        {products.slice(1, 3).map((product) => ( // Display first 2 related products
          <div key={product.id} className="related-product-card">
            <div className="related-product-image">
              <img src={product.picture} alt={product.name} />
            </div>
            <div className="related-product-details">
              <p className="product-title">{product.name}</p>
              <button className="price-button">ZAR {product.price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
