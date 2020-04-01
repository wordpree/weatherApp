import React from "react";
import { ChevronLeft, ChevronRight } from "mdi-material-ui";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    height: 50,
    minWidth: 30,
    padding: "1px 2px",
    borderRadius: 0,
    backgroundColor: "rgba(255,255,255,0.7)",
    "&:hover": {
      color: "#ccc",
      backgroundColor: "rgb(1, 179, 167)"
    }
  },
  fabNext: {
    right: 0
  },
  fabPrev: {
    left: 0,
    zIndex: 1
  }
});

export function NextArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <Button
      className={`${classes.fabNext} ${classes.btn}`}
      onClick={onClick}
      size="small"
    >
      <ChevronRight />
    </Button>
  );
}

export function PrevArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <Button
      className={`${classes.fabPrev} ${classes.btn}`}
      onClick={onClick}
      size="small"
    >
      <ChevronLeft />
    </Button>
  );
}
