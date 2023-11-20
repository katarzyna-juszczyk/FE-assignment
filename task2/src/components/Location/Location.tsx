import * as React from "react";
import { useLocation } from "context";
interface ILocationProps {}

const Location: React.FunctionComponent<ILocationProps> = () => {
  const location = useLocation();

  if (!!location?.error) {
    return <p>error</p>;
  }

  return location?.position?.coords ? (
    <p>
      Location: {location?.position.coords.latitude},{" "}
      {location?.position.coords.longitude}
    </p>
  ) : null;
};

export default React.memo(Location);
// Location.whyDidYouRender = true;
