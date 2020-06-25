import React from "react";
import { Button } from "@material-ui/core";
import { ChevronRight } from "mdi-material-ui";

interface IBMProps {
  children: React.ReactNode;
  click?: (state: boolean) => void;
}

const MoreDetailButton = ({ children, click }: IBMProps) => {
  const handleClick = () => {
    if (click) {
      click(true);
    }
  };
  return (
    <Button
      color="primary"
      size="small"
      endIcon={<ChevronRight />}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default MoreDetailButton;
