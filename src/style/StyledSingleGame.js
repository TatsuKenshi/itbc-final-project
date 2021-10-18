import styled from "styled-components";

const StyledSingleGame = styled.div`
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

    .faveButton {
        text-align: center;
        margin-bottom: 10px;
    }

    .faveButton button{
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

    .basicInfoWrap {
        display: flex;
    }

    .basicInfo1, .basicInfo2 {
        margin-top: 10px;
        width: 50%;
    }

    .sysRequirements {
        margin-top: 10px;
    }

    .sysRequirementsWrap {
        display: flex;
    }

    .sysRequirements1, .sysRequirements2 {
        margin-top: 10px;
        width: 50%;
    }
`;

export default StyledSingleGame;