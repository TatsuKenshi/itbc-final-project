import styled from "styled-components";

const StyledHome = styled.div`
  .banner {
    justify-content: space-evenly;
    overflow: hidden;
    position: relative;
  }

  .featuredContent {
    display: flex;
  }

  
  .bannerImage {
    opacity: 0.2;
    position: absolute;
    left: 0;
    top: 0;
    height: auto;
  }

  .title {
    opacity: 1;
    position: relative;
    padding: 50px;
    text-align: center;
    color: rgb(60, 60, 60);
  }

  .title h1 {
    font-size: 60px;
    margin-bottom: 20px;
  }

  .title h2 {
    font-size: 30px;
  }
  
  .featuredGame,
  .featuredNews,
  .featuredGiveaways {
    width: 33%;
    opacity: 1;
    margin: 60px;
    padding: 20px;
    position: relative;
    display: block;
    border-radius: 40px;
    text-align: center;
    border: 1px solid cyan;
    background: rgba(0, 255, 255, 0.2);
    color: rgb(60, 60, 60);
  }

  .featTitle {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .featImg {
    width: 300px;
    margin-bottom: 25px;
  }

  .featBtn {
    font-size: 1.5rem;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 25px;
    background: rgba(0, 255, 255, 0.2);
    color: indianred;
    font-weight: 900;
  }

  .myFavorites {
    height:1000px;
    overflow: scroll;
  }

  .myFavorites h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    color: rgb(60, 60, 60);
  }
`;

export default StyledHome;
