import React from "react";
import "./checkoutitem.style.scss";
function CheckOutItem({ cartItem, addItemToCart, removeItemFromCart }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name"> {name} </span>
        <span className="quantity">{quantity}</span>

        <span className="price"> {price}</span>
        <div
          className="remove-button"
          onClick={() => {
            removeItemFromCart(cartItem);
          }}
        >
          &#10005;
        </div>
      </div>
    </>
  );
}

export default CheckOutItem;
