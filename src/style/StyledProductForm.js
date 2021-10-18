import styled from "styled-components";

const StyledProductForm = styled.div`
  padding: 20px;
  color: rgb(60, 60, 60);
  font-weight: 900;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid cyan;
  background: rgba(0, 255, 255, 0.2);
  color: rgb(60, 60, 60);
  border-radius: 40px;
  text-align: center;

  input {
    width: 360px;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    font-size: 1rem;
  }

  label {
    margin-left: 20px;
    font-size: 1.25rem;
  }

  button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }
`;

export default StyledProductForm;
