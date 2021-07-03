import {createStore} from 'redux'
import rootReducer from "../reducer/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Redux DevTools with basic store. 
//createStore(reducer, [preloadedState], [enhancer])
//[preloadedState] (any): The initial state.
//If this is a boolean, it will be used to indicate whether configureStore should automatically enable support for the Redux DevTools browser extension.
export default store;