import React from "react";
import * as style from "./Footer.style.jsx";

export default function Footer() {
  return (
    <style.Footer>
      <style.Wrapper>
        <style.Container>
          <p>© 2021 Mimic Pay</p>
          <style.UnOrderList>
            <style.List>
              <style.Button>Instagram</style.Button>
            </style.List>
            <style.List>
              <style.Button>Facebook</style.Button>
            </style.List>
            <style.List>
              <style.Button>Twitter</style.Button>
            </style.List>
          </style.UnOrderList>
        </style.Container>
      </style.Wrapper>
    </style.Footer>
  );
}
