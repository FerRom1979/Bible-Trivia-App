import styled from "styled-components";

const StyledNavbar = styled.div`
  min-height: 100vh;
  max-width: 340px;
  margin: auto;
  .navbar-link {
    display: flex;
    align-items: center;
    margin: auto;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #696f79;
    cursor: pointer;
    text-decoration: none;
  }
  svg {
    fill: #696f79;
    margin-right: 30px;
  }
  .btn-logOut {
    position: absolute;
    bottom: 50px;
    color: #696f79 !important;
  }
`;

export default StyledNavbar;
