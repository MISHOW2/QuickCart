import React, { useEffect, useRef } from 'react';
import '../styles/cart.css';
import closeIcon from '../assets/icons/icons8-close-30.png';
import cartIcon from '../assets/icons/icons8-shopping-cart-30.png';

function Cart({ closeCart, openCart }) {
  const cartRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart(); // Close cart if clicking outside
      }
    }

    if (openCart) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCart, closeCart]);

  return (
    <div ref={cartRef} className={`cart ${openCart ? 'open' : ''}`}>
      <div className="cart-header">
        <p>My Cart</p>
        <div className="close-icon" onClick={closeCart}>
          <img src={closeIcon} alt="Close Cart" />
        </div>
      </div>

      <div className="cart-items">
        <img src={cartIcon} alt="Shopping Cart" className='ShoppingcartIcon'/>
        <p>Your Cart Is Empty</p>
      </div>
    </div>
  );
}

export default Cart;
