import styled from "styled-components";

const StyledSelect = styled.div`
  text-align: center;
  margin: 20px;
  color: rgb(60, 60, 60);
  
  .title {
    opacity: 1;
    position: relative;
    padding: 20px;
    text-align: center;
  }
  
  .browseGames, .browseMerch {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .selectMenu, .inputSearch {
    margin-left: 50px;
    margin-right: 50px;
    color: rgb(60, 60, 60);
  }

  select {
    width: 350px;
    height: 34px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
    
  }

  input {
    width: 350px;
    height: 30px;
    font-size: 20px;
    font-weight: 900;
    color: rgb(60, 60, 60);
  }
`;

export default StyledSelect;
