import * as React from "react";
import { Picture } from "react-responsive-picture";

export interface IResponsiveImageProps {
  mobileSrc: string;
  normalSrc: string;
  retinaSrc: string;
}

const ResponsiveImage: React.FunctionComponent<IResponsiveImageProps> = ({
  mobileSrc,
  normalSrc,
  retinaSrc,
}) => {
  return (
    <Picture
      sources={[
        {
          srcSet: mobileSrc,
          media: "(max-width: 500px)",
        },
        {
          srcSet: `${normalSrc} 1x, ${retinaSrc} 2x`,
        },
      ]}
    />
  );
};

export default ResponsiveImage;
