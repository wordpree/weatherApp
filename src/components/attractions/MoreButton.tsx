import React from "react";
import { makeStyles } from "@material-ui/core";
import { FrMotionButton } from "../";

interface IMBProps {
  handleClick(): void;
  more: boolean;
}

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    margin: "2rem auto 0",
    textAlign: "center",
  },
  btn: {
    background: "#028a8a",
    color: "#fff",
    "&:hover": {
      background: "#058181",
    },
  },
}));

const MoreButton = ({ handleClick, more }: IMBProps) => {
  const classes = useStyles();
  return (
    <div className={classes.btnWrapper}>
      <FrMotionButton
        onClick={handleClick}
        size="large"
        variant="contained"
        className={classes.btn}
      >
        {more ? "View Less" : "View More"}
      </FrMotionButton>
    </div>
  );
};

export default MoreButton;
