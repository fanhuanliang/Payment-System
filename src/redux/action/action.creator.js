import * as type from './action.type'

export const handleInputValue = (name, value) => {
  return {
    type: type.LOGIN_INPUT_VALUE,
    [name]: value,
  };
};