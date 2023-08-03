import {
  USER_SIGNUP_LOADING,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
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
    dispatch({ type: USER_SIGNUP_LOADING });
    return axios
      .post("http://localhost:8000/register", data)
      .then((res) => {
        console.log("res data", res.data);
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_SIGNUP_ERROR, payload: err });
      });
  };

//LOGIN LOGIN
const LoginUser =
  (data: RegisterUserDetails): any =>
  (dispatch: Dispatch) => {
    dispatch({ type: USER_SIGNUP_LOADING });
    return axios
      .post("http://localhost:8000/login", data)
      .then((res) => {
     console.log(res.data,"ressssss")
        if (res.data !== "Wrong Credentials") {
          localStorage.setItem("token", res.data);
        }
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_SIGNUP_ERROR, payload: err });
      });
  };
export { UserData , LoginUser };
