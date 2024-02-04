import React from "react";
import Button from "../button/Button";
import "./productcard.style.scss";

function ProductCard({ product }) {
  const { name, id, imageUrl, price } = product;
  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button ButtonType="inverted">Add to card</Button>
    </div>
  );
}

export default ProductCard;
