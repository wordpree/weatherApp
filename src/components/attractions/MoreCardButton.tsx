import React from "react";
import { makeStyles } from "@material-ui/core";
import { FrMotionButton } from "..";

interface IMBProps {
  handleClick(): void;
  more: boolean;
}

const useStyles = makeStyles({
  btnWrapper: {
    margin: "2rem auto 0",
    textAlign: "center",
  },
});

const MoreCardButton = ({ handleClick, more }: IMBProps) => {
  const classes = useStyles();
  return (
    <div className={classes.btnWrapper}>
      <FrMotionButton
        onClick={handleClick}
        size="large"
        variant="contained"
        color="primary"
      >
        {more ? "View Less" : "View More"}
      </FrMotionButton>
    </div>
  );
};

export default MoreCardButton;
