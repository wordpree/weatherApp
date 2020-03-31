import React, { ReactNode } from "react";

type component = React.FunctionComponent<any>;

interface ICPorps {
  children: ReactNode;
  Components: Array<component>;
}
const Compose = (props: ICPorps) => {
  return props.Components.reduce((acc, CurrentCom) => {
    return <CurrentCom>{acc}</CurrentCom>;
  }, props.children);
};

export default Compose;
