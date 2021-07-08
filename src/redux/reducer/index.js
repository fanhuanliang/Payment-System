import formReducer from './formReducer'
import mainReducer from './mainReducer'
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import { combineReducers } from 'redux'

export default combineReducers({
  formReducer,
  mainReducer,
  errorReducer,
  authReducer
});