import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.type";

export const setcategoriesMap = (categoriesMap) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
};
