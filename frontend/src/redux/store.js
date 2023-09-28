import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as dataReducer } from "./dataReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ authReducer, dataReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
