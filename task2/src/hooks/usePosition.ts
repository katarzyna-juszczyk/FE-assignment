import { useState, useEffect } from "react";

const defaultSettings: PositionOptions = {
  enableHighAccuracy: false,
  timeout: Infinity, // in seconds e.g. 30T
  maximumAge: 0, // in seconds e.g. 27T
};

export const usePosition: (settings?: PositionOptions) => {
  position: GeolocationPosition | undefined;
  error: string | null;
} = (
  settings: PositionOptions = defaultSettings
): { position: GeolocationPosition | undefined; error: string | null } => {
  const [currentPosition, setCurrentPosition] = useState<GeolocationPosition>();
  const [error, setError] = useState<string | null>(null);

  const onChange: PositionCallback = (position: GeolocationPosition) => {
    setCurrentPosition(position);
  };

  const onError: PositionErrorCallback = (
    positionError: GeolocationPositionError
  ) => {
    setError(positionError.message);
  };

  useEffect(() => {
    const geo: Geolocation = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    geo.getCurrentPosition(onChange, onError, settings);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  return { position: currentPosition, error };
};
