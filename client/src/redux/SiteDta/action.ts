import { Dispatch } from "redux";
import axios from "axios";
import {
  POST_DATA_LOADING,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  ADD_POST_DATA_LOADING,
  ADD_POST_DATA_SUCCESS,
  ADD_POST_DATA_ERROR,
} from "./actionTypes";
import { BACKEND_BASE_URL } from "../../utils/constant";

const GET_POST_DATA = (): any => (dispatch: Dispatch) => {
  dispatch({ type: POST_DATA_LOADING });
  axios
    .get(`${BACKEND_BASE_URL}/post`)
    .then((res) => {
      dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_DATA_ERROR, payload: err });
    });
};

const ADD_POST_DATA =
  (formdata: any): any =>
  (dispatch: Dispatch) => {
    console.log("kkkkkk", formdata);
    dispatch({ type: ADD_POST_DATA_LOADING });
    axios
      .post(`${BACKEND_BASE_URL}/post`, formdata, {
        headers: {
          "Content-Type": "multipart/formdata",
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res, "resssss");
        dispatch({ type: ADD_POST_DATA_SUCCESS });
      })
      .catch((err) => {
        console.log(err, "errrrrror");
        dispatch({ type: ADD_POST_DATA_ERROR, payload: err });
      });
  };
export { GET_POST_DATA, ADD_POST_DATA };
