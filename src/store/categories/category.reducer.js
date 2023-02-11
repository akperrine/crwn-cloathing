import { CATEGORY_ACTION_TYPES } from "./category.types";
const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action = []) => {
  const { type, payload } = action;
  console.log(type, payload);

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES: {
      console.log("run");
      return { ...state, categories: payload };
    }
    default:
      return state;
  }
};
