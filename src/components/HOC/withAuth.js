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
  // const {
  //   user,
  //   loginPassword,
  //   userName,
  //   email,
  //   regPassword,
  //   regConfirmPassword,
  // } = useSelector((state) => state.formReducer);
  const formReducer = useSelector((state) => state.formReducer);
  const errorReducer = useSelector((state) => state.errorReducer);
  // const { msg, id } = useSelector((state) => state.errorReducer);
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  let history = useHistory();
  const linkStyle = {
    backgroundColor: "rgb(163, 205, 217)",
    border: "0px",
  };
  const loginAuth = () => {
    // history.push("/main");
    if (isAuthenticated) history.push("/main");
  };

  React.useEffect(() => {
    return dispatch(handleInitState());
  }, []);
  // React.useEffect(() => registerAuth(), [isAuthenticated]);
  React.useEffect(() => loginAuth(), [isAuthenticated]);

  const handleChange = (event) => {
    dispatch(handleInputValue(event.target.name, event.target.value));
  };

  const removeErrors = () => {
    dispatch(clearErrors());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = loginPassword;
    const account = user;
    dispatch(loginSubmitHandler({ account, password }));
  };
    return (
      <OrgComponent formReducer={formReducer} errorReducer={errorReducer} />
    );
  }
  return newComponent;
}

export default withAuth
