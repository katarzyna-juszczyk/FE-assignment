import React, { createContext, useContext } from "react";
import { useFetch } from "hooks";

export interface Podcast {
  data?: any;
  error?: string | null;
}

const Context = createContext<Podcast | null>(null);

export const PodcastDataProvider = ({
  children,
  isPodcastActive,
}: {
  children: React.ReactNode; isPodcastActive: boolean;
}) => {
  const podcasts = useFetch(
   isPodcastActive ?  "https://listen-api-test.listennotes.com/api/v2/search?q=startup" : undefined
  );
  return (
    <Context.Provider value={podcasts as Podcast}>{children}</Context.Provider>
  );
};

export const usePodcast = () => useContext(Context);
