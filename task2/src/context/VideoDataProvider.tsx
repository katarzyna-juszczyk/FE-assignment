import React, { createContext, useContext } from "react";
import { useFetch } from "hooks";

export interface Video {
  data: any;
  error?: string;
}

const Context = createContext<Video | null>(null);
export const VideoDataProvider = ({
  children,
  url,
  isVideoActive,
}: {
  children: React.ReactNode;
  url: string;
  isVideoActive: boolean;
}) => {
  const video = useFetch<Video>(
    isVideoActive
      ? `http://youtube.com/oembed?url=${url}&format=json`
      : undefined
  );

  return <Context.Provider value={video as Video}>{children}</Context.Provider>;
};

export const useVideo = () => useContext(Context);
