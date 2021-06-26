import styled from "styled-components";
import * as init from '../../index.style.jsx';
console.log(init.color.border_gray)
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${init.color.border_gray};
  // min-width: 700px;
`
const container = styled.div`
  padding: 42px;
`
export {
  Wrapper,
  container,
}