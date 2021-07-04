import * as type from './actionTypes'

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
}


export const registerSubmitHandler = (registerData) => (dispatch) => {
  // thunk allows us return function by passing dispatch
  console.log(registerData);
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerData),
  };
  fetch("api/register", requestOptions)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: type.REGISTER_SUBMIT_HANDLER,
      })
    );
};