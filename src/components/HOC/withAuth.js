import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputValue,
  handleInitState,
  loginSubmitHandler,
  registerSubmitHandler,
} from "../../redux/actions/actionCreators";
import { clearErrors } from "../../redux/actions/errorActions";

const withAuth = (OrgComponent) => {
  const newComponent = () => {
    const formReducer = useSelector((state) => state.formReducer);
    const errorReducer = useSelector((state) => state.errorReducer);
    const authReducer = useSelector((state) => state.authReducer);
    const {
      user,
      loginPassword,
      userName,
      email,
      regPassword,
      regConfirmPassword,
    } = formReducer;
    const { isAuthenticated } = authReducer;

    const dispatch = useDispatch();
    let history = useHistory();
    const linkStyle = {
      backgroundColor: "rgb(163, 205, 217)",
      border: "0px",
    };
    const historyAuth = () => {
      if (isAuthenticated) history.push("/main");
    };

    React.useEffect(() => {
      return dispatch(handleInitState());
    }, []);

    React.useEffect(() => historyAuth(), [isAuthenticated]);

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
        formReducer={(user, loginPassword)}
        errorReducer={errorReducer}
        handleChange={handleChange}
        handleLoginSubmit={handleLoginSubmit}
        removeErrors={removeErrors}
        linkStyle={linkStyle}
        handleRegisterSubmit={handleRegisterSubmit}
      />
    );
  };
  return newComponent;
};

export default withAuth;
