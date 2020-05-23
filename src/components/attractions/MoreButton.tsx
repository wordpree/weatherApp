import React from "react";
import { makeStyles, Button } from "@material-ui/core";

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
      <Button
        onClick={handleClick}
        size="large"
        variant="contained"
        className={classes.btn}
      >
        {more ? "View Less" : "View More"}
      </Button>
    </div>
  );
};

export default MoreButton;
