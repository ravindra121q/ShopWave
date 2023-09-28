import axios from "axios";

import {
  DATA_REQUEST_FAILED,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
} from "./actionTypes";

export const getData = () => (dispatch) => {
  dispatch({ type: DATA_REQUEST_PENDING });
  try {
    axios
      .get(`${import.meta.VITE_API_URL}/product/cart/adminItems`)
      .then((res) => {
        console.log(import.meta.VITE_API_URL);
        dispatch({ type: DATA_REQUEST_SUCCESS, payload: res.data });
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: DATA_REQUEST_FAILED });
  }
};
