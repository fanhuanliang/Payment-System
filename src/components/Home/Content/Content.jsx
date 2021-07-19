import React from "react";
import * as style from "./Content.style.jsx";
import img from "../../images/money.jpeg"; // local import jpeg file by installing file-loader in webpack.

export default function Content() {
  return (
    <div>
      <style.Wrapper>
        <style.Container>
          <style.LeftSide>
            <style.H1>Online payments</style.H1>
            <style.UnOrderList>
              <li>Mimic the fund transfer feature of Venmo</li>
              <li>Money can be transferred to other user</li>
              <li>You will get $1000 when you register new account</li>
            </style.UnOrderList>
          </style.LeftSide>
          <img src={img} alt="Money transfer" />
        </style.Container>
      </style.Wrapper>
    </div>
  );
}
