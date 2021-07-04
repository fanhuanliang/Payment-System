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


export const registerSubmitHandler = () => {
  return {
    type: type.REGISTER_SUBMIT_HANDLER
  }
}