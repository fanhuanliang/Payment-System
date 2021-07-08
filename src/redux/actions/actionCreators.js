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
export const loadUser = () => (dispatch, getState)=> {
  // user loading
  dispatch({ type: type.USER_LOADING });
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => 
      {console.log(res.data);
      dispatch({ 
      type: type.USER_LOADED, 
      payload: res.data 
    })})
    .catch((err) => {
      console.log(err)
      dispatch(
        handleErrors(err.response.data, err.response.status)
        );
      dispatch({ type: type.AUTH_ERROR });
    });
};

export const loginSubmitHandler = (loginData) => (dispatch) => {
  console.log("action", loginData);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };
  fetch("http://localhost:4000/api/login", requestOptions)
    .then((response) => response.json())
    .then(
      (data) => console.log("data", data.msg)
      // dispatch({
      //   type: type.REGISTER_SUBMIT_HANDLER,
      // })
    )
    .catch((err) => console.log("loginErr", err));
};

export const registerSubmitHandler = (registerData) => (dispatch) => {

  // thunk allows us return function by passing dispatch
  axios
    .post("http://localhost:4000/api/register", registerData)
    .then((response) => {
      console.log("response, actionRegister", response.data);
      dispatch({
        type: type.REGISTER_SUCCESS,
        payload: response.data 
      })
    })
    .catch((error) => {
      console.log("error, register", error);
      dispatch({
        type: type.REGISTER_FAIL,
      });
      dispatch(
        handleErrors(err.response.data, err.response.status)
        );
    });
};

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
