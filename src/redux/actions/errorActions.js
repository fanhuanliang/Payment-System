import { GET_ERRORS, CLEAR_ERRORS } from "./actionTypes";

export const handleErrors = (msg, status, id) => ({
  type: GET_ERRORS,
  payload: { msg, status, id },
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
