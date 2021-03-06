import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app.jsx";
import store from "./redux/store/index";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
