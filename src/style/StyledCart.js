import styled from "styled-components";

const StyledCart = styled.div`
  margin: 20px;
  color: rgb(60, 60, 60);
  margin-left: auto;
  margin-right: auto;

  h1,
  h2,
  .checkoutBtn {
    text-align: center;
  }

  .items {
    height: 700px;
    overflow: scroll;
  }

  span {
    margin-right: 10px;
  }

  button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  .checkout {
    text-align: center;
    align-items: center;
    width: auto;
    border: 1px solid cyan;
    background: rgba(0, 255, 255, 0.2);
    color: rgb(60, 60, 60);
    border-radius: 40px;
    padding-top: 100px;
    padding-bottom: 100px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
  }

  .checkoutForm {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    
  }

  .checkoutForm input {
    width: 350px;
    height: 34px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
    margin-bottom: 50px;
  }

  .subBtn {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }
`;

export default StyledCart;
