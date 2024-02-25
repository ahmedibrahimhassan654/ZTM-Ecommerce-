import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./productcard.style.scss";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

function ProductCard({ product }) {
  const { name, id, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();

  const addPructToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    console.log("cart items ", cartItems);
  };
  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={addPructToCart}
        buttontype={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
