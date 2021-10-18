import styled from "styled-components";

const StyledRegister = styled.div`
  color: rgb(60, 60, 60);
  margin-top: 140px;
  width: 50vw;
  height: max-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 300px;
  text-align: center;

  .text {
      margin-bottom: 10px;
      margin-top: 10px;
  }

  .main {
    padding-top: 100px;
    padding-bottom: 100px;
    border: 1px solid cyan;
    background: rgba(0, 255, 255, 0.2);
    color: rgb(60, 60, 60);
    border-radius: 40px;

  }

  .inputUser {
      margin-bottom: 50px;
  }

  .inputUser input {
    width: 350px;
    height: 34px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
  }

  .inputEmail {
    margin-bottom: 50px;
  }

  .inputEmail input {
    width: 350px;
    height: 34px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
  }

  .inputPassword {
    margin-bottom: 50px;
  }

  .inputPassword input {
    width: 350px;
    height: 34px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
  }

  .inputBtn input {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  .regLink {
      margin-top: 20px;
  }

  .errorDiv {
      margin-top: 20px;
  }
`;

export default StyledRegister;
