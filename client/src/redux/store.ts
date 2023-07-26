import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { reducer } from "./Login/reducer";
import { reducer as postData } from "./SiteDta/reducer";
import {AppAction} from "./Login/actionTypes";
import thunk, { ThunkMiddleware } from "redux-thunk";
const rootReducer = combineReducers({
  register_data: reducer,
  postData,
});
const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AppAction>)
);
export type RootState = ReturnType<typeof rootReducer>;
export { store };
