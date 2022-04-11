import styled from "styled-components";
import { HeroImageStyledProps } from "./types";

export const WrapperHeroImage = styled.div<HeroImageStyledProps>`
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: 100% cover;
  text-align: center;
  min-height: 100vh;
`;
