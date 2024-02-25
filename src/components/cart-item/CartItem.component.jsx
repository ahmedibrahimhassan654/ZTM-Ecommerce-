import React, { useContext } from "react";
import "./cartItem.style.scss";
import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { removeItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  const dispatch = useDispatch();
  // const { removeItemToCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
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
            dispatch(removeItemToCart(cartItems, cartItem));
          }}
        >
          delete item
        </span>
      </div>
    </>
  );
}

export default CartItem;
