import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputValue,
  handleInitState,
} from "../../redux/actions/userActions";
import {
  loginSubmitHandler,
  registerSubmitHandler,
} from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const withAuth = (OrgComponent) => {
  const newComponent = () => {
    // useSelector is hook that takes the current state as an argument and returns whatever data you want from it.
    const userReducer = useSelector((state) => state.userReducer);
    const errorReducer = useSelector((state) => state.errorReducer);
    const authReducer = useSelector((state) => state.authReducer);
    const {
      user,
      loginPassword,
      userName,
      email,
      regPassword,
      regConfirmPassword,
    } = userReducer;
    const { isAuthenticated } = authReducer;

    // useDispatch is hook that returns a reference to the dispatch function from the redux store.
    const dispatch = useDispatch();

    React.useEffect(() => dispatch(clearErrors()), []);

    React.useEffect(() => dispatch(handleInitState()), []);

    if (isAuthenticated) return <Redirect to="/main" />;

    const handleChange = (event) => {
      dispatch(handleInputValue(event.target.name, event.target.value));
    };

    const removeErrors = () => {
      dispatch(clearErrors());
    };

    const handleLoginSubmit = (event) => {
      event.preventDefault();
      const password = loginPassword;
      const account = user;
      dispatch(loginSubmitHandler({ account, password }));
    };

    const handleRegisterSubmit = (event) => {
      event.preventDefault();
      const password = regPassword;
      dispatch(
        registerSubmitHandler({ userName, email, password, regConfirmPassword })
      );
    };

    return (
      <OrgComponent
        userReducer={userReducer}
        errorReducer={errorReducer}
        handleChange={handleChange}
        handleLoginSubmit={handleLoginSubmit}
        removeErrors={removeErrors}
        handleRegisterSubmit={handleRegisterSubmit}
      />
    );
  };
  return newComponent;
};

export default withAuth;
