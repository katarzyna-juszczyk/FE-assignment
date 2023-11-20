import React, { ComponentProps } from "react";
import ResponsiveImage from "components/ResponsiveImage";
interface IHeroProps {
  caption?: string;
}

const Hero: React.FunctionComponent<
  IHeroProps & ComponentProps<typeof ResponsiveImage>
> = ({ caption, mobileSrc, normalSrc, retinaSrc }) => {
  return (
    <figure>
      <ResponsiveImage
        mobileSrc={mobileSrc}
        normalSrc={normalSrc}
        retinaSrc={retinaSrc}
      />
      {!!caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default Hero;
// Hero.whyDidYouRender = true;
