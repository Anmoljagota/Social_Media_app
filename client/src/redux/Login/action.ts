import {
  USER_SIGNUP_LOADING,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_SUCCESS,
} from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";
interface RegisterUserDetails {
  name?: string;
  email?: string;
  PhoneNumber?: number;
  password?: string | number;
  city?: string;
}

const UserData =
  (data: RegisterUserDetails): any =>
  (dispatch: Dispatch) => {
    const postdata =
      data.PhoneNumber === undefined &&
      data.city === undefined &&
      data.PhoneNumber === undefined &&
      data.name === undefined
        ? "http://localhost:8000/login"
        : "http://localhost:8000/register";
    dispatch({ type: USER_SIGNUP_LOADING });
    return axios
      .post(postdata, data)
      .then((res) => {
        console.log("res data",res.data)
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_SIGNUP_ERROR, payload: err });
      });
  };

export { UserData };
