import styled from "styled-components";

export const StyledToast = styled.div`
  position: absolute;
  top: 40px;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: #fff;
  width: 380px;
  box-shadow: 0px 2px 26px rgba(215, 0, 0, 0.1);
  font-weight: 400;
  .wrapper-toast {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    margin: 0;
    font-weight: 600;
  }
  .close {
    cursor: pointer;
  }
  &.error {
    min-height: 68px;
    background: #eb5757;
    border: 1px solid #eb5757;
    color: #fff;
    .close {
      fill: #ffe8e8;
    }
  }
  &.warning {
    background: #f2c94c;
    border: 1px solid #f2c94c;
    color: #6e5404;
    .close {
      fill: #866912;
    }
  }
  &.success {
    border: 1px solid #6fcf97;
    color:#4D4D4D .close {
      fill: #828282;
    }
    .close {
      fill: #828282;
    }
  }
`;
