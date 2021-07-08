import { GET_ERRORS, CLEAR_ERRORS } from "./actionTypes";

export const handleErrors = (msg, status) => {
  console.log('handleErr',  msg, status)
    return {
      type: GET_ERRORS,
      payload: { msg, status },
    };
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}