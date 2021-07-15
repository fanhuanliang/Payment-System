import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Users from "./Users/Users.jsx";
import * as style from "./Popup.style.jsx";
import {
  handleInputValue,
  handleTransfer,
  handleAfterTransfer,
} from "../../../redux/actions/actionCreators";
import { clearErrors } from "../../../redux/actions/errorActions";

const Popup = ({ open, onClose }) => {
  if (!open) return null;
  const { receiver, transferAmount } = useSelector(
    (state) => state.formReducer
  );
  const { msg, id } = useSelector((state) => state.errorReducer);
  const { isTransferred } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(handleInputValue(event.target.name, event.target.value));
  };

  React.useEffect(() => {
    if (isTransferred) {
      dispatch(handleAfterTransfer());
      alert("Transfer success");
      onClose();
    }
  }, [isTransferred]);

  const removeErrors = () => {
    dispatch(clearErrors());
  };
  const transferFund = (event) => {
    event.preventDefault();
    dispatch(
      handleTransfer({
        userName: receiver,
        amount: transferAmount,
      })
    );
  };

  return (
    <>
      <style.BottomLayer>
        <style.PopupModal>
          <div>
            <style.Button onClick={onClose}>X</style.Button>
          </div>
          <style.Form onSubmit={transferFund}>
            {id === "TRANSFER_FAIL" ? (
              <div onMouseLeave={removeErrors}>{msg.msg}</div>
            ) : (
              <div style={{ visibility: "hidden" }}>No err</div>
            )}
            <style.Input
              name="transferAmount"
              placeholder="$0.00"
              value={transferAmount}
              onChange={handleChange}
            />
            <span>
              Transfer to <span>{receiver}</span>
            </span>
            <style.ConfirmButton>Confirm</style.ConfirmButton>
          </style.Form>
          <Users />
        </style.PopupModal>
      </style.BottomLayer>
    </>
  );
};

export default Popup;
