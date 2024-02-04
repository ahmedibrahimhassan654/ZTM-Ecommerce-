import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { CartContext } from "../../contexts/cart.context";

function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    console.log("cart open status", isCartOpen);
    console.log("setIsCartOpen status", isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">200</span>
    </div>
  );
}

export default CartIcon;
