import styled from "styled-components";

const StyledSingleMerchItem = styled.div`
    color: rgb(60, 60, 60);
    margin-top: 20px;
    width: 50vw;
    height: max-content;
    margin-left: auto;
    margin-right: auto;

    
    .mainTitle {
        display: flex;
        justify-content: space-between;
    }
    
    .titleDiv {
        font-size: 20px;
        font-weight: 900;
        padding-top: 25px;
    }

    .addToCart {
        text-align: center;
        margin-bottom: 10px;
    }

    .addToCart button{
        font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
    }


    .imgDiv {
        margin-top: 10px;
    }

    .img {
        width: 100%;
        height: 500px;
        background: rgb(60, 60, 60);
        text-align: center;
    }

    .img h3 {
      padding-top: 200px;
      color: indianred;
      font-size: 30px;
  }

    .text {
        margin-top: 10px;
    }

    .mainText {
        margin-top: 10px;
    }

    .mainText p {
        margin-bottom: 10px;
    }

    .goToCart {
        text-align: right;
        margin-bottom: 10px;
    }

    .goToCart button{
        font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
    }

    .loginToShop {
        text-align: right;
        margin-bottom: 10px;
    }

    .loginToShop button{
        font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
    }
`;

export default StyledSingleMerchItem;