import React, { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./productcard.style.scss";
import { CartContext } from "../../contexts/cart.context";

function ProductCard({ product }) {
  const { name, id, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);
  const addPructToCart = () => addItemToCart(product);
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
