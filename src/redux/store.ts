import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer } from "./Login/reducer";
import thunk from "redux-thunk";
const store = legacy_createStore(reducer);
export { store };
