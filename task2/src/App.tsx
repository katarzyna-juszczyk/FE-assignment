import React, { useState } from "react";
import { Location, Hero, Podcast, Video, Slider } from "components";
import {
  LocationDataProvider,
  PodcastDataProvider,
  VideoDataProvider,
} from "./context";
import { useMediaQuery } from "hooks";
import { HERO_CONTENT, VIDEO_URL } from "./utils/dummyData";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const onSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <LocationDataProvider isLocationActive={1 === currentSlide && !isDesktop}>
      <PodcastDataProvider isPodcastActive={1 === currentSlide && isDesktop}>
        <VideoDataProvider url={VIDEO_URL} isVideoActive={2 === currentSlide}>
          <Slider onSlideChange={onSlideChange}>
            <Hero
              caption={HERO_CONTENT.caption}
              mobileSrc={HERO_CONTENT.mobileSrc}
              normalSrc={HERO_CONTENT.normalSrc}
              retinaSrc={HERO_CONTENT.retinaSrc}
            />
            <div>{isDesktop ? <Podcast /> : <Location />}</div>
            <Video isActive={2 === currentSlide} url={VIDEO_URL} />
          </Slider>
        </VideoDataProvider>
      </PodcastDataProvider>
    </LocationDataProvider>
  );
}

export default App;
// App.whyDidYouRender = false;
