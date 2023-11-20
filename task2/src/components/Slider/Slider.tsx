import React, { Children } from "react";
import Carousel from "nuka-carousel";

interface ISliderProps extends React.PropsWithChildren {
  children: React.ReactNode;
  onSlideChange: (slideIndex: number) => void;
}

const Slider: React.FunctionComponent<ISliderProps> = ({
  onSlideChange,
  children,
}) => {
  const slideChange = (slideIndex: number) => {
    onSlideChange(slideIndex);
  };
  return (
    <Carousel
      afterSlide={slideChange}
      autoplay
      enableKeyboardControls
      pauseOnHover
      wrapAround
    >
      {Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </Carousel>
  );
};

export default Slider;
