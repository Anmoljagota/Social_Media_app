import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { reducer } from "./Login/reducer";
import { USER_SIGNUP_LOADING,USER_SIGNUP_SUCCESS,USER_SIGNUP_ERROR, AppAction } from './Login/actionTypes'
import thunk,{ ThunkMiddleware } from "redux-thunk";
const rootReducer=combineReducers({
    register_data:reducer
})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk as ThunkMiddleware<RootState, AppAction>));
export type RootState = ReturnType<typeof rootReducer>;
export { store };
