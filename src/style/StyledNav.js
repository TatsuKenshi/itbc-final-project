import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  color: indianred;
  /* padding: 5px; */
  text-align: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight:900;
  background: rgba(0, 255, 255, 0.2);
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: indianred;
    font-weight: 900;
  }

  div:hover {
    text-decoration: underline;
  }

  .logOutBtn {
    text-decoration: none;
    color: black;
    font-weight: 900;
    border: none;
    background: none;
    font-size: 1.1rem;
  }

  .logOutBtn:hover {
    text-decoration: underline;
  }

`;

export default StyledNav;
