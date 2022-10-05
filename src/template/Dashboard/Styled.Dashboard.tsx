import styled from "styled-components";
import { IStyledDashboardProps } from "./types";

export const StyledDashboard = styled.div<IStyledDashboardProps>`
  background: #ffffff;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
  height: 100%;
  padding: 56px 36px;
  .wrapper-user {
    width: 100%;
    display: flex;
  }
  .avatar {
    margin-right: 40px;
    svg {
      width: 300px;
      height: 300px;
    }
  }
  .user-name {
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 50px;
    color: #696f79;
    text-transform: capitalize;
  }
  .info-user {
    width: 100%;
  }
  .container {
    height: 18px;
    position: relative;
    background: linear-gradient(0deg, #f5f5f5, #f5f5f5), #f5f5f5;
    border-radius: 30px;
    .progress-bar {
      position: absolute;
      height: 100%;
      background: linear-gradient(0deg, #c4c4c4, #c4c4c4), #f5f5f5;
      box-shadow: 4px 4px 4px 3px rgba(237, 237, 237, 0.59);
      border-radius: 30px;
      animation: progress-animation 5s forwards;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ progressBar }) => `${progressBar}%`};
    }
  }
  .ranking-data {
    display: flex;
    justify-content: space-around;
    margin-top: 44px;
    border-radius: 10px;
  }
  .Wrapper-icons {
    display: flex;
    align-items: center;
    p {
      margin: 0;
    }
    .data-number {
      font-weight: 700;
      font-size: 29px;
      line-height: 44px;
      color: #696f79;
    }
    .data-SubTitle {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #696f79;
    }
  }
  .icon {
    margin-right: 17px;
    background: #ffffff;
    box-shadow: 0px 15px 40px 5px #ededed;
    border-radius: 15px;
    padding: 10px 20px;
  }
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-rows: 22rem;
    grid-template-columns: 1fr 1fr;
  }
  .achievements {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .wrapper-progress {
    margin-top: 16px;
  }
`;
