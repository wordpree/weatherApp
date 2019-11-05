import React from "react";
import { useWacContextValue } from "../util/weatherApiCall";

const Display = () => {
  const data = useWacContextValue();
  console.log(data);
  return <div>{data.forecast === null ? "true" : "false"}</div>;
};

export default Display;
