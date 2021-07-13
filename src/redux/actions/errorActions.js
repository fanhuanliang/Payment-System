import { GET_ERRORS, CLEAR_ERRORS } from "./actionTypes";

export const handleErrors = (msg, status, id) => {
    return {
      type: GET_ERRORS,
      payload: { msg, status, id },
    };
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}