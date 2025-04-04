import React, { useContext, useEffect, useRef } from "react";
import "../styles/cart.css";
import closeIcon from "../assets/icons/icons8-close-30.png";
import removeItemIcon from "../assets/icons/icons8-close-30.png";
import cartIcon from "../assets/icons/icons8-shopping-cart-30.png";
import CartContext from "../context/cartContext";
import { removeItem, editCartItemQty } from "../api/product";

function Cart({ closeCart, openCart }) {
  const { cart, setCart } = useContext(CartContext);
  const cartRef = useRef(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart"); // Remove empty cart
    }
  }, [cart]);

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

  // Handle delete function
  const handleDelete = async (productId) => {
    const updatedCart = await removeItem(productId);
    if (updatedCart) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    }
  };
  const handleQuantity = async (productId, newQuantity) => {
    const updatedCart = await editCartItemQty(productId, newQuantity);
    if (updatedCart) {
      setCart(updatedCart); // Update cart state
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist cart
    }
  };

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
                <div className="removeItem" onClick={() => handleDelete(item.product.id)}>
                  <img src={removeItemIcon} alt="" className="" />
                </div>
              </div>
              <div>
                <p>{item.product.name}</p>
              </div>
              <div className="price-quantity">
                <p className="price">R {item.product.price}</p>
                <div className="quantity">
                  <button onClick={() => handleQuantity(item.product.id, item.quantity - 1)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleQuantity(item.product.id, item.quantity + 1)}>+</button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <img src={cartIcon} alt="Shopping Cart" className="ShoppingcartIcon" />
            <p>Your Cart Is Empty</p>
          </div>
        )}
      </div>

      {cart && cart.length > 0 && (
        <button className="checkout-btn">
          CHECKOUT R {cart.reduce((acc, item) => acc + item.product.price, 0)}
        </button>
      )}
    </div>
  );
}

export default Cart;
