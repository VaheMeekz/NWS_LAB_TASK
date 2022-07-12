import axios from "axios";
import { GET_CATEGORY } from "../types/types";

export const getCategoryAC = () => {
  return async (dispatch) => {
    const response = await axios.get("https://api.thecatapi.com/v1/categories");
    dispatch({
      type: GET_CATEGORY,
      payload: response.data,
    });
  };
};
