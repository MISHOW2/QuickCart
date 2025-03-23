import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/displayProducts.css';

function DisplayProducts() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/1');
        setProduct(response.data.product);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-container">
      {/* Main Product Display */}
      <div className="featured-product">
        <div className="featured-product-image">
          <img src={`http://localhost:5000${product.picture}`} alt={product.name} />
        </div>
        <div className="featured-product-details">
          <p className="product-title">{product.name}</p>
          <button className="price-button">{product.price} ZAR</button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="related-product-card">
            <div className="related-product-image">
              <img src={`http://localhost:5000${product.picture}`} alt={product.name} />
            </div>
            <div className="related-product-details">
              <p className="product-title">{product.name}</p>
              <button className="price-button">{product.price} ZAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
