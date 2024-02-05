import React, { useContext } from "react";
import "./CartDropDown.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotoCheckOutPage = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button type="button" buttonType="google" onClick={gotoCheckOutPage}>
        Check out
      </Button>
    </div>
  );
}

export default CartDropDown;
