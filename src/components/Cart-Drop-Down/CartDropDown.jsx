import React from "react";
import "./CartDropDown.scss";
import Button from "../button/Button";
function CartDropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button type="button" buttonType="google">
        Check out
      </Button>
    </div>
  );
}

export default CartDropDown;
