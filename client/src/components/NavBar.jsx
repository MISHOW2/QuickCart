import React, { useState } from 'react';
import cartIcon from '../assets/icons/icons8-shopping-cart-30.png';
import logo from '../assets/icons/icons8-fast-cart-30.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function NavBar() {
  const [openCart, setOpenCart] = useState(false);

  // Function to open cart and prevent scrolling
  const handleOpenCart = () => {
    setOpenCart(true);
    document.body.classList.add('no-scroll'); // Prevent scrolling when cart is open
  };

  // Function to close cart and restore scrolling
  const handleCloseCart = () => {
    setOpenCart(false);
    document.body.classList.remove('no-scroll'); // Restore scrolling
  };

  
  return (
    <nav>
      <div className="logo-name">
        <div className="logo">
          <div className="logoContainer">
            <img src={logo} alt="QuickShop Logo" />
          </div>
          <p>QUICKSHOP</p>
        </div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
        </ul>
      </div>

      <input type="text" className="search" placeholder="Search ..." />

      <div className="cart-container">
        <div className="cartIcon" onClick={handleOpenCart}> 
          <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
        </div>
        <Cart openCart={openCart} closeCart={handleCloseCart} /> {/* Pass state */}
      </div>
    </nav>
  );
}

export default NavBar;
