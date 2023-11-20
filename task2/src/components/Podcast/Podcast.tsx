import * as React from "react";
import { usePodcast } from "context";
interface IPodcastProps {}

const Podcast: React.FunctionComponent<IPodcastProps> = (props) => {
  const podcasts = usePodcast();

  if (!podcasts) {
    return <p>Loading...</p>;
  }
  if (podcasts?.error) {
    return <p>There is an error.</p>;
  }
  return podcasts?.data
    ? podcasts?.data.results.slice(0, 2).map((podcast: any) => (
        <figure key={podcast.id}>
          <img src={podcast.thumbnail} alt={podcast.title_original} />
          <figcaption>{podcast.title_original}</figcaption>
        </figure>
      ))
    : null;
};

export default Podcast;
