import * as type from "./actionTypes";
import { handleErrors } from "./errorActions";

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

export const addToReceiver = () => {
  return {
    type: type.ADD_RECEIVER,
  };
};

//check token & load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: type.USER_LOADING });
  axios
    .get("/api/auth/user", tokenConfig(getState))
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
    .post("http://localhost:4000/api/login", loginData)
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
    .post("http://localhost:4000/api/register", registerData)
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

//handle transfer
export const handleTransfer = (data) => (dispatch, getState) => {
axios
  .put(
    "http://localhost:5000/api/transfer",
    data,
    tokenConfig(getState)
  )
  .then((response) => {
    dispatch({
      type: type.CONFIRM_TRANSFER,
      payload: response.data,
    });
  })
  .catch((error) => {
    dispatch(
      handleErrors(error.response.data, error.response.status, "TRANSFER_FAIL")
    );
  });
}

export const handleAfterTransfer = () => {
  return {
    type: type.TRANSFER_FINISHED,
  };
};

//handle logout user
export const logout = () => {
  return {
    type: type.LOGOUT_SUCCESS,
  };
};

//search user
export const searchRecipient = (recipient) => (dispatch, getState) => {
  // dispatch({ type: type.USER_LOADING });
  axios
    .post(
      "http://localhost:5000/api/findUser",
      { account: recipient },
      tokenConfig(getState)
    )
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

//config the token
export const tokenConfig = (getState) => {
  // Get token from localStorage
  const token = getState().authReducer.token;
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
