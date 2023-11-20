import React, { useRef } from "react";
import ReactPlayer from "react-player/lazy";
import { useIntersectionObserver } from "hooks";
import { useVideo } from "context";
interface IVideoProps {
  isActive: boolean;
  url: string;
}
const Video: React.FunctionComponent<IVideoProps> = ({ isActive, url }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const wrapperEntry = useIntersectionObserver(wrapperRef, {});
  const shouldPlay = !!wrapperEntry?.isIntersecting && isActive;
  const video = useVideo();

  return (
    <div ref={wrapperRef}>
      <ReactPlayer
        width="100%"
        height="100%"
        url={url}
        playing={shouldPlay}
        muted
        loop
        fallback={<p>loading...</p>}
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              showinfo: 1,
              playsinline: 1,
              autoplay: shouldPlay && 1,
              fs: 0,
            },
            embedOptions: { autoplay: shouldPlay && 1 },
          },
        }}
      />
      {video?.error && <p>There is an error.</p>}
      {!video?.data ? <p>Loading...</p> : <p>{video?.data.title}</p>}
    </div>
  );
};

export default Video;
// Video.whyDidYouRender = false;
