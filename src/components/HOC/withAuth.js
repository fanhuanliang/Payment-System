import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputValue,
  handleInitState,
  loginSubmitHandler,
} from "../../redux/actions/actionCreators";
import { clearErrors } from "../../redux/actions/errorActions";

const withAuth = ( OrgComponent ) => {
  const newComponent = () => {
    const formReducer = useSelector((state) => state.formReducer);
    const errorReducer = useSelector((state) => state.errorReducer);
    const authReducer = useSelector((state) => state.authReducer);
    const {user,loginPassword,userName,email,regPassword,regConfirmPassword} = formReducer;
    const { msg, id } = errorReducer;
    const { isAuthenticated } = authReducer;

  const dispatch = useDispatch();
  let history = useHistory();
  const linkStyle = {
    backgroundColor: "rgb(163, 205, 217)",
    border: "0px",
  };
  const historyAuth = () => {
    // history.push("/main");
    if (isAuthenticated) history.push("/main");
  };

  React.useEffect(() => {
    return dispatch(handleInitState());
  }, []);
  // React.useEffect(() => registerAuth(), [isAuthenticated]);
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
    return (
      <OrgComponent
        formReducer={(user, loginPassword)}
        errorReducer={errorReducer}
        handleChange={handleChange}
        handleSubmit={handleLoginSubmit}
        removeErrors={removeErrors}
        linkStyle={linkStyle}
      />
    );
  }
  return newComponent;
}

export default withAuth
