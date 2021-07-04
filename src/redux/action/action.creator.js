import * as type from './action.type'

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
// export const handleRegisterValue = (name, value) => {
//   return {
//     type: type.REGISTER_INPUT_VALUE,
//     payload: { [name]: value },
//   };
// }

// export const 