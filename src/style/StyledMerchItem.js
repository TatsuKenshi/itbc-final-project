import styled from "styled-components";

const StyledMerchitem = styled.div`
  display: flex;
  margin: 20px;
  background: lightgrey;
  padding: 20px;
  border-radius: 20px;
  background: rgba(0, 255, 255, 0.2);

  .main {
      margin-right: 20px;
      color: indianred;
      font-weight: 900;
    }
    
    .img {
        width: 200px;
        height: 120px;
        background: rgb(60, 60, 60);
        text-align: center;
  }

  .img p {
      padding-top: 45px;
  }

  .info{
      padding: 5px;
      font-weight: 550;
      color: rgb(60, 60, 60);
      line-height:1.25rem;
  }

  button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    margin-right: 20px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }
`;

export default StyledMerchitem;