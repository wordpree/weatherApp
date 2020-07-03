import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import MobileExpand from "./MobileExpand";

interface IMDProps {
  handleDrawer(state: boolean): void;
  open: boolean;
}

const MobileDrawer = ({ handleDrawer, open }: IMDProps) => {
  return (
    <SwipeableDrawer
      transitionDuration={{ enter: 550, exit: 350 }}
      anchor="left"
      open={open}
      onClose={() => handleDrawer(false)}
      onOpen={() => handleDrawer(true)}
    >
      <MobileExpand handleClick={handleDrawer} open={open} />
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
