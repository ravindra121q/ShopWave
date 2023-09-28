import { data } from "autoprefixer";
import {
  DATA_REQUEST_FAILED,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
} from "./actionTypes";

const initialState = { isLoading: false, isError: false, data: [] };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_REQUEST_PENDING:
      return { ...state, isLoading: true, isError: false };
    case DATA_REQUEST_SUCCESS:
      console.log(data);
      return { ...state, isLoading: false, isError: false, data: payload };
    case DATA_REQUEST_FAILED:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
