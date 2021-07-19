import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore
export default combineReducers({
  userReducer,
  errorReducer,
  authReducer,
});
