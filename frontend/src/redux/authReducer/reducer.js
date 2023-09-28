import {
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_PENDING,
  LOGIN_REQUEST_SUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };

    case LOGIN_REQUEST_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
