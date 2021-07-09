import * as type from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case type.USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case type.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user:action.payload.msg.userName
      };
    case type.LOGIN_SUCCESS:
    case type.REGISTER_SUCCESS:
      // console.log('action.payload',action.payload, action.payload.token);
      localStorage.setItem("token", action.payload.token); 
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case type.AUTH_ERROR:
    case type.LOGIN_FAIL:
    case type.LOGOUT_SUCCESS:
    case type.REGISTER_FAIL:
      // console.log('logout reducer')
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading:false,
        user: null
      };
      default:
        return state;
  }
}