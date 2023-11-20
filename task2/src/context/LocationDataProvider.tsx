import React, { createContext, useContext } from "react";
import { usePosition } from "hooks";

export interface Location {
  position: GeolocationPosition | undefined;
  error: string | null;
}

const Context = createContext<Location | null>(null);

export const LocationDataProvider = ({
  children,
  isLocationActive,
}: {
  children: React.ReactNode;
  isLocationActive: boolean;
}) => {
  const location = usePosition();
  return (
    <Context.Provider value={location as Location}>{children}</Context.Provider>
  );
};

export const useLocation = () => useContext(Context);
