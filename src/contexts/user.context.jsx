import { createContext, useEffect, useReducer } from "react";
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

const USER_ACTION_TYPES = {
  SET_CUURENT_USER: "SET_CUURENT_USER",
};

//reducer part
const userReducer = (state, action) => {
  console.log("dispatch");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CUURENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`unHadeled type${type} in the user reducers`);
  }
};

const InitialState = {
  currentUser: null,
};

//act as component cover the heigh level component which is App compnent
export const UserProvider = ({ children }) => {
  //store the user object inside current user state
  // const [currentUser, setCurrentUser] = useState(null);

  const [state, dispatch] = useReducer(userReducer, InitialState);
  const { currentUser } = state;

  console.log("currentUser", currentUser);
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CUURENT_USER, payload: user });
  };

  const value = {
    currentUser,
    setCurrentUser,
  };
  useEffect(() => {
    const unsubscripe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscripe;
  }, [currentUser]);

  //انا عاوز اباصى فاليو جوه اليوزر كونتكست بروفيدر  الا وهى الكرنت يوزر وحتى السيت كرنت يوزر بحيث اقدر ااكسسهم من داخل الى كومبونتت من الشيلدرن اللى تحتيها
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//  App Component(parent) وهحاوط بيه ال  UserProvider كده انا هاخد ال
//    UserContext علشان اعرف احصل على اى فاليو من جوه ال الاستات اللى جايالى من ال

//  user reducer الجزء الخاص

/**
 
 const userReducer =(state,action)=>{
 return{
 //return new object
 currentUser:
 }
 }
 
 */
