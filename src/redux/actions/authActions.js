import * as type from "./actionTypes";
import { handleErrors } from "./errorActions";

const axios = require("axios");

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
