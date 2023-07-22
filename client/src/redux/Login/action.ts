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

const UserData = (data: RegisterUserDetails): any =>  (dispatch: Dispatch) => {
    dispatch({ type: USER_SIGNUP_LOADING });
 return  axios
      .post("http://localhost:8000/register", data)
      .then((res) => {
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: USER_SIGNUP_ERROR ,payload:err});
      });
  };


export { UserData };
