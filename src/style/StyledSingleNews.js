import styled from "styled-components";

const StyledSingleNews = styled.div`
    color: rgb(60, 60, 60);
    margin-top: 50px;
    width: 50vw;
    height: max-content;
    margin-left: auto;
    margin-right: auto;

    .titleDiv h2 {
        font-size: 30px;
        font-weight: 900;
    }

    .imgDiv {
        margin-top: 10px;
    }

    .img {
        width: 100%;
        height: 500px;
    }

    .mainText {
        margin-top: 10px;
    }

    .mainText p {
        margin-bottom: 10px;
    }
`;

export default StyledSingleNews;