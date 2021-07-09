import formReducer from './formReducer'
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import { combineReducers } from 'redux'

export default combineReducers({
  formReducer,
  errorReducer,
  authReducer,
});