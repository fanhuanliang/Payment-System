import * as type from "./actionTypes";
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

export const loginSubmitHandler = (loginData) => (dispatch) => {
  console.log('action', loginData)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };
  fetch("api/login", requestOptions)
    .then((response) => response.json())
    .then(
      (data) => console.log('data',data.msg)
      // dispatch({
      //   type: type.REGISTER_SUBMIT_HANDLER,
      // })
    )
    .catch((err) => console.log('loginErr', err,));
}

export const registerSubmitHandler = (registerData) => (dispatch) => {
  // thunk allows us return function by passing dispatch
  axios
    .post("/api/register", registerData)
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => {
      console.log("error", error.response.data);
      dispatch({
        type: type.REGISTER_ERROR_HANDLER,
        payload: {
          errMessage: error.response.data.msg,
        },
      });
    });
};
// const requestOptions = {
//   method: "POST",
//   headers: { "Content-Type": "application/x-www-form-urlencoded" },
//   body: JSON.stringify([registerData]),
// };
// fetch("api/register", requestOptions)
//   .then((response) => response.json())
//   .then((data) =>
//   console.log(data),
//     dispatch({
//       type: type.REGISTER_SUBMIT_HANDLER,
//     })
//   );
