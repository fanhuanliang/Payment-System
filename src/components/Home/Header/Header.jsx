import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as style from "./Header.style.jsx";
import { logout } from "../../../redux/actions/userActions";

export default function Header() {
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  // React.useEffect(() => {
  //   console.log('mounted')
  //   return () => {
  //     console.log('******************* UNMOUNTED');
  //   };
  // }, []);

  return (
    <style.Header>
      <style.Wrapper>
        <style.Container>
          <div>
            <Link to="/">
              <style.H1>Mimic Pay Logo</style.H1>
            </Link>
          </div>
          <style.rightSide>
            {isAuthenticated ? (
              <>
                <Link to="/main">
                  <style.Button>Account</style.Button>
                </Link>
                <Link to="/login" onClick={handleLogout}>
                  <style.Button>Log Out</style.Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <style.Button>Log In</style.Button>
                </Link>
                <Link to="/register">
                  <style.Button>Sign Up</style.Button>
                </Link>
              </>
            )}
          </style.rightSide>
        </style.Container>
      </style.Wrapper>
    </style.Header>
  );
}
