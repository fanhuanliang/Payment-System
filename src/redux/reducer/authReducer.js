import * as type from "../actions/actionTypes";

const initialState = {
  // token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  balance: 0,
  isTransferred: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case type.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.userName,
        balance: action.payload.balance,
      };
    case type.LOGIN_SUCCESS:
    case type.REGISTER_SUCCESS:
      // localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        // token: action.payload.token,
        user: action.payload.user.userName,
        balance: action.payload.user.balance,
        isAuthenticated: true,
        isLoading: false,
      };
    case type.AUTH_ERROR:
    case type.LOGIN_FAIL:
    case type.LOGOUT_SUCCESS:
    case type.REGISTER_FAIL:
      // localStorage.removeItem("token");
      return {
        ...state,
        // token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        balance: 0,
      };
    case type.CONFIRM_TRANSFER:
      return {
        ...state,
        balance: action.payload.balance,
        isTransferred: true,
      };
    case type.TRANSFER_FINISHED:
      return {
        ...state,
        isTransferred: false,
      };
    default:
      return state;
  }
};
