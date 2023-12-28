import styled from "styled-components";
import { colors } from "../../constant/colors";

export const StyledConfigQuestions = styled.div`
  background: ${colors.linearGradientBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 22px;
    color: ${colors.white};
    padding: 20px 10px;
    text-transform: capitalize;
  }
  .wrapper-cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .title {
    margin-bottom: 10px;
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    color: #38e9bb;
  }
  .card-title {
    background: #6949fd;
    margin-top: 10px;
  }
  .description {
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
    border: 1px solid ${colors.white};
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
