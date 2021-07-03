import dummyData from '../../../DummyData'
import * as type from '../action/action.type'

const initialState = {
  data: [...dummyData],
  input: "",
  password: "",
};
const loginReducer = (state = initialState, action) => {
  // console.log(action)
  const newState = JSON.parse(JSON.stringify(state));
  //clone an object
  switch (action.type) {
    case type.LOGIN_INPUT_VALUE:
      if (action.user) {
        newState.input = action.user;
      } else  if (action.password) {
        newState.password = action.password
      }
      return newState;
      default:
        return state;
  }
};

export default loginReducer;