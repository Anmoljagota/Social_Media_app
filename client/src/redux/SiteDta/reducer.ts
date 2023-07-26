import { action } from "../../Types/Types";
import {
  POST_DATA_LOADING,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
} from "./actionTypes";

import { intial_data } from "../../Types/Types";
const intial_state: intial_data = {
  loading: false,
  error: false,
  postdata: [],
};

const reducer = (state: intial_data = intial_state, action: action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_DATA_LOADING:
      return { ...state, loading: true, error: false };
    case POST_DATA_SUCCESS:
      return { ...state, loading: false, error: false, postdata: payload };
    case POST_DATA_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
export { reducer };
