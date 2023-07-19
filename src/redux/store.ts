import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { reducer } from "./Login/reducer";

import thunk from "redux-thunk";
const rootreducer=combineReducers({
    register_data:reducer
})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk));
export { store };
