import axios from "axios";
import { GET_CATS } from "../types/types";

export const getCatsAC = (limit, category) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${category}`
    );
    dispatch({
      type: GET_CATS,
      payload: response.data,
    });
  };
};
