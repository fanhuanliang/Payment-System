import styled from "styled-components";

export const BottomLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background-color: black;
  zIndex: 100;
`

export const PopupModal = styled.div`
  position: fixed;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  zIndex: 100;
`