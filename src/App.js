import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firbase/firebaseutils.js";
import { Route, Routes } from "react-router-dom";
// import Directory from "./components/directory/Directory";
import Home from "./routes/home";
import Navigation from "./routes/Navigation/Navigation.jsx";
//
import Authentication from "./routes/auth/authentication/authintication.jsx";
import Shop from "./routes/shop.js/Shop.jsx";
import CheckOut from "./components/checkOut/CheckOut.jsx";
import { setCurrentUser } from "./store/user/user.action.js";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscripe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscripe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
