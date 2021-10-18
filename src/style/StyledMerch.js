import styled from "styled-components";

const StyledMerch = styled.div`
  .selectedMerch{
      height: 600px;
      overflow: scroll;
  }

  .goToCart{
    text-align: end;
  }

  .goToCart button {
    font-size: 1.5rem;
    padding: 5px 15px;
    margin-right: 40px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    font-weight: 900;
    color: indianred;
  }
`;

export default StyledMerch;