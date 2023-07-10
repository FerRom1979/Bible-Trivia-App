import styled from "styled-components";

export const StyledConfigQuestions = styled.div`
  background: linear-gradient(180deg, #32167c 0%, #1f1147 54.69%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .wrapper-cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .title {
    margin-bottom: 30px;
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #38e9bb;
    height: 40px;
  }
  .card-title {
    background: #6949fd;
  }
  .description {
    margin: 20px 0;
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 39px;
    text-align: center;
    color: #ffffff;
  }
  .card-content {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background: #1f1147;
    max-width: 350px;
    margin-bottom: 20px;
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
    }
    padding: 2px 16px;
  }
  .btn {
    min-width: 50%;
    height: 33px;
    margin: 5px 0px;
    background: #6949fd;
    border-radius: 10px;
    border: none;
    color: #ffffff;
    font-size: 16px;
  }
`;
