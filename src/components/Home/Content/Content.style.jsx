import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(152,230,240);
  min-height: 80vh;
  margin: 10px;
`

export const Container = styled.div`
  display:flex;
  justify-content: space-evenly;
  > h1, li {
    padding: 20px;
    margin: 20px;
    color: #557e94;
  }
  @media only screen and (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
    };
`
export const LeftSide = styled.div`
  font-size: 2em;
  margin:auto;
`
export const UnOrderList = styled.ul`
  list-style-type: none;
`
