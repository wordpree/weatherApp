import React from "react";
import { LinearProgress } from "@material-ui/core";

type LdProps = {
  value: number;
};

const Loading = (props: LdProps) => (
  <div>
    <LinearProgress value={props.value} style={{ marginTop: "4rem" }} />
  </div>
);

export default Loading;
