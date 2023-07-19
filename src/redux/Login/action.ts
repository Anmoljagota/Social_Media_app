import {
  USER_SIGNUP_LOADING,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_SUCCESS,
} from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";
interface RegisterUserDetails {
  name: string;
  email: string;
  PhoneNumber: number;
  password: string | number;
  city: string;
}
const UserData = (dispatch: Dispatch) => (data: RegisterUserDetails) => {
  axios.post("").then((res) => {});
};
export { UserData };
