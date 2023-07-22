import RegisterUserDetails from "../../Types/Types";
import {
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
} from "./actionTypes";

type initialStateData = {
  loading: boolean;
  error: boolean;
  UserDetails: RegisterUserDetails;
};
const intial_state: initialStateData = {
  loading: false,
  error: false,
  UserDetails: {},
};
interface action {
  type: string;
  payload?: any;
}
const reducer = (state: initialStateData = intial_state, action: action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_SIGNUP_LOADING:
      return { ...state, loading: true, error: false };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, error: false, userDetails: payload };
    case USER_SIGNUP_ERROR:
      return { ...state, loading: false, error: true, userDetails: payload };
    default:
      return state;
  }
};

export { reducer };
