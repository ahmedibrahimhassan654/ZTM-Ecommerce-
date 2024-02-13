import React, { useContext } from "react";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropDown.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
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
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Cart Is Empty</EmptyMessage>
        )}
      </CartItems>

      <Button
        type="button"
        buttontype={BUTTON_TYPE_CLASSES.inverted}
        onClick={gotoCheckOutPage}
      >
        Check out
      </Button>
    </CartDropDownContainer>
  );
}

export default CartDropDown;
