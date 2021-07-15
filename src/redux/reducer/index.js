import { combineReducers } from "redux";
import formReducer from "./formReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  formReducer,
  errorReducer,
  authReducer,
});
