import formReducer from './formReducer'
import mainReducer from './mainReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  formReducer,
  mainReducer,
});