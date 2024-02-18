import { CATEGORY_ACTION_TYPES } from "./category.type";

export const CATEGORY_INITIAL_VALUE = {
  categoriesMap: {},
};

export const categoryReducer = (
  state = CATEGORY_INITIAL_VALUE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };

    default:
      return state;
  }
};
