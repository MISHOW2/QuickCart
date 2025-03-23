import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllProducts } from '../api/product';
import '../styles/displayProducts.css';

function DisplayProducts() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    const data = await getAllProducts();
    console.log(data); // Logs the fetched data when button is clicked
  };

  return (
    <div className="product-container">
      
      <div className="featured-product">
        <div className="featured-product-image">
          <img src="/kk" alt="picture" />
        </div>
        <div className="featured-product-details">
          <p className="product-title"></p>
          <button className="price-button" onClick={handleClick}> ZAR</button>
        </div>
      </div>

      
    {/*<div className="related-products">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="related-product-card">
            <div className="related-product-image">
              <img src=''alt='' />
            </div>
            <div className="related-product-details">
              <p className="product-title"></p>
              <button className="price-button"> ZAR</button>
            </div>
          </div>
        ))}
      </div>*/}
    </div>
  );
}

export default DisplayProducts;
