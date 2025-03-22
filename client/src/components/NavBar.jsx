import React from 'react'
import cartIcon from '../assets/icons/icons8-shopping-cart-30.png'
import logo from '../assets/icons/icons8-fast-cart-30.png'
import '../styles/navbar.css'
function NavBar() {
  return (
    <nav>
      <div className='logo-name'>
        <div className="logo">
        <div className="logoContainer">
        <img src={logo} alt="" />
        </div>
        <p>QUICKSHOP</p>
        </div>
        <ul>
          <li>All</li>
          <li>Shirts</li>
          <li>Shoes</li>
        </ul>
      </div>

      <input
        type="text"
        className='search'
        name=""
        id=""
        placeholder='Search ...'
      />

      <div className="cartIcon">
        <img src={cartIcon}alt="" />
      </div>
    </nav>
  )
}

export default NavBar
