import {
  USER_SIGNUP_LOADING,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_SUCCESS,
} from "./actionTypes";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store"; // Import your RootState type
import { AppAction } from "./actionTypes";
import axios from "axios";
interface RegisterUserDetails {
  name?: string;
  email?: string;
  PhoneNumber?: number;
  password?: string | number;
  city?: string;
}

const UserData = (data: RegisterUserDetails): any => {
  return (dispatch: Dispatch) => {
    axios.post("http://localhost:8000/register", data).then((res) => {
      dispatch({ type: USER_SIGNUP_LOADING, payload: res.data });
    });
  };
};

export { UserData };
