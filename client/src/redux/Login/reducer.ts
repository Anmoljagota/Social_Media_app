import RegisterUserDetails from "../../Types/Types";
import { action } from "../../Types/Types";
import {
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from "./actionTypes";

type initialStateData = {
  loading: boolean;
  error: boolean;
  token: string;
  UserDetails: RegisterUserDetails;
};
const intial_state: initialStateData = {
  loading: false,
  error: false,
  token: "",
  UserDetails: {},
};

const reducer = (state: initialStateData = intial_state, action: action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_SIGNUP_LOADING:
      return { ...state, loading: true, error: false };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userDetails: payload,
      };
    case USER_SIGNUP_ERROR:
      return { ...state, loading: false, error: true, userDetails: payload };
    case USER_LOGIN_LOADING:
      return { ...state, loading: true, error: false };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, error: false, token: payload };
    default:
      return state;
  }
};

export { reducer };
