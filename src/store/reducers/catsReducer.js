import { GET_CATS } from "../types/types";

const initialState = {
  cats: null,
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return {
        ...state,
        cats: action.payload,
      };
    default:
      return state;
  }
};
