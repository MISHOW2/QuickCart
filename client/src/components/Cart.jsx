import React, { useContext, useEffect, useRef } from "react";
import "../styles/cart.css";
import closeIcon from "../assets/icons/icons8-close-30.png";
import cartIcon from "../assets/icons/icons8-shopping-cart-30.png";
import CartContext from "../context/cartContext";

function Cart({ closeCart, openCart }) {
  const { cart } = useContext(CartContext);

  const cartRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart();
      }
    }

    if (openCart) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCart, closeCart]);

  return (
    <div ref={cartRef} className={`cart ${openCart ? "open" : ""}`}>
      <div className="cart-header">
        <p>My Cart</p>
        <div className="close-icon" onClick={closeCart}>
          <img src={closeIcon} alt="Close Cart" />
        </div>
      </div>

      <div className="cart-items">
        {cart && cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="picture-container">
                <img
                  src={item.product.picture}
                  alt={item.product.name}
                  className="cart-item-image"
                />
              </div>
              <div>
                <p>{item.product.name}</p>
              </div>
              <div className="price-quantity">
                <p className="price">R {item.product.price}</p>
                <div className="quantity">
                  <button>-</button>
                  <p>{item.quantity}</p>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <img
              src={cartIcon}
              alt="Shopping Cart"
              className="ShoppingcartIcon"
            />
            <p>Your Cart Is Empty</p>
          </div>
        )}
      </div>

     
      {cart && cart.length > 0 && <button className="checkout-btn">Checkout</button>}
    </div>
  );
}

export default Cart;
