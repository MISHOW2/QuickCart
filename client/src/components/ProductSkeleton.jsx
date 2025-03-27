import React from 'react'
import '../styles/skeleton.css'
function ProductSkeleton() {
  return (
    <div className="product-container">
      <div className="featured-product">
        <div className="skeleton skeleton-image"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
      <div className="related-products">
        <div className="related-product-card">
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
        <div className="related-product-card">
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton
