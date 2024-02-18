import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoryReducer } from "./categories/category.reducer";

export const rootreducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
});
