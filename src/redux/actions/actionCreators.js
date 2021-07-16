import * as type from "./actionTypes";
import { handleErrors } from "./errorActions";

const axios = require("axios");

// config the token
// const tokenConfig = (getState) => {
//   // Get token from localStorage
//   const { token } = getState().authReducer;
//   // Headers
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   // If token, add to headers
//   if (token) {
//     config.headers.authorization = token;
//   }

//   return config;
// };
export const handleInputValue = (name, value) => ({
  type: type.HANDLE_INPUT_VALUE,
  payload: { [name]: value },
});

export const handleInitState = () => ({
  type: type.CLEAN_UP_STATE,
});

export const addToReceiver = () => ({
  type: type.ADD_RECEIVER,
});

// check token & load user
// export const loadUser = () => (dispatch, getState) => {
export const loadUser = () => (dispatch) => {
  // user loading
  dispatch({ type: type.USER_LOADING });
  axios
    // .get("/api/auth/user", tokenConfig(getState))
    .get("/api/auth/user")
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: type.USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(handleErrors(err.response.data, err.response.status));
      dispatch({ type: type.AUTH_ERROR });
    });
};

export const loginSubmitHandler = (loginData) => (dispatch) => {
  axios
    .post("/api/login", loginData)
    .then((response) => {
      dispatch({
        type: type.LOGIN_SUCCESS,
        payload: response.data,
      });
      dispatch({ type: type.CLEAN_UP_STATE });
    })
    .catch((error) => {
      dispatch({
        type: type.LOGIN_FAIL,
      });
      dispatch(
        handleErrors(error.response.data, error.response.status, "LOGIN_FAIL")
      );
    });
};

export const registerSubmitHandler = (registerData) => (dispatch) => {
  // thunk allows us return function by passing dispatch
  axios
    .post("/api/register", registerData)
    .then((response) => {
      dispatch({
        type: type.REGISTER_SUCCESS,
        payload: response.data,
      });
      dispatch({ type: type.CLEAN_UP_STATE });
    })
    .catch((error) => {
      dispatch({
        type: type.REGISTER_FAIL,
      });
      dispatch(
        handleErrors(
          error.response.data,
          error.response.status,
          "REGISTER_FAIL"
        )
      );
    });
};

// handle transfer
// export const handleTransfer = (data) => (dispatch, getState) => {
export const handleTransfer = (data) => (dispatch) => {
  axios
    // .put("/api/transfer", data, tokenConfig(getState))
    .put("/api/transfer", data)
    .then((response) => {
      dispatch({
        type: type.CONFIRM_TRANSFER,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch(
        handleErrors(
          error.response.data,
          error.response.status,
          "TRANSFER_FAIL"
        )
      );
    });
};

export const handleAfterTransfer = () => ({
  type: type.TRANSFER_FINISHED,
});

// handle logout user
// export const logout = () => ({
//   type: type.LOGOUT_SUCCESS,
// });
export const logout = () => (dispatch) => {
  axios
    .get("/api/deleteCookie")
    .then(() => {
      dispatch({
        type: type.LOGOUT_SUCCESS,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// search user
// export const searchRecipient = (recipient) => (dispatch, getState) => {
export const searchRecipient = (recipient) => (dispatch) => {
  // dispatch({ type: type.USER_LOADING });
  axios
    // .post("/api/findUser", { account: recipient }, tokenConfig(getState))
    .post("/api/findRecipient", { account: recipient })
    .then((response) => {
      dispatch({
        type: type.SEARCH_USER,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: type.SEARCH_USER_FAIL,
      });
      dispatch(
        handleErrors(
          error.response.data,
          error.response.status,
          "SEARCH_USER_FAIL"
        )
      );
    });
};
