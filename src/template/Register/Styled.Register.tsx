import styled from "styled-components";
import bible from "../../assets/images/bible-2.jpg";
import breakpoints from "../../constant/breackpoint";

export const StyledRegister = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .hero-image {
    display: none;
  }
  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr 1fr;
    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-image: url(${bible});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
`;
