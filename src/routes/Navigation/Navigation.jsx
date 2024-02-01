import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.Style.scss";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
function Navigation() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crownlogo className="logo" />
        </Link>

        <div className="links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Login
          </Link>
          {/* <Link className="link" to="/blog">
            Blog
          </Link> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
