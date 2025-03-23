import '../styles/displayProducts.css';

function DisplayProducts() {
  return (
    <div className="product-container">
      {/* Main Product Display */}
      <div className="featured-product">
        <div className="featured-product-image">
          <img src="" alt="" />
        </div>
        <div className="featured-product-details">
          <p className="product-title"></p>
          <button className="price-button"></button>
        </div>
      </div>


      <div className="related-products">
        <div className="related-product-card">
          <div className="related-product-image">
            <img src="" alt="" />
          </div>
          <div className="related-product-details">
            <p className="product-title"></p>
            <button className="price-button"></button>
          </div>
        </div>
        <div className="related-product-card">
          <div className="related-product-image">
            <img src="" alt="" />
          </div>
          <div className="related-product-details">
            <p className="product-title"></p>
            <button className="price-button"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProducts;
