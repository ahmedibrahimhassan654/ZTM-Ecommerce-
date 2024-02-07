import React, { useContext } from "react";
import "./cartItem.style.scss";
import { CartContext } from "../../contexts/cart.context";
function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  const { removeItemToCart } = useContext(CartContext);
  return (
    <>
      <div className="cart-item-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
        </div>
        <span
          onClick={() => {
            removeItemToCart(cartItem);
          }}
        >
          delete item
        </span>
      </div>
    </>
  );
}

export default CartItem;
