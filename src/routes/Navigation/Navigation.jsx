import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firbase/firebaseutils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/Cart-Drop-Down/CartDropDown";
// import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.Style";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIscartOpen } from "../../store/cart/cart.selector";
function Navigation() {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIscartOpen);
  // const { isCartOpen } = useContext(CartContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <Crownlogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Login</NavLink>
          )}
          <CartIcon />
          {/* <Link className="link" to="/blog">
            Blog
          </Link> */}
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
