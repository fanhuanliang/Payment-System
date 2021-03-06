import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../Home/Header/Header.jsx";
import * as style from "./Main.style.jsx";
import Popup from "./Popup/Popup.jsx";
import { handleInitState } from "../../redux/actions/userActions";
import Footer from "../Home/Footer/Footer.jsx";

const Main = () => {
  const { user, balance, isAuthenticated } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    if (!isAuthenticated) history.push("/login");
  }, [isAuthenticated]);
  // if (!isAuthenticated) return <Redirect to="/login" />;

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    dispatch(handleInitState());
  };

  return (
    <div>
      <Header logOut={isAuthenticated} />
      <style.Container>
        <style.Box>
          <style.H1>
            Welcome, <span>{user}</span>
          </style.H1>
          <style.Balance>${balance.toFixed(2)}</style.Balance>
          <style.Paragraph>Balance available</style.Paragraph>
          <style.Button onClick={openModal}>Transfer Money</style.Button>
        </style.Box>
      </style.Container>
      <Popup open={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
    </div>
  );
};

export default Main;
