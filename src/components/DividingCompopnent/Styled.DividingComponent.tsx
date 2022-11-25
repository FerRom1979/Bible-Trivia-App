import styled from "styled-components";

export const StyledDividingComponent = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .line {
    background: rgba(0, 0, 0, 0.5);
    height: 1px;
    width: 100%;
  }
  span {
    color: #000;
    text-align: center;
    padding: 0 5px 0 5px;
  }
`;
