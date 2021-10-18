import styled from "styled-components";

const StyledSingleGiveaway = styled.div`
  color: rgb(60, 60, 60);
  margin-top: 50px;
  width: 50vw;
  height: max-content;
  margin-left: auto;
  margin-right: auto;

  .linkBtn {
    margin-bottom: 10px;
    text-align: right;
  }

  .theBtn {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }

  .titleDiv h2 {
    font-size: 30px;
    font-weight: 900;
    margin-top: 10px;
  }

  .imgDiv {
    margin-top: 10px;
  }

  .img {
    width: 100%;
    height: 500px;
    margin-bottom: 10px;
  }

  .mainText {
    margin-top: 10px;
  }

  .mainText h3 {
    margin-bottom: 150px;
  }
`;

export default StyledSingleGiveaway;
