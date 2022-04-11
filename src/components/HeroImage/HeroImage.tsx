import React from "react";
import { WrapperHeroImage } from "./Styled.HeroImage";
import { IHeroImageProps } from "./types";

const HeroImage = ({ url, children }: IHeroImageProps) => {
  return (
    <WrapperHeroImage url={url} data-testid="hero-image">
      {children}
    </WrapperHeroImage>
  );
};

export default HeroImage;
