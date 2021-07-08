import * as type from "./actionTypes";
import { handleErrors, clearErrors } from "./errorActions";

const axios = require("axios");

export const handleInputValue = (name, value) => {
  return {
    type: type.HANDLE_INPUT_VALUE,
    payload: { [name]: value },
  };
};

export const handleInitState = () => {
  return {
    type: type.CLEAN_UP_STATE,
  };
};

//check token & load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: type.USER_LOADING });
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: type.USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(handleErrors(err.response.data, err.response.status));
      dispatch({ type: type.AUTH_ERROR });
    });
};

export const loginSubmitHandler = (loginData) => (dispatch) => {
  console.log("action", loginData);
  axios
    .post("http://localhost:4000/api/login", loginData)
    .then((response) => {
      console.log("response, login", response.data);
      dispatch({
        type: type.LOGIN_SUCCESS,
        payload: response.data,
      });
      dispatch({ type: type.CLEAN_UP_STATE });
    })
    .catch((error) => {
      console.log("error, login", error);
      console.log("loginErr", error.response.data , error.response.status);
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
    .post("http://localhost:4000/api/register", registerData)
    .then((response) => {
      // console.log("response, actionRegister", response.data);
      dispatch({
        type: type.REGISTER_SUCCESS,
        payload: response.data,
      });
      dispatch({ type: type.CLEAN_UP_STATE });
    })
    .catch((error) => {
      console.log("error, register", error);
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

//handle logout user
export const logout = () => {
  console.log("action logout");
  return {
    type: type.LOGOUT_SUCCESS,
  };
};

//config the token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().authReducer.token;
  console.log("localStorage", token);
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["authorization"] = token;
  }

  return config;
};
