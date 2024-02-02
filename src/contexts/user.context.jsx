import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firbase/firebaseutils";

// as the actual value you want to access
export const UserContext = createContext({
  //initial value for our context
  currentUser: null,
  setCurrentUser: () => null,
});

//act as component cover the heigh level component which is App compnent
export const UserProvider = ({ children }) => {
  //store the user object inside current user state
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  useEffect(() => {
    const unsubscripe = onAuthStateChangedListener((user) => {
      console.log("user gets from on auth listener callback  ", user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(
        "currentUser state after we set it from lesiener ",
        currentUser
      );
    });
    return unsubscripe;
  }, [currentUser]);
  console.log(
    "final value object that witll inserted to the user provider",
    value
  );
  //انا عاوز اباصى فاليو جوه اليوزر كونتكست بروفيدر  الا وهى الكرنت يوزر وحتى السيت كرنت يوزر بحيث اقدر ااكسسهم من داخل الى كومبونتت من الشيلدرن اللى تحتيها
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//  App Component(parent) وهحاوط بيه ال  UserProvider كده انا هاخد ال
//    UserContext علشان اعرف احصل على اى فاليو من جوه ال الاستات اللى جايالى من ال
