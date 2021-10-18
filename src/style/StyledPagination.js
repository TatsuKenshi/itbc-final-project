import styled from "styled-components";

const StyledPagination = styled.div`
  text-align: center;
  margin: 20px;
  color: rgb(60, 60, 60);

  select {
    width: 350px;
    height: 34px;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
  }

  .button {
    width: 30px;
    margin:5px;
    color: rgb(60, 60, 60);
    text-decoration: none;
    border: none;
    background: none;
  }

  .back, .next{
    width: 70px;
    color: rgb(60, 60, 60);
    text-decoration: none;
    border: none;
    background: none;
  }

  .button:hover {
    text-decoration: underline;
  }
  .back:hover {
    text-decoration: underline;
  }
  .next:hover {
    text-decoration: underline;
  }
`;

export default StyledPagination;
