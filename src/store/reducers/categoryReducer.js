import { GET_CATEGORY } from "../types/types";

const initialState = {
  categories: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
