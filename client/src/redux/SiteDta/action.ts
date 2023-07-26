import { Dispatch } from "redux";
import axios from "axios";
import {
  POST_DATA_LOADING,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
} from "./actionTypes";

const GET_POST_DATA = (): any => (dispatch: Dispatch) => {
  dispatch({ type: POST_DATA_LOADING });
  axios
    .get("http://localhost:8000/post")
    .then((res) => {
      dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_DATA_ERROR, payload: err });
    });
};

export { GET_POST_DATA };
